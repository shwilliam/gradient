import sharp from 'sharp'

export const genPng = svg =>
  new Promise((res, rej) =>
    sharp(new Buffer(svg))
      .png()
      .toBuffer((error, buffer) => {
        if (error) {
          rej(error)
          return
        }

        res(buffer)
      }),
  )

export const genJpeg = svg =>
  new Promise((res, rej) =>
    sharp(new Buffer(svg))
      .jpeg()
      .toBuffer((error, buffer) => {
        if (error) {
          rej(error)
          return
        }

        res(buffer)
      }),
  )
