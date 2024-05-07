let currentIndex = 0;

const city = document.querySelector(".city");
const apartmentArea = document.querySelector(".apartment-area");
const repairTime = document.querySelector(".repair-time");
const repairCost = document.querySelector(".repair-cost");
const image = document.querySelector(".image-slider");

const sliderArray = [
  {
    city: "Rostov-on-Don LCD admiral",
    apartmentArea: "81 m2",
    repairTime: "3.5 months",
    repairCost: "Upon request",
    image: "./images/galery_img1.svg",
    alt: "photo_Rostov-on-Don_Admiral",
  },
  {
    city: "Sochi <br> Thieves",
    apartmentArea: "105 m2",
    repairTime: "3.5 months",
    repairCost: "Upon request",
    image: "./images/galery_img2.svg",
    alt: "photo_Sochi_Thieves",
  },
  {
    city: "Rostov-on-Don Patriotic",
    apartmentArea: "93 m2",
    repairTime: "3 months",
    repairCost: "Upon request",
    image: "./images/galery_img3.svg",
    alt: "photo_Rostov-on-Don_Patriotic",
  },
];

function setSliderItem(index) {
  updateSliderIndex(index);

  const arrayItem = sliderArray[currentIndex];

  city.innerHTML = arrayItem.city;
  apartmentArea.innerHTML = arrayItem.apartmentArea;
  repairTime.innerHTML = arrayItem.repairTime;
  repairCost.innerHTML = arrayItem.repairCost;
  image.src = arrayItem.image;
  image.alt = arrayItem.alt;
}

function updateSliderIndex(newIndex) {
  document
    .querySelector(`.slider-link-${currentIndex}`)
    .classList.remove("completed-projects-active-item");

  currentIndex = newIndex;
  const maxSliderIdex = sliderArray.length - 1;

  if (currentIndex < 0) {
    currentIndex = maxSliderIdex;
  }

  if (currentIndex > maxSliderIdex) {
    currentIndex = 0;
  }

  document
    .querySelector(`.slider-link-${currentIndex}`)
    .classList.add("completed-projects-active-item");
}

setSliderItem(0);

// листать стрелками

document.querySelector(".slider-next").addEventListener("click", function () {
  setSliderItem(currentIndex + 1);
});

document.querySelector(".slider-prev").addEventListener("click", function () {
  setSliderItem(currentIndex - 1);
});

// листать точками

document.querySelector(".one-point").addEventListener("click", function () {
  setSliderItem(0);
});

document.querySelector(".two-point").addEventListener("click", function () {
  setSliderItem(1);
});

document.querySelector(".there-point").addEventListener("click", function () {
  setSliderItem(2);
});

// листать ссылками

document.querySelector(".first-href").addEventListener("click", function () {
  setSliderItem(0);
});

document.querySelector(".second-href").addEventListener("click", function () {
  setSliderItem(1);
});

document.querySelector(".there-href").addEventListener("click", function () {
  setSliderItem(2);
});