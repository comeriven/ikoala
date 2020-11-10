import * as Router from 'koa-router'

const router = new Router()

router.get('/', async ctx => {
  ctx.body = 'hello world!'
})

router.get('/user', async ctx => {
  ctx.body = 'hello user!'
})

export default router