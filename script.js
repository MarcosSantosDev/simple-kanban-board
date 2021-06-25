const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')

/**
 * CARDS
 */
function dragstart() {
    dropzones.forEach(zone => {
        zone.classList.add('highlight');
    });
};

function drag() {
    this.classList.add('is-dragging');
};

function dragend() {
    dropzones.forEach(zone => {
        zone.classList.remove('highlight');
    });

    this.classList.remove('is-dragging');
};

cards.forEach(card => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)
})

/**
 * BOARD
 */
function dragover() {
    this.classList.add('over');

    const cardDragging = document.querySelector('.is-dragging');

    this.appendChild(cardDragging)
};

function dragleave() {
    this.classList.remove('over');
};

dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
})