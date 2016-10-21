
function validation(){

    

    

    

    var nom= document.getElementById("nom").value;

    

    

    var prenom=document.getElementById("prenom").value;

    var date=document.getElementById("date").value;

    var adress=document.getElementById("adr").value;

    var email=document.getElementById("mail").value;

    

    

    if(nom == '' || prenom=="" || date=="" || adress=="" || email=="") {

        $(".modal-body").html("La saisie des champs est obligatoire")

          $('.modal').modal('show');

    }

       else if ((nom.length>=5)&&(prenom.length>=5)&& (date.length>=5)&&(adress.length>=5)&& (email.length>=5)){        

            $(".modal-body").html('<img src="https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284"/>');

       }

    else{

        $(".modal-body").html("veuillez remplir tous les champs svp!")

        $('.modal').modal('show');

    }

}
