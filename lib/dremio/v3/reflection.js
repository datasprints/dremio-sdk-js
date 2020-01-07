const request = require('request-promise')

const V3 = require('../v3')

const { APIV3ReflectionError } = require('../../util/errors')

class Reflection extends V3 {
  async all () {
    try {
      const options = await this.GETOptions('api/v3/reflection')
      return await request(options).promise()
    } catch (err) {
      return new APIV3ReflectionError(err.message)
    }
  }

  async findById (id) {
    try {
      const options = await this.GETOptions(`api/v3/reflection/${id}`)
      return await request(options).promise()
    } catch (err) {
      return new APIV3ReflectionError(err.message)
    }
  }

  async summary () {
    try {
      const options = await this.GETOptions('api/v3/reflection/summary')
      return await request(options).promise()
    } catch (err) {
      return new APIV3ReflectionError(err.message)
    }
  }

  async create (body) {
    try {
      const options = await this.POSTOptions('api/v3/reflection', body)
      return await request(options).promise()
    } catch (err) {
      return new APIV3ReflectionError(err.message)
    }
  }

  async update (id, body) {
    try {
      const options = await this.PUTOptions(`api/v3/reflection/${id}`, body)
      return await request(options).promise()
    } catch (err) {
      return new APIV3ReflectionError(err.message)
    }
  }

  async destroy (id) {
    try {
      const options = await this.DELETEOptions(`api/v3/reflection/${id}`)
      return await request(options).promise()
    } catch (err) {
      return new APIV3ReflectionError(err.message)
    }
  }
}

module.exports = Reflection
