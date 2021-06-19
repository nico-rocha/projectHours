function carregar() {
  let msg = document.getElementById("msg");
  let img = document.getElementById("imagem");

  let data = new Date();
  let hora = data.getHours();
  msg.innerHTML = `<strong> Agora são ${hora} horas</strong> &#x231A;`;

  if (hora <= 4) {
    //Bom madrugada!
    img.src = "fotonoite.png";
    document.body.style.background = "#050C2A";
  } else if (hora <= 12) {
    //Bom dia!
    img.src = "fotomanha.png";
    document.body.style.background = "#F5C027";
  } else if (hora <= 18) {
    //Boa tarde!
    img.src = "fototarde.png";
    document.body.style.background = "#F57B27";
  } else {
    //Boa noite!
    img.src = "fotonoite.png";
    document.body.style.background = "#0D1E65";
  }
}
