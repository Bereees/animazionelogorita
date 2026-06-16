const DURATION = 5;
const STAGGER = 0.35;
const EASE = "power4.inOut";

const MARIA = [
  { x: 0, y: 0, width: 3063.24, height: 220.919 },
  { x: 0, y: 339.15, width: 510.589, height: 2645.98 },
  { x: 628.82, y: 2336.49, width: 432.484, height: 648.635 },
  { x: 628.82, y: 1490.55, width: 983.2, height: 727.709 },
  { x: 628.82, y: 339.15, width: 1533.91, height: 1033.17 },
  { x: 2280.97, y: 339.15, width: 782.268, height: 1776.23 },
  { x: 2280.97, y: 2233.61, width: 782.268, height: 751.513 },
  { x: 1179.54, y: 2336.49, width: 432.484, height: 648.635 },
  { x: 1730.25, y: 1490.55, width: 432.484, height: 1494.58 },
];

const CAMBIO = [
  { x: 0, y: 0, width: 2163.12, height: 220.96 },
  { x: 0, y: 339.22, width: 510.68, height: 1033.38 },
  { x: 0, y: 2336.97, width: 1061.5, height: 648.77 },
  { x: 0, y: 1490.86, width: 2163.12, height: 727.86 },
  { x: 628.94, y: 339.22, width: 1534.19, height: 1033.38 },
  { x: 2281.38, y: 0, width: 782.41, height: 2218.71 },
  { x: 2281.38, y: 2336.97, width: 782.41, height: 648.76 },
  { x: 1179.75, y: 2336.97, width: 432.56, height: 648.77 },
  { x: 1730.56, y: 2336.97, width: 432.56, height: 648.77 },
];

const WAVES = [
  [1],
  [2, 5, 6],
  [3, 4, 7],
  [8, 9],
];

function setBlockState(index, state) {
  const el = document.getElementById(`block-${index}`);
  el.setAttribute("x", state.x);
  el.setAttribute("y", state.y);
  el.setAttribute("width", state.width);
  el.setAttribute("height", state.height);
}

function buildTimeline() {
  const tl = gsap.timeline({
    repeat: -1,
    yoyo: true,
    defaults: { ease: EASE },
  });

  WAVES.forEach((wave, waveIndex) => {
    const startAt = waveIndex * STAGGER;
    const duration = DURATION - startAt;

    wave.forEach((blockIndex) => {
      const target = CAMBIO[blockIndex - 1];
      tl.to(
        `#block-${blockIndex}`,
        {
          attr: {
            x: target.x,
            y: target.y,
            width: target.width,
            height: target.height,
          },
          duration,
        },
        startAt
      );
    });
  });

  return tl;
}

MARIA.forEach((state, index) => setBlockState(index + 1, state));
buildTimeline();
