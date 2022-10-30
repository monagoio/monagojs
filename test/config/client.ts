import * as dotenv from 'dotenv'
dotenv.config()
import { MonagoClient } from '../../src/main/client'

export const client = new MonagoClient({
    secretKey: process.env.MONAGO_SECRET_KEY || ""
})
