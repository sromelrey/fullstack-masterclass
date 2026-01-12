import { RoadmapLesson } from "../roadmapData";

export const section_2_lessons: RoadmapLesson[] = [
  {
    id: 'ts-l2-1',
    title: 'The Core Vocabulary: More than just Strings',
    slug: 'ts-core-types',
    durationMin: 20,
    type: 'article',
    description: `<h1>Core Vocabulary</h1>

To use TypeScript naturally, you need to master its primary building blocks.

<h2>Primitives & Arrays</h2>
You already know <code>string</code>, <code>number</code>, and <code>boolean</code>. Arrays are just as simple: <code>number[]</code> or <code>Array&lt;number&gt;</code>.

<h2>Tuples</h2>
Tuples allow you to express an array with a fixed number of elements whose types are known. This is perfect for coordinates, RGB values, or hook returns.

<h2>Specialized Types: never & void</h2>
<ul>
  <li><strong>void:</strong> Used for functions that return nothing.</li>
  <li><strong>never:</strong> Used for values that <em>should never occur</em> (like a function that always throws an error).</li>
</ul>`,
    learningPoints: [
      'Working with arrays and tuples',
      'The difference between void and never',
      'When to explicitly type vs. relying on inference',
      'Mental model for tuples in real-world scenarios'
    ],
    proTip: {
      title: 'Tuples for APIs',
      content: 'Tuples are great for returning multiple values from a hook, like React\'s useState: [value, setter].'
    },
    codeExample: {
      fileName: 'core-types.ts',
      code: `// Tuples
let coordinate: [number, number] = [10, 20];
let response: [number, string] = [404, "Not Found"];

// void: Returns nothing
function log(message: string): void {
  console.log(message);
}

// never: Never returns (throws or loops)
function fail(message: string): never {
  throw new Error(message);
}`
    }
  },
  {
    id: 'ts-l2-2',
    title: 'unknown vs. any: The Safety Gap',
    slug: 'unknown-vs-any',
    durationMin: 15,
    type: 'article',
    description: `<h1>Safe Uncertainty</h1>

Both <code>any</code> and <code>unknown</code> can represent any value, but their safety profiles are worlds apart.

<h2>The "Wild West" of any</h2>
Using <code>any</code> tells TypeScript: "Stop checking this variable entirely." You can call any method on it, even if it doesn't exist.

<h2>The "Fortress" of unknown</h2>
Using <code>unknown</code> tells TypeScript: "I don't know what this is yet, and <strong>you won't let me use it</strong> until I prove what it is."

<blockquote>
  <strong>Pro Rule:</strong> If you're receiving data from an outside source (API, user input), prefer <code>unknown</code> over <code>any</code>.
</blockquote>`,
    learningPoints: [
      'Why "any" is dangerous for long-term maintenance',
      'How "unknown" enforces safe checks',
      'Working with the unknown type in practice',
      'Migrating from any to unknown'
    ],
    proTip: {
      title: 'The unknown Barrier',
      content: 'When you use unknown, TS forces you to use "Type Narrowing" before you can touch the data. This is how you stop fighting TS and start working with it.'
    },
    codeExample: {
      fileName: 'safety.ts',
      code: `let data: unknown;

// data.push(1); // Error: Object is of type 'unknown'.

if (Array.isArray(data)) {
  data.push(1); // Success! TS knows it's an array now.
}`
    }
  },
  {
    id: 'ts-l3-3',
    title: 'Unions vs. Enums: Choosing the Modern Way',
    slug: 'unions-vs-enums',
    durationMin: 20,
    type: 'article',
    description: `<h1>Unions vs. Enums</h1>

Many developers reach for <code>Enums</code> because they exist in other languages like Java or C#. In modern TypeScript, <strong>Literal Union Types</strong> are often preferred.

<h2>The Problem with Enums</h2>
Enums are one of the few TS features that generate actual JavaScript code (objects). They can also have strange behaviors with number-based values.

<h2>The Power of Unions</h2>
Union types combined with Literal types are lightweight, clear, and generate zero JavaScript. They are the standard for modeling possible values in modern apps.

<blockquote>
  <strong>Recommendation:</strong> Use String Unions for 90% of your use cases. Reserve Enums for when you truly need a named bitmask or a mapping that exists at runtime.
</blockquote>`,
    learningPoints: [
      'The downsides of traditional Enums',
      'Creating flexible Literal Union types',
      'Inference with Union types',
      'Best practices for defining constants'
    ],
    proTip: {
      title: 'String Literals',
      content: 'String literal unions provide excellent autocomplete in IDEs without the overhead of importing an Enum object.'
    },
    codeExample: {
      fileName: 'unions-over-enums.ts',
      code: `// The Union Way (Clean, zero JS overhead)
type Status = 'loading' | 'success' | 'error';
type Direction = 'North' | 'South' | 'East' | 'West';
let move: Direction = 'North'; 

// The Enum Way (Generates an object in JS)
enum DirectionEnum {
  North,
  South,
  East,
  West
}
let moveEnum: DirectionEnum = DirectionEnum.North;`
    }
  },
  {
    id: 'ts-l2-4',
    title: 'Mastering Type Narrowing',
    slug: 'type-narrowing',
    durationMin: 25,
    type: 'article',
    description: `<h1>Narrowing the Scope</h1>

Type narrowing is the art of moving from a broad type (like a union or <code>unknown</code>) to a specific one.

<h2>The Narrowing Toolbox</h2>
<ul>
  <li><strong>typeof:</strong> Check for primitives like 'string' or 'number'.</li>
  <li><strong>in:</strong> Check if a property exists on an object.</li>
  <li><strong>instanceof:</strong> Check if an object is an instance of a class.</li>
  <li><strong>Truthiness:</strong> Simple <code>if (value)</code> checks.</li>
  <li><strong>Equality:</strong> Using <code>===</code> to compare variables.</li>
</ul>`,
    learningPoints: [
      'Using control-flow analysis',
      'Narrowing with typeof and instanceof',
      'Using the "in" operator for objects',
      'Developing a habit of safe checks'
    ],
    proTip: {
      title: 'Discriminated Unions',
      content: 'Add a common "kind" or "type" property to your objects to make narrowing incredibly simple and exhaustive.'
    },
    codeExample: {
      fileName: 'narrowing.ts',
      code: `// Equality Narrowing
function compare(x: string | number, y: string | boolean) {
  if (x === y) {
    // Both x and y must be 'string' here!
    console.log(x.toUpperCase()); 
  }
}

// 'in' Operator
interface Bird { fly(): void; }
interface Fish { swim(): void; }

function move(animal: Bird | Fish) {
  if ("fly" in animal) {
    animal.fly();
  } else {
    animal.swim();
  }
}`
    }
  }
];
