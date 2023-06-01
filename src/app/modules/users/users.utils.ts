import { User } from './users.model'

const findlastUserID = async () => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean()

  return lastUser?.id
}

const generateUserID = async () => {
  const currentID = (await findlastUserID()) || (0).toString().padStart(5, '0')

  const incrementID = (parseInt(currentID) + 1).toString().padStart(5, '0')

  return incrementID
}

export default generateUserID
