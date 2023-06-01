import config from '../../../config'
import { IUser } from './users.interface'
import { User } from './users.model'
import generateUserID from './users.utils'

export const createUserToDB = async (user: IUser): Promise<IUser | null> => {
  // Default incremental ID
  const id = await generateUserID()
  user.id = id as string

  // Default password
  if (!user.password) {
    user.password = config.defaultUserPassword as string
  }

  const createdUser = await User.create(user)
  if (!createUserToDB) {
    throw new Error('Failed to create user.')
  }

  return createdUser
}
