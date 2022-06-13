import express from 'express'
import { createServer } from 'vite'
import path from 'path'
import cors from 'cors'
import 'dotenv/config'

import limiter from './limiter.js'
import checkEnvKeys from './checkEnvKeys.js'
import { ApiGeo, ApiWeather } from './middleware.js'

const env = checkEnvKeys(process.env)
// const host = 'localhost'
const port = process.env.PORT || 3000
const isDev = env.MODE === 'development'

const app = express()
app
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(cors())
  .use(express.json())
  .use(limiter)

// router -------------------------------
app.get('/hello', (req, res) => res.send('hello world!'))
app.use('/api-geo', ApiGeo)
app.use('/api-data' , ApiWeather)

// app.use(express.static(__dirname + '/dist/'))
// app.get(/.*/, (req, res) => res.sendFile(__dirname + '/dist/index.html'))

// app.listen(port, () => {
//   console.log(`$ server is running at ${port}`)
// })

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (isDev) {
  ;(async () => {
    const vite = await createServer({
      configFile: path.join(__dirname, '../vite.config.ts'),
      plugins: [
        {
          name: 'server-middleware',
          configureServer(server) {
            server.middlewares.use(app)
          },
        },
      ],
      server: {
        middlewareMode: false,
        hmr: true,
        host,
        port,
      },
    })
    vite.listen()
    console.log('Vite Server listening on ' + host + ':' + port)
  })()
} else {
  app.use('/', express.static(path.join(__dirname, '../dist')))
  app.listen(process.env.PORT || port, () => {
    console.log('Server listening on ' + port)
  })
}