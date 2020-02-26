// 函数定义
function add1(x: number, y: number) {
  return x + y
}

let add2: (x: number, y: number) => number

type add3 = (x: number, y: number) => number

interface add4 {
  (x: number, y: number): number
}

// add1(1, 2)

function add5(x: number, y?: number) {
  // 必选参数不可位于可选参数后
  return y ? x + y : x
}

add5(1, 2)


function add6(x: number, y = 0, z: number, q = 1) {
  return x + y + z + q
}

console.log(add6(1, undefined, 3))

function add7(x: number, ...reset: number[]) {
  return x + reset.reduce((pre, cur) => pre + cur)
}

console.log(add7(1, 2, 3, 4, 5))


function add8(...reset: number[]): number
function add8(...reset: string[]): string
function add8(...reset: any): any {
  let first = reset[0]
  if (typeof first === 'string') {
    return reset.join('')
  }
  if (typeof first === 'number') {
    return reset.reduce((pre: number, cur: number) => pre + cur)
  }
}

console.log(add8(1, 2, 3))
console.log(add8('a', 'b', 'c'))