const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");

// para cada click em cada botão
buttons.forEach((btn) => {

    // evento click em qualquer botão
    btn.addEventListener("click", (e) => {
        console.log(e)

        // um evento para dizer que ao clicar em qualquer outro botão, vai sair o "selected" do anterior
        buttons.forEach((btn) => {
            btn.querySelector(".color").classList.remove("selected")
        })

        // tranferencia dos dados de cada botão (e) e target para uso em HTML
        const button = e.target

        // dentre esses dados, solicitando o id(cores) para armazenar numa variável
        const id = button.getAttribute("id")

        button.querySelector(".color").classList.add("selected");
        
        // mecanismo para opacidade da imagem (efeito transição)
        image.classList.add("changing")

        // mudança de imagem
        image.setAttribute("src", `img/iphone_${id}.jpg`)

        setTimeout(() => {
            image.classList.toggle("changing")
        }, 300);
    })
})
