import {Stack, StackProps} from "aws-cdk-lib";
import {Construct} from "constructs";
import {Code, Function, Runtime} from "aws-cdk-lib/aws-lambda";

const workingDir = __dirname;

export class StackOne extends Stack {
  constructor(app: Construct, props: StackProps) {
    super(app, 'sw-stack-one', props);

    new Function(this, 'fn1', {
      handler: 'index.one',
      runtime: Runtime.NODEJS_18_X,
      code: Code.fromAsset(`${workingDir}`),
    })
  }
}
