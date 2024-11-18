# Debugging libxml2-wasm

This repo was created with 

- npm create vue@latest
- Chose a Vue project with Typescript

with only necessary modifications to test libxml2-wasm and create a dummy Worker 
which tries to load the library and 

The file `src/LIBXML2WASMEventStreamer.worker.ts` has the offending code which
tries to load the library and post a simple message to the app. If you comment out the `XmlDocument.parseString()` call, the worker behaves normally instead of 
hanging and never returning.

The file `src/App.vue` contains the brief GUI code; the `mounted()` method has a few 
console.log statements to document spawning the worker and waiting for a result.

