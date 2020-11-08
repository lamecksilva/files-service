import { Router } from 'express'

import { imagesController } from '../controllers'

const router = Router()

export async function imageRouter(): Promise<Router> {
  router.post('/', imagesController.saveNewImage)

  return router
}
