import * as Router from 'koa-router'
import userController from '../controller/user'

const router = new Router()

router.get('/', async ctx => {
  ctx.body = 'hello world!'
})

router.get('/user', async ctx => {
  ctx.body = 'hello user!'
})

router.get('/user/login', userController.login)

export default router