const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

var totalBatteries = batteryBatches.reduce(function(x, y){
  return x + y
}, 0)


const monologueLines = [
  'Who are you talking to right now?',
  'Who is it you think you see?',
  'Do you know how much I make a year?',
  'I mean, even if I told you, you wouldn\'t believe it.',
  'Do you know what would happen if I suddenly decided to stop going into work?',
  'A business big enough that it could be listed on the NASDAQ goes belly up.',
  'Disappears!',
  'It ceases to exist without me.',
  'No, you clearly don\'t know who you\'re talking to, so let me clue you in.',
  'I am not in danger, Skyler.',
  'I am the danger.',
  'A guy opens his door and gets shot and you think that of me?',
  'No.',
  'I am the one who knocks!'
];

//{ '7': 2, '9': 1 }
// array.reduce(function(accumulator, currentValue, currentIndex, array) {
//   return accumulator + currentValue;
// });

var wordCountMap = monologueLines.reduce(function(wordCount, monologueLine) {
  var wordLength = monologueLine.split(' ').length
  if (wordLength in wordCount) {
    wordCount[wordLength] ++
  } else {
    wordCount[wordLength] = 1
  }
  return wordCount
}, {})
