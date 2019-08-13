function fetchGoogleInformation(event) {
    
    var place =$("address").val();
    if (!place) {
        $("#gm-user-data").html(`<h2>Please enter location</h2>`);
    return;
}


/*
Open UV Javascript request

function getUVIndex() {
 var lat = $('#lat').val();
 var lng = $('#lng').val();
 var alt = $('#alt').val();
 var ozone = $('#ozone').val();
 var dt = $('#dt').val();

 $.ajax({
   type: 'GET',
   dataType: 'json',
   beforeSend: function(request) {
     request.setRequestHeader('x-access-token', 'YOUR_API_KEY');
   },
   url: 'https://api.openuv.io/api/v1/uv?lat=' + lat + '&lng=' + lng + '&alt=' + alt + '&ozone=' + ozone + '&dt=' + dt,
   success: function(response) {
     //handle successful response
   },
   error: function(response) {
     // handle error response
   }
 });
}
*/


