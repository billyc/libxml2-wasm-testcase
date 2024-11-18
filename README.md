# Debugging libxml2-wasm

This repo was created with the latest Vite command line project generator. 

- `npm create vite@latest`
- I chose a Vue project with Typescript. 
 
Vite generated everything you see -- with only necessary modifications to test libxml2-wasm and create a dummy Worker which tries to load the library.

- I added the libxml2-wasm library to package.json and updated the Vite settings to target "esnext" which is required since the library uses await-top-level. 
- Then `npm i` installs all the necessary dependencies

The file `src/LIBXML2WASMEventStreamer.worker.ts` has the offending code which
loads the library and posts a simple message to the app. If you comment out the `XmlDocument.parseString()` call, the worker behaves normally; as is, it hangs and never returns. (For me!)

The file `src/App.vue` contains the brief GUI code; the `mounted()` method has a few 
console.log statements to document spawning the worker and waiting for a result.

I'm not sure how to make a simpler bundled Vite project which exhibits the problem; I understand this is a lot to digest if you are not already using Vite or Vue. 
