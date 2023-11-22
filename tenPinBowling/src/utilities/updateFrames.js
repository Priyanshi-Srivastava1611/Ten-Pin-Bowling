import isEven from './isEven'
import isBonusRoll from './isBonusRoll'
import getFrameIndex from './getFrameIndex'

const updateFrames = (rolls, lastScore, frames) => {
  if (isEven(rolls) && !isBonusRoll(rolls)) {
    return frames.concat([[lastScore]])
  } else {
    const newFrameScore = frames[frames.length - 1].concat([lastScore])
    return frames.slice(0, frames.length - 1).concat([newFrameScore])
  }
}

export default updateFrames
