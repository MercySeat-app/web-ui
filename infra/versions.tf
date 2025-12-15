terraform {
  backend "s3" {
    bucket = "mercyseattfstates"
    key    = "devstates/web-ui.tfstate"
    region = "us-east-1"
  }
  required_version = ">= 1.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

