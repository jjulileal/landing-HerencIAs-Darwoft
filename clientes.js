const clientesPorDepartamento = {
	norte: {
		nombre: 'Departamento Norte',
		clientes: [
			{
				empresa: 'DARWOFT',
				ubicacion: 'Córdoba Capital',
				soluciones: ['Agente central de IA', 'Sub-agentes administrativos', 'CRM personalizado', 'Landing Page'],
				resena: 'La verdad estamos completamente satisfechos con HerencIAs ya que nos han logrado organizar los ciclos de todas las tareas que teníamos pendientes en Darwoft con una profesionalidad destacada.',
				valoracion: 5
			},
			{
				empresa: 'Estudio Alerce',
				ubicacion: 'Villa del Totoral, Córdoba',
				soluciones: ['Automatización de consultas', 'Seguimiento de prospectos'],
				resena: 'Ahora podemos responder y hacer seguimiento sin perder oportunidades durante el día.',
				valoracion: 5
			}
		]
	},
	centro: {
		nombre: 'Departamento Centro',
		clientes: [
			{
				empresa: 'Taller Norte',
				ubicacion: 'Villa María, Córdoba',
				soluciones: ['Asistente de WhatsApp', 'Reportes automáticos'],
				resena: 'El equipo entendió nuestro proceso y nos entregó una solución clara, práctica y fácil de usar.',
				valoracion: 4
			},
			{
				empresa: 'Campo Claro',
				ubicacion: 'Río Tercero, Córdoba',
				soluciones: ['CRM personalizado', 'Flujos de onboarding'],
				resena: 'La información queda ordenada y el equipo tiene mucho más tiempo para atender el negocio.',
				valoracion: 5
			}
		]
	}
};

const mapa = document.getElementById('mapa-cba-clientes');
const tooltip = document.getElementById('mapa-tooltip');
const explorador = document.querySelector('.clientes-explorador');
const panel = document.getElementById('clientes-panel');
const listaClientes = document.getElementById('lista-clientes');
const detalleCliente = document.getElementById('cliente-detalle');
const nombreDepartamento = document.getElementById('panel-departamento');
const resumenDepartamento = document.getElementById('panel-resumen');
const cerrarPanel = document.getElementById('cerrar-panel-clientes');

function obtenerDepartamento(elemento) {
	return clientesPorDepartamento[elemento.dataset.departamento];
}

function actualizarContadores() {
	mapa.querySelectorAll('.departamento').forEach((elemento) => {
		const departamento = obtenerDepartamento(elemento);
		elemento.querySelector('.departamento-contador').textContent = departamento.clientes.length;
	});
}

function renderizarDetalle(cliente) {
	detalleCliente.innerHTML = `
		<div class="detalle-cabecera">
			<span class="detalle-etiqueta">Ficha de cliente</span>
			<h4>${cliente.empresa}</h4>
		</div>
		<div class="detalle-dato"><span>Ubicación</span><strong>${cliente.ubicacion}</strong></div>
		<div class="detalle-seccion"><span>Soluciones realizadas</span><ul>${cliente.soluciones.map((solucion) => `<li>${solucion}</li>`).join('')}</ul></div>
		<div class="detalle-seccion detalle-resena"><span>Reseña</span><div class="estrellas" aria-label="${cliente.valoracion} de 5 estrellas">${'★'.repeat(cliente.valoracion)}${'☆'.repeat(5 - cliente.valoracion)}</div><p>“${cliente.resena}”</p></div>
	`;
}

function seleccionarCliente(cliente, boton) {
	listaClientes.querySelectorAll('.cliente-item').forEach((item) => item.classList.remove('activo'));
	boton.classList.add('activo');
	renderizarDetalle(cliente);
}

function abrirDepartamento(elemento) {
	const departamento = obtenerDepartamento(elemento);
	mapa.querySelectorAll('.departamento').forEach((item) => item.classList.remove('activo'));
	elemento.classList.add('activo');
	nombreDepartamento.textContent = departamento.nombre;
	resumenDepartamento.textContent = `${departamento.clientes.length} ${departamento.clientes.length === 1 ? 'cliente' : 'clientes'} en esta zona`;
	listaClientes.innerHTML = '';

	departamento.clientes.forEach((cliente, indice) => {
		const boton = document.createElement('button');
		boton.type = 'button';
		boton.className = 'cliente-item';
		boton.innerHTML = `<strong>${cliente.empresa}</strong><span>${cliente.ubicacion}</span>`;
		boton.addEventListener('click', () => seleccionarCliente(cliente, boton));
		listaClientes.appendChild(boton);
		if (indice === 0) seleccionarCliente(cliente, boton);
	});

	panel.classList.add('abierto');
	explorador.classList.add('panel-visible');
	panel.setAttribute('aria-hidden', 'false');
}

function mostrarTooltip(elemento) {
	const departamento = obtenerDepartamento(elemento);
	tooltip.textContent = `${departamento.nombre}: ${departamento.clientes.length} ${departamento.clientes.length === 1 ? 'cliente' : 'clientes'}`;
	tooltip.classList.add('visible');
}

mapa.querySelectorAll('.departamento').forEach((elemento) => {
	elemento.addEventListener('mouseenter', () => mostrarTooltip(elemento));
	elemento.addEventListener('mouseleave', () => tooltip.classList.remove('visible'));
	elemento.addEventListener('focus', () => mostrarTooltip(elemento));
	elemento.addEventListener('blur', () => tooltip.classList.remove('visible'));
	elemento.addEventListener('click', () => abrirDepartamento(elemento));
	elemento.addEventListener('keydown', (evento) => {
		if (evento.key === 'Enter' || evento.key === ' ') {
			evento.preventDefault();
			abrirDepartamento(elemento);
		}
	});
});

cerrarPanel.addEventListener('click', () => {
	panel.classList.remove('abierto');
	explorador.classList.remove('panel-visible');
	mapa.querySelectorAll('.departamento').forEach((item) => item.classList.remove('activo'));
	panel.setAttribute('aria-hidden', 'true');
});

document.addEventListener('keydown', (evento) => {
	if (evento.key === 'Escape' && panel.classList.contains('abierto')) {
		cerrarPanel.click();
	}
});

actualizarContadores();
