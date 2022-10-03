console.log("Hola mundo!!!");

self.addEventListener('install', (event) => {
    console.log("SW: Instalado");
    setTimeout(()=>{
        console.log('Instalaciones finalizadas');
    },3000);
});
//Activar update no reload en el navegador(f12)

self.addEventListener('activate', (event) => {
    console.log("SW: Activado...");
});
self.addEventListener('fetch', (event) => {
    console.log(event.request.url);
    
    if(event.request.url.includes('style.css')){
        const respuesta = new Response(
            `body{
                color: red;
                background-color: #ccc;     
            }`,
            {
                headers:{
                    'Content-Type':'text/css'
                }
            }
        );
        event.respondWith(respuesta)
    }
    if (event.request.url.includes('.jpg')) {
        let foto = fetch('images/img2.jpg');
        event.respondWith(foto)
    }
});


