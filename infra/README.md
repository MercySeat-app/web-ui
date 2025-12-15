# Terraform Infrastructure for Static Site Hosting

This Terraform configuration creates an S3 bucket with static website hosting enabled and a CloudFront distribution to serve the content.

## Resources Created

- **S3 Bucket**: Configured for static website hosting with public access blocked (accessed only via CloudFront)
- **CloudFront Distribution**: Serves content from the S3 bucket with:
  - Origin Access Control (OAC) for secure S3 access
  - HTTPS redirect
  - Custom error pages (404/403 → index.html for SPA routing)
  - Optimized caching (HTML files with no cache, other assets with longer TTL)

## Prerequisites

1. AWS CLI configured with appropriate credentials
2. Terraform >= 1.0 installed
3. Appropriate AWS permissions to create S3 buckets and CloudFront distributions

## Usage

1. Copy the example variables file:
   ```bash
   cp terraform.tfvars.example terraform.tfvars
   ```

2. Edit `terraform.tfvars` with your values:
   - `bucket_name`: Unique S3 bucket name (must be globally unique)
   - `environment`: Environment name (dev, staging, prod, etc.)
   - Other variables as needed

3. Initialize Terraform:
   ```bash
   terraform init
   ```

4. Review the plan:
   ```bash
   terraform plan
   ```

5. Apply the configuration:
   ```bash
   terraform apply
   ```

## Custom Domain (Optional)

To use a custom domain:

1. Create an ACM certificate in `us-east-1` region (required for CloudFront)
2. Set `domain_name` and `certificate_arn` in `terraform.tfvars`
3. Update your DNS to point to the CloudFront distribution domain name

## Deploying Content

After the infrastructure is created, upload your static files to the S3 bucket:

```bash
aws s3 sync ./dist s3://<bucket-name> --delete
```

Or use the Terraform outputs:

```bash
aws s3 sync ./dist s3://$(terraform output -raw s3_bucket_id) --delete
```

## Outputs

After applying, you can get the CloudFront URL:

```bash
terraform output cloudfront_url
```

## Variables

| Variable | Description | Type | Default |
|----------|-------------|------|---------|
| `bucket_name` | Name of the S3 bucket | string | (required) |
| `domain_name` | Custom domain name | string | "" |
| `certificate_arn` | ACM certificate ARN | string | "" |
| `environment` | Environment name | string | "dev" |
| `index_document` | Index document | string | "index.html" |
| `error_document` | Error document | string | "index.html" |
| `enable_versioning` | Enable S3 versioning | bool | false |
| `tags` | Resource tags | map(string) | {} |

## Notes

- The S3 bucket is configured with public access blocked and uses Origin Access Control (OAC) for CloudFront access
- HTML files have no cache TTL to ensure fresh content, while other assets are cached for 1 hour
- Custom error responses redirect 404/403 to index.html for single-page application routing support
- The configuration uses CloudFront's default SSL certificate if no custom domain is specified

