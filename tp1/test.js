

//affiche un formulaire d'adresse, à l'aide de la fonction de saisie semi-automatique
var placeSearch, autocomplete;
var componentForm = {
  //street_number: 'short_name',
  //route: 'long_name',
  locality: 'long_name',
  administrative_area_level_1: 'short_name',
  country: 'long_name',
  //postal_code: 'short_name'
};

function initAutocomplete() {
 // Crée l'objet de saisie semi-automatique, restreignant la recherche au
 // types d'emplacement.
 var options = {
  types: ['geocode'],
  componentRestrictions: {country: 'fr'}
};
 autocomplete = new google.maps.places.Autocomplete(
     /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
     options);

 
// Lorsque l'utilisateur sélectionne une adresse dans la liste déroulante, renseigner l'adresse
 // champs dans le formulaire.
 autocomplete.addListener('place_changed', fillInAddress);
}

function fillInAddress() {
  // Obtenir les détails de l'objet de saisie semi-automatique.
  var place = autocomplete.getPlace();

  for (var component in componentForm) {
    document.getElementById(component).value = '';
    document.getElementById(component).disabled = false;
  }

  // Obtenir chaque composant de l'adresse à partir des détails de l'emplacement
  // et remplissez le champ correspondant sur le formulaire.
  for (var i = 0; i < place.address_components.length; i++) {
    var addressType = place.address_components[i].types[0];
    if (componentForm[addressType]) {
      var val = place.address_components[i][componentForm[addressType]];
      document.getElementById(addressType).value = val;
    }
  }
}

// Bias l'objet de saisie semi-automatique à l'emplacement géographique de l'utilisateur,
// fourni par l'objet 'navigator.geolocation' du navigateur.
function geolocate() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var geolocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      var circle = new google.maps.Circle({
        center: geolocation,
        radius: position.coords.accuracy
      });
      autocomplete.setBounds(circle.getBounds());
    });
  }
}















