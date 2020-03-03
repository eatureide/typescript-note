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
  // let a = (p1: number, p2: number) => { }
  // let b = (p1?: number, p2?: number) => { }
  // let c = (...args: number[]) => { }
  // a = b
  // a = c
  // b = c
  // b = a
  // c = a
  // c = b

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

  // 返回值类型(成员多的兼容成员少的)
  let f = () => ({ name: 'alice' })
  let g = () => ({ name: 'alice', location: 'beijing' })
  f = g
  // g = f

  function overload(a: number, b: number): number
  function overload(a: string, b: string): string
  function overload(a: any, b: any): any { }

  // 枚举类型
  enum Fruit { Apple, Banana }
  enum Color { Red, Yellow }
  let fruit: Fruit.Apple = 1
  let no: number = Fruit.Apple
  // let color: Color.Red = Fruit.Apple 枚举之间不兼容

  // 类兼容性,静态成员和构造函数不参与比较,只比较成员,如果有私有成员则不兼容
  class A {
    constructor(p: number, q: number) { }
    id: number = 1
    private name: string = ''
  }

  class B {
    static s = 1
    constructor(p: number) { }
    id: number = 2
    private name: string = ''
  }

  let aa = new A(1, 2)
  let bb = new B(1)

  // aa = bb
  // bb = aa

  class C extends A { }
  let cc = new C(1, 2)
  aa = cc
  cc = aa

  //泛型兼容
  interface Empty<T> {
    value: T
  }
  // let obj1: Empty<number> = {}
  // let obj2: Empty<string> = {}

  // obj1 = obj2

  let log1 = <T>(x: T): T => {
    console.log('x')
    return x
  }

  let log2 = <U>(y: U): U => {
    console.log('y')
    return y
  }
  //不指定参数则兼容
  log1 = log2

  /**
   * 当一个类型Y可以被赋值另一个类型X时,我们就可以说类型X兼容类型Y
   * X兼容Y:X(目标类型)=Y(源类型)
   * 
   * 口诀:
   * 结构之间兼容:成员多的兼容成员多的
   * 函数之间兼容:参数多的兼容参数少的
   */

  enum Type { Strong, Week }

  class Java {
    helloJava() {
      console.log('Hello Java')
    }
    java: any
  }

  class JavaScript {
    helloJavaScript() {
      console.log('Hello JavaScript')
    }
    javascript: any
  }
  /**
   * 类型保护
   * TypeScript能够在特定的区块中保证变量属于某种确定的类型
   * 可以在此区块中放心地引用此类型的属性,或调用此类的方法
   */
  function isJava(lang: Java | JavaScript): lang is Java { //类型伪词
    return (lang as Java).helloJava !== undefined
  }

  function getLanguage(type: Type, x?: string | number) {
    let lang = type === Type.Strong ? new Java() : new JavaScript()

    if (isJava(lang)) {
      lang.helloJava()
    } else {
      lang.helloJavaScript()
    }

    // if ((lang as Java).helloJava) {
    //   (lang as Java).helloJava()
    // } else {
    //   (lang as JavaScript).helloJavaScript()
    // }
    // instanceof
    // if (lang instanceof Java) {
    //   lang.helloJava()
    // } else {
    //   lang.helloJavaScript()
    // }

    // in
    // if ('java' in lang) {
    //   lang.helloJava()
    // } else {
    //   lang.helloJavaScript()
    // }

    // typeof
    // if (typeof x === 'string') {
    //   x.length
    // } else {
    //   x.toFixed(2)
    // }

    return lang
  }

  getLanguage(Type.Strong)


  interface DogInterface {
    run(): void
  }

  interface CatInterface {
    jump(): void
  }

  let pet: DogInterface & CatInterface = {
    // 不是取交集而是并集
    run() { },
    jump() { }
  }

  class Dog implements DogInterface {
    run() { }
    eat() { }
  }

  let a: number | string = 'a'
  let b: 'b' | 'a' | 'c'
  let c: 1 | 2 | 3


  class Cat implements CatInterface {
    jump() { }
    eat() { }
  }

  enum Master { Boy, Girl }

  function getPet(master: Master) {
    let pet = master === Master.Boy ? new Dog() : new Cat()
    //在示例并未确定时，只能访问它的共有成员,交集 
    pet.eat()
    // pet.run()
    return pet
  }

  interface Square {
    kind: 'squarea'
    size: number
  }

  interface Reactangle {
    kind: 'reactangle'
    with: number
    height: number
  }

  interface Circle {
    kind: 'circle'
    r: number
  }

  type shape = Square | Reactangle | Circle
  function area(s: shape) {
    switch (s.kind) {
      case 'squarea':
        return s.size * s.size
      case 'reactangle':
        return s.height * s.with
      case 'circle':
        return Math.PI * s.r ** 2 
      default:
        return ((e: never) => { throw new Error(e) })(s)
    }
  }
  console.log(area({ kind: 'circle', r: 1 }))

  


}