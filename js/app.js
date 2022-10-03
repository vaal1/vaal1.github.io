//Probar en Command Promp http-server o instalar
//npm i http-server
//npm install --global http-server

if(navigator.serviceWorker){//Verificamos si el navedador soporta el service worker
    console.log("Soportamos ServiceWorker");
    navigator.serviceWorker.register("/sw.js");//Hace referencia el service worker
}