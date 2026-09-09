const contactButton = document.getElementById('Contacto');
const btnIniciar = document.getElementById('btn-iniciar');
const btnAutomatizar = document.getElementById('btn-automatizar');
const btnVideoServicio = document.getElementById('btn-video-servicio');
const btnVolver = document.getElementById('btn-volver');
const modalContainer = document.getElementById('modal-container');
const paso1 = document.getElementById('paso-1');
const paso2 = document.getElementById('paso-2');
const modalServicio = document.getElementById('modal-servicio');
const formularioPaso1 = document.getElementById('formulario-diagnostico-1');
const formularioPaso2 = document.getElementById('formulario-diagnostico-2');
const inputServicio = document.getElementById('input-servicio');
const tituloServicio = document.getElementById('titulo-servicio');
const descripcionServicio = document.getElementById('descripcion-servicio');

const descripcionesServicios = {
  'Asistentes de atención al cliente': 'Un agente de IA que responde consultas frecuentes por WhatsApp, Instagram o tu sitio web, las 24 horas del día, sin intervención humana.',
  'Gestor de redes sociales': 'Genera, programa y publica contenido en Instagram, Facebook y LinkedIn de forma automática, manteniendo la voz de tu marca.',
  'Buscador de clientes potenciales': 'Identifica y contacta automáticamente personas o empresas que podrían interesarse en tus productos o servicios, según criterios que vos definís.',
  'Reportes automáticos de ventas': 'Generá informes diarios, semanales o mensuales de facturación, rendimiento y tendencias directamente desde tus datos, sin abrir una sola planilla.',
  'Flujos de onboarding automático': 'Cuando entra un nuevo cliente o empleado, el sistema envía bienvenidas, materiales y pasos a seguir de forma automática y personalizada.',
  'Landings Page': 'Diseño y desarrollo de páginas de aterrizaje optimizadas para conversión, integradas directamente con tus sistemas de automatización.',
  CRM: 'Organizá la información comercial y el seguimiento de tus clientes en un sistema centralizado.',
  'Automatizaciones personalizadas': 'Conectamos tus herramientas y automatizamos los procesos repetitivos de tu negocio.',
  'Mucho más': 'Exploramos junto a vos nuevas oportunidades para aplicar automatización e inteligencia artificial.'
};

function mostrarModal() {
  modalContainer.classList.remove('oculto');
  document.body.classList.add('modal-abierto');
}

function cerrarModal() {
  modalContainer.classList.add('oculto');
  paso1.classList.remove('oculto');
  paso2.classList.add('oculto');
  modalServicio.classList.add('oculto');
  document.body.classList.remove('modal-abierto');
}

function abrirDiagnostico(nombreServicio = '') {
  mostrarModal();
  paso1.classList.remove('oculto');
  paso2.classList.add('oculto');
  modalServicio.classList.add('oculto');
  if (nombreServicio) inputServicio.value = nombreServicio;
  inputServicio.focus();
}

function abrirConServicio(nombreServicio) {
  abrirDiagnostico(nombreServicio);
}

function abrirDetalleServicio(nombreServicio) {
  mostrarModal();
  paso1.classList.add('oculto');
  paso2.classList.add('oculto');
  modalServicio.classList.remove('oculto');
  tituloServicio.textContent = nombreServicio;
  descripcionServicio.textContent = descripcionesServicios[nombreServicio] || 'Conocé cómo podemos adaptar este servicio a los procesos de tu negocio.';
}

contactButton.addEventListener('click', () => {
  window.open('https://web.whatsapp.com/', '_blank', 'noopener,noreferrer');
});
btnIniciar.addEventListener('click', () => abrirDiagnostico());

document.getElementById('cerrar-modal-1').addEventListener('click', cerrarModal);
document.getElementById('cerrar-modal-2').addEventListener('click', cerrarModal);
document.getElementById('cerrar-modal-servicio').addEventListener('click', cerrarModal);

formularioPaso1.addEventListener('submit', (evento) => {
  evento.preventDefault();
  if (!formularioPaso1.checkValidity()) {
    formularioPaso1.reportValidity();
    return;
  }
  paso1.classList.add('oculto');
  paso2.classList.remove('oculto');
  document.getElementById('titulo-rubro').focus();
});

btnVolver.addEventListener('click', () => {
  paso2.classList.add('oculto');
  paso1.classList.remove('oculto');
  document.getElementById('nombre-empresa').focus();
});

formularioPaso2.addEventListener('submit', (evento) => {
  evento.preventDefault();
  const rubro = formularioPaso2.querySelector('input[name="rubro"]:checked');
  const detalle = document.getElementById('detalle-rubro');
  if (rubro.value === 'otro' && !detalle.value.trim()) {
    detalle.required = true;
    detalle.reportValidity();
    return;
  }
  detalle.required = false;
  alert('Gracias por completar el diagnóstico. Nos pondremos en contacto contigo a la brevedad.');
  cerrarModal();
});

btnAutomatizar.addEventListener('click', () => abrirDiagnostico(tituloServicio.textContent));
btnVideoServicio.addEventListener('click', () => {
  alert('El video de ejemplo estará disponible próximamente.');
});

document.querySelectorAll('.service-card').forEach((card) => {
  const abrir = () => abrirDetalleServicio(card.dataset.service);
  card.addEventListener('click', abrir);
  card.addEventListener('keydown', (evento) => {
    if (evento.key === 'Enter' || evento.key === ' ') {
      evento.preventDefault();
      abrir();
    }
  });
});

modalContainer.addEventListener('click', (evento) => {
  if (evento.target === modalContainer) cerrarModal();
});

document.addEventListener('keydown', (evento) => {
  if (evento.key === 'Escape' && !modalContainer.classList.contains('oculto')) cerrarModal();
});

window.abrirConServicio = abrirConServicio;

if (window.location.hash === '#diagnostico') {
  abrirDiagnostico();
}
