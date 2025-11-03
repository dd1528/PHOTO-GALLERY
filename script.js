// Step 1: Image data
const photos = [
  { url: "https://picsum.photos/id/1015/600/400", caption: "Mountain View", favorite: true },
  { url: "https://picsum.photos/id/1025/600/400", caption: "Majestic Eagle", favorite: false },
  { url: "https://picsum.photos/id/1035/600/400", caption: "Peaceful River", favorite: true },
  { url: "https://picsum.photos/id/1045/600/400", caption: "Desert Dunes", favorite: false },
  { url: "https://picsum.photos/id/1055/600/400", caption: "Ocean Waves", favorite: true }
];

let showFavoritesOnly = false;

// Step 2: Function to render gallery
function renderGallery() {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  let displayedPhotos = showFavoritesOnly
    ? photos.filter(photo => photo.favorite)
    : photos;

  displayedPhotos.forEach(photo => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${photo.url}" alt="${photo.caption}">
      <p>${photo.caption}</p>
    `;

    gallery.appendChild(card);
  });
}

// Step 3: Theme toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Step 4: Favorites filter toggle
document.getElementById("filterToggle").addEventListener("click", () => {
  showFavoritesOnly = !showFavoritesOnly;
  renderGallery();
});

// Step 5: Run on page load
renderGallery();
