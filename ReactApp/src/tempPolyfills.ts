const requestAnimationFrame = ((global as any).requestAnimationFrame = (
  callback: Function
) => {
  setTimeout(callback, 0);
});

export default requestAnimationFrame;
