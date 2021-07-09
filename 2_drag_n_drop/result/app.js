const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragStart);
item.addEventListener('dragend', dragEnd);


for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragOver)
    placeholder.addEventListener('dragenter', dragEnter)
    placeholder.addEventListener('dragleave', dragLeave)
    placeholder.addEventListener('drop', dragDrop)
}

function dragStart(evt) {
    evt.target.classList.add('hold');
    setTimeout(() => evt.target.classList.add('hide'), 0);

}

function dragEnd(evt) {
    evt.target.classList.remove('hold', 'hide');
}

function dragOver(evt) {
    evt.preventDefault();
}

function dragEnter(evt) {
    evt.target.classList.add('hovered');
}

function dragLeave(evt) {
    evt.target.classList.remove('hovered');
}

function dragDrop(evt) {
    evt.target.append(item);
    evt.target.classList.remove('hovered');
}
