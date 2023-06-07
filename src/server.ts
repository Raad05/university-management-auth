import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { errorLogger, infoLogger } from './shared/logger'

async function bootstrap() {
  try {
    await mongoose.connect(config.databaseURL as string)
    infoLogger.info('Database connection successful.')

    app.listen(config.port, () => {
      infoLogger.info(`Server is running on port: ${config.port}`)
    })
  } catch (error) {
    errorLogger.error('Failed to connect to server.', error)
  }
}

bootstrap()
