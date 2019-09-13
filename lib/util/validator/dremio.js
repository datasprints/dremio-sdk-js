const { isURL } = require('validator')

const { DremioError } = require('../errors')

const DREMIO_VERSIONS = ['2', '3']

const originIsValid = (origin) => isURL(origin)
const usernameIsValid = (username) => !!username
const passwordIsValid = (password) => !!password
const versionIsValid = (version) => (DREMIO_VERSIONS.indexOf(version) !== -1)

const validate = (config) => {
  const { origin, version, username, password } = config

  if (!originIsValid(origin)) throw new DremioError('Invalid origin.')
  if (!versionIsValid(version)) throw new DremioError('Invalid version.')
  if (!usernameIsValid(username)) throw new DremioError('Invalid username.')
  if (!passwordIsValid(password)) throw new DremioError('Invalid password.')
}

module.exports = { validate }
