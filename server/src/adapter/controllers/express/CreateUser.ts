import express from 'express'
import { IUserApplicationService } from '../../../application/ports/services/UserApplicationService'
import IRouteController from '../../ports/controllers/RouteController'
import PresenterFactory from '../../presenter/PresenterFactory'

class CreateUserController implements IRouteController {
  constructor(private userApplicationService: IUserApplicationService) {}

  async handle(router: express.Router): Promise<express.Router> {
    return router.post('/users/create', async (req, res) => {
      const { successPresenter, errorHandler } = PresenterFactory.make(res)
      const { username } = req.body
      const userId = req.session.user
      try {
        const response = await this.userApplicationService.createUser({
          username,
          userId
        })

        req.session.destroy
        req.session.user = response.userId
        req.session.accessKey = response.accessKey

        return successPresenter.created({})
      } catch (error) {
        return errorHandler.handle(error)
      }
    })
  }
}

export default CreateUserController
