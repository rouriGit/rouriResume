document.addEventListener('DOMContentLoaded', function () {
    // スクロールプログレスバーのコード
    const scrollProgress = document.createElement('div');
    scrollProgress.className = 'scroll-progress';
    document.body.appendChild(scrollProgress);
    
    window.addEventListener('scroll', function() {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / scrollHeight) * 100;
        scrollProgress.style.setProperty('--scroll', `${scrolled}%`);
    });
    
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
        // 作品を表示
worksPage4.forEach(work => {
    const workItem = document.createElement('div');
    workItem.className = 'work-item-page4';
    
    workItem.innerHTML = `
        <div class="work-image-page4" style="background-image: url('${work.image}')"></div>
        <div class="work-info-page4">
            <h3 class="work-title-page4">${work.title}</h3>
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
            
            // 既存のリンク要素を削除（重複防止）
            const existingLink = document.querySelector('.modal-link-container');
            if (existingLink) {
                existingLink.remove();
            }
            
            // リンクがある場合のみ作成・追加
            if (work.link) {
                const linkContainer = document.createElement('div');
                linkContainer.className = 'modal-link-container';
                
                const linkElement = document.createElement('a');
                linkElement.href = work.link;
                linkElement.target = '_blank';
                linkElement.className = 'modal-link-page4';
                linkElement.textContent = 'View Project';
                
                linkContainer.appendChild(linkElement);
                
                // タグの前に挿入
                modalTagsPage4.parentNode.insertBefore(linkContainer, modalTagsPage4);
            }
            
            // タグの処理
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

// 作品データ (ページ4用)
const worksPage4 = [
    {
        title: "new WordViewer2",
        year: "2025",
        description: "JavaFX & MySQL。以前のWordViewerをアップデートしました。今回はMySQL, JavaFXを使用して、データベースの技術も取り入れています。ユーザーごとに学習データを管理し、よりゲーム性を増したアプリになりました。",
        image: "resources/WordViewerLogo.jpeg",
        link: "https://github.com/rouriGit/WordViewer2",
        tags: ["MySQL", "Database", "JavaFX", "SceneBuilder", "GUI"]
    },
    {
        title: "はじめてのMySQL",
        year: "2025",
        description: "JavaFX & MySQL。はじめてデータベースに触れました。今回はとてもシンプルにGUI上に入力されたデータがデータベースに保存されている内容と照らし合わせるログイン機能を実装。今までJava上にデータを保存していたところをデータベースへ移行できるので、新しい技術を使うことが楽しみです。",
        image: "resources/はじめてのMySQL.png",
        link: "",
        tags: ["MySQL", "Database", "JavaFX", "SceneBuilder", "GUI"]
    },
    {
        title: "電卓アプリ",
        year: "2025",
        description: "JavaFXとGUIを使用した簡単な電卓アプリ。このアプリを作ったきっかけは会計学の勉強中にパソコン上の電卓が使いづらかったこと。数字のボタンを省いてキーボードのみの入力にしたことでシンプルで満足のいくものになった",
        image: "resources/CalculatorApp.png",
        link: "https://github.com/rouriGit/calculatorApp",
        tags: ["JavaFX", "GUI"]
    },
    {
        title: "足し算引き算クイズ",
        year: "2024",
        description: "JavaFXを使用して、GUI上に計算の問題を表示するアプリ。元々はComputer Scienceの中間テストで出た問題を自分なりにリメイク。ボタンを教えてからのギャップの時間を考えたり、選択肢をトリッキーなものにした点は自分のオリジナル。",
        image: "resources/AlgebraApp.png",
        link: "https://github.com/rouriGit/algebraQuizApp",
        tags: ["JavaFX", "GUI"]
    },
    {
        title: "WordViewer(webバージョン)",
        year: "2024",
        description: "前作の単語勉強アプリをwebバージョンにしたもの。ユーザーがスマホを使って利用することをターゲットにスワイプや長押し、ホバーしている際に機能するなど直感的な操作を実現するために工夫した。",
        image: "https://source.unsplash.com/random/600x400/?flashcards",
        link: "https://github.com/rouriGit/WordViewer-web",
        tags: ["HTML", "CSS", "JavaScript"]
    },
    {
        title: "WordViewer",
        year: "2023",
        description: "単語カードのようにinputとoutputを交互に繰り返すことをターゲットとした単語勉強アプリ。スペースキーを押している間のみ答えが表示され、離すと答えが隠れる。将来的にスマホアプリにすることを目標にするため、シンプルな操作のみを実装した。",
        image: "https://source.unsplash.com/random/600x400/?vocabulary",
        link: "https://github.com/rouriGit/r-WordViewer-app",
        tags: ["JavaSwing", "Java", "GUI"]
    }
];
