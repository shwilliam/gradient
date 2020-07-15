const request = require('supertest')
const {app} = require('./server')

describe('server', () => {
  describe('/', () => {
    it('should return 404', async () => {
      const res = await request(app).get('/')

      expect(res.statusCode).toEqual(404)
    })
  })

  describe('/:seed', () => {
    it('should return svg gradient', async () => {
      const res = await request(app).get('/hello')
      const resContentType = res.header['content-type']
      const svgString = res.body.toString()

      expect(res.statusCode).toEqual(200)
      expect(resContentType).toContain('image/svg+xml')
      expect(svgString).toContain('svg')
      expect(svgString).not.toContain('NaN')
    })
  })

  describe('/:seed?type=png', () => {
    it('should return png gradient', async () => {
      const res = await request(app).get('/hello?type=png')
      const resContentType = res.header['content-type']
      const pngString = res.body.toString()

      expect(res.statusCode).toEqual(200)
      expect(resContentType).toEqual('image/png')
      expect(pngString).toContain('PNG')
    })
  })

  describe('/:seed?type=jpeg', () => {
    it('should return jpeg gradient', async () => {
      const res = await request(app).get('/hello?type=jpeg')
      const resContentType = res.header['content-type']
      const jpegString = res.body.toString()

      expect(res.statusCode).toEqual(200)
      expect(resContentType).toEqual('image/jpeg')
      expect(jpegString).not.toBeNull()
    })
  })
})
