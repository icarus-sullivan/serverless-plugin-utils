[Home](https://github.com/icarus-sullivan/serverless-plugin-utils/blob/master/README.md)

# lower
Converts a string to its lowercase representation

### Usage
```
varName: ${lower(value)}
```

Example:
```
service: Example

provider:
  stage: ${opt:stage, 'dev'}

custom:
  bucketName: ${lower(${self:provider.stage}.${self:service}.uploads)}
```



Outputs:

| environment | bucketName |
|--|--|
| null | dev.example.uploads |
| devChris | devchris.example.uploads |
