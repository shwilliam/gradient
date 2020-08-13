<br>

<p align="center">
  <img alt="example gradient" src="https://microgradient.herokuapp.com/test/linear/80,80.jpg" width="80" height="80">
</p>

<h1 align="center">
  Gradient
</h1>

<p align="center">
  <kbd>
    <a href="https://microgradient.herokuapp.com/" target="_blank" rel="noopener noreferrer">
      check out the demo
    </a>
  </kbd>
</p>

<br>
<br>

## Examples

| <img alt="boop gradient" src="https://microgradient.herokuapp.com/boop/linear/80,80.jpg" width="80" height="80"> | <img alt="fizz gradient" src="https://microgradient.herokuapp.com/fizz/linear/80,80.jpg" width="80" height="80"> | <img alt="buzz gradient" src="https://microgradient.herokuapp.com/buzz/linear/80,80.jpg" width="80" height="80"> | <img alt="ok radial gradient" src="https://microgradient.herokuapp.com/ok/radial/80,80.jpg" width="80" height="80"> | <img alt="yep wide gradient" src="https://microgradient.herokuapp.com/yep/linear/160,80.jpg" width="160" height="80"> |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `/boop`                                                                                                          | `/fizz`                                                                                                          | `/buzz`                                                                                                          | `/ok/radial`                                                                                                        | `/yep/linear/160,80`                                                                                                  |  |

## Usage

Generate a gradient by passing a string (eg. username or email) as a URL path to
your endpoint, for example [microgradient.herokuapp.com/shwilliam](https://microgradient.herokuapp.com/shwilliam).
A request for a gradient will, by default, return a `200px` by `200px` SVG.

### Path

The path of the request is used to pass a string used to seed the gradient.
Optionally, you can also specify the type of gradient to be generated, as well
as its size. For example, `/janedoe/radial/42,42` will return a radial,
`42px` by `42px` SVG gradient.

### Parameters

Pass optional URL query parameters to format the requested gradient.

| Key       | Required | Default    | Type                                       | Example                       |
| --------- | :------: | ---------- | ------------------------------------------ | ----------------------------- |
| `type`    |    ❌    | `'svg'`    | `'svg'` \| `'png'` \| `'jpeg'` \| `'ico'`  | `?type=png`                   |
| `size`    |    ❌    | `200`      | `Number` (single or comma-separated tuple) | `?size=20`<br> `?size=100,20` |
| `variant` |    ❌    | `'linear'` | `'linear'` \| `'radial'`                   | `?variant=radial`             |

### ICO

Generating an ICO version of a gradient works a bit differently. Passing `type=ico`
returns a page with a download link for the file. Note that the icon created will
always be `14px` by `14px`; passing a `size` parameter will not have any effect.

## Development

```terminal
npm i
npm run dev
```

## Production

```terminal
npm i
npm run build
npm start
```

## Dockerized

```terminal
docker build --tag gg:1.0 .
docker run -p 1234:1234 -d --name gg gg:1.0
```

## References

This project leans heavily on the [`sharp`](https://github.com/lovell/sharp)
library for image processing and [`color`](https://github.com/Qix-/color) for
color manipulation. Other open-source projects that offer similar solutions to
this one include [`get-gravatar`](https://github.com/sindresorhus/get-gravatar)
and [`avatar`](https://github.com/tobiaslins/avatar/).

## Contributing

This project is open to and encourages contributions! Feel free to discuss any
bug fixes/features in the [issues](https://github.com/shwilliam/gradient/issues).
If you wish to work on this project:

1. Fork [this project](https://github.com/shwilliam/gradient)
2. Create a branch (`git checkout -b new-branch`)
3. Commit your changes (`git commit -am 'add new feature'`)
4. Push to the branch (`git push origin new-branch`)
5. [Submit a pull request!](https://github.com/shwilliam/gradient/pull/new/master)
