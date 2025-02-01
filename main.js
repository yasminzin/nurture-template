window.scrollTo(0, 0);

// ==============================

const preloader = document.getElementsByClassName("preloader")[0];

const headerContenth1 = document.querySelector(".header-content h1");
const headerContentp = document.querySelector(".header-content p");
const headerContentbutton = document.querySelector(".header-content button");
const headerCircles = document.querySelector("header .circles");

const aboutImage = document.querySelector(".about-image");
const aboutUs = document.querySelector(".about-content");

const newsContent = document.querySelector(".news-content");

const newsImage = document.getElementsByClassName("news-image");

const countOneP = document.querySelector(".count-one");
const countTwoP = document.querySelector(".count-two");
const countThreeP = document.querySelector(".count-three");

const pricing = document.querySelector(".pricing");
const pricingPackage = document.querySelectorAll(".pricing-package-section");

const whatWeOffer = document.getElementsByClassName("what-we-offer")[0];
const offerSection = document.getElementsByClassName("offer-section");

const descSection = document.getElementsByClassName("desc-section");

const imageContent = document.getElementsByClassName("image-content")[0];

const linkOne = document.getElementsByTagName("a")[3];
const logo = document.querySelector(".logo h1:not(span)");
const nav = document.getElementsByTagName("nav")[0];

const greenBox = document.querySelector(".about-green-box");

let countOne = 0;
countOneP.innerText = "0";

let countTwo = 0;
countTwoP.innerText = "0";

let countThree = 0;
countThreeP.innerText = "0";

// ==============================

window.onload = function (e) {
  setTimeout(function () {
    headerContenth1.style.animation = "up 0.8s forwards";
    headerCircles.style.animation = "up 0.8s forwards";
    headerContentp.style.animation = "up 0.8s 0.1s forwards";
    headerContentbutton.style.animation = "up 0.8s 0.2s forwards";
    preloader.style.transition = "opacity 0.3s ease";
    preloader.style.opacity = 0;
    window.scrollTo(0, 0);
    setTimeout(function () {
      preloader.style.display = "none";
    }, 400);
  }, 1000);
};


// ==============================

window.onscroll = function () {
  if (scrollY > 12) {
    descSection[0].style.animation = "up 0.8s forwards";
    descSection[1].style.animation = "up 0.8s 0.1s forwards";
    descSection[2].style.animation = "up 0.8s 0.2s forwards";
  }
  if (scrollY > 1800) {
    imageContent.style.animation = "up2 0.8s forwards";
  }
  if (scrollY > 750) {
    offerSection[0].style.animation = "up 0.8s forwards";
    offerSection[1].style.animation = "up 0.8s 0.1s forwards";
    offerSection[2].style.animation = "up 0.8s 0.2s forwards";
    offerSection[3].style.animation = "up 0.8s 0.3s forwards";
    offerSection[4].style.animation = "up 0.8s 0.4s forwards";
    offerSection[5].style.animation = "up 0.8s 0.5s forwards";
  }
  if (scrollY > 500) {
    whatWeOffer.style.animation = "up2 0.8s forwards";
  }
  if (scrollY > 2300) {
    aboutUs.style.animation = "up 0.8s forwards";
    var newInterval = setInterval(() => {
      if (countOne == 4000) {
        clearInterval(newInterval);
        countOneP.innerText = `4,000+`;
        return;
      }
      countOne++;
      countOneP.innerText = `${countOne}+`;
    }, 50);
    var newInterval = setInterval(() => {
      if (countTwo == 49) {
        clearInterval(newInterval);
        countTwoP.innerText = `49`;
        return;
      }
      countTwo++;
      countTwoP.innerText = `${countTwo}`;
    }, 1000);
    var newInterval = setInterval(() => {
      if (countThree == 12) {
        clearInterval(newInterval);
        countThreeP.innerText = `12`;
        return;
      }
      countThree++;
      countThreeP.innerText = `${countThree}`;
    }, 1000);
  }
  if (scrollY > 2400) {
    aboutImage.style.animation = "up 0.8s forwards";
    greenBox.style.animation = "up 0.8s forwards";
  }
  if (scrollY > 3100) {
    newsContent.style.animation = "up 0.8s forwards";
  }
  if (scrollY > 3300) {
    newsImage[0].style.animation = "left 0.8s forwards";
    newsImage[1].style.animation = "right 0.8s forwards";
  }
  if (scrollY > 3800) {
    pricing.style.animation = "up2 0.8s forwards";
  }
  if (scrollY > 4000) {
    pricingPackage[0].style.animation = "up 0.8s forwards";
    pricingPackage[1].style.animation = "up 0.8s 0.1s forwards";
    pricingPackage[2].style.animation = "up 0.8s 0.2s forwards";
  }
  if (scrollY > 410) {
    nav.style.position = "fixed";
    nav.style.top = "0";
    nav.classList.add("sticky-bar");
    logo.style.color = "black";
    linkOne.style.color = "#0eb78c";
  } else {
    nav.classList.remove("sticky-bar");
    nav.style.position = "absolute";
    nav.style.top = "45%";
    logo.style.color = "#ffffff";
    linkOne.style.color = "#ffffff";
  }
};

// ============================== Scrolling Image

window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;
  const headerImg = document.querySelector(".header-img");
  headerImg.style.transform = `translateY(${scrollPosition * 0.5}px)`;
});

window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;
  const middleImage = document.querySelector(".middle-img-element");
  middleImage.style.transform = `translateY(${scrollPosition * 0.4}px)`;
});

// ============================== Menu

const menu = document.getElementsByClassName("menu")[0];
const a = document.getElementsByTagName("a")[4];
const header = document.getElementsByTagName("header")[0];

a.onmouseover = function () {
  menu.style.display = "block";
};
nav.onmouseleave = function () {
  menu.style.display = "none";
};
header.onmouseover = function () {
  menu.style.display = "none";
};
