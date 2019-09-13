/* eslint-env mocha */

const { expect } = require('chai')

const {
  GenericError,
  APIV3JobError,
  APIV3SQLError,
  APIV3VoteError,
  APIV3SourceError,
  APIV3CatalogError,
  APIV3AccountsError,
  RequestOptionsError,
  APIV3ReflectionError,
  APIV3WorkloadManagementError
} = require('../../../lib/util/errors')

describe('Errors instances', () => {
  it('should be a GenericError', () => {
    const error = new GenericError()

    expect(error.name).to.equal('GenericError')
    expect(error).to.be.a.instanceof(GenericError)
  })

  it('should be a APIV3JobError', () => {
    const error = new APIV3JobError()

    expect(error.name).to.equal('APIV3JobError')
    expect(error).to.be.a.instanceof(APIV3JobError)
  })

  it('should be a APIV3SQLError', () => {
    const error = new APIV3SQLError()

    expect(error.name).to.equal('APIV3SQLError')
    expect(error).to.be.a.instanceof(APIV3SQLError)
  })

  it('should be a APIV3VoteError', () => {
    const error = new APIV3VoteError()

    expect(error.name).to.equal('APIV3VoteError')
    expect(error).to.be.a.instanceof(APIV3VoteError)
  })

  it('should be a APIV3SourceError', () => {
    const error = new APIV3SourceError()

    expect(error.name).to.equal('APIV3SourceError')
    expect(error).to.be.a.instanceof(APIV3SourceError)
  })

  it('should be a APIV3CatalogError', () => {
    const error = new APIV3CatalogError()

    expect(error.name).to.equal('APIV3CatalogError')
    expect(error).to.be.a.instanceof(APIV3CatalogError)
  })

  it('should be a APIV3AccountsError', () => {
    const error = new APIV3AccountsError()

    expect(error.name).to.equal('APIV3AccountsError')
    expect(error).to.be.a.instanceof(APIV3AccountsError)
  })

  it('should be a RequestOptionsError', () => {
    const error = new RequestOptionsError()

    expect(error.name).to.equal('RequestOptionsError')
    expect(error).to.be.a.instanceof(RequestOptionsError)
  })

  it('should be a APIV3ReflectionError', () => {
    const error = new APIV3ReflectionError()

    expect(error.name).to.equal('APIV3ReflectionError')
    expect(error).to.be.a.instanceof(APIV3ReflectionError)
  })

  it('should be a APIV3WorkloadManagementError', () => {
    const error = new APIV3WorkloadManagementError()

    expect(error.name).to.equal('APIV3WorkloadManagementError')
    expect(error).to.be.a.instanceof(APIV3WorkloadManagementError)
  })
})
