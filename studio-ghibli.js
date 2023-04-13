

    contenido = document.getElementById("contenido");
    informacion = document.getElementById("tarjeta");
    historia = document.getElementById("historia");

    let select = document.getElementById("exampleSelect1");

    select.addEventListener("change", function () {
        let selectedValue = select.options[select.selectedIndex].value;
        console.log("El valor seleccionado es: " + selectedValue);
        fetch("https://studio-ghibli-films-api.herokuapp.com/api/" + selectedValue)
            .then(response => response.json())
            .then(data => {
                tarjeta(data)
            });
    });

    function tarjeta(data) {

        informacion.innerHTML = "";

        informacion.innerHTML +=
            `
        <div class="m-0 row justify-content-center">
        <div class="card" style="width: 18rem;">
        <img src="${data.poster}" class="card-img-top" id="foto" alt="...">
        <div class="card-body">
        <h4 id="titulo" class="card-title">${data.title}</h4>
        <p id="historia" class="card-text">${data.synopsis}</p>
        </div>
        <ul class="list-group list-group-flush">
        <li id="tituloRomanizado" class="list-group-item"><strong>Título romanizado:</strong> ${data.hepburn}</li>
        <li id="anio" class="list-group-item"><strong>Año de estreno:</strong> ${data.release}</li>
        <li id="anio" class="list-group-item"><strong>Director:</strong> ${data.director}</li>
        
        </ul>
        <div class="card-body">
        
        <a href="${data.url}" target="_blank" class="btn btn-primary">Más información</a>
        </div>
        </div>
        </div>
        </div>
        <br>
        `

    };

