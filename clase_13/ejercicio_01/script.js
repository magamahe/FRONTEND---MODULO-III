fetch("https://api.ejemplo-sin-cors.com/data")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error("Error:", err));


/* para ver el error  en pagina existente*/
// Intento de fetch a un dominio que no permite CORS
fetch("https://google.com")
    .then(res => res.text())
    .then(data => console.log(data))
    .catch(err => console.error("Error:", err));

// has been blocked by CORS policy
//No 'Access-Control-Allow-Origin' header is present
//Eso confirma que se trata de un bloqueo CORS.
/* Ocurre porque:
    Estoy haciendo una petición desde mi sitio local (http://127.0.0.1:5500)
    Hacia otro dominio (https://google.com)
    Google no permite que otros sitios accedan a sus datos desde el navegador.
    El navegador detecta que el servidor no envió el encabezado CORS necesario y bloquea la petición por seguridad.
    Por eso aparece el error. 

Para que funcione, necesitaría:
    Que el servidor remoto (Google) permita CORS agregando el encabezado:
        Access-Control-Allow-Origin: *
*/