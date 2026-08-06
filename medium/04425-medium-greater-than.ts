/*
  4425 - Greater Than
  -------
  by ch3cknull (@ch3cknull) #medium #array

  ### Question

  In This Challenge, You should implement a type `GreaterThan<T, U>` like `T > U`

  Negative numbers do not need to be considered.

  For example

  ```ts
  GreaterThan<2, 1> //should be true
  GreaterThan<1, 1> //should be false
  GreaterThan<10, 100> //should be false
  GreaterThan<111, 11> //should be true
  ```

  Good Luck!

  > View on GitHub: https://tsch.js.org/4425
*/

/* _____________ Your Code Here _____________ */

type CreateTuple<N extends number, R extends any[] = []> =
  N extends R['length'] ? R : CreateTuple<N, [...R, 0]>

// digit char-tuple
type Chars<S extends string> =
  S extends `${infer F}${infer R}` ? [F, ...Chars<R>] : []

// O(1) digit comparison via pattern match (same as 2 > 3)
type Order = '0123456789'
type DigitGT<A extends string, B extends string> =
  Order extends `${string}${B}${string}${A}${string}` ? true : false

// walk digit strings left to right once counts match
type CompareEqualLength<A extends string, B extends string> =
  A extends `${infer Ah}${infer Arest}`
  ? B extends `${infer Bh}${infer Brest}`
  ? Ah extends Bh ? CompareEqualLength<Arest, Brest> : DigitGT<Ah, Bh>
  : false
  : false

type GreaterThan<N1 extends number, N2 extends number> =
  N1 extends N2 ? false :
  CreateTuple<Chars<`${N1}`>['length']> extends [...CreateTuple<Chars<`${N2}`>['length']>, ...infer Rest]
  ? Rest extends [] ? CompareEqualLength<`${N1}`, `${N2}`> : true
  : false

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<GreaterThan<1, 0>, true>>,
  Expect<Equal<GreaterThan<5, 4>, true>>,
  Expect<Equal<GreaterThan<4, 5>, false>>,
  Expect<Equal<GreaterThan<0, 0>, false>>,
  Expect<Equal<GreaterThan<10, 9>, true>>,
  Expect<Equal<GreaterThan<20, 20>, false>>,
  Expect<Equal<GreaterThan<10, 100>, false>>,
  Expect<Equal<GreaterThan<111, 11>, true>>,
  Expect<Equal<GreaterThan<1234567891011, 1234567891010>, true>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/4425/answer
  > View solutions: https://tsch.js.org/4425/solutions
  > More Challenges: https://tsch.js.org
*/
