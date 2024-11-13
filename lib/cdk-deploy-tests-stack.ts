import * as cdk from 'aws-cdk-lib';
import { aws_lambda } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import path = require('path');
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkDeployTestsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const lambda = new aws_lambda.Function(this, 'CdkDeployTestsLambda', {
      runtime: aws_lambda.Runtime.NODEJS_18_X,
      handler: 'index.handler',
      code: aws_lambda.Code.fromAsset(path.join(__dirname, 'lambda-handler'))
    })
    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'CdkDeployTestsQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
