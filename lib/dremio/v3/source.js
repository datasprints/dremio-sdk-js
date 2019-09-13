const request = require('request-promise')

const V3 = require('../v3')

const { APIV3SourceError } = require('../../util/errors')

class Source extends V3 {
  async all () {
    try {
      const options = await this.GETOptions('api/v3/source')
      return await request(options).promise()
    } catch (err) {
      return new APIV3SourceError(err.message)
    }
  }

  async findById (id) {
    try {
      const options = await this.GETOptions(`api/v3/source/${id}`)
      return await request(options).promise()
    } catch (err) {
      return new APIV3SourceError(err.message)
    }
  }

  async create (body) {
    try {
      const options = await this.POSTOptions('api/v3/source', body)
      return await request(options).promise()
    } catch (err) {
      return new APIV3SourceError(err.message)
    }
  }

  async update (id, body) {
    try {
      const options = await this.PUTOptions(`api/v3/source/${id}`, body)
      return await request(options).promise()
    } catch (err) {
      return new APIV3SourceError(err.message)
    }
  }

  async destroy (id) {
    try {
      const options = await this.DELETEOptions(`api/v3/source/${id}`)
      return await request(options).promise()
    } catch (err) {
      return new APIV3SourceError(err.message)
    }
  }
}

module.exports = Source
