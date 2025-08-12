import * as cdk from "aws-cdk-lib"
import { Construct } from "constructs"
import * as s3 from "aws-cdk-lib/aws-s3"


export class DynamicsStack extends cdk.Stack {
    s3: s3.Bucket
    

    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props)

    this.s3 = new s3.Bucket(this, "MusicNUS3Bucket", {
        blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,

    })


    }
}