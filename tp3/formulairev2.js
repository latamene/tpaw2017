
function validation(){
   

    var nom= document.getElementById("nom").value;

    var prenom=document.getElementById("prenom").value;

    var date=document.getElementById("datepicker").value;

    var adresse=document.getElementById("adresse").value;

    var email=document.getElementById("email").value;

    

    

    

    if(nom == '' || prenom=="" || date=="" || adresse=="" || email=="") {

        $(".modal-body").html("La saisie des champs est obligatoire")

          $('.modal').modal('show');

    }

       else if ((nom.length>=5)&&(prenom.length>=5)&& (date.length>=5)&&(adresse.length>=5)&& (email.length>=5)){        

            $(".modal-body").html('<img src="https://maps.googleapis.com/maps/api/staticmap?center='+adresse+'&zoom=13&size=300x300&maptype=roadmap&markers='+adresse+'"/>');

            $('.modal').modal('show');

       }

    else{

        $(".modal-body").html("veuillez remplir tous les champs svp!");

        $('.modal').modal('show');

    }

}





