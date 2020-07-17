export const generateFaviconDownloadHtml = imageUrl => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>@shwilliam/gradient</title>
  </head>
  <body>
    <main>
      <canvas id="canvas"></canvas>
      <a id="download-btn">Download gradient</a>
    </main>

    <script>
      // based on https://github.com/johnsorrentino/favicon.js
      const Favicon = (function (t) {
        var e = {}
        function r(n) {
          if (e[n]) return e[n].exports
          var i = (e[n] = {i: n, l: !1, exports: {}})
          return t[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports
        }
        return (
          (r.m = t),
          (r.c = e),
          (r.d = function (t, e, n) {
            r.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: n})
          }),
          (r.r = function (t) {
            'undefined' != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(t, Symbol.toStringTag, {value: 'Module'}),
              Object.defineProperty(t, '__esModule', {value: !0})
          }),
          (r.t = function (t, e) {
            if ((1 & e && (t = r(t)), 8 & e)) return t
            if (4 & e && 'object' == typeof t && t && t.__esModule) return t
            var n = Object.create(null)
            if (
              (r.r(n),
              Object.defineProperty(n, 'default', {enumerable: !0, value: t}),
              2 & e && 'string' != typeof t)
            )
              for (var i in t)
                r.d(
                  n,
                  i,
                  function (e) {
                    return t[e]
                  }.bind(null, i),
                )
            return n
          }),
          (r.n = function (t) {
            var e =
              t && t.__esModule
                ? function () {
                    return t.default
                  }
                : function () {
                    return t
                  }
            return r.d(e, 'a', e), e
          }),
          (r.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
          }),
          (r.p = ''),
          r((r.s = 0))
        )
      })([
        function (t, e, r) {
          'use strict'
          r.r(e)
          const n = (t, e, r) => {
              let n,
                a = t,
                o = t.width,
                s = t.height
              for (; o / 2 >= e; ) a = n = i(a, (o /= 2), (s /= 2))
              return o > e && (a = n = i(a, e, r)), a
            },
            i = (t, e, r) => {
              let n = document.createElement('canvas'),
                i = n.getContext('2d')
              return (n.width = e), (n.height = r), i.drawImage(t, 0, 0, e, r), n
            }
          class a {
            constructor(t, e = [16, 32, 48]) {
              ;(this.canvas = t), (this.sizes = e)
            }
            generate() {
              const t = n(this.canvas, 128, 128),
                e = this.createIconDirectoryHeader(this.sizes.length)
              let r = '',
                i = ''
              for (let e = 0; e < this.sizes.length; e++) {
                const a = this.sizes[e],
                  o = n(t, a, a),
                  s = o.width,
                  c = o.height,
                  f = this.createBitmapInfoHeader(s, c),
                  u = this.createBitmapImageData(o),
                  l = f.length + u.length,
                  h = this.calculateBitmapOffset(this.sizes, e)
                ;(r += this.createIconDirectoryEntry(s, c, l, h)), (i += f + u)
              }
              return 'data:image/x-icon;base64,' + btoa(e + r + i)
            }
            calculateBitmapOffset(t, e) {
              let r = 6
              r += 16 * t.length
              for (let n = 0; n < e; n++) {
                const e = t[n]
                ;(r += 40), (r += 4 * e * e), (r += (2 * e * e) / 8)
              }
              return r
            }
            createBitmapImageData(t) {
              const e = new Uint8Array((t.width * t.height * 2) / 8)
              e.fill(0)
              let r = this.arrayBufferToBinary(this.canvasToBitmap(t))
              return (r += this.Uint8ArrayToBinary(e))
            }
            canvasToBitmap(t) {
              const e = t.getContext('2d').getImageData(0, 0, t.width, t.height),
                r = e.data,
                n = new Uint8ClampedArray(e.data.length)
              for (let t = 0; t < r.length; t += 4) {
                const e = r[t],
                  i = r[t + 1],
                  a = r[t + 2],
                  o = r[t + 3]
                ;(n[t] = a), (n[t + 1] = i), (n[t + 2] = e), (n[t + 3] = o)
              }
              const i = new Uint32Array(n.buffer),
                a = new Uint32Array(i.length)
              for (let e = 0; e < i.length; e++) {
                const r = e % t.width,
                  n = Math.floor(e / t.width),
                  o = r,
                  s = (t.height - 1 - n) * t.width + o,
                  c = i[e]
                a[s] = c
              }
              return a.buffer
            }
            createIconDirectoryHeader(t) {
              const e = new ArrayBuffer(6),
                r = new DataView(e)
              return (
                r.setUint16(0, 0, !0),
                r.setUint16(2, 1, !0),
                r.setUint16(4, t, !0),
                this.arrayBufferToBinary(e)
              )
            }
            createIconDirectoryEntry(t, e, r, n) {
              const i = new ArrayBuffer(16),
                a = new DataView(i)
              return (
                a.setUint8(0, t),
                a.setUint8(1, e),
                a.setUint8(2, 0),
                a.setUint8(3, 0),
                a.setUint16(4, 1, !0),
                a.setUint16(6, 32, !0),
                a.setUint32(8, r, !0),
                a.setUint32(12, n, !0),
                this.arrayBufferToBinary(i)
              )
            }
            createBitmapInfoHeader(t, e) {
              const r = new ArrayBuffer(40),
                n = new DataView(r)
              return (
                n.setUint32(0, 40, !0),
                n.setInt32(4, t, !0),
                n.setInt32(8, 2 * e, !0),
                n.setUint16(12, 1, !0),
                n.setUint16(14, 32, !0),
                n.setUint32(16, 0, !0),
                n.setUint32(20, 0, !0),
                n.setUint32(24, 0, !0),
                n.setUint32(28, 0, !0),
                n.setUint32(32, 0, !0),
                n.setUint32(36, 0, !0),
                this.arrayBufferToBinary(r)
              )
            }
            arrayBufferToBinary(t) {
              let e = ''
              const r = new Uint8Array(t),
                n = r.byteLength
              for (let t = 0; t < n; t++) e += String.fromCharCode(r[t])
              return e
            }
            Uint8ArrayToBinary(t) {
              let e = ''
              const r = t,
                n = r.byteLength
              for (let t = 0; t < n; t++) e += String.fromCharCode(r[t])
              return e
            }
          }
          r.d(e, 'Ico', function () {
            return a
          })
        },
      ])

      const canvas = document.getElementById('canvas')
      canvas.width = 200
      canvas.height = 200
      const context = canvas.getContext('2d')

      const image = new Image()
      image.crossOrigin = 'anonymous'
      image.onload = () => {
        context.drawImage(image, 0, 0, 200, 200)

        const ico = new Favicon.Ico(canvas)
        const dataurl = ico.generate([16, 32, 48])

        const downloadEl = document.getElementById('download-btn')
        downloadEl.href = dataurl
        downloadEl.setAttribute('download', 'favicon.ico')
      }
      image.src = '${imageUrl}'
      context.fillRect(0, 0, canvas.width, canvas.height)
    </script>
  </body>
</html>
`
