document.addEventListener('DOMContentLoaded', function () {
    const panelsContainer = document.querySelector('.project-panels');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const overlay = document.querySelector('.overlay');
    const closeBtn = document.querySelector('.close-btn');
    const slideshowImages = document.querySelectorAll('.slideshow img');
    const detailsText = document.querySelector('.details-text h2');
    const detailsDescription = document.querySelector('.details-text p');

    let currentImageIndex = 0;
    let currentSlide = 0;

    // 付箋の要素を取得
    const stickyNote1 = document.getElementById("sticky-note-1");
    const stickyNote5 = document.getElementById("sticky-note-5");

    // data-idの最大値を取得
    const panels = document.querySelectorAll('.panel');
    const maxDataId = Math.max(...Array.from(panels).map(panel => parseInt(panel.getAttribute('data-id'))));
    const totalSlides = Math.ceil(maxDataId / 5);

    // 矢印ボタンのイベントリスナー
    leftArrow.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlider();
        }
    });

    rightArrow.addEventListener('click', () => {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            updateSlider();
        }
    });

    // スライダーの位置を更新
    function updateSlider() {
        const offset = -currentSlide * 100;
        panelsContainer.style.transform = `translateX(${offset}%)`;
    }

    // パネルのクリックイベント
    panels.forEach(panel => {
        panel.addEventListener('click', function () {
            const projectId = this.getAttribute('data-id');
            showDetails(projectId);
        });
    });

    // 詳細表示のロジック
    function showDetails(projectId) {
        detailsText.textContent = `Project ${projectId}`;
        detailsDescription.textContent = `これはプロジェクト${projectId}の詳細です。`;

        // スライドショーのリセット
        currentImageIndex = 0;
        slideshowImages.forEach((img, index) => {
            img.style.display = index === 0 ? 'block' : 'none';
        });

        overlay.style.display = 'flex';
    }

    // 閉じるボタンのイベント
    closeBtn.addEventListener('click', function () {
        overlay.style.display = 'none';
    });

    // スライドショーの自動切り替え
    setInterval(() => {
        slideshowImages[currentImageIndex].style.display = 'none';
        currentImageIndex = (currentImageIndex + 1) % slideshowImages.length;
        slideshowImages[currentImageIndex].style.display = 'block';
    }, 3000);

    // スクロールイベントを監視して付箋の表示を制御
    window.addEventListener("scroll", function () {
        const pages = document.querySelectorAll(".page");
        const currentPage = Array.from(pages).find((page) => {
            const rect = page.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
        });

        if (currentPage) {
            if (currentPage.id === "page5") {
                stickyNote1.style.display = "none";
                stickyNote5.style.display = "block";
            } else {
                // それ以外のページでは付箋を非表示
                stickyNote1.style.display = "none";
                stickyNote5.style.display = "none";
            }
        }
    });
});
