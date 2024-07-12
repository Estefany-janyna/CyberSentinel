// para el contador
// Fecha del próximo curso (puedes ajustarla según tus necesidades)
const nextCourseDate = new Date('2024-03-01T12:00:00');
// Función que se encarga de mostrar los días, horas, minutos y segundos restantes

function updateCounter() {
    const currentDate = new Date();
    const timeDifference = nextCourseDate - currentDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Actualizar el contador cada segundo
setInterval(updateCounter, 1000);

// Actualizar el contador cuando se carga la página
updateCounter();
