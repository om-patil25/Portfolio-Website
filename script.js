//on Name
document.querySelector(".logo").addEventListener("click", () => {
    location.reload();
});

//transitions while first time scroll
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
});

const fadeUp = document.querySelectorAll(".fadeUp");
fadeUp.forEach(fade => {
    observer.observe(fade);
});

const slideRight = document.querySelectorAll(".slideRight");
slideRight.forEach(slideR => {
    observer.observe(slideR);
});

const slideLeft = document.querySelectorAll(".slideLeft");
slideLeft.forEach(slideL => {
    observer.observe(slideL);
});

//click on scroll down
document.querySelector(".scroll_down").addEventListener("click", () => {
    document.querySelector("#about").scrollIntoView({
        behavior: "smooth"
    });
});

//scroll up
const scroll_up = document.querySelector(".scroll_up");
document.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        scroll_up.style.display = "block";
    } else {
        scroll_up.style.display = "none";
    }
});

//click on scroll_up
scroll_up.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

//certificate nav 
const certificate = document.querySelectorAll(".certi");
let currentCerti = 0;
console.log(certificate);

let showNextCerti = () => {
    certificate[currentCerti].classList.remove("active");
    console.log("right");
    currentCerti = (currentCerti + 1) % certificate.length;
    certificate[currentCerti].classList.add("active");
}

document.querySelector(".right").addEventListener("click", () => {
    showNextCerti();
});

let showPrevCerti = () => {
    certificate[currentCerti].classList.remove("active");
    console.log("left");
    currentCerti = (currentCerti - 1 + certificate.length) % certificate.length;
    console.log(currentCerti);
    certificate[currentCerti].classList.add("active");

}

document.querySelector(".left").addEventListener("click", () => {
    showPrevCerti();
});

//automating ceti
setInterval(() => {
    showNextCerti();
}, 4000);

//certificate verification
document.getElementById("certiHCJ").addEventListener("click", () => {
    window.open("https://codesignal.com/learn/certificates/cmciqx9ul003yi604kfri3ym0/courses/60", "_blank");
});

document.getElementById("certiJs").addEventListener("click", () => {
    window.open("https://codesignal.com/learn/certificates/cmciqx9ul003yi604kfri3ym0/courses/59", "_blank");
})

//projectViewer
let projView = document.querySelector(".projPreview");

let projects = document.querySelectorAll(".proJects");

let imgElem;
let DescElem;

projects.forEach(proj => {
    proj.addEventListener("click", () => {
        projView.style.display = "flex";

        imgElem = proj.querySelector(".projImg img").getAttribute("src");

        DescElem = proj.querySelector("p").innerHTML;
        console.log(imgElem);
        projView.querySelector(".projVImg img").setAttribute("src", imgElem);

        projView.querySelector(".projVDesc p").innerHTML = DescElem;

        console.log(projView);


    });
});

//close project
document.querySelector(".closePreview").addEventListener("click", () => {
    projView.style.display = "none";
})