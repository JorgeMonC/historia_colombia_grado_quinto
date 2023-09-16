

    let boton = document.querySelector("#bt_50")
    let audioEtiqueta = document.querySelector("audio")

    boton.addEventListener("click", () => {
      audioEtiqueta.setAttribute("src", "audio/50_50.mp3")
      audioEtiqueta.play()
      console.log(`Reproduciendo: ${audioEtiqueta.src}`)
    })
