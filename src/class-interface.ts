/**
 * 类接口只能实现类的共有成员
 * 接口之间可以实现多重继承
 */

interface Human {
  name: string
  eat(): void
  // new(name: string): void
}

class Asian implements Human {
  constructor(name: string) {
    this.name = name
  }
  name: string
  eat() { }
  sleep() { }
}

interface Man extends Human {
  run(): void
}

interface Child {
  cry(): void
}

interface Boy extends Man, Child { }

let boy: Boy = {
  name: '',
  run() { },
  eat() { },
  cry() { }
}

/**
 * 接口还可以继承类，这就相当于，接口把类的成员都抽象了出来，也就是只有类的成员结构，没有具体实现
 * 需要额外注意的是，接口在抽离类的成员的时候，不仅抽离了类的公共成员，而且抽离了私有成员、受保护成员
 * 
 */

class Auto {
  state = 1
  // private state2 = 0 //C不是auto的子类，自然也不能包含它的非共有成员
}

interface AutoInterface extends Auto {
  // name: string
}

class C implements AutoInterface {
  state = 1
  // name = 'boy'
}

class Bus extends Auto implements AutoInterface {
  // 这时候就不需要实现state属性了，因为Bus是Auto的子类
  // name = 'girl'
}

/**
 * 总结
 * 接口之间是可以相互继承的，这样可以实现接口的复用
 * 类之间也可以相互继承，实现方法和属性的复用
 * 接口可以通过类实现，但是接口只能约束类的共有成员，接口可以抽离出类的成员，抽离的时候会包括共有成员，私有成员，受保护成员
 */