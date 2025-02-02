//toggle icon navbar
//berfungsi ketika layar dimensions responsive mencapai 768px
//untuk menggunakannya, klik icon garis tiga untuk menampilkan navbar (kilk 2x untuk awal)
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let isMenuOpen = false;

menuIcon.onclick = () => {
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
        menuIcon.querySelector('img').src = "assets/icon/menu-regular-24.png";
        navbar.classList.remove('active');
    } else {
        menuIcon.querySelector('img').src = "assets/icon/x-regular-24.png";
        navbar.classList.add('active');
    }
    
};

//scroll section
//mengaktifkan sticky header ketika memulai scroll
let sections = document.querySelectorAll('article, aside');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset +height) {
            // active navbar links
            //memberi penanda pada article yang aktif/sedang dituju
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +id+ ']').classList.add('active');
            })
        }
    });

    //sticky header
    //backgorund untuk header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon and hide the navbar when a navbar link is clicked
    //menutup navbar ketika setelah mengklik salah satu article
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        isMenuOpen = false; // Close the menu
        menuIcon.querySelector('img').src = "assets/icon/menu-regular-24.png";
        navbar.classList.remove('active'); // Hide the navbar
    });
});
}