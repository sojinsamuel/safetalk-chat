import { Request, Response, NextFunction } from 'express'
import { userRepository } from '../../database/index'
import { IRoomBody } from '../../routes/interfaces'

const createUser = async (
  req: Request<IRoomBody>,
  res: Response,
  next: NextFunction
): Promise<Response> => {
  try {
    const { socketID, username } = req.body

    await userRepository.createUser({
      username,
      socketID,
      isAdmin: false,
      room: null
    })

    return res.status(201).json({ message: 'User created' })
  } catch (error) {
    next(error)
  }
}

export { createUser }