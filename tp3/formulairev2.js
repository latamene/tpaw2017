
function validation(){

    

    

    

    var Nom= document.getElementById("nom").value;

    

    

    var Prenom=document.getElementById("Prenom").value;

    var Date=document.getElementById("Date de naissance").value;

    var Adresse=document.getElementById("Adrresse").value;

    var Email=document.getElementById("Email").value;

    

    

if(Nom == '' || Prenom=="" || Date de naissance=="" || Adresse=="" || Email=="") {

        $(".modal-body").html("La saisie des champs est obligatoire")

          $('.modal').modal('show');

    }

       else if ((Nom.length>=5)&&(Prenom.length>=5)&& (Date.length>=5)&&(Adresse.length>=5)&& (Email.length>=5)){        

            $(".modal-body").html('<img src="https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284"/>');

       }

    else{

        $(".modal-body").html("veuillez remplir tous les champs svp!")

        $('.modal').modal('show');

    }

}
