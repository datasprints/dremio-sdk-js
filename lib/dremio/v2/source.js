const request = require('request-promise')

const V2 = require('../v2')

const { APIV2SourceError } = require('../../util/errors')

class Source extends V2 {
  async put (path, body) {
    try {
      const options = await this.PUTOptions(path, body)
      return await request(options).promise()
    } catch (err) {
      return new APIV2SourceError(err.message)
    }
  }

  async samples () {
    try {
      const body = {
        type: 'S3',
        name: 'Samples',
        accelerationNeverRefresh: true,
        accelerationGracePeriod: 10800000,
        accelerationRefreshPeriod: 3600000,
        config: {
          secure: false,
          propertyList: [],
          credentialType: 'NONE',
          externalBucketList: ['samples.dremio.com']
        }
      }

      const uri = `apiv2/source/Samples?nocache=${new Date().getTime()}`

      const options = await this.PUTOptions(uri, body)
      console.log(options)

      return await request(options).promise()
    } catch (err) {
      return new APIV2SourceError(err.message)
    }
  }
}

module.exports = Source
