# Sample NX / PNPM CDK Monorepo

## Organization

Each stack is lives in a stacks directory.  The export out their Stack class.

Each app lives in an apps directory. This example has only one app, but you could have more than one.

The app imports the stack and assembles them.  

Some important distinctions
* The app imports the stack and ONLY the stack
* Each stack gets compiled via a normal build process NOT a cdk build
* The lambda code is in dist/lambdas this allows the stack to use Code.fromAsset to load the compiled assets
* Those compiled assets are NOT added to the stack at compile time but 
  instead when the app that contains the stack gets compiled and deployed.

## Dependencies
You will need pnpm and nx installed globally

You will need to have cdk installed and setup

## Setup

```bash
pnpm i
nx run-many --target=build
nx run-many --target=deploy
```