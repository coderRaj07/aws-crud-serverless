npm i -g serverless
sls config credentials -h

# In IAM only give "AdminstratorFullAccess" not other access to user to avoid potntial errors

# provider aws, accesskey and secret key taken from IAM user
sls config credentials -p aws -k <AWS_ACCESS_KEY> -s <AWS_SECRET_KEY> -n aws_crud_serverless

# check credentials
cat ~/.aws/credentials
sls
npm init
npm i mongoose serverless validator bcryptjs serverless-dotenv-plugin

# to check ther serverless offline before deploying it
serverless plugin install -n serverless-offline
sls offline

# deploy to the aws
sls deploy -h

# aws_crud_serverless defined in "cat ~/.aws/credentials"
sls deploy --aws-profile aws_crud_serverless -s dev

# to manually delete stack from cmd line
sudo apt install awscli
aws configure
aws cloudformation list-stacks
aws cloudformation delete-stack --stack-name aws-crud-serverless-dev

# errors
https://stackoverflow.com/questions/49870429/referenceerror-context-is-not-defined
https://stackoverflow.com/questions/66560150/aws-profile-doesnt-seem-to-be-configured-serverless-framework-error
https://stackoverflow.com/questions/53373840/access-denied-when-put-bucket-policy-on-aws-s3-bucket-with-root-user-bucket-o
# to delete stack from cloud formation tab in aws make sure ypu have choosen the correct region
https://github.com/serverless/serverless/issues/6612
