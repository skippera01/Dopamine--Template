//scrolling
const navLinks = document.querySelector(".nav__links");
navLinks.addEventListener("click", function (e) {
  e.preventDefault();
  //matching element

  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  }
});
//slider
const slides = document.querySelectorAll(".slide");
const BtnLeft = document.querySelector(".slider__btn--left");
const BtnRight = document.querySelector(".slider__btn--right");

let curtSlide = 0;
const maxSlide = slides.length;
//هنخلي كل السلايد جمب بعضهم
slides.forEach((slide, i) => {
  slide.style.transform = `translateX(${i * "100"}%)`;
});
// gotToSlide(0);
//go to slide function
const gotToSlide = function (slide) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - curtSlide)}%)`;
  });
};
// next slide
const nextSlide = function () {
  if (curtSlide === maxSlide - 1) {
    curtSlide = 0;
  } else {
    curtSlide++;
  }
  gotToSlide(curtSlide);
};
// previes slide
const prevSlide = function () {
  if (curtSlide === 0) {
    curtSlide = maxSlide - 1;
  } else {
    curtSlide--;
  }

  gotToSlide(curtSlide);
};
BtnRight.addEventListener("click", nextSlide);
BtnLeft.addEventListener("click", prevSlide);
BtnRight.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") prevSlide();
  e.key === "ArrowRight" && nextSlide();
});

/////////////////////////////////////////////////////
const menuBoxs = document.querySelector(".menu__boxs");
const menuBox = document.querySelectorAll(".box");
const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;

console.log(menuBoxs);
console.log(menuBox);
console.log(menuBtn);

function allMenu() {
  const sectionheight = Math.ceil(menuBox.length / 4) * 500;
  console.log(sectionheight);
  menuBoxs.style.height = `${sectionheight}px`;
}
function openMenu() {
  if (menuOpen) {
    menuOpen = false;
    menuBoxs.style.height = "450px";
  } else {
    menuOpen = true;
    allMenu();
  }
}
menuBtn.addEventListener("click", openMenu);

//table box
const tableForm = document.querySelector(".table-box");
const mainBtn = document.querySelectorAll(".main-btn");
const closeTable = document.querySelector(".table-form i");
console.log(tableForm);
console.log(closeTable);
closeTable.addEventListener("click", function () {
  tableForm.style.visibility = "hidden";
  tableForm.style.opacity = 0;
});
mainBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    tableForm.style.visibility = "unset";
    tableForm.style.opacity = 1;
  });
});

//change background
const imgHolder = document.querySelector(".header-img img");
let imgs = ["imgs/header2.jpg", "imgs/header3.jpg", "imgs/header1.jpg"];

let counter = 0;
const changeBackground = function () {
  imgHolder.src = imgs[counter];
  counter++;
  counter = counter % imgs.length;
};
setInterval(changeBackground, 2000);

///////////////////////////////////////////////////////
//reveal section
const allSections = document.querySelectorAll(".section");
const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach((section) => {
  section.classList.add("section--hidden");
  sectionObserver.observe(section);
});
