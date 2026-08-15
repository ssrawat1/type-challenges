<div align="center">

# 🧩 Type Challenges

### My Journey into Advanced TypeScript Type-Level Programming

<p>
A collection of my solutions to the famous <strong>Type Challenges</strong> repository,
where every challenge is solved entirely using the TypeScript type system.
</p>

![TypeScript](https://img.shields.io/badge/TypeScript-Advanced-blue?logo=typescript)
![Easy](https://img.shields.io/badge/Easy-100%25-success)
![Medium](https://img.shields.io/badge/Medium-73%20Solved-orange)
![License](https://img.shields.io/badge/License-MIT-green)

</div>

---

# 📖 About This Repository

This repository contains my solutions to the excellent **Type Challenges** project.

Unlike traditional coding problems, these challenges require **zero runtime JavaScript**.

Every solution is written **entirely in TypeScript's type system**, pushing the compiler to perform complex computations during compile time.

Instead of writing algorithms with variables, loops, or functions, you solve problems using:

- Recursive Types
- Conditional Types
- Generic Constraints
- Template Literal Types
- Variadic Tuples
- Type Inference
- Pattern Matching with `infer`
- Mapped Types
- Key Remapping
- Union Distribution

These challenges completely change the way you think about TypeScript.

---

# 🎯 Progress

| Difficulty | Status |
|------------|--------|
| 🟢 Easy | **100% Complete** |
| 🟡 Medium | **73 Challenges Solved** |
| 🔴 Hard | Coming Soon |

---

# 🚀 Why I Started This Journey

Most developers use TypeScript to catch errors.

I wanted to understand **how TypeScript actually thinks.**

I wanted to know:

- How does recursive type evaluation work?
- Why do some utility types compile instantly while others hit recursion limits?
- How does `infer` actually infer values?
- Why do conditional types distribute over unions?
- What makes one type-level algorithm faster than another?

These challenges forced me to answer those questions by building solutions from scratch.

---

# 💡 What I Learned

## 1. TypeScript Is Much More Than a Type Checker

Before solving these challenges, I thought TypeScript simply verified types.

Now I understand that its type system behaves much like a small functional programming language.

Instead of writing runtime logic, you build compile-time algorithms using recursion, conditional evaluation, and pattern matching.

---

## 2. Performance Exists at the Type Level

One of the biggest surprises was discovering that **types can have performance problems too.**

A solution may be logically correct yet still perform poorly because the compiler has to repeatedly evaluate the same recursive computations.

This taught me to think about:

- avoiding unnecessary recursion
- eliminating repeated computations
- designing reusable utility types
- reducing compiler workload

The same engineering principles that improve runtime code also improve type-level code.

---

## 3. TypeScript Has Practical Limits

As the challenges became more complex, I encountered compiler limits such as excessive type instantiation and recursion depth.

Rather than seeing these as obstacles, they became opportunities to understand:

- compiler evaluation strategies
- recursive optimization techniques
- distributive conditional types
- type simplification
- algorithmic complexity at compile time

---

## 4. Every Challenge Introduced a New Mental Model

Unlike many coding platforms where problems often reuse familiar patterns, almost every Type Challenge introduces a completely new concept.

One challenge might focus on recursive tuples.

The next might require template literal parsing.

Another might require manipulating unions.

Every solution expands your understanding of how the TypeScript compiler works internally.

---

# 📚 Topics Covered

Throughout these challenges I explored a wide range of advanced TypeScript features.

### Core Type System

- Conditional Types
- Generic Constraints
- Type Inference
- Recursive Types
- Indexed Access Types
- keyof
- typeof
- Utility Types

### Advanced Features

- Template Literal Types
- Variadic Tuple Types
- Mapped Types
- Key Remapping
- infer
- Union Distribution
- Intersection Types
- Recursive Object Traversal

### Type-Level Programming

- Compile-time Algorithms
- String Parsing
- Tuple Manipulation
- Object Transformations
- Numeric Computation
- Boolean Logic
- Recursive Evaluation
- Pattern Matching

---

# 🧠 Skills Strengthened

Working through these challenges significantly improved my understanding of:

- Designing reusable generic utilities
- Reading complex TypeScript codebases
- Debugging difficult compiler errors
- Understanding compiler limitations
- Writing expressive generic APIs
- Thinking recursively
- Optimizing compile-time performance
- Building scalable utility types

---

# ⭐ Why These Challenges Matter

Many developers know **how to use TypeScript.**

Far fewer understand **how TypeScript actually evaluates types.**

Type Challenges help bridge that gap.

The knowledge gained from solving them directly translates into writing:

- cleaner generic APIs
- safer libraries
- reusable utility types
- more maintainable code
- better developer experience

---

# 🎯 Current Goal

- ✅ Finish every Easy challenge
- ✅ Solve 50 Medium challenges
- 🚧 Complete all Medium challenges
- 🎯 Begin Hard challenges
- 🚀 Continue exploring the limits of TypeScript's type system

---

# 📂 Repository Structure

```
.
├── easy/
├── medium/
├── hard/
└── README.md
```

---

# 📖 Official Repository

Huge thanks to the maintainers of **Type Challenges** for creating such an incredible learning resource.

https://github.com/type-challenges/type-challenges

---

# 🤝 Contributions

This repository is primarily a personal learning journey.

However, if you discover a cleaner solution, a better optimization, or another interesting approach, I'd love to learn from it.

Feel free to:

- Open an Issue
- Start a Discussion
- Submit a Pull Request

Learning from different perspectives is one of the best parts of this community.

---

# 🌟 Support

If this repository helps you understand TypeScript better, consider giving it a ⭐.

It motivates me to continue solving more advanced challenges and documenting what I learn along the way.

---

# 📫 Connect With Me

GitHub

**https://github.com/ssrawat1**

Repository

**https://github.com/ssrawat1/type-challenges**

---

<div align="center">

## 🚀 Next Stop

# HARD CHALLENGES 👀

*"The deeper you go into TypeScript, the more you realize it's not just a type system—it's a language of its own."*

</div>
