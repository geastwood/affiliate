import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import indexRouter from './routes/index'
import usersRouter from './routes/users'

const app = express()

import { Sequelize } from 'sequelize'

// @ts-ignore
import models from './models'
console.log(Object.keys(models))
const Op = models.Sequelize.Op
// @ts-ignore
models.User.findAll().then(d => console.log(d))

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// static folder
app.use(express.static(path.join(__dirname, '..', 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)

export default app
