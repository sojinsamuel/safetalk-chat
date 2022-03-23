import { Signer } from 'aws-sdk/clients/cloudfront'
import { IAuthenticationInputDTO } from './AuthenticationService'

interface ICreateRoomInputDTO {
  roomCode: string
  auth: IAuthenticationInputDTO
}

interface ICreateRoomOutputDTO {
  roomId: string
  newAccessKey: string
  cloudAccessKeys: Signer.CustomPolicy
}

interface IJoinRoomInputDTO {
  roomCode: string
  auth: IAuthenticationInputDTO
}

interface IJoinRoomOutputDTO {
  roomId: string
  newAccessKey: string
  cloudAccessKeys: Signer.CustomPolicy
}

interface IGenerateRoomCodeOutputDTO {
  roomCode: string
}

interface IGetAllUsersFromRoomInputDTO {
  roomId: string
  auth: IAuthenticationInputDTO
}
interface IGetAllUsersFromRoomOutputDTO
  extends Array<{
    userId: string
    username: string
    roomId: string
    roomCode: string
    isOnline: boolean
  }> {}

interface IRoomApplicationService {
  createRoom(data: ICreateRoomInputDTO): Promise<ICreateRoomOutputDTO>
  joinRoom(data: IJoinRoomInputDTO): Promise<IJoinRoomOutputDTO>
  generateRoomCode(
    auth: IAuthenticationInputDTO
  ): Promise<IGenerateRoomCodeOutputDTO>
  getAllUsersFromRoom(
    data: IGetAllUsersFromRoomInputDTO
  ): Promise<IGetAllUsersFromRoomOutputDTO>
}

export {
  IRoomApplicationService,
  ICreateRoomInputDTO,
  IJoinRoomInputDTO,
  IGenerateRoomCodeOutputDTO,
  IGetAllUsersFromRoomInputDTO,
  IGetAllUsersFromRoomOutputDTO,
  ICreateRoomOutputDTO,
  IJoinRoomOutputDTO
}
