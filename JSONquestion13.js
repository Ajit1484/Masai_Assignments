let names = ["Charlie", "Alice", "Bob"];

function sortNames(namesArray) {
  return namesArray.sort((a, b) => a.localeCompare(b));
}

let sortedNames = sortNames(names);
console.log(sortedNames);