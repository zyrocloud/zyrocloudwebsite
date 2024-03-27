$(function () {
    "use strict";

       // process the form
$('form').submit(function(event) {	
	event.preventDefault();	

var email=$('#email').val();
var patternEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
 

if(patternEmail.test(email))
{  
   
}
else
{	
	alert("Enter Valid Email Id.");  
	return;   
}
 

        // process the form
        $.ajax({
            type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
            url         : 'https://docs.google.com/forms/d/e/1FAIpQLSe20dkSwdKbG94hR2JWztI2kxz5zBCrgzi5rMTIL1ig5Hvw6A/formResponse?embedded=true', 
            data        : $("#validate_form").serialize(), // our data object
            dataType    : 'json', // what type of data do we expect back from the server
                        encode          : true,
                         success: function(data, textStatus, xhr) {
                         alert(xhr.status);
        console.log(xhr.status);
    },error: function(XMLHttpRequest, textStatus, errorThrown) {
     
     
     $('#validate_form')[0].reset();
     //alert ($("#message").html());
	 alert("Thank You.We will Contact You shortly");
    }
        })
            // using the done promise callback
            .done(function(data) {

			alert("Thank You.We will Contact You shortly");
                // log data to the console so we can see
                //console.log(data); 

                // here we will handle errors and validation messages
            });

        // stop the form from submitting the normal way and refreshing the page
        
    });

});

