document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            e.preventDefault(); // ป้องกันเฉพาะลิงก์ที่เป็น anchor link (#about, #experience)
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
// เพิ่มฟังก์ชันเปิด-ปิดเมนู
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
}

// ปิดเมนูเมื่อคลิกนอกพื้นที่
document.addEventListener('click', function(e) {
    const navMenu = document.getElementById('nav-menu');
    const hamburger = document.querySelector('.hamburger');
    
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});