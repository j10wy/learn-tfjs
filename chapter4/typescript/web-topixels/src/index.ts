import * as tf from "@tensorflow/tfjs";

const bigMess = tf.randomUniform<tf.Rank.R3>([400, 400, 3]);
const myCanvas = document.getElementById("randomness") as HTMLCanvasElement;
tf.browser.toPixels(bigMess, myCanvas).then(() => {
  bigMess.dispose();
  console.log("Make sure we cleaned up", tf.memory().numTensors);
});
