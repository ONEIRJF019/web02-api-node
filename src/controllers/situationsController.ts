import express, { Request, Response } from 'express'
import { AppDataSource } from '../data-source'
import { Situations } from '../entity/Situations'

const router = express.Router()

router.get('/', async (req: Request, res: Response) => {
  try {
    const situationRepository = AppDataSource.getRepository(Situations)
    const situations = await situationRepository.find()

    return res.status(200).json(situations)
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao listar situação', error })
  }
})

router.post('/', async (req: Request, res: Response) => {
  try {
    const data = req.body
    const situationRepository = AppDataSource.getRepository(Situations)

    const newSituation = situationRepository.create(data)
    await situationRepository.save(newSituation)

    res.status(201).json({ message: 'Situação cadastrada com sucesso', situation: newSituation })
  } catch (error) {
    res.status(500).json({ message: 'Erro ao cadastrar situação', error })
  }
})

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const data = req.body
    const situationRepository = AppDataSource.getRepository(Situations)

    const situation = await situationRepository.findOneBy({ id: parseInt(id as string) })

    if (!situation) {
      return res.status(404).json({ message: 'Situação não encontrada' })
    }

    const updatedSituation = situationRepository.merge(situation, data)
    await situationRepository.save(updatedSituation)

    return res.status(200).json({ message: 'Situação atualizada com sucesso', situation: updatedSituation })
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao atualizar situação', error })
  }
})

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const situationRepository = AppDataSource.getRepository(Situations)

    const situation = await situationRepository.findOneBy({ id: parseInt(id as string) })

    if (!situation) {
      return res.status(404).json({ message: 'Situação não encontrada' })
    }

    return res.status(200).json(situation)
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao visualizar situação', error })
  }
})

export default router
