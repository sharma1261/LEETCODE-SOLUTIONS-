1️⃣ Event Loop

What: Handles async tasks in single-thread JS
Solves: UI blocking
Consequence: Wrong execution order if misunderstood
Condition: Call stack must be empty

console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");


Output: A C B
Real world: Waiter serving while food cooks

2️⃣ Arrow Function

What: Short syntax, lexical this
Solves: this confusion
Consequence: No constructor, no arguments
Condition: When you want parent this

const add = (a, b) => a + b;


Real world: Shortcut key

3️⃣ Callback

What: Function passed as argument
Solves: Async result handling
Consequence: Can create callback hell
Condition: Dependent async logic

setTimeout(() => console.log("Done"), 1000);


Real world: Call when work finishes

4️⃣ Callback Hell

What: Nested callbacks
Solves: Nothing (problem itself)
Consequence: Unreadable code
Condition: Multiple dependent async steps

a(() => b(() => c(() => d())));


Real world: Too many follow-up calls

5️⃣ Promise

What: Future value container
Solves: Callback hell
Consequence: Unhandled rejections
Condition: Async success/failure

new Promise(res => res(10)).then(console.log);


Real world: Online order status

6️⃣ async / await

What: Promise syntax sugar
Solves: Promise chaining
Consequence: Needs try/catch
Condition: Inside async function

async function f() {
  return await Promise.resolve(5);
}


Real world: Waiting calmly

7️⃣ fetch

What: HTTP request API
Solves: Manual AJAX
Consequence: Must parse JSON
Condition: Network calls

fetch(url).then(r => r.json());


Real world: Asking Google

8️⃣ Hoisting

What: Declarations moved up
Solves: Function pre-use
Consequence: undefined bugs
Condition: var, function declarations

console.log(x);
var x = 5;


Real world: Name announced before arrival

9️⃣ Closure

What: Function remembers scope
Solves: Data privacy
Consequence: Memory leaks
Condition: Inner uses outer variable

function counter() {
  let c = 0;
  return () => ++c;
}


Real world: Locker

🔟 Events (Triggers)

What: User actions
Solves: Interaction handling
Consequence: Performance hit if many
Condition: DOM events

btn.addEventListener("click", () => {});


Real world: Doorbell

1️⃣1️⃣ Loops

What: Repetition
Solves: Manual repetition
Consequence: Infinite loop
Condition: Known iteration

for (let i = 0; i < 3; i++) {}


Real world: Attendance list

1️⃣2️⃣ JSON.parse vs JSON.stringify

What:

stringify → object → string

parse → string → object
Solves: Data transfer
Consequence: Parse error
Condition: API data

JSON.parse(JSON.stringify({a:1}));


Real world: Packing/unpacking parcel

1️⃣3️⃣ call / apply / bind

What: Set this manually
Solves: Context loss
Consequence: Readability loss
Condition: Function reuse

fn.call(obj, arg);


Real world: Borrowing charger

1️⃣4️⃣ map / filter

What: Array transformation
Solves: Mutating loops
Consequence: Extra memory
Condition: Functional style

arr.map(x=>x*2).filter(x=>x>5);


Real world: Candidate shortlist

1️⃣5️⃣ try / catch

What: Error handling
Solves: App crash
Consequence: Silent failures
Condition: Risky code

try { JSON.parse("x") } catch {}


Real world: Helmet

1️⃣6️⃣ Scope

What: Variable visibility
Solves: Name conflicts
Consequence: Unexpected bugs
Condition: Block/function/global

{ let x = 1; }


Real world: Office access

1️⃣7️⃣ Scope + Closure

What: Access later + remember
Solves: Private state
Consequence: Memory misuse
Condition: Returned inner function

function f() {
  let s = 10;
  return () => s;
}


Real world: Diary
