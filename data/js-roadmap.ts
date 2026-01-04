import { Roadmap } from "./roadmapData";

// JavaScript Roadmap - Complete Course Structure
export const javascriptRoadmap: Roadmap = {
  id: 'javascript',
  title: 'JavaScript Mastery Path',
  description: 'Your complete journey from JavaScript basics to advanced patterns. Understanding the weird parts and production-ready code.',
  modules: [
    {
      id: 'section-1',
      title: 'Getting Started',
      description: 'Introduction to JavaScript, setting up your environment, and understanding the fundamentals.',
      icon: '🚀',
      lessons: [
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
          id: 'l0-3', 
          title: 'JavaScript Jargons', 
          slug: 'jargons', 
          durationMin: 20,
          type: 'article',
          description: `<h1>Don't Be Intimidated by the "Big Words"</h1>

In the world of computer science and programming, there's a common tendency to use words that sound far more intimidating than the concepts they actually describe. We call these <b>JavaScript Jargons</b>.

<h2>The Jargon Alert</h2>

Throughout this course, whenever we encounter one of these complex-sounding terms, we'll trigger a <strong>Jargon Alert</strong>. This is our signal to <strong>break the glass</strong> and dive deep into the definition, stripping away the mystery and showing you the simple reality underneath.

<h2>It's Just Vocabulary</h2>

Remember: <i>it's just vocabulary</i>. Many of these terms deal with things you might already understand intuitively, or concepts that are surprisingly straightforward once explained. Our goal is to ensure you're not just writing code, but speaking the language of a professional engineer. 

Don't be intimidated by the big words—we'll break them down together, show you how they're used under the hood, and move forward with confidence.`,
          learningPoints: [
            "Identifying 'Big Words' in JavaScript development",
            "Understanding that complex terminology often hides simple concepts",
            "How to approach new technical vocabulary without intimidation",
            "The importance of having a shared professional vocabulary"
          ],
          proTip: {
            title: 'The Translator Mindset',
            content: 'Whenever you encounter a new technical term, try to translate it into a simple analogy. If you can explain it to a 10-year-old, you truly understand the concept.'
          }
        },
        { 
          id: 'l0-4', 
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
      ],
      projects: [],
      durationHours: 2,
      level: 'Beginner',
      prerequisites: [],
      status: 'available',
      position: { x: 50, y: 0 },
      order: 1,
    },
    {
      id: 'section-2',
      title: 'Execution Contexts and Lexical Environments',
      description: 'Deep dive into how JavaScript code is executed, syntax parsers, and fundamental concepts.',
      lessons: [
        { id: 'l1-1', title: 'Syntax Parsers, Execution Contexts, and Lexical Environments', slug: 'syntax-parsers', durationMin: 45 },
        { id: 'l1-2', title: 'Name/Value Pairs and Objects', slug: 'name-value-pairs', durationMin: 30 },
      ],
      projects: [],
      durationHours: 2,
      level: 'Beginner',
      prerequisites: ['js-getting-started'],
      status: 'available',
      position: { x: 50, y: 10 },
      order: 2,
    },
    {
      id: 'section-3',
      title: 'Types and Operators',
      description: 'Master JavaScript types, operators, coercion, and comparison operators.',
      lessons: [
        { id: 'l2-1', title: 'Primitive Types', slug: 'primitive-types', durationMin: 30 },
        { id: 'l2-2', title: 'Operators and Precedence', slug: 'operators', durationMin: 35 },
        { id: 'l2-3', title: 'Type Coercion', slug: 'coercion', durationMin: 40 },
        { id: 'l2-4', title: 'Comparison Operators', slug: 'comparison', durationMin: 25 },
      ],
      projects: [],
      durationHours: 3,
      level: 'Beginner',
      prerequisites: ['js-execution-contexts'],
      status: 'available',
      position: { x: 50, y: 20 },
      order: 3,
    },
    {
      id: 'section-4',
      title: 'Objects and Functions',
      description: 'Understand objects, functions, first-class functions, closures, and IIFEs.',
      lessons: [
        { id: 'l3-1', title: 'Objects and Object Literals', slug: 'objects', durationMin: 35 },
        { id: 'l3-2', title: 'Functions are Objects', slug: 'functions-objects', durationMin: 40 },
        { id: 'l3-3', title: 'First Class Functions', slug: 'first-class', durationMin: 35 },
        { id: 'l3-4', title: 'Closures', slug: 'closures', durationMin: 50 },
        { id: 'l3-5', title: 'Immediately Invoked Function Expressions (IIFE)', slug: 'iife', durationMin: 30 },
      ],
      projects: [],
      durationHours: 4,
      level: 'Intermediate',
      prerequisites: ['js-types-operators'],
      status: 'available',
      position: { x: 50, y: 30 },
      order: 4,
    },
    {
      id: 'section-5',
      title: 'Object-Oriented JavaScript and Prototypal Inheritance',
      description: 'Master prototypal inheritance, the prototype chain, and OOP patterns in JavaScript.',
      lessons: [
        { id: 'l4-1', title: 'Understanding Prototypes', slug: 'prototypes', durationMin: 45 },
        { id: 'l4-2', title: 'The Prototype Chain', slug: 'prototype-chain', durationMin: 40 },
        { id: 'l4-3', title: 'Prototypal Inheritance', slug: 'inheritance', durationMin: 50 },
        { id: 'l4-4', title: 'Reflection and Extend', slug: 'reflection-extend', durationMin: 35 },
      ],
      projects: [],
      durationHours: 4,
      level: 'Intermediate',
      prerequisites: ['js-objects-functions'],
      status: 'available',
      position: { x: 50, y: 40 },
      order: 5,
    },
    {
      id: 'section-6',
      title: 'Building Objects',
      description: 'Learn different ways to create objects: constructors, Object.create, and ES6 classes.',
      lessons: [
        { id: 'l5-1', title: 'Function Constructors', slug: 'constructors', durationMin: 40 },
        { id: 'l5-2', title: 'The "new" Keyword', slug: 'new-keyword', durationMin: 30 },
        { id: 'l5-3', title: 'Object.create and Pure Prototypal Inheritance', slug: 'object-create', durationMin: 35 },
        { id: 'l5-4', title: 'ES6 Classes', slug: 'es6-classes', durationMin: 45 },
      ],
      projects: [],
      durationHours: 3,
      level: 'Intermediate',
      prerequisites: ['js-oop-prototypal'],
      status: 'available',
      position: { x: 50, y: 50 },
      order: 6,
    },
    {
      id: 'section-7',
      title: 'Odds and Ends',
      description: 'Important JavaScript concepts: typeof, instanceof, strict mode, and more.',
      lessons: [
        { id: 'l6-1', title: 'typeof and instanceof', slug: 'typeof-instanceof', durationMin: 25 },
        { id: 'l6-2', title: 'Strict Mode', slug: 'strict-mode', durationMin: 20 },
        { id: 'l6-3', title: 'Arrays - Collections of Anything', slug: 'arrays', durationMin: 35 },
        { id: 'l6-4', title: 'Arguments and Spread', slug: 'arguments-spread', durationMin: 30 },
      ],
      projects: [],
      durationHours: 2,
      level: 'Intermediate',
      prerequisites: ['js-building-objects'],
      status: 'available',
      position: { x: 50, y: 60 },
      order: 7,
    },
    {
      id: 'section-8',
      title: 'Promises, Async, and Await',
      description: 'Master asynchronous JavaScript with Promises, async/await, and handling async operations.',
      lessons: [
        { id: 'l7-1', title: 'Callbacks and Callback Hell', slug: 'callbacks', durationMin: 35 },
        { id: 'l7-2', title: 'Promises', slug: 'promises', durationMin: 50 },
        { id: 'l7-3', title: 'Async and Await', slug: 'async-await', durationMin: 45 },
        { id: 'l7-4', title: 'Error Handling in Async Code', slug: 'error-handling', durationMin: 30 },
      ],
      projects: [],
      durationHours: 3,
      level: 'Intermediate',
      prerequisites: ['js-odds-ends'],
      status: 'available',
      position: { x: 50, y: 70 },
      order: 8,
    },
    {
      id: 'section-9',
      title: 'The Most Used Parts',
      description: 'Practical JavaScript patterns and techniques used in real-world applications.',
      lessons: [
        { id: 'l8-1', title: 'DOM Manipulation', slug: 'dom', durationMin: 45 },
        { id: 'l8-2', title: 'Event Handling', slug: 'events', durationMin: 40 },
        { id: 'l8-3', title: 'Fetch API and HTTP Requests', slug: 'fetch', durationMin: 50 },
        { id: 'l8-4', title: 'Modules and Import/Export', slug: 'modules', durationMin: 35 },
      ],
      projects: [
        { id: 'js-weather', title: 'Weather Dashboard', description: 'Build a weather app using APIs' },
      ],
      durationHours: 4,
      level: 'Intermediate',
      prerequisites: ['js-async'],
      status: 'available',
      position: { x: 50, y: 80 },
      order: 9,
    },
    {
      id: 'js-es6-beyond',
      title: 'ES6 and Beyond',
      description: 'Modern JavaScript features: arrow functions, destructuring, symbols, iterators, and more.',
      lessons: [
        { id: 'js-block-scoping', title: 'Block Scoping (let and const)', slug: 'block-scoping', durationMin: 25 },
        { id: 'js-templates', title: 'Template Literals', slug: 'templates', durationMin: 20 },
        { id: 'js-es6-classes', title: 'Classes (Deep Dive)', slug: 'classes-deep-dive', durationMin: 35 },
        { id: 'js-arrow-functions', title: 'Arrow Functions', slug: 'arrow-functions', durationMin: 30 },
        { id: 'js-symbols', title: 'Symbols', slug: 'symbols', durationMin: 25 },
        { id: 'js-iterators', title: 'Iterators and Iterables', slug: 'iterators', durationMin: 35 },
        { id: 'js-default-params', title: 'Default Parameters', slug: 'default-params', durationMin: 20 },
        { id: 'js-rest-spread', title: 'Rest and Spread Operators', slug: 'rest-spread', durationMin: 30 },
      ],
      projects: [],
      durationHours: 4,
      level: 'Advanced',
      prerequisites: ['js-most-used'],
      status: 'available',
      position: { x: 50, y: 90 },
      order: 10,
    },
    {
      id: 'js-conclusion',
      title: 'Conclusion',
      description: 'Wrap up, next steps, and capstone projects to solidify your JavaScript mastery.',
      lessons: [
        { id: 'js-review', title: 'Course Review', slug: 'review', durationMin: 20 },
        { id: 'js-next-steps', title: 'Next Steps in Your Journey', slug: 'next-steps', durationMin: 15 },
      ],
      projects: [
        { id: 'js-quiz', title: 'Quiz Application', description: 'Interactive quiz with scoring' },
        { id: 'js-kanban', title: 'Kanban Board', description: 'Drag-and-drop task management' },
      ],
      durationHours: 6,
      level: 'Advanced',
      prerequisites: ['js-es6-beyond'],
      status: 'available',
      position: { x: 50, y: 100 },
      order: 11,
    },
  ],
};