import { existsPromise, logger, mkdirPromise } from '../utils'

export async function loadFolders(): Promise<void> {
  const folderNames = ['static', 'static/thumbs', 'static/medium', 'static/original']

  folderNames.forEach(async (fileName) => {
    if (!(await existsPromise(fileName))) {
      await mkdirPromise(fileName)
    }
  })

  logger.info('[ MODULE ] Folders checked and Ready. ')
}
