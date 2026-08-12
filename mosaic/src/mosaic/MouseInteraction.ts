import { ImageTile } from "./ImageTile";

export class MouseInteraction {
  private mouseX = -1000;
  private mouseY = -1000;

  private targetX = -1000;
  private targetY = -1000;

  constructor(private tiles: ImageTile[]) {
    window.addEventListener("mousemove", (event) => {
      this.targetX = event.clientX;
      this.targetY = event.clientY;
    });
  }

  update() {
    this.mouseX +=
      (this.targetX - this.mouseX) * 0.12;

    this.mouseY +=
      (this.targetY - this.mouseY) * 0.12;

    for (const tile of this.tiles) {
      tile.applyMouseForce(
        this.mouseX,
        this.mouseY
      );

      tile.update();
    }
  }
}
