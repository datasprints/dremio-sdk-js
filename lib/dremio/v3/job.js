const request = require('request-promise')
const querystring = require('querystring')

const V3 = require('../v3')

const { APIV3JobError } = require('../../util/errors')

class Job extends V3 {
  async findById (id, params) {
    try {
      let path = `api/v3/job/${id}`

      if (params) {
        const qs = querystring.stringify(params)
        path = `${path}/results?${qs}`
      }

      const options = await this.GETOptions(path)

      return await request(options).promise()
    } catch (err) {
      return new APIV3JobError(err.message)
    }
  }

  async cancel (id) {
    try {
      const options = await this.POSTOptions(`api/v3/job/${id}/cancel`)
      return await request(options).promise()
    } catch (err) {
      return new APIV3JobError(err.message)
    }
  }
}

module.exports = Job
