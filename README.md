# MusicNU Infrastructure CDK Repo

This repository will contain all of the infrastructure necessary to run the MusicNU application.
It is defined in [CDK](https://aws.amazon.com/cdk/) for ease of maintenance.

# Deploying the TrustStack

The TrustStack must be deployed to AWS IAM to enable updating the infrastructure through
Github Actions.

Run the following:

```
AWS_PROFILE=<your-profile> npx cdk deploy TrustStack --parameters GitHubOrg=<your-org> --parameters GitHubRepo=<your-repo>
```

This will create the IAM provider for the repo. After that, all deployments through Github
Actions should have permissions to change the AWS account. 

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template