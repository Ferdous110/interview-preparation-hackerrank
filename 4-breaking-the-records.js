const scores = [12, 24, 10, 24];
function breakingRecords(scores) {
  // Write your code here
  let maxScore = scores[0];
  let minScore = scores[0];
  let maxBreaks = 0;
  let minBreaks = 0;

  for (let i = 1; i < scores.length; i++) {
    let score = scores[i];

    if (score > maxScore) {
      maxBreaks++;
      maxScore = score;
    } else if (score < minScore) {
      minBreaks++;
      minScore = score;
    }
  }

  return [maxBreaks, minBreaks];
}

const result = breakingRecords(scores);
console.log(result);
