function mincost(arr) {
    let cost = 0;

    while (arr.length > 1) {
        arr.sort((a, b) => a - b);

        let first = arr.shift();
        let second = arr.shift();

        let newRope = first + second;
        cost += newRope;

        arr.push(newRope);
    }

    return cost;
}

// Sample array
let arr = [4, 3, 2, 6];
let result = mincost(arr);

// Show result in the HTML
document.getElementById('result').innerText =
   result;
