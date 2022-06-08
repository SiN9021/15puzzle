// 初期化処理（すべてのピースをランダムに配置する）
for(let n = 1; n <= 16; n = n + 1){
    const piece = document.querySelector('.pos-' + n);
    piece.style.order = parseInt(Math.random() * 16) + 1;
}

// ピースがクリックしたときに実行する処理（関数）
function pieceClickHandler(){
    console.log('ピースがクリックされました');
}

const piece01 = document.querySelector(',pos-1');

piece01.addEventListener('click', pieceClickHandler);
