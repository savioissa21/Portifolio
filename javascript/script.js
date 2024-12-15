// Função para mostrar/esconder a descrição ao passar o mouse sobre o projeto
document.addEventListener('DOMContentLoaded', function () {
  // Seleciona todos os elementos com a classe 'project' (os projetos)
  const projects = document.querySelectorAll('.project');
  
  // Adiciona os eventos de mouse a cada projeto
  projects.forEach(project => {
    project.addEventListener('mouseenter', () => {
      // Quando o mouse entra, a descrição do projeto é mostrada
      const description = project.querySelector('.desPag');
      description.style.display = 'block';
    });
    
    project.addEventListener('mouseleave', () => {
      // Quando o mouse sai, a descrição do projeto é escondida
      const description = project.querySelector('.desPag');
      description.style.display = 'none';
    });
  });
});
