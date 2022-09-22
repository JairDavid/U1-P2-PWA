//Install: estado inicial de un service worker
self.addEventListener('install',(event)=>{
    console.log("instalado")
})

self.addEventListener('activate',(event)=>{
    console.log("activado ....!!")
    const myPromise = new Promise((res, rej)=>{
        setTimeout(()=>{
            console.log("Hecho...")
            res('ok')
        },3000)
    })
    event.waitUntil(myPromise);
})

//Fetch: se encarga de traer todos los recursos de nuestro servidor al cliente
//ya sea imagenes, hojas de estilo, scripts etc.
//NOTA: se hace un fetch por cada archivo/doc
self.addEventListener('fetch',(event)=>{
    console.log(event.request.url)

    if(event.request.url.includes('style.css')){
        const response = new Response(
        `
            .title-custom{
                font-size: small;
            }
        `,{
            headers:{
                'Content-type':'text/css'
            }
        })
        event.respondWith(response)

    }else if(event.request.url.includes("dog2.png")){
        event.respondWith(fetch('images/user-60.png'))
    }

})