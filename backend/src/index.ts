import { Hono } from 'hono'

import { userRouter } from './routes/user'
import { blogRouter } from './routes/blog'
import { cors } from 'hono/cors'

const app = new Hono<{

}>()
app.use('*', cors());
app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter)
// Middleware

// app.use('/api/v1/blog/*', async (c, next) => {
//   const header = c.req.header("authorization") || ""
//   const response = await verify(header, c.env.JWT_SECRET)
//   if (response.id) {
//     next()
//   } else {
//     c.status(403)
//     return c.json({error: "unauthorized"})
//   }
// })



app.post('/api/v1/blog', async (c) => {
  return c.text('signin blog route')
});

app.put('/api/v1/blog/', async (c) => {
  return c.text('signin route')
});

app.get('/api/v1/blog/:id', async (c) => {
  return c.text('get blog route')
})

app.get('/api/v1/blog/bulk', async (c) => {
  return c.text('get all the blog')
})

export default app
