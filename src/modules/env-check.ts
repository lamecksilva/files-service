import { logger } from '../utils'

const requiredEnv = ['NODE_ENV', 'SERVER_PORT', 'SERVER_NAME', 'SERVER_URL']

const unsetEnv = requiredEnv.filter(
  (env) => !(typeof process.env[env] !== undefined && process.env[env] !== '')
)

if (unsetEnv.length > 0) {
  logger.warn('Required ENV variables are not set: [' + unsetEnv.join(', ') + ']')
} else {
  logger.info('[ ENV ] Environment configured and ready.')
}
