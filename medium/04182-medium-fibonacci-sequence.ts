/*
  4182 - Fibonacci Sequence
  -------
  by windliang (@wind-liang) #medium

  ### Question

  Implement a generic `Fibonacci<T>` that takes a number `T` and returns its corresponding [Fibonacci number](https://en.wikipedia.org/wiki/Fibonacci_number).

  The sequence starts:
  1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

  For example
  ```ts
  type Result1 = Fibonacci<3> // 2
  type Result2 = Fibonacci<8> // 21
  ```

  > View on GitHub: https://tsch.js.org/4182
*/

/* _____________ Your Code Here _____________ */

// type SubtractByOne<T extends number, A extends number[] = []> = T extends A["length"] ? T : 

type CreateTuple<T extends number, A extends number[] = []> = T extends A["length"] ? A : CreateTuple<T, [...A, 0]>;

type SubtractByOne<T extends number> = CreateTuple<T> extends [infer F, ...infer R] ? R["length"] : never

type FiboArr<T extends number> = T extends 1 | 2
  ? [1]
  : [...FiboArr<SubtractByOne<T>>, ...FiboArr<SubtractByOne<SubtractByOne<T>>>]

type Fibonacci<T extends number> = [...FiboArr<T>]["length"]


 

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Fibonacci<1>, 1>>,
  Expect<Equal<Fibonacci<2>, 1>>,
  Expect<Equal<Fibonacci<3>, 2>>,
  Expect<Equal<Fibonacci<8>, 21>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/4182/answer
  > View solutions: https://tsch.js.org/4182/solutions
  > More Challenges: https://tsch.js.org
*/
