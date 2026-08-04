/*
  2257 - MinusOne
  -------
  by Mustafo Faiz (@fayzzzm) #medium #math

  ### Question

  Given a number (always positive) as a type. Your type should return the number decreased by one.

  For example:

  ```ts
  type Zero = MinusOne<1> // 0
  type FiftyFour = MinusOne<55> // 54
  ```

  > View on GitHub: https://tsch.js.org/2257
*/

/* _____________ Your Code Here _____________ */


type Mapping = { "0": "9"; "1": "0"; "2": "1"; "3": "2"; "4": "3"; "5": "4"; "6": "5"; "7": "6"; "8": "7"; "9": "8" };

type Reverse<S extends string> = S extends `${infer F}${infer R}` ? `${Reverse<R>}${F}` : S;

type SubtractFromReversed<S extends string> =
  S extends `${infer F extends keyof Mapping}${infer R}`
  ? F extends "0"
  ? `9${SubtractFromReversed<R>}`
  : `${Mapping[F]}${R}`
  : never;

type StripLeadingZero<S extends string> = S extends `0${infer Rest}` ? (Rest extends "" ? "0" : Rest) : S;

type MinusOne<T extends number> =
  StripLeadingZero<Reverse<SubtractFromReversed<Reverse<`${T}`>>>> extends `${infer N extends number}` ? N : never;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>,
  Expect<Equal<MinusOne<9_007_199_254_740_992>, 9_007_199_254_740_991>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2257/answer
  > View solutions: https://tsch.js.org/2257/solutions
  > More Challenges: https://tsch.js.org
*/
