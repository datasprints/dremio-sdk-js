/* eslint-env mocha */

const { expect } = require('chai')

const Dremio = require('../../lib/dremio')

const dremio = new Dremio()

const V3Config = {
  version: '3',
  username: 'bruce',
  password: 'asdf1234',
  origin: 'http://local-test.dremio:9047'
}

describe('Dremio', () => {
  describe('V2', () => {
    const V2Config = {
      version: '2',
      username: 'bruce',
      password: 'asdf1234',
      origin: 'http://local-test.dremio:9047'
    }

    const directoryPrefix = '../../lib/dremio/v2'

    const User = require(`${directoryPrefix}/user`)
    const Space = require(`${directoryPrefix}/space`)
    const Source = require(`${directoryPrefix}/source`)

    it('returns the User service', () => {
      const user = dremio.User(V2Config)
      expect(user).to.be.instanceof(User)
    })

    it('returns the Space service', () => {
      const space = dremio.Space(V2Config)
      expect(space).to.be.a.instanceof(Space)
    })

    it('returns the Source service', () => {
      const source = dremio.Source(V2Config)
      expect(source).to.be.a.instanceof(Source)
    })
  })

  describe('V3', () => {
    const directoryPrefix = '../../lib/dremio/v3'

    const Job = require(`${directoryPrefix}/job`)
    const SQL = require(`${directoryPrefix}/sql`)
    const Vote = require(`${directoryPrefix}/vote`)
    const Catalog = require(`${directoryPrefix}/catalog`)
    const Accounts = require(`${directoryPrefix}/accounts`)
    const Reflection = require(`${directoryPrefix}/reflection`)
    const WorkloadManagement = require(`${directoryPrefix}/workload-management`)

    it('returns the Job service', () => {
      const job = dremio.Job(V3Config)
      expect(job).to.be.a.instanceof(Job)
    })

    it('returns the SQL service', () => {
      const sql = dremio.SQL(V3Config)
      expect(sql).to.be.a.instanceof(SQL)
    })

    it('returns the Vote service', () => {
      const vote = dremio.Vote(V3Config)
      expect(vote).to.be.a.instanceof(Vote)
    })

    it('returns the Catalog service', () => {
      const catalog = dremio.Catalog(V3Config)
      expect(catalog).to.be.a.instanceof(Catalog)
    })

    it('returns the Accounts service', () => {
      const accounts = dremio.Accounts(V3Config)
      expect(accounts).to.be.a.instanceof(Accounts)
    })

    it('returns the Reflection service', () => {
      const reflection = dremio.Reflection(V3Config)
      expect(reflection).to.be.a.instanceof(Reflection)
    })

    it('returns the WorkloadManagement service', () => {
      const workloadManagement = dremio.WorkloadManagement(V3Config)
      expect(workloadManagement).to.be.a.instanceof(WorkloadManagement)
    })
  })
})
