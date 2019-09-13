const request = require('request-promise')

const V2 = require('../v2')

const { APIV2SpaceError } = require('../../util/errors')

class Space extends V2 {
  async create (name) {
    try {
      const options = await this.PUTOptions(`apiv2/space/${name}`, { name })
      return await request(options).promise()
    } catch (err) {
      return new APIV2SpaceError(err.message)
    }
  }
}

module.exports = Space
