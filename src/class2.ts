/**
 * 抽象
 * 抽象方法的好处是，你明确知道子类有其它实现，则没必要在父类实现
 * 抽象类的好处是，可以抽离出事物的共性，这样有利于代码的复用和扩展，有利于实现多态
 * 多态的意思是，在父类定义一个抽象方法，在多个子类中，对这个方法有不同实现，运行时，根据不同的对象执行不同的操作，这样就实现了运行时的绑定
 */

abstract class Animal {
  eat() {
    console.log('eat')
  }
  abstract sleep(): void
}

// let animal = new Animal()

class Cat extends Animal {
  constructor(name: string) {
    super()
    this.name = name
  }
  name: string
  run() { }
  sleep() {
    console.log('cat sleep')
  }
}

let cat = new Cat('nya')
cat.eat()

class Pig extends Animal {
  sleep() { console.log('pig sleep') }
}

let pig = new Pig()

let animal: Animal[] = [cat, pig]

animal.forEach((i) => {
  i.sleep()
})

class WorkFlow {
  step1() {
    return this
  }
  step2() {
    return this
  }
}

new WorkFlow().step1().step2()

class MyFlow extends WorkFlow {
  next() {
    console.log(this)
    return this
  }
}

new MyFlow().next().step1().next().step2()