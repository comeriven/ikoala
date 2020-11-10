import * as Koa from 'koa'
import router from './routes'

const app = new Koa()

app.use(router.routes())
  .use(router.allowedMethods())
  // .listen(3000)

// console.log('server running at //localhost:3000')

export default app