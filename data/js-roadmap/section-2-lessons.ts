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
          id: 'l1-1', 
          title: 'Name/Value Pairs and Objects', 
          slug: 'name-value-pairs', 
          durationMin: 15,
          type: 'article',
          description: `<h1>Name/Value Pairs and Objects</h1>

Before we dive deep into the technical implementation of objects in JavaScript, we need to understand the fundamental concept they're built upon: <strong>Name/Value Pairs</strong>.

<h2>What is a Name/Value Pair?</h2>

At its simplest, a <b>Name/Value pair</b> is a name which maps to a unique value. 

<h3>The Rules of Name/Value Pairs:</h3>
<ul>
  <li><b>Unique Mapping:</b> A name can be defined more than once in your code, but it can only have <em>one value</em> in any given <strong>execution context</strong>.</li>
  <li><b>Context Matters:</b> In any particular section of code that is running, a name exists with exactly one value assigned to it.</li>
  <li><b>Flexible Values:</b> That value doesn't have to be a simple piece of data—it can actually be <em>another collection</em> of Name/Value pairs.</li>
</ul>

<p>You use these every day in code: <code>Address = '100 Main Street'</code>. <strong>Address</strong> is the name, and <strong>'100 Main Street'</strong> is the value.</p>

<h2>What is an Object in JavaScript?</h2>

This leads us to the simplest possible definition of an object in JavaScript:

<blockquote>
  <strong>An Object is a collection of Name/Value pairs.</strong>
</blockquote>

While other programming languages might have more complex mathematical or structural definitions for objects, in JavaScript, that's really all they are at their core.

<h2>Nesting and Structure</h2>

The power of objects comes from the fact that a "Value" can be another list of Name/Value pairs. This allows us to create complex, nested structures:

<ul>
  <li><b>Address</b> could be an object (a collection).</li>
  <li>Inside <b>Address</b>, we have Name/Value pairs like <b>Street</b>: 'Main' and <b>Number</b>: 100.</li>
  <li>Inside <b>Address</b>, we could even have another object called <b>Apartment</b>.</li>
  <li>Inside <b>Apartment</b>, we have <b>Floor</b>: 3 and <b>Number</b>: 301.</li>
</ul>

<p>See how they nest down? <strong>Apartment</strong> is an object because its value is a collection of pairs. <strong>Address</strong> is an object because its value is a collection of pairs.</p>

<h2>Keep it Simple</h2>
Don't think any more deeply about objects in JavaScript than this for now. We'll explore the "weird" things you can do with them later, but always remember this fundamental truth: <strong>it's just a collection of Name/Value pairs.</strong>`,
          learningPoints: [
            'A Name/Value pair is a name mapping to a unique value in a specific context',
            'In JavaScript, an object is simply a collection of Name/Value pairs',
            'Values within a Name/Value pair can be other collections (objects)',
            'Objects can be nested deeply to represent complex data structures',
          ],
          proTip: {
            title: 'The Simple Truth',
            content: 'Whenever you feel overwhelmed by complex object-oriented patterns in JavaScript, strip it back to this: Is it just a collection of names and values? Yes. Everything else is just a pattern built on top of that.',
          },
          codeExample: {
            fileName: 'objects.js',
            code: `// A simple Name/Value pair
var address = '100 Main Street';

// An Object: A collection of Name/Value pairs
var addressObject = {
  street: 'Main',
  number: 100,
  // Nested Object: A value that is another collection
  apartment: {
    floor: 3,
    number: 301
  }
};`
          }
        },

        { 
          id: 'l1-2', 
          title: 'The Global Environment and the Global Object', 
          slug: 'global-environment-global-object', 
          durationMin: 15,
          type: 'article',
          description: `<h1>The Global Environment and the Global Object</h1>

Whenever you run JavaScript code, it doesn't just run in a vacuum. It's always wrapped inside an <strong>Execution Context</strong>. 

<h2>The Base Execution Context</h2>

The JavaScript engine (the program that parses and executes your code) creates a base wrapper for your code called the <strong>Global Execution Context</strong>. Even if your file is completely empty, the engine still does two major things for you:

<ul>
  <li><b>Creates a Global Object:</b> A base object available everywhere in your code.</li>
  <li><b>Creates a special variable:</b> Called <code>this</code>.</li>
</ul>

<h2>The Global Object inside the Browser</h2>

When you're running JavaScript in a web browser, the <strong>Global Object</strong> is the <code>window</code> object. Each browser tab has its own execution context and its own global <code>window</code> object.

<p>In the Global Execution Context (at the base level, not inside any function), <code>this</code> and <code>window</code> are exactly the same thing. You can verify this in the console by typing <code>this === window</code>.</p>

<h2>What does "Global" mean?</h2>

In JavaScript, <strong>Global</strong> simply means <em>"not inside a function."</em> 

<p>If you declare a variable or a function at this level, it gets special treatment: it is automatically attached to the Global Object.</p>

<h2>The Global execution context includes:</h2>
<ul>
  <li><b>Global Object:</b> (e.g., <code>window</code> in browsers).</li>
  <li><b>'this' variable:</b> Points to the global object at the base level.</li>
  <li><b>Outer Environment:</b> Since you're at the global level, there is no "outer" environment, so it's <code>null</code>.</li>
  <li><b>Your Code:</b> The variables and functions you write.</li>
</ul>

<h3>Example: Global Variables</h3>
<p>If you write <code>var a = 'Hello World!';</code> in your script (outside any function), you can access it via <code>a</code> or <code>window.a</code>. It's sitting right there on the global object!</p>`,
          learningPoints: [
            'Every JS program runs inside an Execution Context',
            'The Global Execution Context creates the Global Object and "this" automatically',
            'In browsers, the Global Object is the window object',
            'Code not inside a function is considered Global',
            'Global variables and functions are attached to the Global Object',
          ],
          proTip: {
            title: 'Empty but Active',
            content: 'Even an empty .js file creates an execution context! Open your browser console on a blank page and type "this" or "window" to see the JS engine already at work.',
          },
          codeExample: {
            fileName: 'global-context.js',
            code: `// This code is at the global level (not in a function)
var greeting = 'Hello World!';

function logGreeting() {
  console.log(greeting);
}

// These are now attached to the global object
console.log(window.greeting); // 'Hello World!'
window.logGreeting();         // Logs 'Hello World!'

// At this level, 'this' is the global object
console.log(this === window); // true`
          },
        },
          
        { 
          id: 'l1-3', 
          title: 'The execution context - Creation and hoisting', 
          slug: 'creation-and-hoisting', 
          durationMin: 15,
          type: 'article',
          imageUrl: '/JS Execution Context Creation Phase.png',
          description: `<h1>The Execution Context: Creation and Hoisting</h1>

JavaScript wrapping our code in an Execution Context is just the beginning. There's a "weird" phenomenon called <strong>Hoisting</strong> that we need to understand by looking at how the JavaScript engine creates that context.

<h2>The Hoisting Phenomenon</h2>

In most programming languages, you can't use a variable or function before it's declared. But in JavaScript, you can call a function even if it's defined later in the file. 

However, variables behave differently: they are available, but their value is <code>undefined</code>. If you try to access a variable that isn't declared anywhere, you get an error; but if it's declared later, you get <code>undefined</code>.

<h2>The "Hoisting" Mental Model</h2>
<p>Hoisting is often explained as the JavaScript engine "moving" variables and functions to the top of the file. This is <strong>not</strong> what's actually happening. Your code isn't physically moving; it's simply that the engine has already processed it before running it.</p>

<h2>The Two Phases of Execution Context</h2>

The reason for this behavior is that the execution context is created in <strong>two distinct phases</strong>:

<h3>Phase 1: The Creation Phase</h3>
As the parser runs through your code, it recognizes where you've created variables and functions. 
<ul>
  <li><b>Memory Allocation:</b> The engine sets aside memory space for all variables and functions in that context.</li>
  <li><b>Functions:</b> The entire function (its name and the code inside) is placed into memory in its entirety.</li>
  <li><b>Variables:</b> Memory is set aside, but the value is initialized with a placeholder called <code>undefined</code>. The engine doesn't know the actual value yet.</li>
</ul>

<h3>Phase 2: The Execution Phase</h3>
Now the engine runs your code <strong>line by line</strong>. This is when assignments (like <code>a = 'Hello World'</code>) actually happen.

<blockquote>
  <strong>Crucial Rule:</strong> Never rely on hoisting. While it technically works for functions, it makes your code harder to read and can lead to bugs with <code>undefined</code> variables. Always declare your variables and functions at the top.
</blockquote>`,
          learningPoints: [
            'Hoisting is the result of the Creation Phase of the Execution Context',
            'The JavaScript engine sets aside memory for variables and functions before executing code',
            'Functions are hoisted in their entirety (name and code)',
            'Variables are hoisted but initialized as "undefined"',
            'Code execution (assignments) happens in the second phase, line by line',
          ],
          proTip: {
            title: 'Avoid the Trap',
            content: 'Just because you CAN call functions before they are defined doesn\'t mean you SHOULD. Keep your code clean and predictable by declaring everything before you use it.',
          },
          codeExample: {
            fileName: 'hoisting.js',
            code: `b(); // "Called b"
console.log(a); // undefined

var a = 'Hello World!';

function b() {
  console.log('Called b');
}

// Accessing something that doesn't exist at all:
// console.log(c); // Uncaught ReferenceError: c is not defined`
          }
        },

        { 
          id: 'l1-4', 
          title: 'Conceptual Aside: JavaScript and \'undefined\'', 
          slug: 'javascript-undefined', 
          durationMin: 10,
          type: 'article',
          description: `<h1>Conceptual Aside: JavaScript and 'undefined'</h1>

Before we move into execution, we need to clarify a term that often causes confusion: <strong>undefined</strong>.

<h2>The "Not Defined" vs "undefined" Confusion</h2>

In JavaScript, these two sound almost identical, but they mean very different things:

• <b>Not Defined (ReferenceError):</b> This means the variable has <em>never been declared</em>. The JavaScript engine has no memory space set aside for it.
• <b>undefined:</b> This is a <strong>special value</strong> that JavaScript assigns to a variable during the creation phase of the execution context.

<h2>undefined is a Value</h2>

One of the most important things to realize is that <code>undefined</code> isn't just "empty" or "non-existent." It is a special keyword and a <b>primitive value</b> that actually takes up memory space.

It's the placeholder the JavaScript engine uses to say: <em>"I know this variable exists, but I haven't been told its actual value yet."</em>

<h2>Checking for undefined</h2>

You can check if a variable is <code>undefined</code> using the equality operator (preferably triple equals <code>===</code> for safety).

<p>Notice that <code>undefined</code> isn't wrapped in quotes. It's not a string; it's a built-in value in the language.</p>

<blockquote>
  <strong>🚨 WARNING: Never set a variable to undefined yourself.</strong>
  While JavaScript allows you to write <code>a = undefined;</code>, it's a bad practice. It's better to let <code>undefined</code> exclusively mean "the value was never set by the programmer." This makes debugging much easier—if you see <code>undefined</code>, you know it's because the engine set it, not because you manually reset it later.
</blockquote>`,
          learningPoints: [
            'The difference between "not defined" (ReferenceError) and the value "undefined"',
            'How the JS engine uses undefined as a placeholder during the Creation Phase',
            'Why undefined is a special primitive value, not just a string or "nothing"',
            'Why you should never manually assign the value undefined to a variable',
          ],
          proTip: {
            title: 'Debugging Tip',
            content: 'Let "undefined" be the language\'s way of telling you "I don\'t have a value yet." If you need to clear a value yourself, use "null" instead. This distinction helps you know exactly where a value (or lack thereof) came from.',
          },
          codeExample: {
            fileName: 'undefined-check.js',
            code: `var a;
console.log(a); // undefined

if (a === undefined) {
  console.log('a is undefined!');
} else {
  console.log('a is defined');
}

// Setting a value
a = 'Hello World!';

if (a === undefined) {
  console.log('a is undefined!');
} else {
  console.log('a is defined');
}

// DANGER: Don't do this!
// a = undefined;`
          }
        },

        { 
          id: 'l1-5', 
          title: 'Execution context - Code Execution', 
          slug: 'code-execution', 
          durationMin: 1,
          type: 'article',
          
          imageUrl: '/JS Execution Context Execution Phase.png',
          description: `<h1>Execution Context: The Execution Phase</h1>

Once the <strong>Creation Phase</strong> is complete and all variables and functions are set up in memory, the JavaScript engine moves to the second phase: the <b>Execution Phase</b>.

<h2>Running Line by Line</h2>

The execution phase is straightforward: the engine runs your code exactly as you've written it, line by line. It interprets, converts, and executes your instructions on the computer.

<h2>Revisiting the Example</h2>

Let's look at how the engine handles our previous hoisting example during the execution phase:

<ol>
  <li><b>Line 1:</b> <code>b();</code> – The engine looks in memory, finds the <code>b</code> function, and executes it.</li>
  <li><b>Line 2:</b> <code>console.log(a);</code> – The engine looks for <code>a</code> in memory. It finds it, but since we haven't reached the assignment yet, it still has the placeholder value <code>undefined</code> from the creation phase.</li>
  <li><b>Line 4:</b> <code>var a = 'Hello World!';</code> – The engine executes the assignment. It replaces the <code>undefined</code> placeholder in memory with the actual string <code>'Hello World!'</code>.</li>
  <li><b>Line 10:</b> <code>console.log(a);</code> – Now, when the engine looks for <code>a</code>, it finds the updated value <code>'Hello World!'</code>.</li>
</ol>

<h2>Summary of the Two Phases</h2>

By understanding these two phases—<b>Creation</b> (setting up memory) and <b>Execution</b> (running code line-by-line)—JavaScript's behavior stops feeling "weird" and starts being predictable.

<blockquote>
  <strong>Remember:</strong> The JavaScript engine is constantly making decisions about your code before it even starts running it. Understanding this "wrapper" behavior is the key to deep JavaScript mastery.
</blockquote>`,
          learningPoints: [
            'The Execution Phase involves running code line by line',
            'Assignments happen during the Execution Phase, not the Creation Phase',
            'Why variables transition from undefined to their actual values',
            'The importance of the line-by-line nature of the JS engine',
          ],
          proTip: {
            title: 'Predictability is Power',
            content: 'Knowing that assignments happen during the execution phase allows you to predict exactly when a variable will become available with its intended value.',
          },
          codeExample: {
            fileName: 'execution-phase.js',
            code: `function b() {
  console.log('Called b');
}

b(); // Executed immediately

console.log(a); // Output: undefined (Creation phase placeholder)

var a = 'Hello World!'; // Execution phase assignment

console.log(a); // Output: 'Hello World!' (Updated value in memory)`
          }
        },
      ]