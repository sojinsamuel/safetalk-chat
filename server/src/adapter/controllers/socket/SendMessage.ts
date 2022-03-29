import { Server, Socket } from 'socket.io'
import { IRoomApplicationService } from '../../../application/ports/services/RoomApplicationService'
import { SocketWithSession } from '../../../infrastructure/socket.io/AppSocket'
import ISocketController from '../../ports/controllers/SocketController'

class SendMessageEventController implements ISocketController {
  constructor(private roomApplicationService: IRoomApplicationService) {}
  public async handle(socket: SocketWithSession, io: Server): Promise<Socket> {
    return socket.on(
      'room:message',
      async ({ message, messageType, file, createdAt }) => {
        try {
          const userId = socket.request.session.user
          const accessKey = socket.request.session.accessKey
          const roomCode = socket.request.session.roomCode
          const savedMessage = await this.roomApplicationService.saveMessage({
            auth: { accessKey, userId },
            message: { roomCode, message, messageType, file, createdAt }
          })
          io.of('chat').to(roomCode).emit('room:message', savedMessage)
        } catch (error) {
          console.log(error)
          socket._error(error)
        }
      }
    )
  }
}

export default SendMessageEventController
