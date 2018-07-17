function destructivelyAppendKitten(name){
  kittens.push(name);
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name){
  kittens.pop(name);
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift(name);
}

function appendKitten(name){
  return [...kittens, name];
}

function prependKitten(name){
  var new_array = [name,...kittens];
  return new_array;
}

function removeLastKitten(name){
  kittens.slice(name);
}
