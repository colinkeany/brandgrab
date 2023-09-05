# BrandGrab
![brandgrab-demo](https://github.com/colinkeany/brandgrab/assets/4369448/1384317b-443b-4b65-81f2-ee612e5d51dc)

## What is BrandGrab?
BrandGrab gives your visitors an easy-to-use interface for customizing and downloading your logos.

It was built to solve the tricky problem of ensuring your brand identity is represented accurately across the internet. Using BrandGrab, you can control which versions of your logo are available for download. Control the end result by only supplying visitors with your most up-to-date logo(s) and preferred colors. Visitors will have the options to download your logo as an SVG, PNG or JPG as well as copy the SVG to clipboard to be used in their design software or code.

**Live Demo:** https://colinkeany.github.io/brandgrab/

## Table of contents

- [Getting Started](#getting-started)
  - [JSDelivr](#jsdelivr)
  - [Adding Logo Data](#adding-logo-data)
  - [Managing Colors](#managing-colors)
- [Contributing](#contributing)
- [License](#license)

## Getting Started
The easiest way to get started is to download the [latest release](https://github.com/colinkeany/brandgrab/releases). This folder includes the HTML template which is hard-coded to pull the necessary JS and CSS from JSDelivr. The template also includes `svgData.js`, which is where you'll add your different logo styles as `svg` code.

### JSDelivr
For reference, BrandGrab source code for CSS and JS is available via JSDelivr. If you fork this repo or download the [latest release](https://github.com/colinkeany/brandgrab/releases), the CSS and JS will already be available in the code.
```
https://cdn.jsdelivr.net/gh/colinkeany/brandgrab@latest/src/assets/css/brandgrab.css
https://cdn.jsdelivr.net/gh/colinkeany/brandgrab@latest/src/assets/js/brandgrab.1.0.js
```

### Adding Logo Data
Using the template, you can modify the `svgData.js` file to swap out the placeholder logos with your own.
|Name|Type|Description|
|--|--|--|
|`default`|boolean|Set this option to `true` on the logo that you would like to show first. This option is `false` by default.|
|`logoSVG`|string|Add your `<svg>` code here, ideally with no line breaks.|
|`label`|string|A label describes the type of logo. For example, `Wordmark`, `Glyph`, `Stacked`, etc.|
```
var data = [
    {
        default: true,
        logoSVG: '<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="30" r="30" fill="#FF0000"/></svg>',
        label: 'Wordmark'
    },
    {
        logoSVG: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="#0038FF"/></svg>',
        label: 'Glyph'
    }
];
```

### Managing Colors
Customizing colors and color labels is simple! Define the color of the logo, and whether or not it should be presented on a light or dark artboard.

|Attribute Name|Description|
|--|--|
|`data-font-color`|The color you set here will be applied to the SVG logo on select. This allows any color code. For example, `#000`, `rgba(0,0,0,1)` or `black` are all valid.|
|`data-bg-color`|Use this to switch the artboard to light or dark mode, depending on the logo color set by `data-font-color`. Options include `bg-white` and `bg-dark`.|

```
<div class="form-check">
    <input data-font-color="#000000" data-bg-color="bg-white" class="form-check-input" type="radio" name="colorOption" id="colorOptionA" checked>
    <label class="form-check-label" for="colorOptionA">
        Black
    </label>
</div>
<div class="form-check">
    <input data-font-color="#FFFFFF" data-bg-color="bg-dark" class="form-check-input" type="radio" name="colorOption" id="colorOptionB">
    <label class="form-check-label" for="colorOptionB">
        White
    </label>
</div>
```

## Contributing
For more info on how to contribute please see the  [contribution guidelines](https://github.com/colinkeany/brandgrab/blob/main/CONTRIBUTING.md).

Found a bug or would like to request a feature? Feel free to [open an issue](https://github.com/colinkeany/brandgrab/issues/new) outlining your request.

## License
BrandGrab is licensed under the [MIT License](https://github.com/colinkeany/brandgrab/blob/main/LICENSE).
