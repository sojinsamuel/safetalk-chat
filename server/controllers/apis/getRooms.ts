import { Request, Response, NextFunction } from 'express'
import { roomRepository } from '../../database/index'

const getRooms = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const rooms = await roomRepository
      .getRooms()
      .then(rooms => rooms.map(room => room.roomCode))
    return res.status(200).json({ rooms })
  } catch (error) {
    next(error)
  }
}

export { getRooms }