import "./style.css";

import { generateLayout } from "./layout";
import { ImageTile } from "./mosaic/ImageTile";
import { MouseInteraction } from "./mosaic/MouseInteraction";

import type { ImageData } from "./types";

const mosaic = document.querySelector<HTMLElement>("#mosaic");

if (!mosaic) {
  throw new Error("Mosaic container not found");
}

/* -----------------------------
   Enter Overlay
----------------------------- */

const enterOverlay = document.querySelector<HTMLElement>("#enter-overlay");

if (!enterOverlay) {
  throw new Error("Enter overlay not found");
}

function closeEnterOverlay(): void {
  enterOverlay.classList.add("hidden");

  // Remove it from the DOM after the fade-out animation
  setTimeout(() => {
    enterOverlay.remove();
  }, 500);
}

function handleKeyDown(event: KeyboardEvent): void {
  if (event.key === "Enter") {
    closeEnterOverlay();
    document.removeEventListener("keydown", handleKeyDown);
  }
}

document.addEventListener("keydown", handleKeyDown);


/* -----------------------------
   Create image paths
----------------------------- */

const imagePaths = Array.from(
  { length: 60 },
  (_, index) => `/images/image${index + 1}.jpg`
);

// Shuffle images randomly
imagePaths.sort(() => Math.random() - 0.5);

const images: ImageData[] = imagePaths.map((src, index) => ({
  id: index,
  src,
}));


/* -----------------------------
   Create tiles
----------------------------- */

const tiles: ImageTile[] = [];

images.forEach((image) => {
  const tile = new ImageTile(
    image,
    mosaic,
    {
      x: 0,
      y: 0,
      width: 200,
      height: 150,
      rotation: 0,
      scale: 1,
      depth: 0,
    }
  );

  tiles.push(tile);
});


/* -----------------------------
   Layout
----------------------------- */

function layout(): void {
  const positions = generateLayout(
    images.length,
    window.innerWidth,
    window.innerHeight
  );

  tiles.forEach((tile, index) => {
    tile.setPosition(positions[index]);
  });
}

layout();

window.addEventListener("resize", layout);


/* -----------------------------
   Mouse interaction
----------------------------- */

const interaction = new MouseInteraction(tiles);

function animate(): void {
  interaction.update();

  requestAnimationFrame(animate);
}

animate();