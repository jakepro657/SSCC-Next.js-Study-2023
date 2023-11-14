function add(a, b) {
    return a + b
}

const sub = function (a, b) { // 변수 안에 함수를 넣는다.
    return a - b
}

const mult = (a, b) => { // 화살표 함수의 this와 일반 함수의 this는 다르다.
    return a * b 
}

const div = (a, b) => a / b

console.log(add(1, 2)) // 3
console.log(sub(1, 2)) // -1
console.log(mult(1, 2)) // 2
console.log(div(1, 2)) // 0.5
