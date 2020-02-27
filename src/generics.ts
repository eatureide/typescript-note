/**
 * 泛型
 * 不预先确定的数据类型，具体的类型在使用的时候才能确定
 * 很多时候，我们希望一个函数，或者一个类可以支持多种数据类型，有很大的灵活性
 */

// 一个打印函数，函数重载
// function log(value: string): string
// function log(value: string[]): string[]
// function log(value: any) {
//   console.log(value)
//   return value
// }

// 联合类型
// function log(value: string | string[]): string | string[] {
//   console.log(value)
//   return value
// }

// any类型（忽略了参数类型和返回类型），无法预知约束关系
// function log(value: any) {
//   console.log(value)
//   return value
// }

// 可以确保输入和返回是一致的
// function log<T>(value: T): T {
//   console.log(value)
//   return value
// }

// log<string[]>(['a', 'b'])
// log(['a', 'b']) // 类型推断

// 我们不仅可以用泛型来定义一个函数，也可以定义一个函数类型
// type Log = <T>(value: T) => T
// let myLog: Log = log

// interface Log<T = string> {
//   (value: T): T
// }

// const myLog: Log<number> = log
// myLog(1)


class Log<T> {
  run(value: T) {
    console.log(value)
    return value
  }
}

let log1 = new Log<number>()
log1.run(1)
let log2 = new Log()
log2.run('1')

interface Length {
  length: number
}
function log<T extends Length>(value: T): T {
  //  T继承了length接口，收到了一定的约束
  console.log(value, value.length)
  return value
}
log([1])
log('123')
log({ length: 10 })

/**
 * 1、函数和类可以轻松地支持多种类型，增强程序的扩展性
 * 2、不必写多条函数重载，冗长的联合类型声明，增强代码可读性
 * 3、灵活控制类型之间的约束
 */