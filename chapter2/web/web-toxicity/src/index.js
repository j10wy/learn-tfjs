import "@tensorflow/tfjs";
import * as toxicity from "@tensorflow-models/toxicity";

// minimum positive prediction confidence
// If this isn't passed, the default is 0.85
const threshold = 0.5;

toxicity.load(threshold).then((model) =>
{
  const sentences = ["Fuck you!", "You're great!", "I will beat your ass", "Hey girl let me hit that", "Damn you hella fine."];

  model.classify(sentences).then((predictions) =>
  {
    // semi-pretty-print results
    // console.log(JSON.stringify(predictions, null, 2));

    console.table(predictions);

    predictions.forEach(p =>
    {
      console.log(p);
    });

  });
});
