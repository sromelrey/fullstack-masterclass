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
      ]