# WHY ARE THERE UNUSED EXPORTS IN MY FINAL BUNDLE

## Setup

`src/index` (entry point) imports `mod1` module from `src/lib` - a text value.

`src/lib/index.js` includes exports (`export * from "./filenamn"`) from three other modules:

1.   `src/lib/mod1`  - exports a text variable. Its the only mod being used in `src/index`.
2.   `src/lib/mod2`  - exports a text variable. 
3.   `src/lib/mod3`  - Import `objectExtend` from `node_modules/common-micro-libs` and then exports an object. 

Run: `webpack -p`

## What I would expect

The final bundle should have only included `src/lib/mod1`. 


## What actually happen

The final bundle included the entire `node_modules/common-micro-libs` library.  Why?

Need help understanding.