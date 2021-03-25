import { Router } from 'express'
import multer from 'multer'

import { imagesController } from '../controllers'

const router = Router()
const upload = multer()

export async function imageRouter(): Promise<Router> {
  router.post('/single', upload.single('image'), imagesController.saveNewImage)

  return router
}
