# BrandGrab
![brandgrab-demo](https://github.com/colinkeany/brandgrab/assets/4369448/1384317b-443b-4b65-81f2-ee612e5d51dc)

## What is BrandGrab?
Add BrandGrab to your existing brand guidelines page to give visitors an easy-to-use interface for customizing and downloading your logos.

## Getting Started
The easiest way to get started is to download the [template here](https://github.com/colinkeany/brandgrab/tree/main/src). This folder includes the HTML template which is hard-coded to pull the necessary JS and CSS from JSDeliver. The template includes placeholder options for three colors and two logo styles, but can be modified to include more or less of each option.

### JSDeliver
```
https://cdn.jsdelivr.net/gh/colinkeany/brandgrab@latest/src/assets/css/brandgrab.css
https://cdn.jsdelivr.net/gh/colinkeany/brandgrab@latest/src/assets/js/brandgrab.1.0.js
```

### Adding My Logo(s)
If you're using the template to get started, there will be two logo style options by default. 
```
<div class="form-check">
  <input class="form-check-input" type="radio" name="logoSelector" data-svg-id="logo1" id="logoOption1" checked>
  <label class="form-check-label" for="logoOption1">
    Wordmark
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="logoSelector" data-svg-id="logo2" id="logoOption2">
  <label class="form-check-label" for="logoOption2">
    Glyph
  </label>
</div>
```
