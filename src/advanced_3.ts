export default () => {

  interface Obj {
    a: string
    b: string
    c: boolean
  }

  type ReadOnlyObj = Readonly<Obj>

  type PartialObj = Partial<Obj>

  type PickObj = Pick<Obj, 'a' | 'b'>

  type RecordObj = Record<'x' | 'y', Obj>


  let obj = {
    a: 1,
    b: 2,
    c: 3
  }

  function getValue<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
    return keys.map((key) => obj[key])
  }

  console.log(getValue(obj, ['a', 'b']))
  console.log(getValue(obj, ['d', 'e']))

}