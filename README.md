# A Bit of Computer Science

These are my solutions for the [A Bit of Computer Science](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript#a-bit-of-computer-science) section of the JavaScript course from The Odin Project. I bundled all the projects of that section inside this one repository. This way I could easily re-use my implementations of mergesort and linked lists in the later projects.

Since I have a CS degree the assignments gave me little trouble. I used it as an exercise in test-driven development and wrote tests for all projects except knight travails. Most of the problems I encountered where due to the loose typing of JavaScript. After a while I decided to use TypeScript to avoid them and it was smooth sailing from there.

## Running the code
Initialize the project with `npm i` and then run `npm test` to start the tests. To see all the test descriptions even for passing tests, run `npm test -- --verbose`. To see just the tests of a single project you can add the name of the test file, e.&thinsp;g. `npm test -- --verbose fibs` to run just the fibonacci tests.

### Running Binary Search Tree
In addition to the tests, the binary search tree project has a driver script that can be run with `npm run tree`:

```
$ npm run tree

> tree
> npx ts-node binary-search-tree/program.ts

Here's a balanced tree of some random two-digit numbers:

│           ┌── 97
│       ┌── 93
│   ┌── 86
│   │   │   ┌── 83
│   │   └── 73
└── 58
    │       ┌── 38
    │   ┌── 30
    └── 27
        └── 11

Now, let's add some tree-digit numbers:

│                       ┌── 537
│                   ┌── 528
│                   │   └── 436
│               ┌── 399
│               │   └── 164
│           ┌── 97
│       ┌── 93
│   ┌── 86
│   │   │   ┌── 83
│   │   └── 73
└── 58
    │       ┌── 38
    │   ┌── 30
    └── 27
        └── 11

The tree is now unbalanced. Let's rebalance it:

│           ┌── 537
│       ┌── 528
│       │   └── 436
│   ┌── 399
│   │   │   ┌── 164
│   │   └── 97
│   │       └── 93
└── 86
    │       ┌── 83
    │   ┌── 73
    │   │   └── 58
    └── 38
        │   ┌── 30
        └── 27
            └── 11

These are the tree values in different orders:

level-order: 86, 38, 399, 27, 73, 97, 528, 11, 30, 58, 83, 93, 164, 436, 537
in-order: 11, 27, 30, 38, 58, 73, 83, 86, 93, 97, 164, 399, 436, 528, 537
pre-order: 86, 38, 27, 11, 30, 73, 58, 83, 399, 97, 93, 164, 528, 436, 537
post-order: 11, 30, 27, 58, 83, 73, 38, 93, 164, 97, 436, 537, 528, 399, 86
```

### Running Knight Travails
The knight travails project has no tests but comes with a console app that takes two coordinates as start and goal parameters. For example, you can run `npm run knight A1 H8` to get the shortest path from A1 to H8:

```
$ npm run knight A1 H8

> knight
> npx ts-node knight-travails/program.ts A1 H8

Shortest path from A1 to H8:
A1 -> B3 -> C1 -> D3 -> E5 -> F7 -> H8
```

## TODO
- LinkedList:
    - disentangle `at` into `nodeAt` and `valueAt`
    - use generics
