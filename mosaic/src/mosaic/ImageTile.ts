import type { ImageData, TilePosition } from "../types";

export class ImageTile {
  private element: HTMLDivElement;
  private image: HTMLImageElement;

  private position: TilePosition;

  private velocityX = 0;
  private velocityY = 0;

  private baseX: number;
  private baseY: number;

  constructor(
    private data: ImageData,
    container: HTMLElement,
    position: TilePosition
  ) {
    this.position = position;

    this.baseX = position.x;
    this.baseY = position.y;

    this.element = document.createElement("div");
    this.element.className = "tile";

    this.image = document.createElement("img");

    this.image.src = data.src;
    this.image.alt = "";

    this.element.appendChild(this.image);
    container.appendChild(this.element);

    this.render();
  }

setPosition(position: TilePosition) {
  this.position = position;

  this.baseX = position.x;
  this.baseY = position.y;

  this.render();
}


applyMouseForce(
  mouseX: number,
  mouseY: number
) {
  const dx = this.position.x - mouseX;
  const dy = this.position.y - mouseY;

  const distance = Math.sqrt(dx * dx + dy * dy);

  const radius = 400;

  if (distance > radius || distance === 0) {
    return;
  }

  const proximity = 1 - distance / radius;

  /*
   * Depth determines how strongly this tile reacts.
   *
   * depth = 0 → background
   * depth = 1 → foreground
   */
  const depthStrength =
    0.5 + this.position.depth * 2.5;

  const force =
    proximity *
    proximity *
    depthStrength;

  this.velocityX +=
    (dx / distance) * force;

  this.velocityY +=
    (dy / distance) * force;
}

  update() {
    this.velocityX *= 0.90;
    this.velocityY *= 0.90;

    this.position.x += this.velocityX;
    this.position.y += this.velocityY;

    const returnStrength = 0.015;

    this.velocityX +=
      (this.baseX - this.position.x) *
      returnStrength;

    this.velocityY +=
      (this.baseY - this.position.y) *
      returnStrength;

    this.render();
  }

  private render() {
    const {
      x,
      y,
      width,
      height,
      rotation,
      scale,
      depth,
    } = this.position;

    this.element.style.width = `${width}px`;
    this.element.style.height = `${height}px`;

    this.element.style.left = `${x}px`;
    this.element.style.top = `${y}px`;

    this.element.style.zIndex = `${Math.floor(depth * 100)}`;
    this.element.style.filter =  `brightness(${0.75 + depth * 0.25})`;
    this.element.style.transform = `
      translate(-50%, -50%)
      rotate(${rotation}deg)
      scale(${scale})
    `;
  }
}
