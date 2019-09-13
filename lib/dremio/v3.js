const request = require('request-promise')

const { V3Error } = require('../util/errors')

class V3 {
  constructor (config) {
    this.origin = config.origin
    this.username = config.username
    this.password = config.password
  }

  async GETOptions (path) {
    try {
      const _login = await login(this.origin, this.username, this.password)
      return await defaultOptions(this.origin, _login, path)
    } catch (err) {
      return new V3Error(err.message)
    }
  }

  async POSTOptions (path, body) {
    try {
      const _login = await login(this.origin, this.username, this.password)
      const options = await defaultOptions(this.origin, _login, path)
      return Object.assign({ method: 'POST', body }, options)
    } catch (err) {
      return new V3Error(err.message)
    }
  }

  async PUTOptions (path, body) {
    try {
      const _login = await login(this.origin, this.username, this.password)
      const options = await defaultOptions(this.origin, _login, path)
      return Object.assign({ method: 'PUT', body }, options)
    } catch (err) {
      return new V3Error(err.message)
    }
  }

  async DELETEOptions (path, body) {
    try {
      const _login = await login(this.origin, this.username, this.password)
      const options = await defaultOptions(this.origin, _login, path)
      return Object.assign({ method: 'DELETE', body }, options)
    } catch (err) {
      return new V3Error(err.message)
    }
  }
}

const login = async (origin, username, password) => {
  try {
    const options = {
      json: true,
      method: 'POST',
      uri: `${origin}/apiv2/login`,
      body: { userName: username, password: password }
    }

    return await request(options).promise()
  } catch (err) {
    return new V3Error(err.message)
  }
}

const defaultOptions = async (origin, login, path) => {
  return {
    json: true,
    uri: `${origin}/${path}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `_dremio${login.token}`
    }
  }
}

module.exports = V3
