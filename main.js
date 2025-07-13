// Definicion de variables para manejar el contenido de manera dinamica
const mensajeOriginal = "Contenido para funcionalidades futuras.";
const mensajeNuevo = "¡Evento activado correctamente!";
const colorOriginal = "#00568F";
const colorNuevo = "#28a745";

//Evento para modificar el texto del parrafo en el DOM
function cambiarContenido() {
	//Actualizar el texto del parrafo
	document.getElementById("resultado").innerHTML = mensajeNuevo
	document.getElementById("botonCambiar").style.backgroundColor =  colorNuevo
	};

//Evento para restaurar los valores de texto y color fondo por los valores predeterminados
function restaurar() {
	document.getElementById("resultado").innerHTML = mensajeOriginal
	document.getElementById("botonCambiar").style.backgroundColor =  colorOriginal
};

//Evento para cambiar valores con toggle
function cambioToggle() {
	document.getElementById("sobremi").classList.toggle("myStyle");
};

//Asociar las funciones a los botones una vez se cargue el DOM
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("botonCambiar").addEventListener("click", cambiarContenido);
  document.getElementById("botonRestaurar").addEventListener("click", restaurar);
  document.getElementById("toggle").addEventListener("click", cambioToggle);
});
