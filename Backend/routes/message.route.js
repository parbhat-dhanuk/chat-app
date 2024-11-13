import express from 'express'
import { message } from '../controllers/message.controller.js'
import isAuthenticated from '../middlewares/isAuthenticated.js'

const router=express.Router()

router.post('/send/:id', isAuthenticated,message)


export default router