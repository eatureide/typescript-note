export default () => {

  let obj = {
    a: 1,
    b: 2,
    c: 3
  }

  function getValue<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
    return keys.map((key) => obj[key])
  }

  console.log(getValue(obj, ['a', 'b']))
  // console.log(getValue(obj, ['d', 'e']))

  // keyof T 类型T的所有公共属性字面量的联合类型
  interface obj {
    a: number
    b: number
  }

  let key: keyof obj //这时候key就等于a|b的联合类型

  // T[K] 索引返回操作符，对象T的属性K代表的类型
  let value: obj['a'] //这时候value的类型就是number类型

  // T extends U


}