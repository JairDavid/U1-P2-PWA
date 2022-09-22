//investigar como registrar el sw, si estoy en local o prod
if(navigator.serviceWorker){
    navigator.serviceWorker.register("/sw.js");
}