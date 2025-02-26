let obj = { name: "Alice", hobbies: ["reading", "traveling"] };

obj.hobbies.push("codeing");

let res = JSON.stringify(obj)

let res1 = JSON.parse(res);

console.log(res1)