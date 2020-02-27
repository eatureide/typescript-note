let a = 1
let b = [1, null]

let c = (x = 1) => x + 1

// window.onkeydown = (e: any) => {
//   // console.log(e)
// }
interface Foo {
  bar: number
}
// let foo = {} as Foo
let foo: Foo = {
  bar: 1
}
// foo.bar = 1

// 类型断言可以增加灵活性，但是要避免滥用