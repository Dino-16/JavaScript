/* * * Basic Debugging * * */

function a() {
  b();
}

function b() {
  // 1. Trace: Use console.trace() to see the full path to this point
  console.trace("How did I get here?"); 
  c();
}

function c() {
  const data = { status: "loading", attempts: 3 };
  
  // 2. Manual Pause: Code freezes here if DevTools is open
  debugger; 
  
  // 3. Table: Better for visualizing objects/arrays
  console.table(data); 

  throw new Error("Something went wrong!");
}

// 4. Execution
try {
  a();
} catch (err) {
  // 5. Error Inspection
  console.error("Caught:", err.message);
}