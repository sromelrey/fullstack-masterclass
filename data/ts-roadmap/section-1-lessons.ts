import { RoadmapLesson } from "../roadmapData";

export const section_1_lessons: RoadmapLesson[] = [
  {
    id: 'ts-l1-1',
    title: 'TypeScript vs. JavaScript: The Build-Time Secret',
    slug: 'ts-vs-js',
    durationMin: 15,
    type: 'article',
    description: `<h1>TypeScript vs. JavaScript</h1>

The most fundamental thing to understand about TypeScript is that it is a <strong>compile-time tool</strong>.

<h2>Type Erasure</h2>
In JavaScript, types are dynamic and exist at runtime. In TypeScript, types are used for checking your logic, but they are <strong>completely erased</strong> during the build process.

<blockquote>
  <strong>Key Insight:</strong> Once your code is compiled to JavaScript, all interfaces, type aliases, and type annotations vanish. The browser never sees your "types."
</blockquote>

<h2>Working Confidently</h2>
Understanding that TS doesn't change how your code <em>runs</em>, but how you <em>write</em> it, is the first step to confidence. You aren't learning a new language; you're learning a <strong>static analysis tool</strong> for JavaScript.`,
    learningPoints: [
      'The difference between runtime and compile-time',
      'Understanding Type Erasure',
      'Why TypeScript doesn\'t affect your application\'s runtime performance',
      'The mental model: TypeScript as a sophisticated linter'
    ],
    proTip: {
      title: 'Check the Output',
      content: 'If you\'re ever confused about what TypeScript is doing, look at the generated .js file. You\'ll see that for every 10 lines of TS, you might only have 5 lines of JS because the types are gone.'
    },
    codeExample: {
      fileName: 'setup-check.js',
      code: `// Verify your environment
function checkEnvironment() {
  console.log("Node version:", process.version);
  console.log("Environment ready for Fullstack Development!");
}

checkEnvironment();`
    }
  },
  {
    id: 'ts-l1-2',
    title: 'tsconfig.json Essentials',
    slug: 'tsconfig-essentials',
    durationMin: 20,
    type: 'article',
    description: `<h1>Mastering tsconfig.json</h1>

The <code>tsconfig.json</code> file is your contract with the TypeScript compiler. To work "confidently," you need to enable the right guards.

<h2>The "Strict" Foundation</h2>
Setting <code>"strict": true</code> enables a suite of checks that ensure your code is as safe as possible.

<h3>Essential Flags</h3>
<ul>
  <li><strong>noImplicitAny:</strong> Prevents you from accidentally leaving variables as "any" when TS can't infer them.</li>
  <li><strong>noUncheckedIndexedAccess:</strong> Ensures that when you access an array by index (e.g., <code>arr[0]</code>), TS reminds you it might be <code>undefined</code>.</li>
  <li><strong>exactOptionalPropertyTypes:</strong> Prevents you from assigning <code>undefined</code> to an optional property if the property should be omitted entirely.</li>
</ul>`,
    learningPoints: [
      'The power of "strict" mode',
      'Handling implicit "any" errors',
      'Safe array access with noUncheckedIndexedAccess',
      'Strict optional property checking'
    ],
    proTip: {
      title: 'Don\'t Fight the Config',
      content: 'It might feel annoying when TS complains about an array access being undefined, but that\'s exactly where runtime crashes happen. Embrace these flags early!'
    },
    codeExample: {
      fileName: 'tsconfig.json',
      code: `{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true
  }
}`
    }
  },
  {
    id: 'ts-l1-3',
    title: 'Mental Model: Type Errors',
    slug: 'type-errors-mental-model',
    durationMin: 15,
    type: 'article',
    description: `<h1>Understanding Type Errors</h1>

When TypeScript throws an error, beginners often fix the <strong>symptom</strong> rather than the <strong>source</strong>.

<h2>Where it Originates vs. Where it Appears</h2>
A type error might <strong>appear</strong> inside a complex function, but it usually <strong>originates</strong> from where the data was first defined or passed in.

<h3>The Squiggle Hunt</h3>
Don't just look at the red squiggle. Look at the <strong>breadcrumbs</strong>:
<ul>
  <li>Where was this variable initialized?</li>
  <li>What interface does this parameter expect?</li>
  <li>Is the source of the data (like an API response) properly typed?</li>
</ul>

<blockquote>
  <strong>Goal:</strong> Stop "fixing" errors by adding <code>as any</code>. Start following the type trail back to its origin.
</blockquote>`,
    learningPoints: [
      'Developing a debugging mindset for TS',
      'Tracing errors back to the source',
      'Why "as any" is a temporary band-aid, not a fix',
      'Reading complex TypeScript error messages'
    ],
    proTip: {
      title: 'Hover is Your Friend',
      content: 'Always hover over variables to see what TS thinks they are at that exact point in time. Often, the type you think a variable has is not what TS has inferred.'
    },
    codeExample: {
      fileName: 'origin-vs-appearance.ts',
      code: `interface User {
  id: string;
  settings: {
    theme: 'dark' | 'light';
  };
}

function updateTheme(user: User, newTheme: string) {
  // Appearance: Error occurs here
  // user.settings.theme = newTheme; 
  // Error: Type 'string' is not assignable to type '"dark" | "light"'

  // Origin: The parameter 'newTheme' should have been typed narrowly!
}

// Correct fix: Tracing back to the parameter definition.
function updateThemeFixed(user: User, newTheme: 'dark' | 'light') {
  user.settings.theme = newTheme;
}`
    }
  }
];
