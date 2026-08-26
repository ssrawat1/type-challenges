/*
  30958 - Pascal's triangle
  -------
  by Aswin S Vijay (@aswinsvijay) #medium #array #math

  ### Question

  Given a number N, construct the Pascal's triangle with N rows.
  [Wikipedia](https://en.wikipedia.org/wiki/Pascal%27s_triangle)

  > View on GitHub: https://tsch.js.org/30958
*/

/* _____________ Your Code Here _____________ */

type CreateTuple<
  N extends number,
  R extends unknown[] = []
> = R['length'] extends N
  ? R
  : CreateTuple<N, [...R, 0]>

type Add<
  A extends number,
  B extends number
> = [
  ...CreateTuple<A>,
  ...CreateTuple<B>
]['length'] & number

type NextRow<
  R extends number[],
  Result extends number[] = [1]
> =
  R extends [
    infer A extends number,
    infer B extends number,
    ...infer Rest extends number[]
  ]
  ? NextRow<
    [B, ...Rest],
    [...Result, Add<A, B>]
  >
  : [...Result, 1]

type Last<R extends number[][]> =
  R extends [...number[][], infer L extends number[]]
  ? L
  : never

type Pascal<
  N extends number,
  Rows extends number[][] = [[1]]
> =
  Rows['length'] extends N
  ? Rows
  : Pascal<
    N,
    [...Rows, NextRow<Last<Rows>>]
  >

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<
    Equal<
      Pascal<1>,
      [
        [1],
      ]
    >
  >,
  Expect<
    Equal<
      Pascal<3>,
      [
        [1],
        [1, 1],
        [1, 2, 1],
      ]
    >
  >,
  Expect<
    Equal<
      Pascal<5>,
      [
        [1],
        [1, 1],
        [1, 2, 1],
        [1, 3, 3, 1],
        [1, 4, 6, 4, 1],
      ]
    >
  >,
  Expect<
    Equal<
      Pascal<7>,
      [
        [1],
        [1, 1],
        [1, 2, 1],
        [1, 3, 3, 1],
        [1, 4, 6, 4, 1],
        [1, 5, 10, 10, 5, 1],
        [1, 6, 15, 20, 15, 6, 1],
      ]
    >
  >,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/30958/answer
  > View solutions: https://tsch.js.org/30958/solutions
  > More Challenges: https://tsch.js.org
*/
