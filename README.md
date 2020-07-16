# Gradient

> Gradients as a service

<kbd>
  <a href="https://microgradient.herokuapp.com/hello" target="_blank" rel="noopener noreferrer">
    check out the demo
  </a>
</kbd>

## Examples

| <img alt="boop gradient" src="https://user-images.githubusercontent.com/38357771/87625117-34da9100-c6de-11ea-9137-4d7b77a3a349.jpg" width="80" height="80"> | <img alt="noob gradient" src="https://user-images.githubusercontent.com/38357771/87625119-360bbe00-c6de-11ea-9493-ffcb49c0e68e.jpg" width="80" height="80"> | <img alt="timpope gradient" src="https://user-images.githubusercontent.com/38357771/87625121-373ceb00-c6de-11ea-9136-2ade1d327ae7.jpg" width="80" height="80"> |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/boop`                                                                                                                                                     | `/noob`                                                                                                                                                     | `/timpope`                                                                                                                                                     |

## Usage

Generate a gradient by passing a string (eg. username or email) as a URL path to
your endpoint, for example [microgradient.herokuapp.com/shwilliam](https://microgradient.herokuapp.com/shwilliam).
A request for a gradient will, by default, return a `200px` by `200px` SVG.

### Parameters

Pass optional URL parameters to format the requested gradient.

| Key    | Required | Default |           Type           |   Example   |
| ------ | :------: | :-----: | :----------------------: | :---------: |
| `type` |    ❌    | `'svg'` | `'svg' | 'png' | 'jpeg'` | `?type=png` |

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

## Contributing

This project is open to and encourages contributions! Feel free to discuss any
bug fixes/features in the [issues](https://github.com/shwilliam/gradient/issues).
If you wish to work on this project:

1. Fork [this project](https://github.com/shwilliam/gradient)
2. Create a branch (`git checkout -b new-branch`)
3. Commit your changes (`git commit -am 'add new feature'`)
4. Push to the branch (`git push origin new-branch`)
5. [Submit a pull request!](https://github.com/shwilliam/gradient/pull/new/master)
