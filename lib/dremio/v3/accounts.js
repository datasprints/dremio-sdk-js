const request = require('request-promise')

const V3 = require('../v3')

const { APIV3AccountsError } = require('../../util/errors')

class Accounts extends V3 {
  async userById (id) {
    try {
      const options = await this.GETOptions(`api/v3/user/${id}`)
      return await request(options).promise()
    } catch (err) {
      return new APIV3AccountsError(err.message)
    }
  }

  async userByName (name) {
    try {
      const options = await this.GETOptions(`api/v3/user/by-name/${name}`)
      return await request(options).promise()
    } catch (err) {
      return new APIV3AccountsError(err.message)
    }
  }

  async groupById (id) {
    try {
      const options = await this.GETOptions(`api/v3/group/${id}`)
      return await request(options).promise()
    } catch (err) {
      return new APIV3AccountsError(err.message)
    }
  }

  async groupByName (name) {
    try {
      const options = await this.GETOptions(`api/v3/group/by-name/${name}`)
      return await request(options).promise()
    } catch (err) {
      return new APIV3AccountsError(err.message)
    }
  }
}

module.exports = Accounts
