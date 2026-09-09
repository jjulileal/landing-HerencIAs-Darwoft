# Decisiones del proyecto HerencIAs

## Contexto

- Proyecto: sitio web estático de HerencIAs.
- Ubicación del proyecto: `PROYECTO DARWOFT`.
- Stack actual: HTML, CSS y JavaScript vanilla.
- Archivo de estilos compartido: `style.css`.
- Fecha de actualización: 2026-09-08.

## Figma

- Archivo: [Pagina Darwoft](https://www.figma.com/design/AIvJ8cQr4x6swmqKE7lF8T/Pagina-Darwoft?node-id=0-1).
- Figma está conectado mediante MCP.
- Cuenta conectada: `wencito` (`jufeleal2925@gmail.com`).
- Equipo: `El equipo de julian leal`.
- Permiso disponible: `View`.
- Nodos principales usados como referencia:
  - Inicio: `8:4`.
  - Grilla de servicios: `8:55`.
  - Sección de contacto: `8:116`.
  - Footer: `8:162`.
  - Formulario paso 1: `14:30`.
  - Formulario paso 2: `14:62`.
  - Popup de servicios: `14:7`.

## Reglas acordadas

- La revisión se hará por partes en este orden:
  1. `index.html`.
  2. `Como funciona.html`.
  3. `Sobre nosotros.html`.
  4. `Politicas de privacidad.html`.
  5. `Clientes.html`.
- Comparar cada HTML y su JavaScript con el diseño correspondiente de Figma.
- Priorizar iconos, funcionalidades, popups, formularios y botones.
- No modificar la estética CSS existente salvo que sea necesario para integrar lo nuevo o aproximarlo a Figma.
- No agregar al hero el badge `SOLUCIONES CON INTELIGENCIA ARTIFICIAL`; fue excluido expresamente.
- Mantener este documento actualizado después de cada bloque importante de trabajo.

## Trabajo realizado en index

### HTML y JavaScript

- Se corrigió la estructura del formulario de diagnóstico.
- Se eliminaron formularios anidados y el elemento no estándar `selectedcontent`.
- Se agregaron dos pasos funcionales:
  - Datos de empresa, servicio y WhatsApp.
  - Selección de rubro y detalle opcional.
- Se agregó validación de campos.
- Se agregó cierre por botón, clic fuera del modal y tecla `Escape`.
- `Contacto` e `Iniciar diagnóstico gratis` abren el formulario.
- Las cards de servicios abren un popup de detalle.
- El CTA del popup de servicio abre el formulario con el servicio seleccionado.
- Se agregó el botón `Volver` junto a `Paso 2 de 2`.
- Se agregaron iconos locales para logo, botones, servicios, rubros y redes.
- Se corrigieron textos y etiquetas de accesibilidad principales.

### CSS

- Se conservaron las reglas visuales existentes.
- Las reglas nuevas se agregaron al final de `style.css` y usan clases específicas.
- Las cards nuevas tienen icono alineado a la izquierda, contenedor oscuro y contenido debajo.
- El footer del `index` fue reorganizado para coincidir con Figma:
  - Sección de contacto en dos columnas.
  - Filas de datos con separadores.
  - Redes sociales en botones tipo píldora.
  - Callout `¿Listo para empezar?`.
  - Barra inferior independiente con logo.
- Se agregaron estilos responsive para tablet y móvil.

## Archivos modificados

- `index.html`.
- `index.js`.
- `style.css`.
- `assets/figma/` con los recursos exportados de Figma.

## Trabajo realizado en Como funciona

- Se reconstruyÃ³ `Como funciona.html` tomando como referencia el nodo Figma `21:301`.
- Se eliminÃ³ la carga incorrecta de `index.js` y el stylesheet duplicado.
- Se agregÃ³ header con logo, navegaciÃ³n activa, icono y CTA hacia el diagnÃ³stico del index.
- Se corrigieron textos, acentos y errores de redacciÃ³n de los cinco pasos.
- Se agregÃ³ la estructura de pasos con nÃºmero, tÃ­tulo, descripciÃ³n y separadores.
- Se agregaron los CTAs inferiores `Iniciar diagnÃ³stico gratis` y `Ver servicios`.
- Se agregÃ³ footer alineado con Figma, incluyendo punto naranja y enlace de polÃ­ticas.
- Se agregaron estilos especÃ­ficos y responsive al final de `style.css`, sin alterar las reglas generales anteriores.
- Los enlaces `index.html#diagnostico` abren automÃ¡ticamente el modal de diagnÃ³stico mediante `index.js`.

## Estado de pestaÃ±as

- `index.html`: listo.
- `Como funciona.html`: implementado y validado.
- `Sobre nosotros.html`: pendiente.
- `Politicas de privacidad.html`: implementado y validado.
- `Clientes.html`: implementado y validado.

## Trabajo realizado en Clientes

- Se corrigio la estructura HTML y se elimino la carga duplicada de `style.css`.
- Se unifico el header con el resto del sitio, incluyendo icono, CTA funcional y estado activo de `Clientes`.
- Se mantuvo el explorador interactivo por departamentos y se mejoraron sus atributos de accesibilidad.
- El CTA de contacto y el boton de diagnostico ahora enlazan correctamente con `index.html#diagnostico`.
- Se agrego cierre del panel de clientes mediante la tecla `Escape`.
- Se reemplazo el footer antiguo por el footer consistente con las paginas revisadas.
- Se agregaron estilos responsive especificos al final de `style.css`.

## Trabajo realizado en Sobre nosotros

- Se consultÃ³ el nodo Figma `1:16` para la estructura de la pÃ¡gina.
- Se eliminÃ³ la carga duplicada de `style.css` y la carga incorrecta de `index.js`.
- Se agregÃ³ el body `sobre-page` para aislar los estilos de esta pestaÃ±a.
- Se implementÃ³ el layout de dos columnas: panel izquierdo con foto/ficha y relato a la derecha.
- El panel izquierdo usa `position: sticky` en escritorio, por lo que permanece visible mientras baja el contenido derecho.
- En pantallas pequeÃ±as el panel vuelve a flujo normal para evitar problemas de usabilidad.
- Se reemplazaron placeholders vacÃ­os de equipo y valores por recursos locales exportados de Figma.
- Se corrigieron el CTA de contacto, el enlace al diagnÃ³stico y el footer de la pÃ¡gina.
- Se agregaron estilos responsive especÃ­ficos al final de `style.css`.
- Se aumentÃ³ la separaciÃ³n entre las tarjetas de los integrantes del equipo.
- Los iconos de valores se alinearon horizontalmente junto al nombre de cada valor.
- Los botones de diagnÃ³stico y servicios se igualaron en ancho y alto, con ajuste a ancho completo en mÃ³vil.
- Se unificÃ³ el header del `index`, `Como funciona` y `Sobre nosotros`: misma estructura, espaciado, borde, logo, navegaciÃ³n y CTA.
- Se centrÃ³ horizontalmente el listado de pasos de `Como funciona` y su bloque de acciones para alinearlos como el contenido de PolÃ­ticas.
- Se igualÃ³ la tipografÃ­a del tÃ­tulo de `Sobre nosotros` con la familia de los tÃ­tulos principales del sitio.

## Trabajo realizado en Politicas de privacidad

- Se consultÃ³ el nodo Figma `23:525` para la estructura de la pÃ¡gina.
- Se eliminÃ³ la carga duplicada de `style.css` y la carga innecesaria de scripts sin funcionalidad.
- Se unificÃ³ el header con el resto del sitio y se marcÃ³ `PolÃ­ticas` como secciÃ³n activa.
- Se corrigieron la semÃ¡ntica HTML, acentos, enlace de correo y etiquetas de lista.
- Se implementÃ³ el documento como una lista de ocho secciones numeradas con separadores y tipografÃ­a alineada al diseÃ±o.
- Se agregaron el aviso legal con icono, los CTAs funcionales hacia el diagnÃ³stico y servicios, y el footer de Figma.
- Se agregaron estilos responsive especÃ­ficos al final de `style.css`.

## Estado de pestaÃ±as

- `index.html`: listo.
- `Como funciona.html`: implementado y validado.
- `Sobre nosotros.html`: implementado y validado.
- `Politicas de privacidad.html`: implementado y validado.
- `Clientes.html`: implementado y validado.

## Pendientes conocidos

- El video del popup de servicio todavía es un placeholder: Figma define el área visual, pero no hay video real asociado en el proyecto.
- Los enlaces de redes sociales siguen apuntando a URLs genéricas y deben reemplazarse por las cuentas reales cuando estén disponibles.
- El alcance de las cinco páginas principales ya fue implementado; queda la comprobación visual final en navegador.
- Conviene comprobar visualmente en navegador el `index` después de cada ajuste importante.

## Validaciones realizadas

- Se amplio el ancho del texto introductorio de `Clientes` y se alineo con el contenedor de lectura de las demas pestanas.
- El texto introductorio de `Clientes` se centro manteniendo el ancho amplio del contenedor.

- Se centraron vertical y horizontalmente los contadores numéricos del mapa de clientes mediante atributos SVG.
- Se extendió el estado hover/focus de los CTAs a los botones de formulario, popup y acciones de todas las páginas.
- El botón Contacto ahora abre WhatsApp en una pestaña nueva, sin mensaje precargado hasta definir el número y texto final.

- `node --check index.js` pasa correctamente.
- Todas las referencias de assets usadas por `index.html` existen localmente.
- Las llaves de `style.css` están balanceadas.
- Las etiquetas principales de `Politicas de privacidad.html` están balanceadas y sus assets locales existen.
- Las etiquetas principales de `Clientes.html` están balanceadas y sus assets locales existen.

## Cómo retomar

1. Leer este archivo completo.
2. Revisar primero `index.html`, `index.js` y las reglas nuevas al final de `style.css`.
3. No rehacer el `index` salvo que aparezca un problema concreto.
4. Continuar con `Como funciona.html` y su archivo `como funciona.js`.
5. Antes de editar cada página, consultar su nodo equivalente en el archivo de Figma y registrar las decisiones nuevas aquí.
