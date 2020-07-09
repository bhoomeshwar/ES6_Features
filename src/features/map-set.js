// Map
const map = new Map();
map.set("Potato", 12);
map.set("Tomato", 34);

console.log(map.get("Potato"));


for(let item of map) {
    console.log(item)
}


// Set
const set = new Set();
set.add("Potato")
    .add("Tomato")
    .add("Tomato");
console.log(set.size);
console.log(set.has("Tomato"));

for(const item of set) {
    console.log(item)
}
