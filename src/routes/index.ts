import { Router } from 'express'
import CompanyRoutes from './company.routes'

const router = Router()

router.use('/company', CompanyRoutes)

export default router