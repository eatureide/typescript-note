class Dog {
  constructor(name: string) {
    this.name = name
  }
  public name: string = 'dog'
  run() { }
  private pri() { }
  protected pro() { }
  readonly length: number = 4
  static food: string = 'bones'
}
//无论是es还是ts中，类成员的属性都是实例属性，而不是原型属性，类成员的方法都是实例方法

console.log(Dog.prototype)
// dog.pri()
// dog.pro()
// console.log(Dog.food, dog.food)
const dog = new Dog('wangwang') // name属性只在实例上，而不在原型上

console.log(dog)

class Husky extends Dog {
  constructor(name: string, public color: string) {
    super(name)
    this.color = color
    // this.pri()
    this.pro()
  }
  // color: string
}
console.log(Husky.food)

/**
 * 成员修饰符
 * @public
 * 共有成员，类的属性默认都是共有成员，也可以显式
 *
 * @private
 * 私有成员，只能在类的本身被调用，而不能被类的实例调用，也不能被子类调用，如果给构造函数添（constructor）加private，则表示该类不能被实例化，也不能被继承
 *
 * @protected
 * 受保护成员，只能在类，或者子类访问，而不能在实例访问，在构造函数中使用，则表示该类不能被实例化，只能被继承
 *
 * @readonly
 * 只读属性一定要被初始化，且不能更改
 *
 * @static
 * 静态成员，只能通过类名调用，也可以是子类，不能通过实例调用
 *
 * 构造函数也可以添加修饰符，将参数自动变成实例的属性，就能省略在类中的定义
 */

 