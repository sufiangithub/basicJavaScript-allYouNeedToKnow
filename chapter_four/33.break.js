// Break Statement

while(true) {
    var rand = Math.floor(Math.random() * 10 + 1)
    if (rand === 9) {
        console.log('Winner winner Chicken Dinner');
        break;
    } else {
        console.log('You have got ' + rand);
    }
}

for (var i = 1; i < 10; i++) {
    if (i % 5 === 0) {
        console.log('You are Winner');
        break
    } else {
        console.log(i);
    }
}

for (var i = 1; i < 10; i++) {
    if (i % 6 === 0) {
        console.log('You are Winner');
        break
    } else {
        console.log(i);
    }
}

