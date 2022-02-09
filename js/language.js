if( localStorage.getItem("language") === null ) localStorage.setItem("language", "pl");

changeLanguage( localStorage.getItem("language") );
 
function changeLanguage( lang ) {
    localStorage.setItem("language", lang);
	
	fetch('js/translations.json')
	.then(response => {
	   return response.json();
	})
	.then(json => {
	   return json[ localStorage.getItem("language") ];
	})
	.then(translations => {
	   document.querySelectorAll("[data-text]").forEach(element => {
		let t = translations;

		if( element.dataset.grandparent ) {
			t = t[ element.dataset.grandparent ];
		}

		if( element.dataset.parent ) {
			t = t[ element.dataset.parent ];
		}

		let x = "";

		if( element.innerHTML.indexOf("</i>") > 0  ){
			x = element.innerHTML.slice( 0, element.innerHTML.indexOf("</i>") + 4 ) + ' ';
		}

		element.innerHTML = x + t[ element.dataset.text ];
	   })
	});
 }

 