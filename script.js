// --- SCROLL SPY & TIMELINE ---
window.addEventListener('scroll', () => {
    let current = "";
    const sections = document.querySelectorAll(".scroll-section");
    const navLinks = document.querySelectorAll(".nav-link");
    const timelineItems = document.querySelectorAll('.timeline-item');
    const scrollArrow = document.querySelector(".scroll-indicator");

    if (window.scrollY > 100) { 
        if(scrollArrow) scrollArrow.style.opacity = "0"; 
    } else { 
        if(scrollArrow) scrollArrow.style.opacity = "1"; 
    }

    timelineItems.forEach(item => {
        if (item.getBoundingClientRect().top < window.innerHeight - 100) {
            item.classList.add('show');
        }
    });

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 250) {
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
const rsvpForm = document.getElementById('rsvpForm');
if(rsvpForm) {
    rsvpForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert("Response Sent! Taking you back home...");
        this.reset();
        document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    });
}

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

    if (diff < 0) return; // Stop if date has passed

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    const dEl = document.getElementById("days");
    const hEl = document.getElementById("hours");
    const mEl = document.getElementById("mins");
    const sEl = document.getElementById("secs");

    if(dEl) dEl.innerText = d;
    if(hEl) hEl.innerText = h;
    if(mEl) mEl.innerText = m;
    if(sEl) sEl.innerText = s;

    updateCircle("days-c", d, 365);
    updateCircle("hours-c", h, 24);
    updateCircle("mins-c", m, 60);
    updateCircle("secs-c", s, 60);
}, 1000);

// --- MUSIC ---
const audio = document.getElementById("bg-music");
function toggleMusic() {
    const icon = document.getElementById("music-icon");
    if (audio.paused) { 
        audio.play(); 
        if(icon) icon.className = "fas fa-pause"; 
    }
    else { 
        audio.pause(); 
        if(icon) icon.className = "fas fa-music"; 
    }
}