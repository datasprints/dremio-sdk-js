const request = require('request-promise')

const V3 = require('../v3')

const { APIV3SQLError } = require('../../util/errors')

class SQL extends V3 {
  async query (body) {
    try {
      const options = await this.POSTOptions('api/v3/sql', body)
      return await request(options).promise()
    } catch (err) {
      return new APIV3SQLError(err.message)
    }
  }
}

module.exports = SQL
