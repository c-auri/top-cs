# A Bit of Computer Science

These are my solutions for the [A Bit of Computer Science](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript#a-bit-of-computer-science) section of the JavaScript course from The Odin Project. I bundled all the projects of that section inside this one repository. This way I could easily re-use my implementations of mergesort and linked list in the later projects.

Since I have a CS degree the assignments gave me little trouble. I used it as an exercise in test-driven development and wrote tests for all projects except knight travails. Most of the problems I encountered where due to the loose typing of JavaScript. After a while I decided to use TypeScript to avoid them and it was smooth sailing from there.

## Running the code
Initialize the project with `npm i` and then run `npm test` to start the tests. To see all the test descriptions even for passing tests, run `npm test -- --verbose`. To see just the tests of a single project you can add the name of the test file, e.&thinsp;g. `npm test -- --verbose fibs` to run just the fibonacci tests.

### Running Binary Search Tree
In addition to the tests, the binary search tree project has a driver script that can be run with `npm run tree`. The script is located in `binary-search-tree/program.ts`.

### Running Knight Travails
The knight travails project has no tests but come with a console app (inside `knight-travails/program.ts`) that takes two coordinates as start and goal parameters. For example, you can run `npm run knight A1 H8` to get the shortest path from A1 and H8.

## TODO
- LinkedList:
    - disentangle `at` into `nodeAt` and `valueAt`
    - use generics