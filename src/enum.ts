// 数字枚举
enum Role {
  Reporter,
  Developer,
  Maintainer,
  Owner,
  Guest
}

// console.log(Role)

enum Message {
  Success = '恭喜你，成功了',
  Fail = '抱歉，失败了'
}

// console.log(Message)

enum Answer {
  N,
  Y = 'Yes'
}

// console.log(Answer)

// Role.Reporter = 2

enum Char {
  a,
  b = Char.a,
  c = 1 + 3,
  // computed 
  d = Math.random(),
  e = '123'.length
}

// console.log(Char)

// 常量枚举
const enum Month {
  Jan, Feb, Mar
}

let month = [Month.Jan, Month.Feb, Month.Mar]

enum E { a, b }
enum F { a = 0, b = 1 }
enum G { a = 'apple', b = 'banana', c = 666 }

let e: E = 5
let f: F = 3
// console.log(e === f)


let e1: E.a = 1
let e2: E.b = 1
let e3: E.a = 5

// console.log(e1 === e3)

let g1: G = G.b //字符串枚举只能是该枚举成员的类型
let g2: G.a = G.a

