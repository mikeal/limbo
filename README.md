# limbo

Writing native ESM and being compatibile with people who use `require()`
in Node.js and older compilers is pretty broken. `limbo` is here to help.

Run the following command in the root of your package.

```
$ npx @mikeal/limbo test/test*.js
```

Compiles CJS versions of the target files and all the local
files that are imported by those target files. Using the test
files are a good target as they *should* import all the relevant
local files for your package.

* `dist/cjs-node` a CJS version of the package files in order to
  support consumers of your library still using `require()`.
* `dist/cjs-browser` a CJS version of the package files targeted
  for the browser in order to maintain compatibility with older compilers
  like Webpack 4.x because they have terrible opinions about the CJS
  representation of ESM modules

## package.json

You'll still need to reference all of these files in your package.json.

It's a bit complicated to explain, so there's a flag you can use that will
mutate the local package.json and add all the required `browser` and `export`
fields.

# What is still broken in native ESM?

You still can't use any versions of Node.js prior to v12 or even early versions
of v12 and v14 that were released before ESM was behind a flag. There's not
much we can do there.
