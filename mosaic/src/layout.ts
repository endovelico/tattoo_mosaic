import type { TilePosition } from "./types";

function random(seed: number): number {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

export function generateLayout(
  count: number,
  viewportWidth: number,
  viewportHeight: number
): TilePosition[] {
  const positions: TilePosition[] = [];

  /*
   * Fewer columns/rows means larger tiles.
   *
   * The 0.75 factor intentionally creates overlap.
   */
  const columns = Math.ceil(
    Math.sqrt(count * (viewportWidth / viewportHeight))
  );

  const rows = Math.ceil(count / columns);

  const cellWidth =
    viewportWidth / columns;

  const cellHeight =
    viewportHeight / rows;

  for (let i = 0; i < count; i++) {
    const column = i % columns;
    const row = Math.floor(i / columns);

    const seed = i * 17;

    const depth =
      random(seed + 4);

    /*
     * Keep the center of each tile roughly
     * within its cell, but allow substantial
     * overlap.
     */
    const offsetX =
      (random(seed) - 0.5) *
      cellWidth *
      0.45;

    const offsetY =
      (random(seed + 1) - 0.5) *
      cellHeight *
      0.45;

    /*
     * Larger tiles.
     *
     * Foreground images become slightly larger.
     */
    const sizeVariation =
      1.05 +
      random(seed + 2) * 0.45 +
      depth * 0.25;

    const width =
      cellWidth * sizeVariation;

    /*
     * Vary aspect ratio slightly.
     */
    const aspectRatio =
      0.70 +
      random(seed + 6) * 0.25;

    const height =
      width * aspectRatio;

    const rotation =
      (random(seed + 3) - 0.5) * 8;

    positions.push({
      x:
        column * cellWidth +
        cellWidth / 2 +
        offsetX,

      y:
        row * cellHeight +
        cellHeight / 2 +
        offsetY,

      width,
      height,

      rotation,

      scale:
        0.95 +
        random(seed + 5) * 0.1,

      depth,
    });
  }

  return positions;
}
