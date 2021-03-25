import { NextFunction, Request, Response } from 'express'
import md5 from 'md5'
import sharp from 'sharp'

import { writeFilePromise } from '../../utils'

export const imagesController = {
  saveNewImage: async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
      const imageBuffer = req.file?.buffer
      const SERVER_URL = process.env.SERVER_URL || 'http://localhost:9000'

      const thumbBuffer = await sharp(imageBuffer).resize(80, 80).png().toBuffer()
      const mediumImage = await sharp(imageBuffer).resize(250, 250).png().toBuffer()
      const originalImage = await sharp(req.file.buffer).png().toBuffer()

      const fileName = `${md5(`${new Date().getDate() - req.file.size}`)}.png`

      await writeFilePromise(`./static/thumbs/${fileName}`, thumbBuffer)
      await writeFilePromise(`./static/medium/${fileName}`, mediumImage)
      await writeFilePromise(`./static/original/${fileName}`, originalImage)

      return res.status(201).json({
        message: 'Image saved successfully',
        file: {
          thumb: `${SERVER_URL}/static/thumbs/${fileName}`,
          medium: `${SERVER_URL}/static/medium/${fileName}`,
          original: `${SERVER_URL}/static/original/${fileName}`,
        },
      })
    } catch (err) {
      next(err)
    }
  },
}
