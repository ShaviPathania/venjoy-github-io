# Bash Tips And Tricks

## .env file variables to bash environment

```bash
export $(grep -v '^#' .env | xargs -d '\n')
```