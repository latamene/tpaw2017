function Validation(){
      
    var nom= document.getElementById("nom").value;   
    var prenom=document.getElementById("prenom").value;
    var date=document.getElementById("date").value;
    var adresse=document.getElementById("adresse").value;
    var email=document.getElementById("email").value;
    
    
    
    if(nom =="" || prenom =="" || date=="" || email=="") {
               $(".modal-body").html("La saisie des champs est obligatoire")
               $('.modal').modal('show');
    }
       else if ((nom.length>=5)&&(prenom.length>=5)&& (date.length>=5)&&(email.length>=5)){        
              $(".modal-body").html("bravo");
               $('.modal').modal('show');
       }
    else{
               $(".modal-body").html("veuillez remplir tous les champs svp!")
               $('.modal').modal('show');
    }


}

var x = document.getElementById("demo");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;
    $("#adresse").val(latlon);
    var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="
    +latlon+"&markers="+latlon+"&zoom=14&size=400x200&sensor=false";
    document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }


}    
