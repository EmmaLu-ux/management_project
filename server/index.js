import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'

import clientRoutes from './routes/client.js'
import salesRoutes from './routes/sales.js'
import managementRoutes from './routes/management.js'
import generalRoutes from './routes/general.js'

/* 相关配置 */
const app = express()
dotenv.config()

app.use(express.json()) // 
app.use(helmet()) // 设置各种不同的http头部使得express app 安全可用   保护api
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' })) // 设置Cross-Origin-Resource-Policy头部
app.use(morgan('common')) // http请求日志 格式字符串大小是common
app.use(bodyParser.json()) // 返回的中间件 只解析json格式 并且 只查看Content-Type头与type选项匹配的请求
app.use(bodyParser.urlencoded({ extended: true })) // 返回的中间件 只解析urlencoded体 并且 只查看Content-Type头与type选项匹配的请求。 qs库
app.use(cors()) 

/* 路由 */
app.use('/client', clientRoutes)
app.use('/sales', salesRoutes)
app.use('/management', managementRoutes)
app.use('/general', generalRoutes)

/* 数据库连接 */
const PORT = process.env.PORT || 9000
const CONNECTION_URL = process.env.CONNECTION_URL

mongoose.set('strictQuery', false)

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running ar port ${PORT}`)))
    .catch(error => console.log('error-mongooseConnect:', error))