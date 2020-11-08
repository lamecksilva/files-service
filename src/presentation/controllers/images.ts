import { NextFunction, Request, Response } from 'express'

export const imagesController = {
  saveNewImage: async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
      return res.status(201).json({ message: 'Save New Image Route' })
    } catch (err) {
      next(err)
    }
  },
}
