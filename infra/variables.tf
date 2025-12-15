variable "bucket_name" {
  description = "Name of the S3 bucket for static site hosting"
  type        = string
}

variable "domain_name" {
  description = "Custom domain name for the CloudFront distribution (optional)"
  type        = string
  default     = ""
}

variable "certificate_arn" {
  description = "ARN of the ACM certificate for custom domain (required if domain_name is set)"
  type        = string
  default     = ""
}

variable "environment" {
  description = "Environment name (e.g., dev, staging, prod)"
  type        = string
  default     = "dev"
}

variable "index_document" {
  description = "Index document for static site hosting"
  type        = string
  default     = "index.html"
}

variable "error_document" {
  description = "Error document for static site hosting"
  type        = string
  default     = "index.html"
}

variable "enable_versioning" {
  description = "Enable versioning on the S3 bucket"
  type        = bool
  default     = false
}

variable "tags" {
  description = "Tags to apply to resources"
  type        = map(string)
  default     = {}
}

