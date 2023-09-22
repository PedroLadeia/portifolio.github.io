document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".change-content-button");
  const h1 = document.querySelector(".principal h1");
  const p = document.querySelector(".principal p");

  buttons.forEach(button => {
    button.addEventListener("click", function () {
      const content = this.getAttribute("data-content");

      if (content === "Conteudo 1") {
        h1.textContent = "Inicio";
        p.innerHTML = `
        <p>Pedro Ladeia Ledo</p>
        <p>Desenvolvedor Full stack em formação</p>
        <a href="https://github.com/PedroLadeia" target="_blank">Meu github</a>
    ` ;
      }else if(content === "Conteudo 2"){
        h1.textContent = "Sobre mim";
        p.innerHTML = `
        <p>21 anos, nascido na cidade de Guanambi BA busco ser um desenvolvedor</p>
        <p>5 semestre no curso de Analise e desenvolvimento de sistemas</p>
        <p>Habilidades em java, javascript, html e css</p>
        <p>Soft skills principais em comunicação e trabalho em equipe</p>
    `
      }else if(content === "Conteudo 3"){
        h1.textContent = "Projetos";
        p.innerHTML = `
        <p>Projetos aqui</p>
    `
      }else if(content === "Conteudo 4"){
        h1.textContent = "Experiência";
        p.innerHTML = `
        <p>6 meses como estagiário</p>
        <p>Suporte na área de TI</p>
    `
      }else if(content === "Conteudo 5"){
        h1.textContent = "Educação";
        p.innerHTML = `
        <p>Centro de ensino UNIFG</p>
    `
      }else if(content === "Conteudo 6"){
        h1.textContent = "Blog";
        p.innerHTML = `
        <p>A área de TI é crucial porque impulsiona a eficiência operacional, a comunicação, a inovação e a segurança em todos os setores. Ela facilita a gestão de dados, transforma a educação, melhora a saúde, impulsiona o entretenimento, apoia a pesquisa científica, e possibilita a mobilidade. Em resumo, a TI é essencial para a sociedade moderna, moldando como vivemos, trabalhamos e nos conectamos.</p>
    `
      }else if(content === "Conteudo 7"){
        h1.textContent = "Contato";
        p.innerHTML = `
        <p>email:Pedroladeia0@gmail.com</p>
    `
      }else{
        h1.textContent = content;
        p.textContent = "Texto associado a " + content;
      }


    });
  });
});