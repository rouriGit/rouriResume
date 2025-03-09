let isPoppedUp = false; // 付箋がポップアップされたかどうかのフラグ

window.addEventListener('scroll', function() {
    const page5 = document.getElementById('page5');
    const stickyNote = document.querySelector('.sticky-note');
    const scrollPosition = window.scrollY;
    const page5Offset = page5.offsetTop;
    const windowHeight = window.innerHeight;

    // 5ページ目が画面内に入ったかどうかをチェック
    const isPage5InView = scrollPosition >= page5Offset - windowHeight / 2;

    // さらにスクロールしたら付箋をポップアップ（一度だけ）
    if (isPage5InView && scrollPosition >= page5Offset && !isPoppedUp) {
        stickyNote.classList.add('popup');
        isPoppedUp = true; // フラグを更新
    }

    // 上にスクロールしたら付箋を非表示にする
    if (!isPage5InView && isPoppedUp) {
        stickyNote.classList.remove('popup');
        isPoppedUp = false; // フラグをリセット
    }
});

// ポートフォリオの詳細表示
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('click', function(event) {
        event.stopPropagation(); // クリックイベントの伝播を防ぐ
        this.querySelector('.portfolio-detail').style.opacity = 1;
    });
});

// ポートフォリオの詳細を非表示にする
document.addEventListener('click', function(event) {
    if (!event.target.closest('.portfolio-item')) {
        document.querySelectorAll('.portfolio-detail').forEach(detail => {
            detail.style.opacity = 0;
        });
    }
});