import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import indexRouter from './routes/index'
import voucherRoute from './routes/vouchers'

const app = express()

import Voucher from './models/voucher'

Voucher.findAll().then((d: Voucher[]) => {
  d.forEach(d => console.log(d.name))
})

app.use(logger('dev'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// static folder
app.use(express.static(path.join(__dirname, '..', 'public')))

app.use('/', indexRouter)
app.use('/voucher', voucherRoute)

export default app
