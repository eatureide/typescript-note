export default () => {
  // let a = 1
  // let b = [1, null]

  // let c = (x = 1) => x + 1

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

  /**
   * X兼容Y：X（目标类型） = Y（源类型）
   */
  let s: string = 'a' //字符类型兼容null类型，null是字符类型的子类型
  s = null

  // 接口兼容性
  interface X {
    a: any,
    b: any
  }

  interface Y {
    a: any
    b: any
    c: any
  }

  let x: X = { a: 1, b: 2 }
  let y: Y = { a: 1, b: 2, c: 3 }
  // x可以兼容y类型，y不能兼容x类型
  // 只要x具备y的属性，即使有额外的属性，y依然被认为x类型
  // 填鸭式，一只鸟走起来像鸭子，游起来像鸭子，叫起来像鸭子，就可以认为它是鸭子
  // 原类型，必须具备目标类型的所有属性，也就是成员少的可以兼容成员多的，反之
  // 成员少的不兼容成员多的
  x = y
  // y = x


  // 函数兼容
  type Handler = (a: number, b: number) => void
  function hof(handler: Handler) {
    return handler
  }

  //1）参数个数
  let handler1 = (a: number) => { }
  hof(handler1)
  let handler2 = (a: number, b: number, c: number) => { }
  // hof(handler2)

  //可选参数和剩余参数
  let a = (p1: number, p2: number) => { }
  let b = (p1?: number, p2?: number) => { }
  let c = (...args: number[]) => { }
  a = b
  a = c
  b = c
  b = a
  c = a
  c = b

  //2)参数类型
  let handler3 = (a: string) => { }
  // hof(handler3)

  interface Point3D {
    x: number
    y: number
    z: number
  }

  interface Point2D {
    x: number
    y: number
  }

  let p3d = (point: Point3D) => { }
  let p2d = (point: Point2D) => { }
  // 参数多的不兼容参数少的
  // 精确的类型赋值给不那么精确的类型
  p3d = p2d
  p2d = p3d

}