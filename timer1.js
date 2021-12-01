// process.stdout.write('\x07'); // for beep sound


const timer = function(Arr) {

  if (!Arr.length) return;

  for (let timeStr of Arr) {
    const timeNum = Number(timeStr);

    if (isNaN(timeNum)) continue;
    if (timeNum < 0) continue;

    setTimeout(() => {
      console.log(`Beeped at ${timeNum} seconds!`);
      process.stdout.write('\x07');
    }, timeNum * 1000);
  }

};

const Arr = process.argv.slice(2);
timer(Arr);