const puts = x => console.log(x)

const monolith = () => {
  var mutable = 10;
  var sum = 0;
  while (mutable !== 0) {
    mutable -= 1;

    if (mutable % 2 === 0)
  	   sum += mutable;
  }
  return sum;
}

const monolith_v2 = () => {
  const isEven = value => value % 2 === 0

  var mutable = 10;
  var sum = 0;
  while (mutable !== 0) {
    mutable -= 1;
    if (isEven(mutable))
	     sum += mutable;
  }
  return sum;
}

const monolith_v3 = () => {
  var generatedList = [];
  for (var i = 0; i < 11; i++) {
    generatedList = generatedList.concat(i);
  }

  var evens = [];
  for (var i = 0; i < generatedList.length; i++) {
    number = generatedList[i]
    if (number % 2 === 0)
	     evens = evens.concat(number);
  }

  var sum = 0;
  for (var i = 0; i < evens.length; i++) {
    sum += evens[i]
  }

  return sum;
}

const generateList = n => {
  var generatedList = [];
  for (var i = 0; i < n + 1; i++) {
    generatedList = generatedList.concat(i);
  }
  return generatedList
}

const catamorphism = fold => f => structure => fold(f)(structure)

const reduce = (f, initial) => list => {
  return catamorphism(f => list => {
    var accumulate = initial;
    for (var i = 0; i < list.length; i++) {
      current = list[i]
      accumulate = f(accumulate, current)
    }
    return accumulate;
  })(f)(list)
}

const filter = predicate => list => {
  return reduce((accumlate, current) => {
    return predicate(current) ? accumlate.concat(current) : accumlate
  }, [])(list)
}

const add = (x, y) => x + y
const sum = list => reduce(add, 0)(list)

const monolith_v4 = () => sum(filter(n => n % 2 === 0)(generateList(10)))

const compose = (f, g) => x => f(g(x))
const isEven = value => value % 2 === 0
const monolith_v5 = () => compose(sum, filter(isEven))(generateList(10))

puts(monolith_v5())
