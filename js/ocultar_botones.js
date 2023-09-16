let contador50_50 = 0;

function ocultarDosBotones() {
    const iframe = document.getElementById("pregunta1");
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

    if (iframeDocument && iframeDocument.querySelector(".center_col_02")) {
        const botonesPregunta = iframeDocument.querySelectorAll(".center_col_02_b button");
        let contadorRespuestasIncorrectas = 0;

        botonesPregunta.forEach(boton => {
            if (boton.getAttribute("data-es-correcto") === "false" && contadorRespuestasIncorrectas < 2) {
                boton.style.display = "none";
                contadorRespuestasIncorrectas++;
            }
        });

        contador50_50++;
            if (contador50_50 === 4) {
                document.getElementById("bt_50").style.display = "none";
            }
    }
}