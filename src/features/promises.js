const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("1"), 1001)
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("2"), 1)
});

Promise.all([p1, p2]).then((res) => {
    console.log("success" + res)
}, res => {
    console.log("error " + res)
});
