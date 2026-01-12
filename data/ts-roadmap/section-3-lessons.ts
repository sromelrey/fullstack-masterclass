import { RoadmapLesson } from "../roadmapData";

export const section_3_lessons: RoadmapLesson[] = [
  {
    id: 'ts-l3-1',
    title: 'Objects & Modeling: Beyond Basic Shapes',
    slug: 'ts-objects-modeling',
    durationMin: 20,
    type: 'article',
    description: `<h1>Modeling Real-World Data</h1>

Modeling domain data cleanly is core to a professional TypeScript workflow.

<h2>Optional & Readonly Properties</h2>
<ul>
  <li><strong>Optional (?):</strong> Indicates a property might not exist.</li>
  <li><strong>Readonly:</strong> Prevents a property from being reassigned after initialization.</li>
</ul>

<h2>Excess Property Checks</h2>
TypeScript is strict when you assign an object literal directly to a type. It will complain if you add extra properties that aren't defined in the interface. This helps catch typos!

<h2>Structural Typing</h2>
TypeScript uses "Duck Typing." If an object has all the required properties of a type, it <strong>is</strong> that type, even if it wasn't explicitly declared as such.`,
    learningPoints: [
      'Using optional and readonly properties effectively',
      'Understanding Excess Property Checks vs. Structural Typing',
      'How "Duck Typing" works in TypeScript',
      'Modeling domain-specific interfaces'
    ],
    proTip: {
      title: 'Readonly for Safety',
      content: 'Use readonly by default for IDs and configuration objects. It prevents accidental mutations that are incredibly hard to track down in large apps.'
    },
    codeExample: {
      fileName: 'objects.ts',
      code: `interface User {
  readonly id: string;
  name: string;
  email?: string;
}

const user: User = { 
  id: "u123", 
  name: "Romel" 
};

// user.id = "u456"; // Error: Cannot assign to 'id' because it is a read-only property.`
    }
  },
  {
    id: 'ts-l3-2',
    title: 'Index Signatures vs. Record',
    slug: 'index-signatures-vs-record',
    durationMin: 15,
    type: 'article',
    description: `<h1>Mapping Dynamic Keys</h1>

Sometimes you don't know the property names in advance, but you know the <em>type</em> of the values.

<h2>Index Signatures</h2>
The classic way to define a dynamic object. It allow keys of a certain type to map to values of another type.

<h2>The Record Utility</h2>
A cleaner, more modern alternative for simple key-value mappings.

<blockquote>
  <strong>Comparison:</strong> Use <code>Record</code> for simple mappings. Use Index Signatures inside an interface if you need to combine dynamic keys with some fixed properties.
</blockquote>`,
    learningPoints: [
      'When to use Index Signatures',
      'The benefits of using the Record utility type',
      'Combining fixed and dynamic properties',
      'Common pitfalls with string indexers'
    ],
    proTip: {
      title: 'noUncheckedIndexedAccess',
      content: 'Remember that flag from Section 1? It makes both Record and Index Signatures much safer by forcing you to check if a key actually exists.'
    },
    codeExample: {
      fileName: 'dynamic-keys.ts',
      code: `// Index Signature
interface Cache {
  [key: string]: string;
}

// Record Utility
type UserCache = Record<string, string>;

const cache: UserCache = {
  "u1": "Romel",
  "u2": "Masterclass"
};`
    }
  },
  {
    id: 'ts-l3-3',
    title: 'as const: Locking Down Literals',
    slug: 'as-const-literals',
    durationMin: 15,
    type: 'article',
    description: `<h1>Const Assertions</h1>

The <code>as const</code> assertion is one of the most powerful tools for modeling exact data.

<h2>What it Does</h2>
It deep-freezes the types of a variable:
<ul>
  <li>Strings become exact literal types (e.g., "loading" instead of string).</li>
  <li>Arrays become readonly tuples.</li>
  <li>Object properties become readonly.</li>
</ul>`,
    learningPoints: [
      'Preventing type widening with as const',
      'Creating readonly tuples from arrays',
      'Using const assertions for configuration objects',
      'Why "as const" is better than regular "const" for types'
    ],
    proTip: {
      title: 'Config Mastery',
      content: 'Always Use "as const" for configuration objects and constant lists. It allows other parts of your app to derive exact types from your data.'
    },
    codeExample: {
      fileName: 'const-assertions.ts',
      code: `const COLORS = {
  PRIMARY: '#0070f3',
  SECONDARY: '#111',
} as const;

// COLORS.PRIMARY is now the type '#0070f3', not just string.

const ROUTES = ["/home", "/about"] as const;
// ROUTES is now a readonly tuple: readonly ["/home", "/about"]`
    }
  }
];
