function minimumBribes(q) {
    let maxBribes = 0;
    let bribes = 0;
    let currentBribe = {
        value: null,
        bribes: 0
    }

    for (let i = 0; i < q.length - 1; i++) {
        for (let j = 0; j < q.length; j++) {
            if (q[j] > q[j + 1]) {
                currentBribe.value = q[j];
                currentBribe.bribes += 1;

                let oldQ = q[j];

                q[j] = q[j + 1];
                q[j + 1] = oldQ;

                bribes += 1;

                if (currentBribe.bribes > maxBribes) {
                    maxBribes += 1;
                }
            } else {
                currentBribe.value = null;
                currentBribe.bribes = 0;
                continue;
            }
        }
    }

    if (maxBribes > 2) {
        bribes = "Too chaotic";
    }

    console.log(bribes)
}


const input = [2, 1, 5, 3, 4]

minimumBribes(input);