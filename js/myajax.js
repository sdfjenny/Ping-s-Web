(function(global) {
// Set up a namespace for our utility//
var ajaxUtils = {};


// Returns an HTTP request object
function getRequestObject() {
   if (window.XMLHttpRequest) {
     return (new XMLHttpRequest());
   }  // most important

   else if (window.ActiveXObject) {
     // For very Old IE browsers (optional)
     return (new ActiveXObject("Mocrosoft.XMLHTTP"));
   }

   else {
     global.alert("Ajax is not supported!");
     return(null);
   }


}

// Makes an Ajax GET request to 'requestUrl'
ajaxUtils.sendGetRequest =
   function (requestUrl, responseHandler) {
     var request = getRequestObject();
     request.onreadystatechange =
        function() {
          handleResponse(request, responseHandler);
        };
    request.open("GET", requestUrl, true);
    request.send(null);  //for POST only


  };


   // Only calls user provided 'responseHandler'
   // function if response is onready
   // and not an error
function handleResponse(request,
                          responseHandler) {
  if ((request.readyState == 4) &&
     (request.status == 200)) {
       responseHandler(request);
     }
}


global.$ajaxUtils = ajaxUtils;


})(window);
