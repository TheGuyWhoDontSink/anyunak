// DOM elemek
const heartBtn = document.getElementById("heart-btn");
const music = document.getElementById("music");
const img = document.getElementById("montage-img");

// Animációk listája
const animations = ["fade-in", "zoom-in", "slide-left", "slide-right", "rotate-in"];

// Képek számláló
let current = 1;
const total = 24;

// Gomb esemény
heartBtn.addEventListener("click", () => {
  // Gomb eltüntetése
  heartBtn.classList.add("hidden");

  // Zene indítása
  music.play();

  // Első kép megjelenítése
  showImage();

  // Képek váltása 5 másodpercenként
  setInterval(showImage, 5000);
});

// Képváltás függvény
function showImage() {
  // Biztosítjuk, hogy a kép látszódjon
  img.classList.remove("hidden");
  img.style.opacity = 0;

  // Véletlenszerű animáció kiválasztása
  const animation = animations[Math.floor(Math.random() * animations.length)];

  setTimeout(() => {
    // Új kép beállítása
    img.src = `./images/img${current}.jpg`;

    // Alap stílus megtartása és animáció hozzáadása
    img.className = "kep";
    void img.offsetWidth; // újrarenderelés
    img.classList.add(animation);

    // Láthatóvá tesszük az átmenettel
    img.style.opacity = 1;
  }, 200);

  // Következő kép index
  current++;
  if (current > total) current = 1;
}
