import { RoadmapLesson } from "../roadmapData";

export const section_2_lessons:RoadmapLesson[] = [
        { 
          id: 'l1-0', 
          title: 'Conceptual Aside: The Big Three', 
          slug: 'conceptual-aside-big-three', 
          durationMin: 5,
          type: 'article',
          description: `<h1>Conceptual Aside: The Big Three</h1>

Throughout this course, we'll have lectures that are <strong>asides</strong>.

That means we're going to cover something just off to the side of what we were talking about directly—but <em>very, very important</em> to understanding whatever technique, aspect, or concept of JavaScript we're about to explore.

Each aside might have a particular type. In this case, we're going to do a <strong>Conceptual Aside</strong>.

<h2>What is a Conceptual Aside?</h2>

A conceptual aside focuses on a <strong>concept or idea</strong> that's fundamental to the rest of the course. We're building slowly, deliberately—layer by layer—to deepen your understanding of JavaScript.

This conceptual aside will cover <strong>three ideas</strong>:

• <b>Syntax Parsers</b>
• <b>Execution Contexts</b>
• <b>Lexical Environments</b>

These are fundamental concepts, fundamental ideas to understanding the rest of what we're going to talk about. You're going to see these ideas come up again and again throughout the rest of this course.

Now all three of these are complicated-sounding terms that actually aren't that difficult to understand. So we're gonna give you your first <strong>three Concept Alerts</strong> in a row.

<h2>🚨 Concept Alert #1: Syntax Parser</h2>

<strong>Definition:</strong> A program that reads your code and determines what it does and if its grammar or syntax is valid.

When you write JavaScript, it isn't magically, directly telling the computer what to do. You're abstracted away from all of that. You're writing code, but then someone else—or other people—built programs that <strong>convert your JavaScript</strong> into something the computer can understand.

Those programs are called <strong>compilers</strong> and, at times, they also have to do with <strong>interpreters</strong>.

<h3>Character by Character</h3>

These programs—interpreters and compilers—do the work of actually reading your code <em>character by character</em>, determining if the syntax is valid, and then implementing that syntax in a way the computer can understand.

So when you're thinking about your code, think of it more like this:

You have your code that you've written, and there's a program that is going to convert what you've written into a real set of computer instructions—something the hardware can physically understand.

If you have a function with a variable, that function and variable will be represented in memory. But it's being <strong>translated</strong> from what you're writing (what is more human-readable) to what the computer can understand.

<h3>The Translation Process</h3>

There's a compiler or an interpreter between those two things, and part of that is a <strong>syntax parser</strong>.

It's going through character by character like <code>F-U-N-C-T-I-O-N</code>. And it says, "Oh, that's <code>function</code>, so there should be a space after this. And then the next thing I see up until the parenthesis will be the name of the function," etc., etc.

That gets translated by the systems that someone else wrote.

<h3>Why This Matters</h3>

But that also means that in that translation process, if they so choose, the programmers that wrote the compiler can choose to <strong>do extra stuff</strong>.

Your code is not what's actually being given to the computer but <em>the translation of it</em>. And so along the way, the engine that is interpreting your code can decide to do other things.

And in fact, that's going to come up as an <strong>important element</strong> of understanding JavaScript.

<h2>🚨 Concept Alert #2: Lexical Environment</h2>

<strong>Definition:</strong> Where something sits physically in the code you write.

The word <em>lexical</em> means having to do with words or grammar. So we're talking about the code you're writing—its syntax, its vocabulary.

<h3>Where You Write Matters</h3>

Lexical environment exists in programming languages in which <strong>where you write something is important</strong>. That sounds kinda funny, but actually, not every programming language is that way.

Remember, we said you might have some code—let's say a function with a variable inside of it. The variable sits <strong>lexically inside the function</strong>. That is, physically in the code that you're writing, that's where it sits.

But remember, we said that your code is not what's actually given directly to the computer. It's translated into something the computer can understand.

<h3>Physical Position = Memory Position</h3>

But in programming languages where the lexical environment is important, that means that <strong>where you see things written</strong> gives you an idea of where it will actually sit in the computer's memory and how it will interact with other variables, functions, and elements of the program.

And that's because the program—the compiler that's converting your code to those instructions—<em>cares about where you put things</em>. It makes decisions. That syntax parser going through everything makes decisions.

So when we talk about the <strong>lexical environment</strong> of something in the code, we're talking about <em>where it's written and what surrounds it</em>.

<h2>🚨 Concept Alert #3: Execution Context</h2>

<strong>Definition:</strong> A wrapper to help manage the code that is running.

There are lots of lexical environments—areas of the code that you are looking at physically. But <strong>which one is currently actually running?</strong> That's managed via what's called <strong>execution contexts</strong>.

<h3>Managing Running Code</h3>

An execution context contains your code—the running code. It's running your code, but it also can contain things <em>beyond what you've written in your code</em>.

Because remember again, your code is being translated, being processed by a whole other set of programs that someone else wrote. And so it's executing your code, and it can do other things as well.

That's what's happening inside JavaScript—we'll see that very shortly.

<h2>Remember These Three</h2>

So, <strong>lexical environments</strong>, <strong>execution contexts</strong>, <strong>syntax parsers</strong>—just remember, it's important. We're going to hear these terms, understand them, throughout the course.

And it will give us a basis to understand what's happening <em>under the hood</em> in JavaScript.`,
          learningPoints: [
            'What a Syntax Parser is and how it translates your code character by character',
            'Why the translation process allows the JavaScript engine to do "extra stuff"',
            'What a Lexical Environment is and why physical code placement matters',
            'How Execution Contexts manage which code is currently running',
            'The relationship between these three foundational concepts',
          ],
          proTip: {
            title: 'Foundation First',
            content: 'These three concepts—Syntax Parsers, Lexical Environments, and Execution Contexts—form the mental model for everything else in JavaScript. If something feels confusing later, come back to these fundamentals. Understanding the "why" makes the "how" much easier.',
          },
        },
        { 
          id: 'l1-0a', 
          title: 'A Brief History of JavaScript', 
          slug: 'javascript-history', 
          durationMin: 8,
          type: 'article',
          description: `<h1>A Brief History of JavaScript</h1>

Before we dive deep into the language, let's take a moment to understand <strong>where JavaScript came from</strong>. Knowing its origins helps explain many of its quirks and design decisions.

<h2>The Birth of JavaScript (1995)</h2>

JavaScript was created by <strong>Brendan Eich</strong> at Netscape Communications in <strong>just 10 days</strong> in May 1995. Yes, you read that right—10 days. This rapid development timeline explains some of JavaScript's infamous "weird parts."

The browser wars were heating up. Netscape Navigator was competing with Microsoft's Internet Explorer, and Netscape wanted a scripting language that could make web pages interactive. They needed something <em>fast</em>.

<h2>The Name Game</h2>

JavaScript has had quite the identity crisis:

• <b>Mocha</b> – The original internal codename
• <b>LiveScript</b> – The official name when it first shipped in Netscape Navigator 2.0 (September 1995)
• <b>JavaScript</b> – Renamed in December 1995 as part of a marketing partnership with Sun Microsystems

<h3>Wait, is JavaScript related to Java?</h3>

<strong>No.</strong> Despite the similar name, JavaScript and Java are fundamentally different languages. The name was a <em>marketing decision</em>—Java was hot at the time, and Netscape wanted to ride that wave. As the saying goes: "Java is to JavaScript as ham is to hamster."

<h2>ECMAScript: The Standard</h2>

To ensure JavaScript worked consistently across browsers, it was submitted to <strong>ECMA International</strong> for standardization in 1996. The official name of the standard is <b>ECMAScript</b> (or ES for short).

Key milestones:

• <b>ES1 (1997)</b> – First edition of the standard
• <b>ES3 (1999)</b> – Added regular expressions, try/catch, and more
• <b>ES5 (2009)</b> – Strict mode, JSON support, array methods
• <b>ES6/ES2015 (2015)</b> – The big one! Classes, arrow functions, let/const, promises, modules
• <b>ES2016+</b> – Annual releases with incremental improvements

<h2>JavaScript Today</h2>

JavaScript has grown far beyond its browser origins:

• <b>Frontend</b>: React, Vue, Angular, Svelte
• <b>Backend</b>: Node.js, Deno, Bun
• <b>Mobile</b>: React Native, Ionic
• <b>Desktop</b>: Electron
• <b>IoT</b>: Johnny-Five, Espruino

From a 10-day prototype to the <strong>most widely used programming language in the world</strong>—JavaScript's journey is nothing short of remarkable.`,
          learningPoints: [
            'JavaScript was created by Brendan Eich at Netscape in just 10 days (1995)',
            'The name evolved from Mocha → LiveScript → JavaScript (marketing tie to Java)',
            'ECMAScript is the official standard (ES6/ES2015 was a major milestone)',
            'JavaScript now runs everywhere: browsers, servers, mobile, desktop, and IoT',
          ],
          proTip: {
            title: 'Understanding the Past',
            content: 'When you encounter something "weird" in JavaScript, ask yourself: "What problem were they solving in 1995 with only 10 days?" This mindset turns frustration into understanding.',
          },
        },
        { 
          id: 'l1-0b', 
          title: 'JavaScript Keywords and Reserved Words', 
          slug: 'keywords-reserved-words', 
          durationMin: 5,
          type: 'article',
          description: `<h1>JavaScript Keywords and Reserved Words</h1>

Every programming language has <strong>reserved words</strong>—special words that the language uses for its own purposes. In JavaScript, these words have specific meanings, and you <em>cannot</em> use them as variable names, function names, or identifiers.

<h2>What Are Keywords?</h2>

<b>Keywords</b> are words that JavaScript has set aside because they perform specific actions or have special meanings in the language. When the syntax parser reads your code, it recognizes these words and treats them differently.

For example, when the parser sees <code>function</code>, it knows you're about to define a function. When it sees <code>if</code>, it knows a conditional statement is coming.

<h2>Current JavaScript Keywords</h2>

Here are the keywords you'll encounter most frequently:

<h3>Declaration Keywords</h3>
<code>var</code>, <code>let</code>, <code>const</code>, <code>function</code>, <code>class</code>

<h3>Control Flow Keywords</h3>
<code>if</code>, <code>else</code>, <code>switch</code>, <code>case</code>, <code>default</code>, <code>break</code>, <code>continue</code>, <code>return</code>

<h3>Loop Keywords</h3>
<code>for</code>, <code>while</code>, <code>do</code>, <code>in</code>, <code>of</code>

<h3>Error Handling Keywords</h3>
<code>try</code>, <code>catch</code>, <code>finally</code>, <code>throw</code>

<h3>Other Important Keywords</h3>
<code>this</code>, <code>new</code>, <code>typeof</code>, <code>instanceof</code>, <code>void</code>, <code>delete</code>, <code>async</code>, <code>await</code>, <code>yield</code>, <code>import</code>, <code>export</code>, <code>extends</code>, <code>super</code>, <code>static</code>

<h2>Reserved for Future Use</h2>

JavaScript also reserves words for <em>potential future use</em>. Even if they don't do anything today, you can't use them as identifiers:

<code>enum</code>, <code>implements</code>, <code>interface</code>, <code>package</code>, <code>private</code>, <code>protected</code>, <code>public</code>

<h2>Strict Mode Additional Reservations</h2>

In strict mode (<code>'use strict'</code>), additional words are reserved:

<code>arguments</code>, <code>eval</code>, <code>let</code>, <code>static</code>, <code>yield</code>

<h2>Common Gotchas</h2>

• You <strong>cannot</strong> name a variable <code>class</code> or <code>function</code>
• <code>await</code> is reserved inside async functions
• <code>undefined</code> and <code>NaN</code> are not keywords, but you still shouldn't reassign them
• Be careful with <code>arguments</code>—it's a special object inside functions`,
          learningPoints: [
            'Keywords are reserved words with special meaning to the JavaScript parser',
            'You cannot use keywords as variable names, function names, or identifiers',
            'Some words are reserved for future ECMAScript versions',
            'Strict mode reserves additional words like arguments and eval',
          ],
          proTip: {
            title: 'Naming Best Practices',
            content: 'If your IDE highlights a variable name in a different color or gives you an error, it might be a reserved word. Use descriptive names like userClass instead of class to avoid conflicts.',
          },
        },
        { 
          id: 'l1-0c', 
          title: 'Variables: var, let, and const', 
          slug: 'var-let-const', 
          durationMin: 15,
          type: 'article',
          description: `<h1>Variables: var, let, and const</h1>

Variables are fundamental to any programming language. They're containers that <strong>store data values</strong>. In JavaScript, we have three ways to declare variables: <code>var</code>, <code>let</code>, and <code>const</code>. Understanding the differences is <em>crucial</em>.

<h2>Variable Declaration vs Initialization</h2>

Before we dive in, let's clarify two important terms:

• <b>Declaration</b>: Creating a variable (reserving memory for it)
• <b>Initialization</b>: Assigning a value to the variable

<h2>var: The Original (ES5 and earlier)</h2>

<code>var</code> was the only way to declare variables before ES6. It has two key characteristics:

<h3>1. Function Scope</h3>
Variables declared with <code>var</code> are scoped to the <em>function</em> they're declared in, not the block.

<h3>2. Hoisting</h3>
<code>var</code> declarations are "hoisted" to the top of their scope. The declaration moves up, but not the initialization.

<b>The Problem:</b> This can lead to confusing bugs. A variable can be used before it appears to be declared, returning <code>undefined</code> instead of throwing an error.

<h2>let: Block-Scoped Variables (ES6+)</h2>

<code>let</code> was introduced in ES6 to address the quirks of <code>var</code>:

<h3>1. Block Scope</h3>
Variables declared with <code>let</code> are scoped to the <em>block</em> they're in (inside <code>{}</code>).

<h3>2. Temporal Dead Zone (TDZ)</h3>
Unlike <code>var</code>, you <strong>cannot</strong> access a <code>let</code> variable before its declaration. Attempting to do so throws a <code>ReferenceError</code>.

<h3>3. No Re-declaration</h3>
You cannot declare the same variable twice with <code>let</code> in the same scope.

<h2>const: Constants (ES6+)</h2>

<code>const</code> is like <code>let</code>, but with one additional rule:

<h3>Immutable Binding</h3>
Once a <code>const</code> variable is assigned, you <strong>cannot reassign</strong> it to a different value.

<b>Important:</b> "Immutable binding" does NOT mean "immutable value." If you assign an object or array to a <code>const</code>, you can still modify the object's properties or array's elements—you just can't reassign the variable itself.

<h2>Quick Comparison</h2>

| Feature | var | let | const |
|---------|-----|-----|-------|
| Scope | Function | Block | Block |
| Hoisting | Yes (undefined) | Yes (TDZ) | Yes (TDZ) |
| Re-declaration | Allowed | Not allowed | Not allowed |
| Re-assignment | Allowed | Allowed | Not allowed |

<h2>Best Practices</h2>

1. <b>Default to const</b> – Use <code>const</code> by default for all variables
2. <b>Use let when needed</b> – Switch to <code>let</code> only when you need to reassign
3. <b>Avoid var</b> – In modern JavaScript, there's rarely a reason to use <code>var</code>

This approach makes your code more predictable and easier to reason about.`,
          learningPoints: [
            'var is function-scoped and hoisted (can lead to unexpected behavior)',
            'let is block-scoped and has a Temporal Dead Zone (TDZ)',
            'const creates an immutable binding (not an immutable value)',
            'Best practice: default to const, use let when reassignment is needed, avoid var',
          ],
          proTip: {
            title: 'The const Misconception',
            content: 'Many developers think const makes values immutable. It doesn\'t! It only prevents reassignment. const user = {}; user.name = "John"; is perfectly valid. To make objects truly immutable, use Object.freeze().',
          },
          codeExample: {
            fileName: 'var-let-const.js',
            code: `// var: function-scoped, hoisted
function varExample() {
  console.log(x); // undefined (hoisted)
  var x = 10;
  if (true) {
    var x = 20; // Same variable!
  }
  console.log(x); // 20
}

// let: block-scoped, TDZ
function letExample() {
  // console.log(y); // ReferenceError!
  let y = 10;
  if (true) {
    let y = 20; // Different variable
    console.log(y); // 20
  }
  console.log(y); // 10
}

// const: immutable binding, not immutable value
const user = { name: 'Alice' };
user.name = 'Bob'; // ✓ Allowed
// user = {}; // ✗ TypeError: Assignment to constant`
          },
        },
        { id: 'l1-1', title: 'Syntax Parsers, Execution Contexts, and Lexical Environments', slug: 'syntax-parsers', durationMin: 45 },
        { id: 'l1-2', title: 'Name/Value Pairs and Objects', slug: 'name-value-pairs', durationMin: 30 },
      ]