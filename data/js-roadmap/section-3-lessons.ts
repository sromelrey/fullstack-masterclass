import { RoadmapLesson } from "../roadmapData";

export const section_3_lessons: RoadmapLesson[] = [
  { 
    id: 'l2-0', 
    title: 'Data Types Overview', 
    slug: 'data-types-overview', 
    durationMin: 10,
    type: 'article',
    description: `<h1>Data Types Overview</h1>

Understanding data types is <strong>fundamental</strong> to mastering JavaScript. Before we dive into the specifics, let's understand what data types are and why they matter.

<h2>What Are Data Types?</h2>

A <b>data type</b> defines the kind of value a variable can hold and what operations can be performed on it. In JavaScript, data types determine how memory is allocated and how values behave.

<h2>JavaScript is Dynamically Typed</h2>

Unlike statically typed languages (like Java or C++), JavaScript is <strong>dynamically typed</strong>. This means:

• You don't have to declare a variable's type explicitly
• A variable can hold different types of values at different times
• Type checking happens at <em>runtime</em>, not compile time

<h3>Example:</h3>
<code>let value = 42;        // number</code>
<code>value = "hello";       // now it's a string</code>
<code>value = true;          // now it's a boolean</code>

This flexibility is powerful but can also lead to subtle bugs if you're not careful.

<h2>The 8 Data Types in JavaScript</h2>

JavaScript has exactly <strong>8 data types</strong>, divided into two categories:

<h3>Primitive Types (7 types)</h3>
1. <b>String</b> – Text data: <code>"hello"</code>, <code>'world'</code>
2. <b>Number</b> – Numeric data: <code>42</code>, <code>3.14</code>, <code>Infinity</code>, <code>NaN</code>
3. <b>BigInt</b> – Large integers: <code>9007199254740991n</code>
4. <b>Boolean</b> – Logical values: <code>true</code>, <code>false</code>
5. <b>Undefined</b> – Variable declared but not assigned: <code>undefined</code>
6. <b>Null</b> – Intentional absence of value: <code>null</code>
7. <b>Symbol</b> – Unique identifier (ES6+): <code>Symbol('id')</code>

<h3>Non-Primitive Type (1 type)</h3>
8. <b>Object</b> – Complex data structures (includes arrays, functions, dates, etc.)

<h2>The typeof Operator</h2>

JavaScript provides the <code>typeof</code> operator to check a value's type:

<code>typeof "hello"     // "string"</code>
<code>typeof 42          // "number"</code>
<code>typeof true        // "boolean"</code>
<code>typeof undefined   // "undefined"</code>
<code>typeof null        // "object" (⚠️ historical bug!)</code>
<code>typeof {}          // "object"</code>
<code>typeof []          // "object"</code>
<code>typeof function(){} // "function"</code>

<h2>Why This Matters</h2>

Understanding data types helps you:
• Predict how values behave in operations
• Avoid unexpected type coercion bugs
• Write more intentional and reliable code
• Debug issues faster when they occur`,
    learningPoints: [
      'JavaScript has 8 data types: 7 primitive + 1 non-primitive (object)',
      'JavaScript is dynamically typed—variables can change types at runtime',
      'The typeof operator helps identify a value\'s type',
      'Understanding types prevents bugs and improves debugging skills',
    ],
    proTip: {
      title: 'The null Bug',
      content: 'typeof null returns "object"—this is a bug from JavaScript\'s early days that was never fixed for backwards compatibility. Use value === null for null checks instead.',
    },
  },
  { 
    id: 'l2-1', 
    title: 'Primitive Types', 
    slug: 'primitive-types', 
    durationMin: 30,
    type: 'article',
    description: `<h1>Primitive Types</h1>

<b>Primitives</b> are the most basic data types in JavaScript. They represent single, immutable values—and understanding them deeply is essential.

<h2>What Makes a Type "Primitive"?</h2>

Two key characteristics define primitive types:

1. <b>Immutable</b>: The actual value cannot be changed (though variables can be reassigned)
2. <b>Stored by Value</b>: When copied, the actual value is duplicated, not a reference

<h2>🔤 String</h2>

Strings represent text data. They can be created with single quotes, double quotes, or backticks (template literals):

<code>const name = 'Alice';</code>
<code>const greeting = "Hello";</code>
<code>const message = \`Hi, ` + `$` + `{name}!\`;</code>

<h3>Key Points:</h3>
• Strings are immutable—you can't change individual characters
• Template literals (backticks) allow string interpolation and multiline strings
• String methods like <code>.toUpperCase()</code> return NEW strings

<h2>🔢 Number</h2>

JavaScript uses a single <code>Number</code> type for all numeric values—both integers and decimals.

<code>const integer = 42;</code>
<code>const decimal = 3.14159;</code>
<code>const negative = -100;</code>

<h3>Special Number Values:</h3>
• <code>Infinity</code> / <code>-Infinity</code>: Result of division by zero
• <code>NaN</code> (Not a Number): Result of invalid math operations
• Numbers use 64-bit floating point (IEEE 754)

<h3>Precision Warning:</h3>
<code>0.1 + 0.2 === 0.3  // false! (0.30000000000000004)</code>

<h2>🔷 BigInt</h2>

For integers larger than <code>Number.MAX_SAFE_INTEGER</code> (2⁵³ - 1), use BigInt:

<code>const huge = 9007199254740991n;</code>
<code>const alsoBig = BigInt("12345678901234567890");</code>

Note: BigInt cannot be mixed with regular numbers in operations.

<h2>✅ Boolean</h2>

Booleans represent logical values: <code>true</code> or <code>false</code>.

<code>const isLoggedIn = true;</code>
<code>const hasPermission = false;</code>

<h3>Truthy and Falsy Values</h3>
Every value in JavaScript can be converted to a boolean. <b>Falsy values</b>:
• <code>false</code>, <code>0</code>, <code>-0</code>, <code>0n</code>
• <code>""</code> (empty string)
• <code>null</code>, <code>undefined</code>, <code>NaN</code>

Everything else is <b>truthy</b>.

<h2>❓ Undefined vs Null</h2>

These are often confused:

<b>undefined</b>: Variable declared but never assigned
<code>let x;</code>
<code>console.log(x); // undefined</code>

<b>null</b>: Intentional absence of value
<code>let user = null; // explicitly "no value"</code>

<h3>Rule of Thumb:</h3>
• Let JavaScript set <code>undefined</code>
• Use <code>null</code> when YOU want to indicate "no value"

<h2>✨ Symbol (ES6+)</h2>

Symbols create unique, immutable identifiers:

<code>const id1 = Symbol('id');</code>
<code>const id2 = Symbol('id');</code>
<code>id1 === id2  // false (always unique!)</code>

Primary use: Create truly private or unique object keys.`,
    learningPoints: [
      'Primitives are immutable and stored by value',
      'String, Number, Boolean are the most commonly used primitives',
      'BigInt handles integers larger than Number.MAX_SAFE_INTEGER',
      'undefined means "not assigned"; null means "intentionally empty"',
      'Symbols create guaranteed unique identifiers',
    ],
    proTip: {
      title: 'Floating Point Trap',
      content: 'Never use == or === to compare decimal numbers directly. Use Math.abs(a - b) < 0.0001 or a library like decimal.js for precise decimal arithmetic.',
    },
    codeExample: {
      fileName: 'primitive-types.js',
      code: `// Primitives are immutable
let str = "hello";
str[0] = "H";  // Does nothing!
console.log(str); // "hello"

// Primitives are stored by value
let a = 10;
let b = a;  // b gets a COPY
b = 20;
console.log(a); // 10 (unchanged)

// Special number values
console.log(1 / 0);          // Infinity
console.log("abc" * 2);      // NaN
console.log(0.1 + 0.2);      // 0.30000000000000004

// Falsy values
if (!"") console.log("Empty string is falsy");
if (!0) console.log("Zero is falsy");
if (!null) console.log("Null is falsy");`
    },
  },
  { 
    id: 'l2-1a', 
    title: 'Non-Primitive (Reference) Types', 
    slug: 'non-primitive-types', 
    durationMin: 15,
    type: 'article',
    description: `<h1>Non-Primitive (Reference) Types</h1>

While primitives represent single values, <b>non-primitives</b> (also called <em>reference types</em>) can hold <strong>collections of values</strong> and more complex entities.

<h2>The Object Type</h2>

In JavaScript, <code>Object</code> is the only non-primitive type. However, many things you use daily are actually objects:

• <b>Plain Objects</b>: <code>{ name: 'Alice', age: 30 }</code>
• <b>Arrays</b>: <code>[1, 2, 3]</code>
• <b>Functions</b>: <code>function() {}</code>
• <b>Dates</b>: <code>new Date()</code>
• <b>Regular Expressions</b>: <code>/pattern/</code>
• <b>Maps, Sets, WeakMaps, WeakSets</b>

<h2>Stored by Reference</h2>

This is the <strong>critical difference</strong> from primitives:

When you assign an object to a variable, the variable doesn't contain the object itself—it contains a <em>reference</em> (pointer) to where the object lives in memory.

<h3>Implication:</h3>
<code>const obj1 = { name: 'Alice' };</code>
<code>const obj2 = obj1;  // Both point to SAME object!</code>
<code>obj2.name = 'Bob';</code>
<code>console.log(obj1.name); // 'Bob' (changed!)</code>

<h2>Objects Are Mutable</h2>

Unlike primitives, you CAN modify object contents:

<code>const user = { name: 'Alice' };</code>
<code>user.name = 'Bob';     // ✅ Allowed</code>
<code>user.age = 30;         // ✅ Allowed</code>
<code>// user = {};          // ❌ Error (const prevents reassignment)</code>

<h2>Arrays: Ordered Collections</h2>

Arrays are a special type of object for ordered lists:

<code>const numbers = [1, 2, 3, 4, 5];</code>
<code>const mixed = ['text', 42, true, null];</code>

Arrays have numeric indices and a <code>length</code> property.

<h2>Functions: Callable Objects</h2>

Yes, functions are objects! They can have properties and be passed around:

<code>function greet() { return 'Hello'; }</code>
<code>greet.customProp = 'I am a property';</code>
<code>console.log(greet.customProp); // 'I am a property'</code>

This is why functions are called "first-class citizens" in JavaScript.

<h2>Comparing Objects</h2>

When you compare objects with <code>===</code>, you're comparing <em>references</em>, not contents:

<code>{ a: 1 } === { a: 1 }  // false (different objects)</code>
<code>[] === []              // false (different arrays)</code>

<code>const arr1 = [1, 2];</code>
<code>const arr2 = arr1;</code>
<code>arr1 === arr2          // true (same reference)</code>

<h2>Type Checking Objects</h2>

<code>typeof</code> isn't always helpful for objects:

<code>typeof {}           // "object"</code>
<code>typeof []           // "object" (not "array"!)</code>
<code>typeof null         // "object" (bug!)</code>
<code>typeof function(){} // "function"</code>

Better approaches:
<code>Array.isArray([])           // true</code>
<code>obj instanceof Date         // true/false</code>
<code>Object.prototype.toString.call(value)</code>`,
    learningPoints: [
      'Object is the only non-primitive type (arrays, functions, dates are all objects)',
      'Objects are stored by reference, not by value',
      'Objects are mutable—their contents can be changed',
      'Comparing objects with === compares references, not contents',
      'Use Array.isArray() and instanceof for accurate type checking',
    ],
    proTip: {
      title: 'Cloning Objects',
      content: 'To create a true copy of an object (not just a reference), use spread syntax: const clone = { ...original } for shallow copies, or structuredClone(original) for deep copies.',
    },
    codeExample: {
      fileName: 'reference-types.js',
      code: `// Reference vs Value
const primitive = "hello";
let copy = primitive;
copy = "world";
console.log(primitive); // "hello" (unchanged)

const object = { greeting: "hello" };
const ref = object;
ref.greeting = "world";
console.log(object.greeting); // "world" (changed!)

// Shallow vs Deep Clone
const original = { nested: { value: 1 } };
const shallow = { ...original };
shallow.nested.value = 999;
console.log(original.nested.value); // 999 (oops!)

const deep = structuredClone(original);
deep.nested.value = 0;
console.log(original.nested.value); // 999 (safe!)`
    },
  },
  { 
    id: 'l2-2', 
    title: 'Operators and Precedence', 
    slug: 'operators', 
    durationMin: 35,
    type: 'article',
    description: `<h1>Operators and Operator Precedence</h1>

<b>Operators</b> are special symbols that perform operations on values (operands). Understanding operators and their <strong>precedence</strong> (order of execution) is crucial for writing correct expressions.

<h2>What is an Operator?</h2>

An operator is a special function that uses <em>symbolic syntax</em>. When you write:

<code>3 + 4</code>

The <code>+</code> is an operator, and <code>3</code> and <code>4</code> are operands.

<h2>Types of Operators by Operand Count</h2>

• <b>Unary</b>: One operand (<code>!true</code>, <code>-5</code>, <code>typeof x</code>)
• <b>Binary</b>: Two operands (<code>3 + 4</code>, <code>a === b</code>)
• <b>Ternary</b>: Three operands (<code>condition ? a : b</code>)

<h2>Arithmetic Operators</h2>

<code>+</code>  Addition / Concatenation
<code>-</code>  Subtraction
<code>*</code>  Multiplication
<code>/</code>  Division
<code>%</code>  Modulus (remainder)
<code>**</code> Exponentiation (ES2016)
<code>++</code> Increment
<code>--</code> Decrement

<h2>Assignment Operators</h2>

<code>=</code>   Simple assignment
<code>+=</code>  Addition assignment
<code>-=</code>  Subtraction assignment
<code>*=</code>  Multiplication assignment
<code>/=</code>  Division assignment
<code>%=</code>  Modulo assignment
<code>**=</code> Exponentiation assignment

<h2>Comparison Operators</h2>

<code>==</code>  Equal (with type coercion)
<code>===</code> Strict equal (no coercion)
<code>!=</code>  Not equal
<code>!==</code> Strict not equal
<code>></code>   Greater than
<code><</code>   Less than
<code>>=</code>  Greater than or equal
<code><=</code>  Less than or equal

<h2>Logical Operators</h2>

<code>&&</code>  Logical AND
<code>||</code>  Logical OR
<code>!</code>   Logical NOT
<code>??</code>  Nullish coalescing (ES2020)

<h2>What is Operator Precedence?</h2>

<b>Operator precedence</b> determines which operations execute first in an expression with multiple operators:

<code>3 + 4 * 5</code> equals <code>23</code>, not <code>35</code>

Because <code>*</code> has higher precedence than <code>+</code>.

<h2>Precedence Table (Highest to Lowest)</h2>

1. <code>()</code> Grouping
2. <code>.</code> <code>[]</code> <code>()</code> Member access, call
3. <code>new</code> (with arguments)
4. <code>++</code> <code>--</code> (postfix)
5. <code>!</code> <code>~</code> <code>+</code> <code>-</code> <code>typeof</code> (unary)
6. <code>**</code> Exponentiation
7. <code>*</code> <code>/</code> <code>%</code>
8. <code>+</code> <code>-</code>
9. <code><</code> <code>></code> <code><=</code> <code>>=</code> <code>instanceof</code>
10. <code>==</code> <code>===</code> <code>!=</code> <code>!==</code>
11. <code>&&</code>
12. <code>||</code>
13. <code>??</code>
14. <code>?:</code> Ternary
15. <code>=</code> <code>+=</code> etc. Assignment

<h2>Associativity</h2>

When operators have the <em>same</em> precedence, <b>associativity</b> determines order:

• <b>Left-to-right</b>: <code>10 - 5 - 2</code> = <code>(10 - 5) - 2</code> = <code>3</code>
• <b>Right-to-left</b>: <code>a = b = 5</code> = <code>a = (b = 5)</code>

Assignment is right-to-left, most others are left-to-right.

<h2>Best Practice: Use Parentheses</h2>

When in doubt, use <code>()</code> to make your intent clear:

<code>const result = (a + b) * c;  // Clear intent</code>
<code>const result = a + b * c;    // Relies on precedence</code>`,
    learningPoints: [
      'Operators are special functions with symbolic syntax (unary, binary, ternary)',
      'JavaScript has arithmetic, assignment, comparison, and logical operators',
      'Operator precedence determines which operations execute first',
      'Associativity determines order when operators have equal precedence',
      'Use parentheses to make complex expressions clear and intentional',
    ],
    proTip: {
      title: 'The ?? Operator',
      content: 'Use ?? (nullish coalescing) instead of || when you want to provide a default only for null/undefined—not for falsy values like 0 or "". Example: count ?? 10 returns 0 if count is 0, but count || 10 returns 10.',
    },
    codeExample: {
      fileName: 'operators-precedence.js',
      code: `// Precedence matters
console.log(3 + 4 * 5);       // 23 (not 35)
console.log((3 + 4) * 5);     // 35 (parentheses first)

// Associativity
let a, b, c;
a = b = c = 10;  // Right-to-left
console.log(a, b, c);  // 10, 10, 10

// Logical operator short-circuit
const result = false && expensiveOperation(); // Never runs!
const name = userName || "Guest";  // Fallback

// Nullish vs OR
const count = 0;
console.log(count || 10);   // 10 (0 is falsy)
console.log(count ?? 10);   // 0 (0 is not null/undefined)

// Unary plus for type conversion
console.log(+"42");    // 42 (number)
console.log(+true);    // 1`
    },
  },
  { 
    id: 'l2-3', 
    title: 'Type Coercion', 
    slug: 'coercion', 
    durationMin: 40,
    type: 'article',
    description: `<h1>Type Coercion</h1>

<b>Type coercion</b> is JavaScript's automatic conversion of values from one type to another. This is one of the "weird parts" that trips up many developers.

<h2>Implicit vs Explicit Coercion</h2>

<b>Explicit coercion</b>: You intentionally convert types
<code>Number("42")  // 42</code>
<code>String(42)    // "42"</code>
<code>Boolean(1)    // true</code>

<b>Implicit coercion</b>: JavaScript converts automatically
<code>"5" * 2       // 10</code>
<code>"5" + 2       // "52" (string concat!)</code>

<h2>String Coercion</h2>

Values are coerced to strings when:
• Using <code>+</code> with a string operand
• Inside template literals

<code>"5" + 1        // "51"</code>
<code>"5" + null     // "5null"</code>
<code>"5" + undefined // "5undefined"</code>
<code>\`Value: ` + `$` + `{42}\`</code>  // "Value: 42"

<h2>Number Coercion</h2>

Values are coerced to numbers when:
• Using numeric operators: <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code>
• Using comparison operators
• Using unary <code>+</code>

<code>"6" - 2        // 4</code>
<code>"3" * "4"      // 12</code>
<code>true + true    // 2</code>
<code>false + 1      // 1</code>
<code>+null          // 0</code>
<code>+undefined     // NaN</code>

<h2>Boolean Coercion</h2>

Values are coerced to booleans in:
• Condition checks (<code>if</code>, <code>while</code>, ternary)
• Logical operators context

<h3>Falsy Values (convert to false):</h3>
<code>false</code>, <code>0</code>, <code>-0</code>, <code>0n</code>, <code>""</code>, <code>null</code>, <code>undefined</code>, <code>NaN</code>

<h3>Everything else is truthy:</h3>
<code>"0"</code> (string zero), <code>[]</code> (empty array), <code>{}</code> (empty object), <code>"false"</code> (string)

<h2>The Abstract Equality Algorithm (==)</h2>

When using <code>==</code>, JavaScript follows complex coercion rules:

<code>null == undefined   // true (special case)</code>
<code>"1" == 1            // true (string to number)</code>
<code>true == 1           // true (boolean to number)</code>
<code>[] == false         // true (both to number 0)</code>
<code>"" == 0             // true (both to number 0)</code>

<h2>Why Strict Equality (===) is Better</h2>

<code>===</code> compares type AND value without coercion:

<code>"1" === 1           // false (different types)</code>
<code>true === 1          // false (different types)</code>
<code>null === undefined  // false (different types)</code>

<h2>Object Coercion</h2>

Objects have <code>valueOf()</code> and <code>toString()</code> methods called during coercion:

<code>[1,2] + [3,4]       // "1,23,4"</code>
<code>[] + {}             // "[object Object]"</code>
<code>{} + []             // 0 (empty block + array)</code>

<h2>Best Practices</h2>

1. Always use <code>===</code> and <code>!==</code>
2. Be explicit about type conversions
3. Understand coercion for debugging, but don't rely on it
4. Be especially careful with <code>+</code> operator`,
    learningPoints: [
      'Type coercion is automatic type conversion by JavaScript',
      'Implicit coercion happens with operators; explicit uses functions like Number()',
      'The + operator can both add numbers and concatenate strings',
      'Falsy values: false, 0, "", null, undefined, NaN',
      'Always use === instead of == to avoid coercion surprises',
    ],
    proTip: {
      title: 'Quick Type Conversion Tricks',
      content: 'To explicitly convert: Number("42") or +"42", String(42) or 42+"", Boolean(x) or !!x. These are clearer than relying on implicit coercion.',
    },
    codeExample: {
      fileName: 'type-coercion.js',
      code: `// The + trap
console.log(5 + "5");    // "55" (string)
console.log(5 - "5");    // 0 (number)
console.log("5" * "2");  // 10 (number)

// Truthy/Falsy surprises
if ("0") console.log("'0' is truthy!");
if ([]) console.log("Empty array is truthy!");
if ({}) console.log("Empty object is truthy!");

// == vs ===
console.log(1 == "1");    // true (coerced)
console.log(1 === "1");   // false (strict)
console.log(null == undefined);   // true
console.log(null === undefined);  // false

// Explicit conversion
const input = "42";
const num = Number(input);    // 42
const str = String(123);      // "123"
const bool = Boolean("yes");  // true`
    },
  },
  { 
    id: 'l2-4', 
    title: 'Comparison Operators', 
    slug: 'comparison', 
    durationMin: 25,
    type: 'article',
    description: `<h1>Comparison Operators</h1>

<b>Comparison operators</b> compare two values and return a boolean (<code>true</code> or <code>false</code>). Mastering them is essential for writing correct conditional logic.

<h2>Equality Operators</h2>

<h3>== (Abstract Equality)</h3>
Compares values <em>after</em> type coercion:
<code>"5" == 5      // true</code>
<code>0 == false    // true</code>
<code>null == undefined // true</code>

<h3>=== (Strict Equality)</h3>
Compares type AND value, no coercion:
<code>"5" === 5     // false</code>
<code>0 === false   // false</code>
<code>null === undefined // false</code>

<h2>Inequality Operators</h2>

<code>!=</code> – Not equal (with coercion)
<code>!==</code> – Strict not equal (no coercion)

<code>"5" != 5      // false (becomes equal after coercion)</code>
<code>"5" !== 5     // true (different types)</code>

<h2>Relational Operators</h2>

<code>></code>   Greater than
<code><</code>   Less than
<code>>=</code>  Greater than or equal
<code><=</code>  Less than or equal

<h3>Number Comparisons:</h3>
<code>5 > 3         // true</code>
<code>5 >= 5        // true</code>
<code>3 < 3         // false</code>

<h3>String Comparisons (Lexicographic):</h3>
<code>"apple" < "banana"  // true</code>
<code>"A" < "a"           // true (ASCII order)</code>
<code>"10" < "9"          // true (string comparison!)</code>

<h2>Comparing Different Types</h2>

When comparing different types with <code><</code>, <code>></code>, etc., JavaScript tries to convert to numbers:

<code>"10" > 9      // true (string "10" → 10)</code>
<code>"10" > "9"    // false (lexicographic!)</code>
<code>null > 0      // false</code>
<code>null >= 0     // true</code>
<code>null == 0     // false (special case!)</code>

<h2>Comparing Objects</h2>

Objects are compared by <em>reference</em>, not by value:

<code>{ a: 1 } === { a: 1 }  // false</code>
<code>[1, 2] === [1, 2]      // false</code>

<code>const arr = [1, 2];</code>
<code>const same = arr;</code>
<code>arr === same           // true</code>

<h2>Special Cases</h2>

<h3>NaN Comparisons:</h3>
<code>NaN === NaN    // false (NaN is never equal to anything!)</code>
<code>Number.isNaN(NaN)  // true (use this instead)</code>

<h3>null and undefined:</h3>
<code>null == undefined   // true</code>
<code>null === undefined  // false</code>
<code>null == 0           // false (special behavior)</code>

<h2>Best Practices</h2>

1. <b>Always use === and !==</b> for predictable comparisons
2. Use <code>Number.isNaN()</code> to check for NaN
3. Be careful comparing strings that look like numbers
4. For object equality, compare properties or use JSON.stringify()`,
    learningPoints: [
      '=== (strict equality) compares type and value without coercion',
      '== (abstract equality) coerces types before comparing—avoid it',
      'String comparisons are lexicographic (alphabetical by character code)',
      'Objects are compared by reference, not by content',
      'NaN !== NaN—use Number.isNaN() for NaN checks',
    ],
    proTip: {
      title: 'Deep Object Comparison',
      content: 'To compare object contents, use JSON.stringify(a) === JSON.stringify(b) for simple cases, or use a library like Lodash\'s _.isEqual() for deep comparisons with proper handling of edge cases.',
    },
    codeExample: {
      fileName: 'comparison-operators.js',
      code: `// Strict vs Abstract Equality
console.log(1 == "1");    // true (coercion)
console.log(1 === "1");   // false (strict)

// String comparison gotcha
console.log("10" > "9");  // false (lexicographic)
console.log(10 > 9);      // true

// NaN is special
console.log(NaN === NaN);        // false!
console.log(Number.isNaN(NaN));  // true

// Object reference comparison
const a = { x: 1 };
const b = { x: 1 };
const c = a;
console.log(a === b);  // false (different objects)
console.log(a === c);  // true (same reference)

// Deep comparison workaround
console.log(JSON.stringify(a) === JSON.stringify(b)); // true`
    },
  },
];
