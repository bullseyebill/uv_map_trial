{"filter":false,"title":"map-information.js","tooltip":"/assets/js/map-information.js","undoManager":{"mark":8,"position":8,"stack":[[{"start":{"row":0,"column":0},"end":{"row":42,"column":2},"action":"insert","lines":["function fetchGoogleInformation(event) {","    ","    var place =$(\"beach-input\").val();","    if (!place) {","        $(\"#gm-user-data\").html(`<h2>Please enter location</h2>`);","    return;","}","","$.when(","    $.getJSON(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?&key=AIzaSyBf7HMHGCXUjaGwoKuPbWfTlez8wLJBwVs/${place}`)","    ).then(","        function(response) {","            ","        })","","}","","/*","Open UV Javascript request","","function getUVIndex() {"," var lat = $('#lat').val();"," var lng = $('#lng').val();"," var alt = $('#alt').val();"," var ozone = $('#ozone').val();"," var dt = $('#dt').val();",""," $.ajax({","   type: 'GET',","   dataType: 'json',","   beforeSend: function(request) {","     request.setRequestHeader('x-access-token', 'YOUR_API_KEY');","   },","   url: 'https://api.openuv.io/api/v1/uv?lat=' + lat + '&lng=' + lng + '&alt=' + alt + '&ozone=' + ozone + '&dt=' + dt,","   success: function(response) {","     //handle successful response","   },","   error: function(response) {","     // handle error response","   }"," });","}","*/"],"id":1}],[{"start":{"row":42,"column":2},"end":{"row":43,"column":0},"action":"insert","lines":["",""],"id":2},{"start":{"row":43,"column":0},"end":{"row":44,"column":0},"action":"insert","lines":["",""]},{"start":{"row":44,"column":0},"end":{"row":45,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":45,"column":0},"end":{"row":45,"column":1},"action":"insert","lines":["*"],"id":3},{"start":{"row":45,"column":1},"end":{"row":45,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":45,"column":2},"end":{"row":46,"column":0},"action":"insert","lines":["",""],"id":4},{"start":{"row":46,"column":0},"end":{"row":47,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":47,"column":0},"end":{"row":49,"column":106},"action":"insert","lines":[" <input id=\"address\"type=\"text box\" placeholder=\"       Where are you?\" oninput=\"fetchGoogleInformation()\">","            <div class=\"input-group-append\">","                <button class=\"btn btn-success btn-lg btn-block btn-huge\" type=\"button\">CHECK NOW</button>"],"id":5}],[{"start":{"row":45,"column":0},"end":{"row":45,"column":1},"action":"remove","lines":["*"],"id":6}],[{"start":{"row":45,"column":1},"end":{"row":45,"column":2},"action":"insert","lines":["*"],"id":7}],[{"start":{"row":49,"column":106},"end":{"row":50,"column":0},"action":"insert","lines":["",""],"id":8},{"start":{"row":50,"column":0},"end":{"row":50,"column":16},"action":"insert","lines":["                "]},{"start":{"row":50,"column":16},"end":{"row":50,"column":17},"action":"insert","lines":["*"]}],[{"start":{"row":50,"column":17},"end":{"row":50,"column":18},"action":"insert","lines":["/"],"id":9}]]},"ace":{"folds":[],"scrolltop":288,"scrollleft":0,"selection":{"start":{"row":47,"column":1},"end":{"row":49,"column":106},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":27,"state":"comment","mode":"ace/mode/javascript"}},"timestamp":1565713625216,"hash":"e199ba32ec2ae47e83bdd66ae231478336d4a209"}