const sumUp = (memo, frame) => memo + frame;

const getNextFrameOf = (index, original) => original.slice(index+1, index+2).pop();

const isStrike = (frame) => frame.length === 1;
const isStrikeOrSpare = (total) => total === 10;

const computeFrameTotal = (frame, current, frames) => {
  let frameTotal = frame.reduce(sumUp);

  if (isStrikeOrSpare(frameTotal)) {
    nextFrame = getNextFrameOf(current, frames);

    frameTotal += nextFrame.slice().shift();

    if (isStrike(frame)) {
      if (isStrike(nextFrame)) {
        nextFrame = getNextFrameOf(current+1, frames);
        frameTotal += nextFrame.slice().shift();
      } else {
        frameTotal += nextFrame.slice().pop();
      }
    }
  }

  return frameTotal;
};

module.exports = (frames) => {
  return frames
    .map(computeFrameTotal)
    .reduce(sumUp);
};
