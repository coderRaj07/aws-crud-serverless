npm i -g serverless
sls config credentials -h

# provider aws, accesskey and secret key taken from IAM user
sls config credentials -p aws -k AKIAT32QDSOQEKH3PDHW -s UjNq+m7hrE+AGiOVeEfTdLWU95P01H7m7yMCY1jJ -n aws_crud_serverless

# check credentials
cat ~/.aws/credentials
sls
npm init
npm i mongoose serverless validator bcryptjs serverless-dotenv-plugin

# to check ther serverless offline before deploying it
serverless plugin install -n serverless-offline
sls offline