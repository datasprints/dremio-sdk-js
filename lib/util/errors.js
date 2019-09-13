const { WError } = require('verror')

class GenericError extends WError {
  constructor (message, ...params) {
    super({ name: 'GenericError' }, message, ...params)
  }
}

// Dremio Errors

class DremioError extends WError {
  constructor (message, ...params) {
    super({ name: 'DremioError' }, message, ...params)
  }
}

// API V2 Errors

class V2Error extends WError {
  constructor (message, ...params) {
    super({ name: 'V2Error' }, message, ...params)
  }
}

class APIV2UserError extends WError {
  constructor (message, ...params) {
    super({ name: 'APIV2UserError' }, message, ...params)
  }
}

class APIV2SourceError extends WError {
  constructor (message, ...params) {
    super({ name: 'APIV2SourceError' }, message, ...params)
  }
}

class APIV2SpaceError extends WError {
  constructor (message, ...params) {
    super({ name: 'APIV2SpaceError' }, message, ...params)
  }
}

// API V3 Errors

class V3Error extends WError {
  constructor (message, ...params) {
    super({ name: 'V3Error' }, message, ...params)
  }
}

class APIV3AccountsError extends WError {
  constructor (message, ...params) {
    super({ name: 'APIV3AccountsError' }, message, ...params)
  }
}

class APIV3CatalogError extends WError {
  constructor (message, ...params) {
    super({ name: 'APIV3CatalogError' }, message, ...params)
  }
}

class APIV3JobError extends WError {
  constructor (message, ...params) {
    super({ name: 'APIV3JobError' }, message, ...params)
  }
}

class APIV3ReflectionError extends WError {
  constructor (message, ...params) {
    super({ name: 'APIV3ReflectionError' }, message, ...params)
  }
}

class APIV3SourceError extends WError {
  constructor (message, ...params) {
    super({ name: 'APIV3SourceError' }, message, ...params)
  }
}

class APIV3SQLError extends WError {
  constructor (message, ...params) {
    super({ name: 'APIV3SQLError' }, message, ...params)
  }
}

class APIV3VoteError extends WError {
  constructor (message, ...params) {
    super({ name: 'APIV3VoteError' }, message, ...params)
  }
}

class APIV3WorkloadManagementError extends WError {
  constructor (message, ...params) {
    super({ name: 'APIV3WorkloadManagementError' }, message, ...params)
  }
}

// Service Errors

class RequestOptionsError extends WError {
  constructor (message, ...params) {
    super({ name: 'RequestOptionsError' }, message, ...params)
  }
}

module.exports = {
  V2Error,
  V3Error,
  DremioError,
  GenericError,
  APIV3JobError,
  APIV3SQLError,
  APIV2UserError,
  APIV3VoteError,
  APIV2SpaceError,
  APIV2SourceError,
  APIV3SourceError,
  APIV3CatalogError,
  APIV3AccountsError,
  RequestOptionsError,
  APIV3ReflectionError,
  APIV3WorkloadManagementError
}
