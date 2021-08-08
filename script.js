//window load up
window.addEventListener("load", () => {
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".home-section").classList.add("active");
    document.querySelector(".page-loader").classList.add("fade-out")
    setTimeout(() => {
        document.querySelector(".page-loader").style.display = "none";
    }, 600)
});
//Particle JS Load up
particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
});
/**tabs */
const tabContainer = document.querySelector(".about-me-tabs");
const aboutSection = document.querySelector(".about-section");
tabContainer.addEventListener("click", e => {
    if (e.target.classList.contains("tab-item") && !e.target.classList.contains("active")) {
        tabContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        console.log(target);
        aboutSection.querySelector(".tab-content.active").classList.remove("active")
        aboutSection.querySelector(target).classList.add("active")
    }

});
/**Portfolio detail popup open */
document.addEventListener("click", e => {
    if (e.target.classList.contains("view-project-btn")) {
        togglePortfolioPopup();
        portfolioItemDetail(e.target.parentElement);
    }
});

const togglePortfolioPopup = () => {
    document.querySelector(".portfolio-popup").classList.toggle("open")
    document.querySelector(".portfolio-popup").scrollTo(0, 0)
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out")

}
document.addEventListener("click", e => {
    if (e.target.classList.contains("pp-inner")) {
        togglePortfolioPopup();
    }
})
document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);
const portfolioItemDetail = (element) => {
        document.querySelector(".pp-thumbnail img").src = element.querySelector(".portfolio-item-thumbnail img").src;
        document.querySelector(".pp-header h3").innerText = element.querySelector(".portfolio-item h3").innerText;
        document.querySelector(".pp-body").innerHTML = element.querySelector(".portfolio-item-detail").innerHTML;

    }
    //toggle Navbar

const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () => {
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling");
});
const toggleNavbar = () => {
    document.querySelector("header").classList.toggle("active")
}

const hideSection = () => {
    document.querySelector("section.active").classList.toggle("fade-out");
    document.querySelector(".nav").classList.toggle("active");
} /**/

document.addEventListener("click", e => {
    if (e.target.classList.contains("link-item") && e.target.hash !== "") {
        document.querySelector(".overlay").classList.add("active")
        navToggler.classList.add("hide");
        const hash = e.target.hash;
        if (e.target.classList.contains("nav-item")) {
            toggleNavbar()

        } else {
            hideSection()
            document.body.classList.add("hide-scrolling")
        }
        setTimeout(() => {
            document.querySelector("section.active").classList.remove("active", "fade-out");
            document.querySelector(hash).classList.add("active")
            window.scrollTo(0, 0);
            document.body.classList.remove("hide-scrolling");
            navToggler.classList.remove("hide");
            document.querySelector(".overlay").classList.remove("active")
        }, 500)
    }
});

//Typewriting Effect

const text = document.querySelector("#text");
const phrases = ["Hello!", "မင်္ဂလာပါ", "好好", "नमस्ते", "こんにちは", "안녕하세요!"]
    //"မင်္ဂလာပါ", "你好", "こににち​​は", "안녕하세요"
let i = 0,
    j = 0,
    currentPhrase = [],
    isDeleting = false,
    isEnd = false;

function loopText() {
    isEnd = false;
    text.innerText = currentPhrase.join('')
    if (i < phrases.length) {
        if (!isDeleting && j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j])
            j++
            text.innerText = currentPhrase.join('')
        }
        if (isDeleting && j <= phrases[i].length) {
            currentPhrase.pop(phrases[i][j])
            j--
            text.innerText = currentPhrase.join('')
        }
        if (j == phrases[i].length) {
            isDeleting = true
        }
        if (isDeleting && j === 0) {
            currentPhrase = []
            isDeleting = false
            i++
            if (i == phrases.length) {
                i = 0
            }
        }

    }
    const time = isEnd ? 2000 : isDeleting ? 250 : 500
    setTimeout(loopText, time)
}
loopText()