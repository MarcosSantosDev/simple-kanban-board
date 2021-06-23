const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')

function dragstart() {
    dropzones.forEach(zone => {
        zone.classList.add('highlight');
    });
};

function drag() {
    // console.log('CARD > DRAG');
};

function dragend() {
    // console.log('CARD > DRAGEND');
    dropzones.forEach(zone => {
        zone.classList.remove('highlight');
    });
};

cards.forEach(card => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)
})


function dragenter() {
    console.log('ZONE > dragenter');
};

function dragover() {
    console.log('ZONE > dragover');
    this.classList.add('is-dragging');
};

function dragleave() {
    console.log('ZONE > dragleave');
    this.classList.remove('is-dragging');
};

function drop() {
    console.log('ZONE > DROP');
};

dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('drop', drop)
})