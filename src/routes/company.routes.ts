import { Router } from 'express'
import { CompanyController } from '@controllers/company.controller'
const router = Router()
const controller = new CompanyController()

router.get('/count', controller.count)

export default router