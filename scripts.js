// Obtén el elemento del panda en HTML
const panda = document.querySelector('.panda');
const container = document.querySelector('.panda-container');

// Obtén las dimensiones y la posición del contenedor
const containerRect = container.getBoundingClientRect();

// Agrega un evento "mousedown" al panda
panda.addEventListener('mousedown', () => {
    // Agrega un evento "mousemove" al documento
    document.addEventListener('mousemove', movePanda);
});

// Agrega un evento "mouseup" al documento
document.addEventListener('mouseup', () => {
    // Elimina el evento "mousemove" del documento
    document.removeEventListener('mousemove', movePanda);
});

function movePanda(event) {
    // Calcula la nueva posición del panda
    let newX = event.clientX - containerRect.left - (panda.offsetWidth / 4);
    let newY = event.clientY - containerRect.top - (panda.offsetHeight / 4);

    // Comprueba si la nueva posición se encuentra dentro de los límites del contenedor
    if (newX < 0) {
        newX = 0;
    } else if (newX + panda.offsetWidth > containerRect.width) {
        newX = containerRect.width - panda.offsetWidth;
    }

    if (newY < 0) {
        newY = 0;
    } else if (newY + panda.offsetHeight > containerRect.height) {
        newY = containerRect.height - panda.offsetHeight;
    }

    // Actualiza la posición del panda
    panda.style.left = newX + 'px';
    panda.style.top = newY + 'px';
}

let bambooVisible = false;

const basketBtn = document.getElementById('basket-btn');
const bambooContainer = document.querySelector('.bamboo-container');

basketBtn.addEventListener('click', () => {
    bambooContainer.classList.toggle('bamboo-container--visible');
    basketBtn.classList.toggle('active');
});



const bamboo = document.getElementById('bamboo');

bamboo.ondragstart = function (event) {
    event.dataTransfer.setData("text", event.target.id);
};

panda.ondrop = function (event) {
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
    bamboo.style.display = 'none';
    bambooVisible = false;
    bambooContainer.style.display = 'none';
};

panda.ondragover = function (event) {
    event.preventDefault();
};

panda.ondragenter = function (event) {
    event.preventDefault();
};
