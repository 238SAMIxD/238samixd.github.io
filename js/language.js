if( localStorage.getItem("language") === null ) localStorage.setItem("language", "en");

changeLanguage( localStorage.getItem("language") );
 
document.querySelectorAll("[data-lang]").forEach(e => {
	e.addEventListener( 'click', flagClick );
});

function flagClick( e ) {
	changeLanguage( e.currentTarget.dataset.lang );
}
 
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
			document.querySelectorAll("[data-text]").forEach(e => {
				let t = translations;

				if( e.dataset.grandparent ) {
					t = t[ e.dataset.grandparent ];
				}

				if( e.dataset.parent ) {
					t = t[ e.dataset.parent ];
				}

				let x = "";

				if( e.innerHTML.indexOf("</i>") > 0  ){
					x = e.innerHTML.slice( 0, e.innerHTML.indexOf("</i>") + 4 ) + ' ';
				}

				e.innerHTML = x + t[ e.dataset.text ];
			});
		});
 }

 