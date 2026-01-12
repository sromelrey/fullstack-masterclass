import { RoadmapLesson } from "../roadmapData";

export const section_4_lessons: RoadmapLesson[] = [
  {
    id: 'ts-l4-1',
    title: 'Function Types & Inference',
    slug: 'ts-function-types',
    durationMin: 15,
    type: 'article',
    description: `<h1>Functions: The Logic Layer</h1>

In TypeScript, functions are first-class citizens with robust typing capabilities.

<h2>Typing Higher-Order Functions</h2>
You can define the "shape" of a function using an arrow-style syntax. This is the foundation for passing functions as arguments.

<h2>Return Type Inference</h2>
TypeScript is excellent at inferring what a function returns based on its implementation. However, explicit return types are recommended for public APIs to prevent unintended changes.

<h2>Rest Parameters</h2>
Typing a rest parameter is as simple as typing an array, ensuring that all additional arguments adhere to a specific type.`,
    learningPoints: [
      'Defining function types and interfaces',
      'Leveraging return type inference',
      'Typing rest parameters and spread operators',
      'Working with higher-order functions'
    ],
    proTip: {
      title: 'Explicit Returns',
      content: 'Explicitly defining return types for large functions makes them easier to read and prevents you from accidentally returning the wrong data type after a complex refactor.'
    },
    codeExample: {
      fileName: 'functions.ts',
      code: `// Arrow function type
type GreetFn = (name: string) => void;
type MathFn = (a: number, b: number) => number;

const add: MathFn = (a, b) => a + b;

// Higher-order function
function execute(fn: MathFn, a: number, b: number) {
  return fn(a, b);
}

// Rest parameters
function join(...parts: string[]) {
  return parts.join(" ");
}`
    }
  },
  {
    id: 'ts-l4-2',
    title: 'Generics: Reusable Safety',
    slug: 'ts-generics-basics',
    durationMin: 25,
    type: 'article',
    description: `<h1>Generics: The Type Variable</h1>

Generics are like arguments for your types. They allow you to write logic once and apply it to many different data shapes.

<h2>Syntax & Constraints</h2>
The <code><T></code> syntax captures a type. You can use <code>extends</code> to constrain what <code>T</code> can be, ensuring it has certain properties.

<h2>Default Generics</h2>
Similar to default function arguments, you can provide a fallback type if one isn't explicitly provided or inferred.`,
    learningPoints: [
      'The mental model of "type variables"',
      'Applying generic constraints with extends',
      'Providing default types for generics',
      'Generic inference in function calls'
    ],
    proTip: {
      title: 'Constraints over Any',
      content: 'Never use <T> alone if you know T must satisfy a certain interface. Use "extends" to keep the type safety while maintaining flexibility.'
    },
    codeExample: {
      fileName: 'generics.ts',
      code: `// Constraints
function logLength<T extends { length: number }>(arg: T) {
  console.log(arg.length);
}

// Default Generics
interface Container<T = string> {
  content: T;
}

// Utility function
function wrapInArray<T>(value: T): T[] {
  return [value];
}

const numArr = wrapInArray(10); // number[]
const strArr = wrapInArray("hi"); // string[]`
    }
  },
  {
    id: 'ts-l4-3',
    title: 'Overloads & the satisfies Operator',
    slug: 'overloads-satisfies',
    durationMin: 20,
    type: 'article',
    description: `<h1>Advanced Function Patterns</h1>

Sometimes a function can be called in multiple ways, or you need to validate an object against a type without "widening" it.

<h2>Function Overloads</h2>
Overloads allow you to define multiple signatures for a single function implementation. 
<blockquote>
  <strong>Advice:</strong> Use sparingly. Often, union types or generics are a cleaner solution.
</blockquote>

<h2>The satisfies Operator</h2>
Added in TS 4.9, <code>satisfies</code> is a game-changer. It validates that an object matches a type <strong>without changing the object's narrowest possible type</strong>.`,
    learningPoints: [
      'Writing and implementing function overloads',
      'When to prefer overloads vs. unions',
      'Using satisfies for configuration objects',
      'The difference between type annotation and satisfies'
    ],
    proTip: {
      title: 'Always satisfies',
      content: 'Prefer "satisfies" for local constants and configurations. It gives you the validation you want while preserving the best possible autocomplete for that specific object.'
    },
    codeExample: {
      fileName: 'satisfies.ts',
      code: `const config = {
  endpoint: 'api.example.com',
  retries: 3
} satisfies Record<string, string | number>;

// TS still knows config.retries is a number!
// If we used ': Record<...>', config.retries would be 'string | number'`
    }
  }
];
