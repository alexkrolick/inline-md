# inline-md

![npm bundle size](https://img.shields.io/bundlephobia/min/inline-md.svg)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/inline-md.svg)
![NPM](https://img.shields.io/npm/l/inline-md.svg)

```html
<html>
<head>
  <script src="https://unpkg.com/inline-md@latest/dist/index.js"></script>
  <script src="https://unpkg.com/inline-md@latest/dist/webcomponent.js"></script>
</head>

<body>
  <div data-markdown>

  # Hello World

  The content of this element will be converted from markdown
  to html when the page loads

  </div>
  
  <markdown-text>

  # Hello Web Component

  The `markdown-text` webcomponent works too

  </markdown-text>

</body>
<html>
```

Note: both scripts immediately parse the DOM and are meant to be used standalone without additional JS. Pull Request welcome to refactor the code to export side-effect-free versions.

## Alternatives

- https://github.com/vanillawc/wc-markdown

## License

MIT