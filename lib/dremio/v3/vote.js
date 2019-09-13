const request = require('request-promise')

const V3 = require('../v3')

const { APIV3VoteError } = require('../../util/errors')

class Vote extends V3 {
  async all () {
    try {
      const options = await this.GETOptions('api/v3/vote')
      return await request(options).promise()
    } catch (err) {
      return new APIV3VoteError(err.message)
    }
  }
}

module.exports = Vote
