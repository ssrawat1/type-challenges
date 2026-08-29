/*
  35045 - Longest Common Prefix
  -------
  by Tom Cleary (@thomcleary) #medium

  ### Question

  ### Longest Common Prefix

  Write a type, `LongestCommonPrefix` that returns the longest common prefix string amongst a tuple of strings.

  If there is no common prefix, return an empty string `""`.

  ```ts
  type Common = LongestCommonPrefix<["flower", "flow", "flight"]>
  //   ?^ "fl"

  type Uncommon = LongestCommonPrefix<["dog", "racecar", "race"]>
  //   ?^ ""
  ```
  Inspired by [LeetCode 14. Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/description/)

  > View on GitHub: https://tsch.js.org/35045
*/

/* _____________ Your Code Here _____________ */

type CheckLongestCommonPrefix<S1 extends string, S2 extends string> =
  S1 extends `${infer F1}${infer R1}`
  ? S2 extends `${infer F2}${infer R2}`
  ? F1 extends F2
  ? `${F1}${CheckLongestCommonPrefix<R1, R2>}`
  : "" :
  "" :
  "";


type LongestCommonPrefix<T extends string[], P extends string = ''> =
  P extends ""
  ? T extends [infer F extends string, ...infer R extends string[]]
  ? F extends "" ? "" : LongestCommonPrefix<R, F>
  : ""
  : T extends [infer F1 extends string, ...infer R1 extends string[]]
  ? CheckLongestCommonPrefix<P, F1> extends "" ? ""
  : LongestCommonPrefix<R1, CheckLongestCommonPrefix<P, F1>> : P


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<LongestCommonPrefix<['flower', 'flow', 'flight']>, 'fl'>>,
  Expect<Equal<LongestCommonPrefix<['dog', 'racecar', 'race']>, ''>>,
  Expect<Equal<LongestCommonPrefix<['', '', '']>, ''>>,
  Expect<Equal<LongestCommonPrefix<['a', '', '']>, ''>>,
  Expect<Equal<LongestCommonPrefix<['', 'a', '']>, ''>>,
  Expect<Equal<LongestCommonPrefix<['', '', 'a']>, ''>>,
  Expect<Equal<LongestCommonPrefix<['a', 'a', '']>, ''>>,
  Expect<Equal<LongestCommonPrefix<['a', '', 'a']>, ''>>,
  Expect<Equal<LongestCommonPrefix<['', 'a', 'a']>, ''>>,
  Expect<Equal<LongestCommonPrefix<['a', 'a', 'a']>, 'a'>>,
  Expect<Equal<LongestCommonPrefix<['abc', 'abcd', 'abcde']>, 'abc'>>,
  Expect<Equal<LongestCommonPrefix<[' ', ' ', ' ']>, ' '>>,
  Expect<Equal<LongestCommonPrefix<['type-challenges', 'type-hero', 'typescript']>, 'type'>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/35045/answer
  > View solutions: https://tsch.js.org/35045/solutions
  > More Challenges: https://tsch.js.org
*/
