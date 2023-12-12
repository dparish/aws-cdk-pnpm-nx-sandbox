import middy from "@middy/core";
import inputOutputLogger from "@middy/input-output-logger";

async function fn(_event: any) {
  console.log('in one');
}

export const one = middy(fn)
  .use(inputOutputLogger())
