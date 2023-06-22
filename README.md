# A Bit of Computer Science

These are my solutions for the [A Bit of Computer Science](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript#a-bit-of-computer-science) section of the JavaScript course from The Odin Project. I bundled all the projects of that section inside this one repository. This way I could easily re-use my implementations of mergesort and linked lists in the later projects.

Since I have a CS degree the assignments gave me little trouble. I used it as an exercise in test-driven development and wrote tests for all projects except knight travails. Most of the problems I encountered were due to the loose typing of JavaScript. After a while I decided to use TypeScript to avoid them and it was smooth sailing from there.

## Running the code
Initialize the project with `npm i` and then run `npm test` to start the tests. To see all the test descriptions even for passing tests, run `npm test -- --verbose`. To see just the tests of a single project you can add the name of the test file, e.&thinsp;g. `npm test -- --verbose fibs` to run just the fibonacci tests.

### Knight Travails
The knight travails project has no tests but comes with a console app that takes two coordinates as start and goal parameters. For example, you can run `npm run knight A1 H8` to get all the shortest paths from A1 to H8:

```
$ npm run knight A1 H7

> knight
> npx ts-node knight-travails/program.ts A1 H7

There are 19 shortest paths from A1 to H7:
 1: A1 -> B3 -> C5 -> D7 -> F6 -> H7
 2: A1 -> B3 -> C5 -> D7 -> F8 -> H7
 3: A1 -> B3 -> C5 -> E4 -> F6 -> H7
 4: A1 -> B3 -> C5 -> E4 -> G5 -> H7
 5: A1 -> B3 -> C5 -> E6 -> F8 -> H7
 6: A1 -> B3 -> C5 -> E6 -> G5 -> H7
 7: A1 -> B3 -> D2 -> E4 -> F6 -> H7
 8: A1 -> B3 -> D2 -> E4 -> G5 -> H7
 9: A1 -> B3 -> D2 -> F3 -> G5 -> H7
10: A1 -> B3 -> D4 -> E6 -> F8 -> H7
11: A1 -> B3 -> D4 -> E6 -> G5 -> H7
12: A1 -> B3 -> D4 -> F3 -> G5 -> H7
13: A1 -> C2 -> D4 -> E6 -> F8 -> H7
14: A1 -> C2 -> D4 -> E6 -> G5 -> H7
15: A1 -> C2 -> D4 -> F3 -> G5 -> H7
16: A1 -> C2 -> E1 -> F3 -> G5 -> H7
17: A1 -> C2 -> E3 -> G4 -> F6 -> H7
18: A1 -> C2 -> E3 -> D5 -> F6 -> H7
19: A1 -> C2 -> B4 -> D5 -> F6 -> H7
```

### Binary Search Tree
In addition to the tests, the binary search tree project has a driver script that can be run with `npm run tree`:

```
$ npm run tree

> tree
> npx ts-node binary-search-tree/program.ts

Here's a balanced tree containing some fibonacci numbers:

│           ┌── 144
│       ┌── 89
│   ┌── 55
│   │   │   ┌── 34
│   │   └── 21
└── 13
    │       ┌── 8
    │   ┌── 5
    └── 3
        └── 2

Now, let's add some more:

│                               ┌── 1597
│                           ┌── 987
│                       ┌── 610
│                   ┌── 377
│               ┌── 233
│           ┌── 144
│       ┌── 89
│   ┌── 55
│   │   │   ┌── 34
│   │   └── 21
└── 13
    │       ┌── 8
    │   ┌── 5
    └── 3
        └── 2

The tree is now unbalanced. Let's rebalance it:

│           ┌── 1597
│       ┌── 987
│       │   └── 610
│   ┌── 377
│   │   │   ┌── 233
│   │   └── 144
│   │       └── 89
└── 55
    │       ┌── 34
    │   ┌── 21
    │   │   └── 13
    └── 8
        │   ┌── 5
        └── 3
            └── 2

These are the tree values in different orders:

level-order: 55, 8, 377, 3, 21, 144, 987, 2, 5, 13, 34, 89, 233, 610, 1597
in-order: 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597
pre-order: 55, 8, 3, 2, 5, 21, 13, 34, 377, 144, 89, 233, 987, 610, 1597
post-order: 2, 5, 3, 13, 34, 21, 8, 89, 233, 144, 610, 1597, 987, 377, 55
```

## TODO
- LinkedList:
    - disentangle `at` into `nodeAt` and `valueAt`
    - use generics
