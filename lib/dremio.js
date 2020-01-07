const validator = require('./util/validator')

const DEFAULT_API_VERSION = '3'

class Dremio {
  constructor (config = {}) {
    if (Object.keys(config).length !== 0) this.configure(config)
  }

  configure (config = {}) {
    this.origin = config.origin || this.origin || ''
    this.username = config.username || this.username || ''
    this.password = config.password || this.password || ''
    this.version = config.version || this.version || DEFAULT_API_VERSION

    validator.dremio.validate(this)
  }

  Space (config = {}) {
    return activateService('space', this, config)
  }

  User (config = {}) {
    return activateService('user', this, config)
  }

  Accounts (config = {}) {
    return activateService('accounts', this, config)
  }

  Job (config = {}) {
    return activateService('job', this, config)
  }

  SQL (config = {}) {
    return activateService('sql', this, config)
  }

  Vote (config = {}) {
    return activateService('vote', this, config)
  }

  Source (config = {}) {
    return activateService('source', this, config)
  }

  Catalog (config = {}) {
    return activateService('catalog', this, config)
  }

  Reflection (config = {}) {
    return activateService('reflection', this, config)
  }

  WorkloadManagement (config = {}) {
    return activateService('workload-management', this, config)
  }
}

const activateService = (serviceName, context, config = {}) => {
  context.configure(config)

  return new (require(`./dremio/v${context.version}/${serviceName}`))(context)
}

module.exports = Dremio
