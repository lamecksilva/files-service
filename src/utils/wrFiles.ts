/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// Write - Read Files functions helpers/utils

import { existsSync, readFile, writeFile, mkdir } from 'fs'

/**
 * Write a file in disk
 * @param fileName The name of the file to be write
 * @param data Buffer data
 */
export async function writeFilePromise(fileName: string, data: any): Promise<any> {
  return new Promise((resolve, reject) => {
    writeFile(fileName, data, (error) => {
      if (error) {
        reject(error)
      }
      resolve()
    })
  })
}

/**
 * Read one file in promise-mode
 * @param fileName Name of the file
 */
export async function readFilePromise(fileName: string): Promise<Buffer | any> {
  return new Promise((resolve, reject) => {
    readFile(fileName, (error, data) => {
      if (error) {
        reject(error)
      }
      resolve(data)
    })
  })
}

/**
 * Check if a path exists
 * @param dirName name of the path
 */
export async function existsPromise(dirName: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    try {
      const exists = existsSync(dirName)

      exists ? resolve(true) : resolve(false)
    } catch (error) {
      reject(error)
    }
  })
}

/**
 * Creates a folder
 * @param dirName name of the folder
 */
export async function mkdirPromise(dirName: string): Promise<any> {
  return new Promise((resolve, reject) => {
    mkdir(dirName, (error) => {
      if (error) {
        reject(error)
      }
      resolve()
    })
  })
}
