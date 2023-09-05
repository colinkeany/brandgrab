# BrandGrab
![brandgrab-demo](https://github.com/colinkeany/brandgrab/assets/4369448/1384317b-443b-4b65-81f2-ee612e5d51dc)

## What is BrandGrab?
BrandGrab was built to solve the tricky problem of ensuring your brand identity is represented accurately across the internet. Using BrandGrab, you can control which versions of your logo are available to use, with options for logo variations (wordmark, glyph, etc.) and colors. Visitors will have the options to download your logo as an SVG, PNG or JPG as well as copy the SVG to the clipboard to be used in design software or code.

https://colinkeany.github.io/brandgrab/

## Getting Started
The easiest way to get started is to download the [template here](https://github.com/colinkeany/brandgrab/tree/main/src). This folder includes the HTML template which is hard-coded to pull the necessary JS and CSS from JSDelivr. The template also includes `svgData.js`, which is where you'll add your different logo styles as `svg` code.

### JSDelivr
For reference, BrandGrab source code for CSS and JS is available via JSDelivr. If you fork this repo or use the [template here](https://github.com/colinkeany/brandgrab/tree/main/src), the CSS and JS will already be available in the code.
```
https://cdn.jsdelivr.net/gh/colinkeany/brandgrab@latest/src/assets/css/brandgrab.css
https://cdn.jsdelivr.net/gh/colinkeany/brandgrab@latest/src/assets/js/brandgrab.1.0.js
```

### Adding Logo Data
Using the template, you can modify the `svgData.js` file to replace the placeholder logos with your own.
|Name|Type|Description|
|--|--|--|
|`default`|boolean|Set this option to `true` on the logo that you would like to show first. This option is `false` by default.|
|`logoSVG`|string|Add your `<svg>` code here, ideally with no line breaks.|
|`label`|string|Create a label for the type of logo. For example, `Wordmark`, `Glyph`, `Stacked`, etc.|
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
Customizing colors and color labels is simple!

Use `data-font-color` to change the color of the SVG logo.
 - For example, `data-font-color="#000000"` will change the logo black

Use `data-bg-color` to change the background color of the logo container.
 - `data-bg-color="bg-white"` for darker colored logos
 - `data-bg-color="bg-dark"` for lighter colored logos

```
<div class="form-check">
    <input class="form-check-input" type="radio" name="colorOption" id="colorOptionA" data-bg-color="bg-white" data-font-color="#9C25C7" checked>
    <label class="form-check-label" for="colorOptionA">
        Purple
    </label>
</div>
<div class="form-check">
    <input class="form-check-input" type="radio" name="colorOption" id="colorOptionB" data-bg-color="bg-dark" data-font-color="#FFFFFF">
    <label class="form-check-label" for="colorOptionB">
        White
    </label>
</div>
```








