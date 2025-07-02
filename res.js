// ヘッダーの背景色変更
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// メニュータブ切り替え
document.querySelectorAll('.tab-button').forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.category;

    // ボタンのactive切り替え
    document.querySelectorAll('.tab-button').forEach(btn => {
      btn.classList.toggle('active', btn === button);
    });

    // メニュー表示切替
    document.querySelectorAll('.menu-item').forEach(item => {
      item.style.display = item.classList.contains(category) ? 'block' : 'none';
    });
  });
});

// ギャラリーのモーダル表示
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalClose = document.getElementById('modal-close');

document.querySelectorAll('.gallery-img').forEach(img => {
  img.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modalImg.src = img.src;
    modalImg.alt = img.alt;
  });
});

modalClose.addEventListener('click', () => {
  modal.classList.add('hidden');
});

// モーダル外クリックで閉じる
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
});

// スクロールでフェードインアニメーション
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
