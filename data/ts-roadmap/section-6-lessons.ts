import { RoadmapLesson } from "../roadmapData";

export const section_6_lessons: RoadmapLesson[] = [
  {
    id: 'ts-l6-1',
    title: 'Bridging Types and Reality with Zod',
    slug: 'runtime-safety-zod',
    durationMin: 25,
    type: 'article',
    description: `<h1>Runtime Safety</h1>

TypeScript's types are erased at runtime. To ensure your app is safe when dealing with external data (APIs, LocalStorage, forms), you need runtime validation.

<h2>Schema Validation</h2>
Libraries like <strong>Zod</strong> allow you to define a schema that validates data at runtime and automatically generates a TypeScript type.

<blockquote>
  <strong>Why it Matters:</strong> It turns "unknown" data into "typed safe" data at the boundaries of your application.
</blockquote>`,
    learningPoints: [
      'The difference between static types and runtime validation',
      'Defining schemas with Zod or Valibot',
      'Inferring types from schemas to stay DRY',
      'Handling validation errors gracefully'
    ],
    proTip: {
      title: 'Always Validate Boundaries',
      content: 'Never cast ("as") an API response. Always parse it with a schema. This is the difference between an app that crashes randomly and an app that handles errors elegantly.'
    },
    codeExample: {
      fileName: 'runtime-validation.ts',
      code: `import { z } from 'zod';

const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
});

type User = z.infer<typeof UserSchema>;

// Validate incoming data
const data = UserSchema.parse(rawData); // Throws if invalid`
    }
  },
  {
    id: 'ts-l6-2',
    title: 'Custom Type Guards',
    slug: 'custom-type-guards',
    durationMin: 15,
    type: 'article',
    description: `<h1>Advanced Narrowing</h1>

Sometimes standard narrowing (typeof, in) isn't enough. You might need custom logic to determine a type.

<h2>Type Predicates</h2>
A custom type guard uses the <code>value is X</code> syntax to tell the compiler exactly what type a variable is after a specific check.

<h2>Why use them?</h2>
Custom guards allow you to encapsulate complex narrowing logic into a reusable function that the TypeScript compiler understands.`,
    learningPoints: [
      'Understanding the "is" keyword',
      'Creating reusable type predicate functions',
      'Handling complex object identification',
      'Avoiding common pitfalls with manual casts'
    ],
    proTip: {
      title: 'Is it an Error?',
      content: 'Custom type guards are perfect for catch blocks. Create an "isError(e): e is Error" guard to safely access "e.message" without casting.'
    },
    codeExample: {
      fileName: 'type-guards.ts',
      code: `function isEmployee(user: User | Employee): user is Employee {
  return (user as Employee).salary !== undefined;
}

function isError(err: unknown): err is Error {
  return err instanceof Error;
}

try {
  // some risky operation
} catch (e) {
  if (isError(e)) {
    console.error(e.message); // Safe to access .message
  }
}`
    }
  },
  {
    id: 'ts-l6-3',
    title: 'Discriminated Unions: State Machines',
    slug: 'discriminated-unions-states',
    durationMin: 25,
    type: 'article',
    description: `<h1>Modeling Complex State</h1>

Discriminated Unions are the ultimate pattern for modeling states, events, or different "kinds" of data.

<h2>The "Tag" Property</h2>
Each object in the union has a common property (the "discriminant") with a literal type. This allows TypeScript to distinguish between the members of the union.

<h2>Exhaustive Checking</h2>
When you use a <code>switch</code> on the <code>type</code>, TypeScript knows exactly which properties are available in each case. This is perfect for complex domains like HRIS time events or payment flows.`,
    learningPoints: [
      'Modeling domain logic with discriminated unions',
      'Using "switch" for exhaustive type narrowing',
      'The benefits of a "tag" property',
      'Building type-safe state machines'
    ],
    proTip: {
      title: 'Exhaustiveness Check',
      content: 'Use the "never" type in the default case of your switch statement to ensure you\'ve handled every possible type in the union. If you add a new event type, TS will alert you!'
    },
    codeExample: {
      fileName: 'discriminated-unions.ts',
      code: `type TimeEvent = 
  | { type: 'clock-in'; timestamp: number }
  | { type: 'clock-out'; reason: string }
  | { type: 'break'; duration: number };

function handleEvent(event: TimeEvent) {
  switch (event.type) {
    case 'clock-in':
      console.log("In at:", event.timestamp);
      break;
    case 'clock-out':
      console.log("Out due to:", event.reason);
      break;
    case 'break':
      console.log("Duration:", event.duration);
      break;
  }
}`
    }
  }
];
