document.addEventListener('DOMContentLoaded', function() {
	// Add as many Logo Styles as you would like.
	// Be sure to only set 1 as the default option.
	var data = [
	    {
	        default: true,
	        logoSVG: '<svg width="260" height="68" fill="none" xmlns="http://www.w3.org/2000/svg"> <path class="logo-path" fill-rule="evenodd" clip-rule="evenodd" d="M15.156 5.73A34.174 34.174 0 0 1 34.102 0a34.18 34.18 0 0 1 13.051 2.586 34.098 34.098 0 0 1 11.065 7.37 33.984 33.984 0 0 1 7.392 11.031 33.928 33.928 0 0 1-3.154 31.902 34.08 34.08 0 0 1-15.304 12.523 34.196 34.196 0 0 1-19.703 1.935 34.133 34.133 0 0 1-17.46-9.305A33.969 33.969 0 0 1 .654 40.633a33.906 33.906 0 0 1 1.94-19.644A34.022 34.022 0 0 1 15.156 5.73ZM9.584 29.386l10.231 10.21a1.088 1.088 0 0 0 1.568 0l10.212-10.21a1.084 1.084 0 0 0 0-1.535l-10.24-10.2a1.09 1.09 0 0 0-1.54 0L9.584 27.85a1.084 1.084 0 0 0 0 1.535ZM34.87 53.063l10.232-10.2a1.084 1.084 0 0 0 0-1.535L34.87 31.118a1.09 1.09 0 0 0-1.54 0l-10.24 10.21a1.084 1.084 0 0 0 0 1.535l10.24 10.2a1.09 1.09 0 0 0 1.54 0ZM48.38 39.596l10.231-10.21a1.077 1.077 0 0 0 .239-1.183 1.077 1.077 0 0 0-.239-.352l-10.231-10.2a1.09 1.09 0 0 0-1.54 0L36.6 27.85a1.084 1.084 0 0 0 0 1.535l10.24 10.21a1.09 1.09 0 0 0 1.54 0Z" fill="#9C24C7"/> <path class="logo-path" d="m79.861 14.848 10.72 35.235a.935.935 0 0 0 1.004.702h6.41a.856.856 0 0 0 .94-.702l10.597-35.235c.15-.45-.047-.805-.507-.805h-4.834a.94.94 0 0 0-.939.655L97.827 33.32c-1.042 3.51-2.215 7.73-2.92 10.885h-.15c-.657-3.108-1.811-7.328-2.816-10.791l-5.538-18.717a.776.776 0 0 0-.854-.655h-5.238a.518.518 0 0 0-.54.537.514.514 0 0 0 .09.268Z" fill="#9C24C7"/> <path class="logo-path" fill-rule="evenodd" clip-rule="evenodd" d="M131.712 31.665v18.418a.622.622 0 0 1-.183.519.632.632 0 0 1-.521.183h-4.43a.638.638 0 0 1-.704-.702v-3.285a9.184 9.184 0 0 1-3.372 3.316 9.216 9.216 0 0 1-4.579 1.204c-5.237 0-8.56-3.416-8.56-8.423s3.323-7.927 10.569-8.423a42.861 42.861 0 0 1 5.688-.046v-2.518c0-3.107-1.708-4.36-4.58-4.36-2.873 0-3.924 1.047-4.647 3.013-.206.552-.403.645-.938.496l-4.384-1.105c-.45-.15-.601-.402-.45-.805.807-3.912 4.383-6.625 10.672-6.625 6.496 0 10.419 3.07 10.419 9.143Zm-6.092 10.182V38.44a43.315 43.315 0 0 0-5.181.094c-3.276.356-5.134 1.46-5.134 4.071 0 2.256 1.558 3.744 4.224 3.744 2.825-.028 4.984-1.685 6.091-4.502Z" fill="#9C24C7"/> <path class="logo-path" d="M143.906 50.083v-17.07c1.004-2.855 3.219-4.82 5.904-4.82 2.816 0 4.233 1.816 4.233 4.82v17.07c0 .449.244.702.751.702h4.787a.614.614 0 0 0 .684-.415.594.594 0 0 0 .02-.287V32.01c0-5.624-2.872-9.443-8.157-9.443a10.133 10.133 0 0 0-4.757 1.243 10.094 10.094 0 0 0-3.606 3.334v-3.416a.628.628 0 0 0-.704-.655h-4.694a.628.628 0 0 0-.713.655v26.354c0 .449.253.702.76.702h4.788a.64.64 0 0 0 .704-.702ZM173.962 16.953v6.326h5.538c.404 0 .657.253.657.749v3.622c0 .496-.253.702-.657.702h-5.538v13.953c0 2.003 1.107 3.005 3.37 3.005h2.121a.62.62 0 0 1 .704.71v4.062a.606.606 0 0 1-.416.682.614.614 0 0 1-.288.02h-3.126c-5.632 0-8.448-3.013-8.448-7.627V28.352h-3.473a.62.62 0 0 1-.704-.702v-3.622c0-.496.254-.749.704-.749h3.52v-6.326a.652.652 0 0 1 .191-.512.656.656 0 0 1 .513-.19h4.637a.643.643 0 0 1 .515.186.638.638 0 0 1 .18.516Z" fill="#9C24C7"/> <path class="logo-path" fill-rule="evenodd" clip-rule="evenodd" d="M205.379 50.083V31.665c0-6.074-3.924-9.143-10.419-9.143-6.289 0-9.875 2.75-10.673 6.625-.15.403 0 .655.451.805l4.393 1.105c.535.15.741.056.938-.496.714-1.966 1.765-3.014 4.637-3.014 2.873 0 4.581 1.254 4.581 4.361v2.518a42.844 42.844 0 0 0-5.688.046c-7.256.496-10.57 3.416-10.57 8.423s3.314 8.423 8.552 8.423a9.226 9.226 0 0 0 7.96-4.52v3.285a.622.622 0 0 0 .183.519.632.632 0 0 0 .521.183h4.43a.637.637 0 0 0 .704-.702Zm-6.092-11.642v3.406c-1.108 2.817-3.276 4.474-6.092 4.502-2.666 0-4.233-1.488-4.233-3.744 0-2.61 1.868-3.715 5.134-4.07a43.52 43.52 0 0 1 5.191-.094ZM234.383 52.693c0 4.68-3.529 8.629-13.038 8.629-8.617 0-11.883-3.004-11.883-7.421 0-2.359 1.408-4.567 4.28-5.775a4.817 4.817 0 0 1-1.971-3.668 4.294 4.294 0 0 1 .779-2.446 4.317 4.317 0 0 1 2.037-1.57 8.563 8.563 0 0 1-3.259-3.282 8.52 8.52 0 0 1-1.068-4.494c0-5.522 3.416-9.593 10.822-9.593h12.485a.59.59 0 0 1 .553.655v3.52a.66.66 0 0 1-.428.659.67.67 0 0 1-.276.042h-4.383a7.026 7.026 0 0 1 2.468 5.615c0 4.773-3.369 8.423-10.325 8.423h-1.764c-1.662 0-2.366.711-2.366 1.657 0 .945.76 1.562 2.366 1.562h5.744c6.505.057 9.227 3.22 9.227 7.487Zm-5.942.553c0-1.61-.938-3.117-4.177-3.117h-5.087c-2.976 0-4.027 1.563-4.027 3.163 0 2.312 1.877 3.819 6.571 3.819 4.693 0 6.72-1.657 6.72-3.865Zm-12.549-20.58c0 3.013 1.764 5.016 5.19 5.016 3.22 0 5.032-1.806 5.032-4.97 0-3.013-1.662-4.969-5.088-4.969s-5.134 1.806-5.134 4.923ZM243.038 40.443v-1.6h15.695c.957 0 1.267-.403 1.267-1.207v-4.221c0-6.214-3.82-10.893-11.264-10.893-7.753 0-11.686 4.726-11.686 10.996v6.822c0 6.43 4.083 10.997 11.78 10.997 5.285 0 9.161-2.209 10.823-5.868.309-.608.253-1.01-.451-1.357l-3.173-1.61c-.657-.3-.901-.196-1.304.45-.958 1.862-2.084 3.312-5.839 3.312-3.97-.046-5.848-2.255-5.848-5.82Zm0-5.718v-1.46c0-3.406 1.793-5.671 5.548-5.671s5.632 2.265 5.632 5.671v1.46h-11.18Z" fill="#9C24C7"/> </svg>'
	    },
	    {
	        logoSVG: '<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7772 6.74122C24.3552 2.34596 32.0887 1.51309e-06 40 1.51309e-06C45.2533 -0.00144356 50.4554 1.03221 55.3091 3.04188C60.1627 5.05156 64.5729 7.99787 68.2875 11.7125C72.0021 15.4271 74.9485 19.8373 76.9582 24.691C78.9678 29.5446 80.0014 34.7467 80 40C80 47.9113 77.654 55.6449 73.2588 62.2228C68.8635 68.8008 62.6164 73.9277 55.3073 76.9552C47.9983 79.9827 39.9556 80.7748 32.1964 79.2314C24.4371 77.688 17.3099 73.8784 11.7158 68.2843C6.12166 62.6902 2.31202 55.5629 0.768608 47.8036C-0.774801 40.0444 0.017329 32.0017 3.04483 24.6927C6.07234 17.3836 11.1992 11.1365 17.7772 6.74122ZM11.2414 34.572L23.2425 46.5841C23.3616 46.7076 23.5044 46.8059 23.6624 46.873C23.8203 46.9401 23.9902 46.9747 24.1618 46.9747C24.3334 46.9747 24.5034 46.9401 24.6613 46.873C24.8193 46.8059 24.9621 46.7076 25.0812 46.5841L37.0603 34.572C37.2996 34.3325 37.4341 34.0078 37.4341 33.6692C37.4341 33.3306 37.2996 33.0058 37.0603 32.7663L25.0481 20.7652C24.8086 20.5259 24.484 20.3914 24.1454 20.3914C23.8068 20.3914 23.482 20.5259 23.2425 20.7652L11.2414 32.7663C11.002 33.0058 10.8676 33.3306 10.8676 33.6692C10.8676 34.0078 11.002 34.3325 11.2414 34.572ZM40.9028 62.4277L52.904 50.4267C53.1433 50.1872 53.2777 49.8624 53.2777 49.5238C53.2777 49.1852 53.1433 48.8605 52.904 48.621L40.9028 36.6089C40.6633 36.3695 40.3386 36.2351 40 36.2351C39.6614 36.2351 39.3366 36.3695 39.0971 36.6089L27.0851 48.621C26.8457 48.8605 26.7112 49.1852 26.7112 49.5238C26.7112 49.8624 26.8457 50.1872 27.0851 50.4267L39.0971 62.4277C39.3366 62.6671 39.6614 62.8016 40 62.8016C40.3386 62.8016 40.6633 62.6671 40.9028 62.4277ZM68.7476 34.572L56.7465 46.5841C56.507 46.8234 56.1823 46.9579 55.8437 46.9579C55.5051 46.9579 55.1803 46.8234 54.9408 46.5841L42.9287 34.572C42.6894 34.3325 42.5549 34.0078 42.5549 33.6692C42.5549 33.3306 42.6894 33.0058 42.9287 32.7663L54.9408 20.7652C55.1803 20.5259 55.5051 20.3914 55.8437 20.3914C56.1823 20.3914 56.507 20.5259 56.7465 20.7652L68.7476 32.7663C68.8674 32.8842 68.9626 33.0247 69.0276 33.1797C69.0926 33.3347 69.126 33.5011 69.126 33.6692C69.126 33.8372 69.0926 34.0036 69.0276 34.1586C68.9626 34.3136 68.8674 34.4541 68.7476 34.572Z" fill="#9C24C7"/> </svg>'

	    }
	];

	// Function to set the background and font color based on the selected color option.
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
		logoPaths.forEach(function(path) {
			path.style.fill = fontColor;
		});
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

		var scale = 5; // 5x the original size

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
	        item.nameWithClassAndId = item.logoSVG.replace('<svg', `<svg id="${id}" class="${classList}"`);
	        
	        for (let key in item) {
	            result = result.replace(new RegExp(`{{${key}}}`, 'g'), item[key]);
	        }

	        return result;
	    });
	}

	// Get the template content
	var template = document.getElementById('itemTemplate').textContent;

	// Render content
    var renderedItems = render(template, data);
    var contentDiv = document.getElementById('renderedContent');
    renderedItems.forEach(item => {
        contentDiv.innerHTML += item;
    });

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
            }
        });
    });
});
