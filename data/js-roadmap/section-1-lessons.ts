import { RoadmapLesson } from "../roadmapData";

export const section_1_lessons:RoadmapLesson[] = [
        { 
          id: 'l0-1', 
          title: 'Introduction and the Goal of this Course', 
          slug: 'introduction', 
          durationMin: 3,
          type: 'article',
          description: `<h1>JavaScript.</h1>

It runs the modern web. It powers dashboards, APIs, mobile apps, desktop apps—and more software than most people realize.

Maybe you’re brand new.
Maybe you’ve been using JavaScript for years.

But here’s the real question:
<em>Do you understand JavaScript—or do you just know how to make it <strong>work</strong>?</em>

Welcome to the <strong>JavaScript Master Class.</strong>

This isn’t a course about copying snippets or racing through a framework.
This is a course about <strong>understanding JavaScript as a language</strong>—how it thinks, how it executes, and why it sometimes behaves in ways that surprise even experienced devs.

I’m <strong>Romel Rey Silva</strong>, a software developer with <strong>8+ years</strong> of experience building real-world applications. In this course, I’ll share the mental models, patterns, and practical habits I’ve learned—so you can write better code, debug faster, and build with confidence.

<h3>What This Course Is About</h3>

Let’s be clear from the beginning:
This course <em>isn’t</em> about using jQuery to make pages interactive, and it’s not a deep dive into Node.js features.

<strong>This course is about JavaScript itself—the language.</strong>

You’ll learn what’s happening <em>under the hood</em>, explore advanced concepts, and build the kind of understanding the creators of major libraries and frameworks rely on. That knowledge will make you a stronger developer—whether you’re building front-end apps, writing Node.js services, or using JavaScript in any other environment.

<h3>Coming from Another Language?</h3>

If you’re coming from another language like Java, C++, or C#, you’ll also learn an important truth:

JavaScript may look familiar—but it <strong>doesn’t think like those languages</strong>.
It follows a different paradigm, and it rewards a different mindset. Once you understand that, many of the “weird” parts stop feeling random—and start making sense.

And the deeper you go, the more you’ll realize something surprising:

<em>JavaScript isn’t just popular by accident. It’s deceptively powerful—and often genuinely beautiful.</em>

<h2>My Philosophy</h2>

That brings me to a simple philosophy that guides this entire course:

<strong>Don’t imitate. Understand.</strong>

A lot of people learn by copying code. Examples are useful—but copying alone only takes you so far. The moment you hit a tough bug, or you have to build something from scratch, imitation breaks down.

<h3>What You'll Be Able to Do</h3>

When you <strong>truly understand</strong> what the language is doing, you can:

• debug hard problems with less guessing,
• design cleaner solutions,
• read great code confidently,
• and improve or extend what others have built.

So yes—we’ll write plenty of code.
But we’ll prioritize the <strong>why</strong> behind it, so the examples become tools you can apply in real projects—not just patterns you memorize.

<h3>Prerequisites</h3>

All you need to start is basic JavaScript familiarity: what files are, variables, functions, and loops. If you have that foundation, you’re ready.

<strong>Let’s dive in—and learn to understand JavaScript for real.</strong>
`,
          learningPoints: [
            'The philosophy behind this course: understanding over imitation',
            'How JavaScript differs from other programming languages',
            'What topics we\'ll cover throughout the masterclass',
            'Prerequisites and how to get the most out of this course',
          ],
          proTip: {
            title: 'Pro Tip',
            content: 'Take notes as you go through each lesson. Writing things down in your own words helps solidify concepts and gives you a personal reference to revisit later.',
          },
         
        },
        { 
          id: 'l0-2', 
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
          id: 'l0-3', 
          title: 'Setup (Browser, Code Editor, and Installing Node)', 
          slug: 'setup', 
          durationMin: 2,
          type: 'article',
          description: `<h1>Setting Up for Success</h1>

Before we dive into the "weird parts" of JavaScript, we need a <strong>professional environment</strong>.
A craftsman is only as good as their tools, and in modern web development, your environment is your workshop.

<h2>Why This Setup?</h2>

We aren't just installing programs; we are configuring a workflow. We will set up <b>VS Code</b> with essential extensions that catch errors before you even run your code, configure <b>Chrome DevTools</b> for deep debugging into the JS engine, and install <b>Node.js</b> to unlock the power of JavaScript outside the browser.`,
          imageUrl: '/lesson_02.gif',
          learningPoints: [
            'Installing and configuring VS Code (Extensions: Prettier, ESLint, Live Server)',
            'Mastering Chrome DevTools (Console, Sources, Network)',
            'Installing Node.js and npm for server-side JavaScript',
            'Setting up a project structure that scales'
          ],
          proTip: {
            title: 'Hotkey Mastery',
            content: 'Mastering shortcuts like Ctrl+Shift+I (Inspect) or Ctrl+` (Terminal) will save you hours of development time. Focus on speed early on!'
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
          id: 'l0-4', 
          title: 'Understanding Key Concepts', 
          slug: 'key-concepts', 
          durationMin: 3,
          type: 'article',
          description: `<h1>Don't Be Intimidated by Complex Terms</h1>

In the world of computer science and programming, there's a common tendency to use words that sound far more intimidating than the concepts they actually describe. These are <b>technical concepts</b> that, once understood, are surprisingly straightforward.

<h2>The Concept Alert</h2>

Throughout this course, whenever we encounter one of these complex-sounding terms, we'll trigger a <strong>🚨 Concept Alert</strong>. This is our signal to <strong>pause and understand</strong>—to dive deep into the idea, stripping away the mystery and showing you the simple reality underneath.

<h2>Understanding Over Memorization</h2>

Remember: <i>it's about understanding the concept, not memorizing vocabulary</i>. Many of these terms deal with things you might already understand intuitively, or ideas that are surprisingly straightforward once explained. Our goal is to ensure you're not just writing code, but <em>thinking like a professional engineer</em>. 

Don't be intimidated by complex terminology—we'll break down each concept together, show you how it's used under the hood, and move forward with true understanding.`,
          learningPoints: [
            "Why technical terms often sound more complex than they are",
            "How to break down complex concepts into simple, understandable ideas",
            "The approach we'll use: Concept Alerts to pause and understand",
            "Building a foundation of understanding, not just vocabulary"
          ],
          proTip: {
            title: 'The Translator Mindset',
            content: 'Whenever you encounter a new technical term, try to translate it into a simple analogy. If you can explain it to a 10-year-old, you truly understand the concept.'
          }
        },
        { 
          id: 'l0-5', 
          title: 'Understanding Frameworks and the Weird Parts', 
          slug: 'frameworks-weird-parts', 
          durationMin: 3,
          type: 'article',
          description: `<h1>Understanding, Frameworks, and the "Weird Parts"</h1>

JavaScript is a language that abstracts you away from how the computer and the browser actually function. To truly master it, we must go beyond the syntax and understand how the underlying engine works.

<h2>The Foundation of "Uh-huh!" Moments</h2>

A lot of development involves learning things at a surface level. In this course, we are going deep. While some concepts might seem overly detailed at first, they are the <strong>fundamental building blocks</strong>. This foundational knowledge will "brighten the path" for you, turning confusion into clarity and giving you those vital "Uh-huh!" moments where everything finally clicks.

<h2>The Framework Trap</h2>

The open-source community has given us incredible tools like <b>jQuery</b>, <b>Angular</b>, and <b>React</b>. However, many developers fall into the trap of learning a framework before learning the language itself. 

Remember: <strong>Frameworks are just JavaScript code</strong> written by other smart developers. If you can't understand the source code of the framework you're using, you're at a disadvantage. Our goal is to give you the knowledge to open up any library, understand how it works under the hood, and eventually, build your own.

<h2>Embracing the "Weird Parts"</h2>

If you're coming from another programming language, JavaScript might look familiar, but it behaves very differently under the hood. Its "weird parts"—the things that often confuse newcomers—are actually its most <strong>powerful and beautiful features</strong>. 

We'll also keep a sharp eye out for hazards. No language is perfect, and we'll point out the "dangers" and patterns you should avoid to write robust, professional code.`,
          learningPoints: [
            "Why under-the-hood knowledge is essential for professional debugging",
            "The relationship between JavaScript and the environment (Browser/Server/Engine)",
            "The danger of 'Framework First' learning and how to avoid it",
            "How to turn JavaScript's 'weird parts' into your greatest strengths"
          ],
          proTip: {
            title: 'Source Code Curiosity',
            content: "Don't treat frameworks as 'magic boxes'. Once you finish this course, try opening the 'node_modules' folder and reading the source code of your favorite library. You'll be surprised by how much you understand!"
          }
        },
        { 
          id: 'l0-6', 
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
          id: 'l0-7', 
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

<b>Important:</b> "Immutable binding" means "immutable binding," not "immutable value." If you assign an object or array to a <code>const</code>, you can still modify the object's properties or array's elements—you just can't reassign the variable itself.

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
      ]