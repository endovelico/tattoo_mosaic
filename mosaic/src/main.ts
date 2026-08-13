import "./style.css";

import { generateLayout } from "./layout";
import { ImageTile } from "./mosaic/ImageTile";
import { MouseInteraction } from "./mosaic/MouseInteraction";

import type { ImageData } from "./types";

const mosaic = document.querySelector<HTMLElement>("#mosaic");

if (!mosaic) {
  throw new Error("Mosaic container not found");
}

// Create image paths
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

function layout() {
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

const interaction = new MouseInteraction(tiles);

function animate() {
  interaction.update();

  requestAnimationFrame(animate);
}

animate();