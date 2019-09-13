const request = require('request-promise')

const V2 = require('../v2')

const { APIV2UserError } = require('../../util/errors')

class User extends V2 {
  async bootstrapFirstUser (body) {
    try {
      const config = {
        body,
        json: true,
        method: 'PUT',
        uri: `${this.origin}/apiv2/bootstrap/firstuser`
      }

      return await request(config).promise()
    } catch (err) {
      return new APIV2UserError(err.message)
    }
  }

  async put (username, body) {
    try {
      const options = await this.PUTOptions(`apiv2/user/${username}`, body)
      return await request(options).promise()
    } catch (err) {
      return new APIV2UserError(err.message)
    }
  }
}

module.exports = User
