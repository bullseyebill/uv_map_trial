function fetchGoogleInformation(event) {
    
    var place =$("beach-input").val();
    if (!place) {
        $("#gm-user-data").html(`<h2>Please enter location</h2>`);
    return;
}

$.when(
    $.getJSON(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?&key=AIzaSyBf7HMHGCXUjaGwoKuPbWfTlez8wLJBwVs/${place}`)
    ).then(
        function(response) {
            
        })

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


/*

 <input id="address"type="text box" placeholder="       Where are you?" oninput="fetchGoogleInformation()">
            <div class="input-group-append">
                <button class="btn btn-success btn-lg btn-block btn-huge" type="button">CHECK NOW</button>
                */