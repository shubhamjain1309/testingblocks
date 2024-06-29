let blockCounter = 0;

function addBlock(weight) {
    blockCounter++;
    const block = document.createElement('div');
    block.className = 'block';
    block.setAttribute('data-weight', weight);
    block.setAttribute('data-id', blockCounter);
    block.innerText = `Block ${blockCounter} (Weight ${weight})`;
    block.onclick = renameBlock;
    document.getElementById('block-container').appendChild(block);
}

function renameBlock(event) {
    const block = event.target;
    const newName = prompt('Enter new name:', block.innerText);
    if (newName) {
        block.innerText = newName;
        const blockId = block.getAttribute('data-id');
        $.ajax({
            type: 'POST',
            url: '/rename_block',
            contentType: 'application/json',
            data: JSON.stringify({ id: blockId, new_name: newName }),
            success: function(response) {
                console.log('Block renamed successfully:', response);
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    dragula([document.getElementById('block-container')]);
});
