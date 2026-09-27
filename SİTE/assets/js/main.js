// Mobil Menü Açma/Kapama İşlemi
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});

// Yukarı Çık Buton Mantığı
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function() {
    // 200px aşağı kaydırılınca butonu göster
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

scrollTopBtn.addEventListener("click", () => {
    // Yumuşak bir şekilde en üste kaydır
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});