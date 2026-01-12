import { RoadmapLesson } from "../roadmapData";

export const section_5_lessons: RoadmapLesson[] = [
  {
    id: 'ts-l5-1',
    title: 'The Essential Utility Types',
    slug: 'ts-utility-types',
    durationMin: 20,
    type: 'article',
    description: `<h1>Transforming Types</h1>

TypeScript provides several built-in utility types to facilitate common type transformations.

<h2>The "Shape" Changers</h2>
<ul>
  <li><strong>Partial&lt;T&gt;:</strong> Makes all properties in T optional.</li>
  <li><strong>Required&lt;T&gt;:</strong> Makes all properties in T required.</li>
  <li><strong>Readonly&lt;T&gt;:</strong> Makes all properties in T readonly.</li>
</ul>

<h2>The "Selection" Tools</h2>
<ul>
  <li><strong>Pick&lt;T, K&gt;:</strong> Constructs a type by picking a set of properties K from T.</li>
  <li><strong>Omit&lt;T, K&gt;:</strong> Constructs a type by picking all properties from T and then removing K.</li>
</ul>`,
    learningPoints: [
      'Mastering Partial, Required, and Readonly',
      'Filtering types with Pick and Omit',
      'When to use built-in utilities vs. custom interfaces',
      'Deep vs. shallow transformation awareness'
    ],
    proTip: {
      title: 'Composition over Redefinition',
      content: 'Don\'t create separate "UpdateUser" and "CreateUser" interfaces from scratch. Use "Partial<User>" or "Omit<User, \'id\'>" to keep your code DRY and synced.'
    },
    codeExample: {
      fileName: 'utilities.ts',
      code: `interface User {
  id: string;
  name: string;
  email: string;
}

// Partial: All props optional
type UpdateUser = Partial<User>;

// Pick: Only specific props
type UserIdentifier = Pick<User, 'id' | 'name'>;

// Omit: Remove specific props
type UserWithoutEmail = Omit<User, 'email'>;`
    }
  },
  {
    id: 'ts-l5-2',
    title: 'Advanced Helpers: ReturnType & Awaited',
    slug: 'advanced-ts-helpers',
    durationMin: 15,
    type: 'article',
    description: `<h1>Extracting Reality</h1>

Sometimes you need to derive a type from an existing function or a Promise's resolution.

<h2>ReturnType&lt;T&gt;</h2>
Captures the type returned by a function. This is extremely useful when working with factory functions or third-party hooks.

<h2>Awaited&lt;T&gt;</h2>
Unwraps a Promise to get the underlying type, allowing you to work with the data shape that will eventually resolve.

<h2>Parameters&lt;T&gt;</h2>
Obtains the parameters of a function type in a tuple, which is great for building wrappers or decorators.`,
    learningPoints: [
      'Using typeof with ReturnType',
      'Unwrapping asynchronous types with Awaited',
      'Inspecting function parameters with types',
      'Building utility chains'
    ],
    proTip: {
      title: 'Third-Party Safety',
      content: 'ReturnType is a lifesaver when working with libraries that don\'t export the specific return types of their hooks or functions.'
    },
    codeExample: {
      fileName: 'advanced-helpers.ts',
      code: `// ReturnType
function getUser() { return { id: 1, name: "Alice" }; }
type User = ReturnType<typeof getUser>;

// Awaited
type Resolved = Awaited<Promise<string>>; // string

// Parameters
type Args = Parameters<(a: string, b: number) => void>; // [string, number]`
    }
  },
  {
    id: 'ts-l5-3',
    title: 'Template Literals & Mapped Types',
    slug: 'template-literals-mapped-types',
    durationMin: 20,
    type: 'article',
    description: `<h1>The Meta-Layer</h1>

TypeScript allows you to programmatically create new types based on existing ones.

<h2>Template Literal Types</h2>
Build exact string types using template literal syntax, enabling precise modeling of string patterns like event names or API endpoints.

<h2>Mapped Types</h2>
Iterate over keys to create a new type, often used to make all properties of an object readonly or optional.

<h2>keyof</h2>
The <code>keyof</code> operator takes an object type and produces a string or number literal union of its keys.`,
    learningPoints: [
      'Generating string unions with template literals',
      'Transforming objects with Mapped Types',
      'Extracting keys with the keyof operator',
      'Basic patterns for Conditional Types'
    ],
    proTip: {
      title: 'Type-Safe Selectors',
      content: 'Use "keyof T" to create a function that can only accept valid property names of an object, providing perfect autocomplete for your team.'
    },
    codeExample: {
      fileName: 'meta-programming.ts',
      code: [
        '// Template Literal Types',
        'type Permission = "view" | "edit";',
        'type Resource = "employees" | "payroll";',
        'type FullPermission = `$' + '{Resource}.$' + '{Permission}`;',
        '',
        '// Mapped Types',
        'type FeatureFlags = {',
        "  [K in 'theme' | 'sidebar']: boolean;",
        '};',
        '',
        '// Built-in example using keyof',
        'type Readonly<T> = {',
        '  readonly [P in keyof T]: T[P];',
        '};'
      ].join('\n')
    }
  }
];
