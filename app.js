let createAside = (dato) =>{
    
    let marca = document.createElement("h2");
        marca.innerHTML = dato.marca;

    let modelo = document.createElement("h3");
        modelo.innerHTML = dato.modelo;

    let año = document.createElement("p");
        año.innerHTML = dato.año;
    
    let aside = document.createElement("aside");
    aside.setAttribute("id", "asideDescription");
    
    aside.append(año);
    aside.append(modelo);
    aside.append(marca);

    return aside;
}

let createSection = (dato) =>{

    let imagen = document.createElement("img");
        imagen.src = dato.imagen;

    let section = document.createElement("section");    
    section.setAttribute("id", "section-image");
    section.append(imagen);
   
    return section;
}

let filtrar = (buscarDato) =>{

    //if(buscarDato == )


}

function buscador(){
    
    let valor = document.getElementById("buscador").value;
    console.log(valor);
}

buscador();

let listaAutos = [];
var micatalogo = document.getElementById("catalogo");


let lista = fetch("./datos.json").then(response => response.json())
.then((datos) => {
    listaAutos = datos;
        console.log("\nautos\n", datos);
        
        datos.forEach(dato => {

            let aside = createAside(dato);
            let section = createSection(dato);
            
            let div = document.createElement("div");
                div.setAttribute("id", "divarticulo");
                div.append(aside);     
                div.append(section);

            micatalogo.append(div);
            //document.body.append(div);

        });

        let h1 = document.createElement("h1");
        h1.innerHTML = "Final del catalogo";
        document.body.append(h1);
    });



    //let autos = fetch("./datos.json");
    //console.log(autos);


    console.log("\n\nListado de autos \n", listaAutos);