console.log("** Service Worker is up and running **");

this.onfetch = function(event) {
  console.log("Fetch event: ", event);
  console.log(".request", event.request);
  console.log(".respondWith", event.respondWith);

  if (event.respondWith) {
    event.respondWith(new Response(new Blob(["Hello from SW1 - Please Open chrome://serviceworker-internals/ to see what is going on."],{type : 'text/html'})));
  }
};

/*
this.install = function(e) {
  console.log("** Istalled");
}
 
this.activate = function(e) {
  console.log("** Activated");
}
 
this.message = function(e) {
  var message = e.data;
  console.log("** Got a message: "+message);
}
*/