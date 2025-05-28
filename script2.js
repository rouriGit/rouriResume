// document.addEventListener('DOMContentLoaded', function () {
//     const panelsContainer = document.querySelector('.project-panels');
//     const leftArrow = document.querySelector('.left-arrow');
//     const rightArrow = document.querySelector('.right-arrow');
//     const overlay = document.querySelector('.overlay');
//     const closeBtn = document.querySelector('.close-btn');
//     const slideshowImages = document.querySelectorAll('.slideshow img');
//     const detailsText = document.querySelector('.details-text h2');
//     const detailsDescription = document.querySelector('.details-text p');

//     let currentImageIndex = 0;
//     let currentSlide = 0;

//     // 付箋の要素を取得
//     const stickyNote1 = document.getElementById("sticky-note-1");
//     const stickyNote5 = document.getElementById("sticky-note-5");

//     // data-idの最大値を取得
//     const panels = document.querySelectorAll('.panel');
//     const maxDataId = Math.max(...Array.from(panels).map(panel => parseInt(panel.getAttribute('data-id'))));
//     const totalSlides = Math.ceil(maxDataId / 5);

//     // 矢印ボタンのイベントリスナー
//     leftArrow.addEventListener('click', () => {
//         if (currentSlide > 0) {
//             currentSlide--;
//             updateSlider();
//         }
//     });

//     rightArrow.addEventListener('click', () => {
//         if (currentSlide < totalSlides - 1) {
//             currentSlide++;
//             updateSlider();
//         }
//     });

//     // スライダーの位置を更新
//     function updateSlider() {
//         const offset = -currentSlide * 100;
//         panelsContainer.style.transform = `translateX(${offset}%)`;
//     }

//     // パネルのクリックイベント
//     panels.forEach(panel => {
//         panel.addEventListener('click', function () {
//             const projectId = this.getAttribute('data-id');
//             showDetails(projectId);
//         });
//     });

//     // 詳細表示のロジック
//     function showDetails(projectId) {
//         detailsText.textContent = `Project ${projectId}`;
//         detailsDescription.textContent = `これはプロジェクト${projectId}の詳細です。`;

//         // スライドショーのリセット
//         currentImageIndex = 0;
//         slideshowImages.forEach((img, index) => {
//             img.style.display = index === 0 ? 'block' : 'none';
//         });

//         overlay.style.display = 'flex';
//     }

//     // 閉じるボタンのイベント
//     closeBtn.addEventListener('click', function () {
//         overlay.style.display = 'none';
//     });

//     // スライドショーの自動切り替え
//     setInterval(() => {
//         slideshowImages[currentImageIndex].style.display = 'none';
//         currentImageIndex = (currentImageIndex + 1) % slideshowImages.length;
//         slideshowImages[currentImageIndex].style.display = 'block';
//     }, 3000);

//     // スクロールイベントを監視して付箋の表示を制御
//     window.addEventListener("scroll", function () {
//         const pages = document.querySelectorAll(".page");
//         const currentPage = Array.from(pages).find((page) => {
//             const rect = page.getBoundingClientRect();
//             return rect.top <= 100 && rect.bottom >= 100;
//         });

//         if (currentPage) {
//             if (currentPage.id === "page5") {
//                 stickyNote1.style.display = "none";
//                 stickyNote5.style.display = "block";
//             } else {
//                 // それ以外のページでは付箋を非表示
//                 stickyNote1.style.display = "none";
//                 stickyNote5.style.display = "none";
//             }
//         }
//     });
// });



















// // 作品データ
// const works = [
//     {
//         title: "電卓アプリ",
//         year: "2025",
//         description: "JavaFXとGUIを使用した簡単な電卓アプリ。このアプリを作ったきっかけは会計学の勉強中にパソコン上の電卓が使いづらかったこと。数字のボタンを省いてキーボードのみの入力にしたことでシンプルで満足のいくものになった",
//         image: "https://source.unsplash.com/random/600x400/?branding",
//         link: "https://github.com/rouriGit/calculatorApp",
//         tags: ["JavaFX", "GUI"]
//     },
//     {
//         title: "足し算引き算クイズ",
//         year: "2024",
//         description: "JavaFXを使用して、GUI上に計算の問題を表示するアプリ。元々はComputer Scienceの中間テストで出た問題を自分なりにリメイク。ボタンを教えてからのギャップの時間を考えたり、選択肢をトリッキーなものにした点は自分のオリジナル。",
//         image: "https://source.unsplash.com/random/600x400/?branding",
//         link: "https://github.com/rouriGit/algebraQuizApp",
//         tags: ["JavaFX", "GUI"]
//     },
//     {
//         title: "WordViewer(webバージョン)",
//         year: "2024",
//         description: "前作の単語勉強アプリをwebバージョンにしたもの。ユーザーがスマホを使って利用することをターゲットにスワイプや長押し、ホバーしている際に機能するなど直感的な操作を実現するために工夫した。",
//         image: "https://source.unsplash.com/random/600x400/?appdesign",
//         link: "https://github.com/rouriGit/WordViewer-web",
//         tags: ["HTML", "css", "Javascript"]
//     },
//     {
//         title: "WordViewer",
//         year: "2023",
//         description: "単語カードのようにinputとoutputを交互に繰り返すことをターゲットとした単語勉強アプリ。スペースキーを押している間のみ答えが表示され、離すと答えが隠れる。将来的にスマホアプリにすることを目標にするため、シンプルな操作のみを実装した。",
//         image: "https://source.unsplash.com/random/600x400/?webdesign",
//         tags: ["JavaSwing", "Java", "GUI"]

//     },
    
// ];

// // DOM要素
// const container = document.getElementById('worksContainer');
// const modal = document.getElementById('workModal');
// const modalImage = document.getElementById('modalImage');
// const modalTitle = document.getElementById('modalTitle');
// const modalYear = document.getElementById('modalYear');
// const modalDesc = document.getElementById('modalDesc');
// const modalTags = document.getElementById('modalTags');
// const closeModal = document.querySelector('.close-modal');

// // 作品を表示
// works.forEach(work => {
//     const workItem = document.createElement('div');
//     workItem.className = 'work-item';
    
//     workItem.innerHTML = `
//         <div class="work-image" style="background-image: url('${work.image}')"></div>
//         <div class="work-info">
//             <h3 class="work-title">${work.title}</h3>
//             <p class="work-year">${work.year}</p>
//             <div class="tags">
//                 ${work.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
//             </div>
//         </div>
//     `;
    
//     workItem.addEventListener('click', function() {
//         openModal(work);
//     });
    
//     container.appendChild(workItem);
// });

// // モーダルを開く
// function openModal(work) {
//     modalImage.style.backgroundImage = `url('${work.image}')`;
//     modalTitle.textContent = work.title;
//     modalYear.textContent = work.year;
//     modalDesc.textContent = work.description;
    
//     modalTags.innerHTML = '';
//     work.tags.forEach(tag => {
//         const tagElement = document.createElement('span');
//         tagElement.className = 'modal-tag';
//         tagElement.textContent = tag;
//         modalTags.appendChild(tagElement);
//     });
    
//     modal.style.display = 'flex';
//     document.body.style.overflow = 'hidden';
// }

// // モーダルを閉じる
// function closeModalFunc() {
//     modal.style.display = 'none';
//     document.body.style.overflow = 'auto';
// }

// // 閉じるボタンのイベント
// closeModal.addEventListener('click', closeModalFunc);

// // モーダル外をクリックで閉じる
// modal.addEventListener('click', function(e) {
//     if (e.target === modal) {
//         closeModalFunc();
//     }
// });

// // ESCキーでモーダルを閉じる
// document.addEventListener('keydown', function(e) {
//     if (e.key === 'Escape') {
//         closeModalFunc();
//     }
// });


























document.addEventListener('DOMContentLoaded', function () {
    // スクロールプログレスバーのコード（元のまま）
    const scrollProgress = document.createElement('div');
    scrollProgress.className = 'scroll-progress';
    document.body.appendChild(scrollProgress);
    
    window.addEventListener('scroll', function() {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / scrollHeight) * 100;
        scrollProgress.style.setProperty('--scroll', `${scrolled}%`);
    });

    // 作品データ
    const works = [
        {
            title: "電卓アプリ",
            year: "2025",
            description: "JavaFXとGUIを使用した簡単な電卓アプリ。このアプリを作ったきっかけは会計学の勉強中にパソコン上の電卓が使いづらかったこと。数字のボタンを省いてキーボードのみの入力にしたことでシンプルで満足のいくものになった",
            image: "https://source.unsplash.com/random/600x400/?calculator",
            tags: ["JavaFX", "GUI"]
        },
        {
            title: "足し算引き算クイズ",
            year: "2024",
            description: "JavaFXを使用して、GUI上に計算の問題を表示するアプリ。元々はComputer Scienceの中間テストで出た問題を自分なりにリメイク。ボタンを教えてからのギャップの時間を考えたり、選択肢をトリッキーなものにした点は自分のオリジナル。",
            image: "https://source.unsplash.com/random/600x400/?quiz",
            tags: ["JavaFX", "GUI"]
        },
        {
            title: "WordViewer(webバージョン)",
            year: "2024",
            description: "前作の単語勉強アプリをwebバージョンにしたもの。ユーザーがスマホを使って利用することをターゲットにスワイプや長押し、ホバーしている際に機能するなど直感的な操作を実現するために工夫した。",
            image: "https://source.unsplash.com/random/600x400/?flashcards",
            tags: ["HTML", "CSS", "JavaScript"]
        },
        {
            title: "WordViewer",
            year: "2023",
            description: "単語カードのようにinputとoutputを交互に繰り返すことをターゲットとした単語勉強アプリ。スペースキーを押している間のみ答えが表示され、離すと答えが隠れる。将来的にスマホアプリにすることを目標にするため、シンプルな操作のみを実装した。",
            image: "https://source.unsplash.com/random/600x400/?vocabulary",
            tags: ["JavaSwing", "Java", "GUI"]
        }
    ];
    
    // DOM要素
    const container = document.getElementById('worksContainer');
    const modal = document.getElementById('workModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalYear = document.getElementById('modalYear');
    const modalDesc = document.getElementById('modalDesc');
    const modalTags = document.getElementById('modalTags');
    const closeModal = document.querySelector('.close-modal');
    
    // 作品を表示
    works.forEach(work => {
        const workItem = document.createElement('div');
        workItem.className = 'work-item';
        
        workItem.innerHTML = `
            <div class="work-image" style="background-image: url('${work.image}')"></div>
            <div class="work-info">
                <h3 class="work-title">${work.title}</h3>
                <p class="work-year">${work.year}</p>
                <div class="tags">
                    ${work.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        
        workItem.addEventListener('click', function() {
            openModal(work);
        });
        
        container.appendChild(workItem);
    });
    
    // モーダルを開く
    function openModal(work) {
        modalImage.style.backgroundImage = `url('${work.image}')`;
        modalTitle.textContent = work.title;
        modalYear.textContent = work.year;
        modalDesc.textContent = work.description;
        
        modalTags.innerHTML = '';
        work.tags.forEach(tag => {
            const tagElement = document.createElement('span');
            tagElement.className = 'modal-tag';
            tagElement.textContent = tag;
            modalTags.appendChild(tagElement);
        });
        
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
    
    // モーダルを閉じる
    function closeModalFunc() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    // 閉じるボタンのイベント
    closeModal.addEventListener('click', closeModalFunc);
    
    // モーダル外をクリックで閉じる
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModalFunc();
        }
    });
    
    // ESCキーでモーダルを閉じる
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModalFunc();
        }
    });
});


// 作品データ (ページ4用)
const worksPage4 = [
    {
        title: "電卓アプリ",
        year: "2025",
        description: "JavaFXとGUIを使用した簡単な電卓アプリ。このアプリを作ったきっかけは会計学の勉強中にパソコン上の電卓が使いづらかったこと。数字のボタンを省いてキーボードのみの入力にしたことでシンプルで満足のいくものになった",
        image: "https://source.unsplash.com/random/600x400/?calculator",
        tags: ["JavaFX", "GUI"]
    },
    {
        title: "足し算引き算クイズ",
        year: "2024",
        description: "JavaFXを使用して、GUI上に計算の問題を表示するアプリ。元々はComputer Scienceの中間テストで出た問題を自分なりにリメイク。ボタンを教えてからのギャップの時間を考えたり、選択肢をトリッキーなものにした点は自分のオリジナル。",
        image: "https://source.unsplash.com/random/600x400/?quiz",
        tags: ["JavaFX", "GUI"]
    },
    {
        title: "WordViewer(webバージョン)",
        year: "2024",
        description: "前作の単語勉強アプリをwebバージョンにしたもの。ユーザーがスマホを使って利用することをターゲットにスワイプや長押し、ホバーしている際に機能するなど直感的な操作を実現するために工夫した。",
        image: "https://source.unsplash.com/random/600x400/?flashcards",
        tags: ["HTML", "CSS", "JavaScript"]
    },
    {
        title: "WordViewer",
        year: "2023",
        description: "単語カードのようにinputとoutputを交互に繰り返すことをターゲットとした単語勉強アプリ。スペースキーを押している間のみ答えが表示され、離すと答えが隠れる。将来的にスマホアプリにすることを目標にするため、シンプルな操作のみを実装した。",
        image: "https://source.unsplash.com/random/600x400/?vocabulary",
        tags: ["JavaSwing", "Java", "GUI"]
    }
];

// ページ4の作品表示 (DOMContentLoaded内に追加)
document.addEventListener('DOMContentLoaded', function() {
    // ... 既存のコード ...
    
    // ページ4の作品表示
    const containerPage4 = document.getElementById('worksContainerPage4');
    if (containerPage4) {
        const modalPage4 = document.getElementById('workModalPage4');
        const modalImagePage4 = document.getElementById('modalImagePage4');
        const modalTitlePage4 = document.getElementById('modalTitlePage4');
        const modalYearPage4 = document.getElementById('modalYearPage4');
        const modalDescPage4 = document.getElementById('modalDescPage4');
        const modalTagsPage4 = document.getElementById('modalTagsPage4');
        const closeModalPage4 = document.querySelector('.close-modal-page4');

        // 作品を表示
        worksPage4.forEach(work => {
            const workItem = document.createElement('div');
            workItem.className = 'work-item-page4';
            
            workItem.innerHTML = `
                <div class="work-image-page4" style="background-image: url('${work.image}')"></div>
                <div class="work-info-page4">
                    <h3 class="work-title-page4">${work.title}</h3>
                    <p class="work-year-page4">${work.year}</p>
                    <div class="tags-page4">
                        ${work.tags.map(tag => `<span class="tag-page4">${tag}</span>`).join('')}
                    </div>
                </div>
            `;
            
            workItem.addEventListener('click', function() {
                openModalPage4(work);
            });
            
            containerPage4.appendChild(workItem);
        });

        // モーダルを開く
        function openModalPage4(work) {
            modalImagePage4.style.backgroundImage = `url('${work.image}')`;
            modalTitlePage4.textContent = work.title;
            modalYearPage4.textContent = work.year;
            modalDescPage4.textContent = work.description;
            
            modalTagsPage4.innerHTML = '';
            work.tags.forEach(tag => {
                const tagElement = document.createElement('span');
                tagElement.className = 'modal-tag-page4';
                tagElement.textContent = tag;
                modalTagsPage4.appendChild(tagElement);
            });
            
            modalPage4.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }

        // モーダルを閉じる
        function closeModalFuncPage4() {
            modalPage4.style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // 閉じるボタンのイベント
        closeModalPage4.addEventListener('click', closeModalFuncPage4);

        // モーダル外をクリックで閉じる
        modalPage4.addEventListener('click', function(e) {
            if (e.target === modalPage4) {
                closeModalFuncPage4();
            }
        });

        // ESCキーでモーダルを閉じる
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modalPage4.style.display === 'flex') {
                closeModalFuncPage4();
            }
        });
    }
});
