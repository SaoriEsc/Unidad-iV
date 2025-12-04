
document.addEventListener('DOMContentLoaded', function () {
  // Carrusel
  const slides = document.querySelectorAll('.carrusel .slides img');
  let idx = 0;
  if (slides.length) {
    slides[0].classList.add('active');
    const nextBtn = document.querySelector('.carrusel .next');
    const prevBtn = document.querySelector('.carrusel .prev');
    if(nextBtn) nextBtn.addEventListener('click', ()=>{change(1)});
    if(prevBtn) prevBtn.addEventListener('click', ()=>{change(-1)});
    function change(dir){
      slides[idx].classList.remove('active');
      idx = (idx + dir + slides.length) % slides.length;
      slides[idx].classList.add('active');
    }
  }

  // Productos 
  const productos = [
    {
      title: "Juego de Pines",
      img: "img/pines.jpg",
      price: "$6.99"
    },
    {
      title: "Coloring Book One",
      img: "img/coloring.jpg",
      price: "$12.00"
    },
    {
      title: "Alfombra",
      img: "img/alfombra.jpg",
      price: "$45.00"
    },
    {
      title: "Juego de Posavasos",
      img: "img/posavasos.jpg",
      price: "$14.50"
    },
    {
      title: "Cerámica",
      img: "img/ceramica.jpg",
      price: "$28.00"
    }
  ];

  const cont = document.getElementById('productos');
  if (cont) {
    productos.forEach(p=>{
      const div = document.createElement('div');
      div.className = 'product-card';
      div.innerHTML = `<img src="${p.img}" alt="${p.title}"><h4>${p.title}</h4><p>${p.price}</p><button class="btn">Añadir</button>`;
      cont.appendChild(div);
    });
  }

  // Registro
  const form = document.getElementById('registroForm');
  if (form) {
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const nombre = document.getElementById('nombre').value.trim();
      const correo = document.getElementById('correo').value.trim();
      const pass = document.getElementById('pass').value.trim();
      const mensaje = document.getElementById('mensaje');
      mensaje.style.color = 'red';

      if(!nombre || !correo || !pass){
        mensaje.textContent = 'Por favor completa todos los campos.';
        return;
      }
      if(!correo.includes('@') || correo.length < 5){
        mensaje.textContent = 'Ingresa un correo válido.';
        return;
      }
      if(pass.length < 6){
        mensaje.textContent = 'La contraseña debe tener 6 o más caracteres.';
        return;
      }
      // Simulación de registro
      mensaje.style.color = 'green';
      mensaje.textContent = '¡Registro exitoso! Usa el código WELCOME10 para 10% de descuento.';
    });
  }
});
