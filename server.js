const express = require('express')
const next = require('next')
const https = require('https')
const fs = require('fs')

const resendRequest = (options, newRes) => {
  https.request(options, (res) => {
    res.setEncoding('utf8')
    newRes.writeHead(res.statusCode)
    res.on('data', (chunk) => {
      newRes.write(chunk)
    })
      .on('close', (e) => {
        newRes.end()
      })
    res.on('end', () => {
      newRes.end()
    })
  })
    .on('error', (e) => {
      console.error(`problem with request: ${e.message}`)
    })
    .end()
}

const env = JSON.parse(fs.readFileSync(__dirname + '/env.json', 'utf8'))
const { accessKey } = env
const port = process.env.PORT || 3000

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    server.all('/api/*', function (req, res) {
      resendRequest({
        hostname: 'api.unsplash.com',
        method: req.method,
        path: req.originalUrl.replace(/^\/api/, ''),
        headers: {
          Authorization: `Client-ID ${accessKey}`
        }
      }, res)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })