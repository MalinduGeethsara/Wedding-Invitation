// --- SCROLL SPY & TIMELINE ---
window.addEventListener('scroll', () => {
    let current = "";
    const sections = document.querySelectorAll(".scroll-section");
    const navLinks = document.querySelectorAll(".nav-link");
    const timelineItems = document.querySelectorAll('.timeline-item');
    const scrollArrow = document.querySelector(".scroll-indicator");

    if (window.pageYOffset > 100) { scrollArrow.style.opacity = "0"; } else { scrollArrow.style.opacity = "1"; }

    timelineItems.forEach(item => {
        if (item.getBoundingClientRect().top < window.innerHeight - 100) {
            item.classList.add('show');
        }
    });

    sections.forEach((section) => {
        if (pageYOffset >= section.offsetTop - 200) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

// --- RSVP SUBMIT ---
document.getElementById('rsvpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Response Sent! Taking you back home...");
    this.reset();
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
});

// --- COUNTDOWN LOGIC ---
const weddingDate = new Date("Sep 12, 2026 15:00:00").getTime();
function updateCircle(id, val, max) {
    const offset = 251 - (val / max) * 251;
    const el = document.getElementById(id);
    if(el) el.style.strokeDashoffset = offset;
}

setInterval(() => {
    const now = new Date().getTime();
    const diff = weddingDate - now;
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);

    document.getElementById("days").innerText = d;
    document.getElementById("hours").innerText = h;
    document.getElementById("mins").innerText = m;
    document.getElementById("secs").innerText = s;

    updateCircle("days-c", d, 365);
    updateCircle("hours-c", h, 24);
    updateCircle("mins-c", m, 60);
    updateCircle("secs-c", s, 60);
}, 1000);

// --- MUSIC ---
const audio = document.getElementById("bg-music");
function toggleMusic() {
    if (audio.paused) { audio.play(); document.getElementById("music-icon").className = "fas fa-pause"; }
    else { audio.pause(); document.getElementById("music-icon").className = "fas fa-music"; }
}