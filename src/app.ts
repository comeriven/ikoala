import * as Koa from 'koa'
import koaRouter from './routes'

const app = new Koa()

koaRouter(app)

export default app