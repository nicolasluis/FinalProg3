const fechaInput = document.getElementById('fecha');
const horaSelect = document.getElementById('hora');


function configurarFechayHora() {
  // Obtener la fecha actual
  const fechaActual = new Date();

  // Establecer la fecha mínima como la fecha actual
  const fechaMinima = fechaActual.toISOString().split('T')[0];
  fechaInput.setAttribute('min', fechaMinima);

  // Establecer la fecha máxima en 7 días a partir de la fecha actual
  const fechaMaxima = new Date(fechaActual.getTime() + (7 * 24 * 60 * 60 * 1000)).toISOString().split('T')[0];
  fechaInput.setAttribute('max', fechaMaxima);

  // Inhabilitar los días sábado y domingo
  const diaSeleccionado = new Date(fechaInput.value).getDay();
  if (diaSeleccionado === 6 || diaSeleccionado === 0) {
    fechaInput.setCustomValidity('Seleccione un día de lunes a viernes');
  } else {
    fechaInput.setCustomValidity('');
  }
}

// Establecer las horas disponibles entre las 5pm y las 9pm en intervalos de 30 minutos
const horasDisponibles = [];
const horaInicial = 17;
const horaFinal = 21;
for (let hora = horaInicial; hora <= horaFinal; hora++) {
  for (let minuto = 0; minuto < 60; minuto += 30) {
    const horaTexto = hora.toString().padStart(2, '0');
    const minutoTexto = minuto.toString().padStart(2, '0');
    const horaCompleta = `${horaTexto}:${minutoTexto}`;
    horasDisponibles.push(horaCompleta);
  }
}

// Agregar las opciones de hora al select
horasDisponibles.forEach((hora) => {
  const option = document.createElement('option');
  option.value = hora;
  option.text = hora;
  horaSelect.appendChild(option);
});

// Escuchar los cambios en el campo de fecha
fechaInput.addEventListener('change', () => {
  // Inhabilitar los días sábado y domingo
  const diaSeleccionado = new Date(fechaInput.value).getDay();
  if (diaSeleccionado === 6 || diaSeleccionado === 0) {
    fechaInput.setCustomValidity('Seleccione un día de lunes a viernes');
  } else {
    fechaInput.setCustomValidity('');
  }
});