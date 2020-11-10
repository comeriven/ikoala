import * as Router from 'koa-router'
import directoryRouter from 'koa-directory-router'
import * as path from 'path'

// import userController from '../controller/user'

const koaRouter = (app: any) => {
  // const router = new Router()
  const user = directoryRouter({
    root: path.resolve(__dirname, path.normalize('../controller/user')),
    suffix: '.ts',
    prefix: '/user'
  })
  // router.get('/', async ctx => {
  //   ctx.body = 'hello world!'
  // })

  app.use(user.routes())
    .use(user.allowedMethods())
  
  // router.post('/user/login', userController.login)
  // app.use(router.routes())
  //   .use(router.allowedMethods())

  return app
}

export default koaRouter