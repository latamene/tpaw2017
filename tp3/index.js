
function Validation() {

	 var nom = document.getElementById('Nom').value 

	 var prenom = document.getElementById('Prénom').value 

	 if (nom.length < 5) {

		document.getElementById('error').innerHTML ="error Nom"

		 document.getElementById('resultat').innerHTML =""

	 }

	 else if (prenom.length < 5) {

	 document.getElementById('error').innerHTML ="error Prénom"

document.getElementById('resultat').innerHTML =""

	 }

	 else{document.getElementById('resultat').innerHTML ="bienvenu"

	 document.getElementById('error').innerHTML =""}

}
