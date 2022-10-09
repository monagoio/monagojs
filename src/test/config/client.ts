import * as dotenv from 'dotenv'
import { MonagoClient } from '../../main/client'
dotenv.config()

export const client = new MonagoClient({
    secretKey: process.env.MONAGO_SECRET_KEY || ""
})
