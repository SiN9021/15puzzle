for(let n = 1; n <= 16; n = n + 1){
    const piece = document.querySelector('.pos-' + n);
    piece.style.order = parseInt(Math.random() * 16) + 1;
}
