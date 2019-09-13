const querystring = require('querystring')
const request = require('request-promise')

const V3 = require('../v3')

const { APIV3CatalogError } = require('../../util/errors')

class Catalog extends V3 {
  async all () {
    try {
      const options = await this.GETOptions('api/v3/catalog')
      return await request(options).promise()
    } catch (err) {
      return new APIV3CatalogError(err.message)
    }
  }

  async findById (id) {
    try {
      const options = await this.GETOptions(`api/v3/catalog/${id}`)
      return await request(options).promise()
    } catch (err) {
      return new APIV3CatalogError(err.message)
    }
  }

  async findByPath (path) {
    try {
      const options = await this.GETOptions(`api/v3/catalog/by-path/${path}`)
      return await request(options).promise()
    } catch (err) {
      return new APIV3CatalogError(err.message)
    }
  }

  async collaborationTags (id) {
    try {
      const options = await this.GETOptions(`api/v3/catalog/${id}/collaboration/tag`)
      return await request(options).promise()
    } catch (err) {
      return new APIV3CatalogError(err.message)
    }
  }

  async collaborationWiki (id) {
    try {
      const options = await this.GETOptions(`api/v3/catalog/${id}/collaboration/wiki`)
      return await request(options).promise()
    } catch (err) {
      return new APIV3CatalogError(err.message)
    }
  }

  async create (body) {
    try {
      const options = await this.POSTOptions('api/v3/catalog', body)
      return await request(options).promise()
    } catch (err) {
      return new APIV3CatalogError(err.message)
    }
  }

  async promote (id, body) {
    try {
      const options = await this.POSTOptions(`api/v3/catalog/${id}`, body)
      return await request(options).promise()
    } catch (err) {
      return new APIV3CatalogError(err.message)
    }
  }

  async refresh (id, body) {
    try {
      const options = await this.POSTOptions(`api/v3/catalog/${id}/refresh`, body)
      return await request(options).promise()
    } catch (err) {
      return new APIV3CatalogError(err.message)
    }
  }

  async createCollaborationTags (id, body) {
    try {
      const options = await this.POSTOptions(`api/v3/catalog/${id}/collaboration/tag`, body)
      return await request(options).promise()
    } catch (err) {
      return new APIV3CatalogError(err.message)
    }
  }

  async createCollaborationWiki (id, body) {
    try {
      const options = await this.POSTOptions(`api/v3/catalog/${id}/collaboration/wiki`, body)
      return await request(options).promise()
    } catch (err) {
      return new APIV3CatalogError(err.message)
    }
  }

  async update (id, body) {
    try {
      const options = await this.PUTOptions(`api/v3/catalog/${id}`, body)
      return await request(options).promise()
    } catch (err) {
      return new APIV3CatalogError(err.message)
    }
  }

  async destroy (id, params) {
    try {
      let path = `catalog/${id}`

      if (params) {
        const qs = querystring.stringify(params)
        path = `${path}?${qs}`
      }

      const options = await this.DELETEOptions(path)

      return await request(options).promise()
    } catch (err) {
      return new APIV3CatalogError(err.message)
    }
  }
}

module.exports = Catalog
