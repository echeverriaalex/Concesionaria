
let catalogo = document.getElementsByClassName("catalogo");
console.log(catalogo);

let lista = fetch("./datos.json").then(response => response.json())
.then((datos) => {
        datos.forEach(dato => {

            console.log(dato.marca);

            let marca = document.createElement("h2");
            marca.innerHTML = dato.marca;

            let modelo = document.createElement("h3");
            modelo.innerHTML = dato.modelo;

            let año = document.createElement("p");
            año.innerHTML = dato.año;

            let imagen = document.createElement("img");
            imagen.src = dato.imagen;
            //imagen.style.width = '800px';

            let article = document.createElement("article");

            article.append(imagen);
            article.append(año);
            article.append(modelo);
            article.append(marca);
            document.body.append(article);
        });
    });