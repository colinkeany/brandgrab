document.addEventListener('DOMContentLoaded', function() {
	function setColor() {
		var selectedOption = document.querySelector('input[name="colorOption"]:checked');
		var bgColor = selectedOption.getAttribute('data-bg-color');
		var fontColor = selectedOption.getAttribute('data-font-color');

		var logoContainers = document.querySelectorAll('.logo-container');
		logoContainers.forEach(function(container) {
			container.classList.remove('bg-dark', 'bg-white');
			container.classList.add(bgColor);
		});

		var logoPaths = document.querySelectorAll('.logo path');
		var logoCircles = document.querySelectorAll('.logo circle');
		var logoRects = document.querySelectorAll('.logo rect');
		var logoEllipses = document.querySelectorAll('.logo ellipse');
		var logoPolygons = document.querySelectorAll('.logo polygon');

		function applyFill(elements, color) {
			elements.forEach(function(element) {
				// For SVG elements with direct attributes
				if (element.tagName === 'circle' || element.tagName === 'path' || element.tagName === 'rect') {
					element.setAttribute('fill', color);
				}
				// For others, use CSS
				else {
					element.style.fill = color;
				}
			});
		}

		applyFill(logoPaths, fontColor);
		applyFill(logoCircles, fontColor);
		applyFill(logoRects, fontColor);
		applyFill(logoEllipses, fontColor);
		applyFill(logoPolygons, fontColor);
	}

	var colorOptions = document.querySelectorAll('input[name="colorOption"]');
	colorOptions.forEach(function(option) {
		option.addEventListener('change', setColor);
	});

	document.querySelectorAll('input[name="downloadOption"]').forEach(function(option) {
		option.addEventListener('change', function(event) {
			if (event.target.checked) {
				// Hide all buttons first
				document.querySelectorAll('.download-btn').forEach(function(button) {
					button.style.display = 'none';
				});

				// Get the ID of the button to show from the data-attribute and show it
				var btnToShow = event.target.getAttribute('data-btn-id');
				document.querySelector(btnToShow).style.display = 'block';
			}
		});
	});

	document.getElementById('downloadSVGBtn').addEventListener('click', function() {
		// Get the SVG content as a string
		var svgContent = new XMLSerializer().serializeToString(document.querySelector(".currentSVG"));

		// Create a Blob with the SVG content
		var blob = new Blob([svgContent], {type: "image/svg+xml"});

		// Create a temporary link to trigger the download
		var link = document.createElement('a');
		link.href = URL.createObjectURL(blob);
		link.download = "logo.svg";
		document.body.appendChild(link);
		link.click();

		// Remove the link after triggering the download
		document.body.removeChild(link);
	});

	function downloadImage(format) {
		var svg = document.querySelector(".currentSVG");
		var serializer = new XMLSerializer();
		var source = '<?xml version="1.0" standalone="no"?>\r\n' + serializer.serializeToString(svg);

		var scale = 1; // 5x the original size

		var canvas = document.createElement("canvas");
		canvas.width = svg.clientWidth * scale;
		canvas.height = svg.clientHeight * scale;

		var ctx = canvas.getContext("2d");
		var img = new Image();
		img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(source);

		img.onload = function() {
			ctx.scale(scale, scale); // Scale the context

			if (format === "jpeg") {
				ctx.fillStyle = "#ffffff"; // Optional: set a white background color
				ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill the entire canvas
			}

			ctx.drawImage(img, 0, 0);

			var quality = format === "jpeg" ? 0.9 : undefined; // Set desired quality for JPEG
			var mimeType = "image/" + format;
			var fileName = 'logo.' + format;

			var imgURL = canvas.toDataURL(mimeType, quality);

			var link = document.createElement('a');
			link.href = imgURL;
			link.download = fileName;
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		};
	}

	document.getElementById('downloadPNGBtn').addEventListener('click', function() {
		downloadImage("png");
	});

	document.getElementById('downloadJPGBtn').addEventListener('click', function() {
		downloadImage("jpeg");
	});

	document.getElementById('copyBtn').addEventListener('click', function() {
		// Get the outer HTML of the SVG
		var svgContent = new XMLSerializer().serializeToString(document.querySelector('.currentSVG'));
		
		// Create a textarea to copy from
		var tempTextarea = document.createElement('textarea');
		document.body.appendChild(tempTextarea);
		tempTextarea.value = svgContent;
		tempTextarea.select();
		
		// Execute the copy command
		document.execCommand('copy');
		
		// Remove the textarea
		document.body.removeChild(tempTextarea);
		
		setTimeout(function() {
			const woohooElements = document.querySelectorAll('.woohoo');
			
			woohooElements.forEach(function(element) {
				element.classList.add('show');
			});

			setTimeout(function() {
				woohooElements.forEach(function(element) {
					element.classList.remove('show');
				});
			}, 1000);

		}, 100);
	});

	// Simple function to replace placeholders with actual data
	function render(template, data) {
		return data.map((item, index) => {
			let result = template;

			// Construct the class list
			let classList = "logo";
			if (item.default) {
				classList += " currentSVG";
			}

			// Add the incremental ID
			let id = "logo" + (index + 1);
			
			// Insert the class and ID into the SVG inside logoSVG
			item.svgClassID = item.logoSVG.replace('<svg', `<svg id="${id}" class="${classList}"`);

			for (let key in item) {
				result = result.replace(new RegExp(`{{${key}}}`, 'g'), item[key]);
			}

			return result;
		});
	}

	// Get the template content
	var template = document.getElementById('svgTemplate').textContent;

	// Render content
	var renderedItems = render(template, data);
	var contentDiv = document.getElementById('renderedContent');
	renderedItems.forEach(item => {
		contentDiv.innerHTML += item;
	});

	// Event listeners for width and height inputs
	document.getElementById('svgWidthInput').addEventListener('input', updateSVGDimensions);
	document.getElementById('svgHeightInput').addEventListener('input', updateSVGDimensions);

	// Initialize the input fields with the currentSVG dimensions
	initializeInputsWithCurrentSVGDimensions();

	const radios = document.querySelectorAll('input[name="logoSelector"]');
	const svgs = document.querySelectorAll('.logo');

	radios.forEach(radio => {
		radio.addEventListener('change', function() {
			// Remove the 'currentSVG' class from all SVGs
			svgs.forEach(svg => {
				svg.classList.remove('currentSVG');
			});

			// Add the 'currentSVG' class to the associated SVG
			const svgId = this.getAttribute('data-svg-id');
			const associatedSvg = document.getElementById(svgId);
			if (associatedSvg) {
				associatedSvg.classList.add('currentSVG');

				// Update the input fields to reflect the dimensions of the newly selected SVG
				document.getElementById('svgWidthInput').value = associatedSvg.getAttribute('width');
				document.getElementById('svgHeightInput').value = associatedSvg.getAttribute('height');
			}
		});
	});
});

function initializeInputsWithCurrentSVGDimensions() {
	let svgElement = document.querySelector('.currentSVG');

	// Get the current SVG dimensions
	let svgWidth = svgElement.getAttribute('width');
	let svgHeight = svgElement.getAttribute('height');

	// Populate the width and height input fields
	document.getElementById('svgWidthInput').value = svgWidth;
	document.getElementById('svgHeightInput').value = svgHeight;
}

function updateSVGDimensions() {
	let svgElement = document.querySelector('.currentSVG');

	// Calculate the original width-to-height ratio
	let svgWidth = parseFloat(svgElement.getAttribute('width'));
	let svgHeight = parseFloat(svgElement.getAttribute('height'));
	let originalRatio = svgWidth / svgHeight;

	// Get the input values
	let newWidth = parseFloat(document.getElementById('svgWidthInput').value);
	let newHeight = parseFloat(document.getElementById('svgHeightInput').value);

	if (!newWidth || isNaN(newWidth) || !newHeight || isNaN(newHeight)) {
		document.getElementById('svgWidthInput').value = svgWidth;
		document.getElementById('svgHeightInput').value = svgHeight;
		return; // exit the function if either input is cleared
	}

	if (this.id === 'svgWidthInput') {
		// Width was changed, so adjust height
		newHeight = newWidth / originalRatio;
		document.getElementById('svgHeightInput').value = newHeight.toFixed(2);
	} else {
		// Height was changed, so adjust width
		newWidth = newHeight * originalRatio;
		document.getElementById('svgWidthInput').value = newWidth.toFixed(2);
	}

	// Update SVG dimensions
	svgElement.setAttribute('width', newWidth);
	svgElement.setAttribute('height', newHeight);
}
