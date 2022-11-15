[Home](https://github.com/icarus-sullivan/serverless-plugin-utils/blob/master/README.md)

# capitalize
Converts a string to its Titlecase representation

### Usage
```
varName: ${capitalize(value)}
```

Example:
```
service: Example

provider:
  stage: ${opt:stage, 'dev'}

custom:
  bucketName: ${capitalize(${self:provider.stage}.${self:service}.uploads)}
```


Outputs:

| environment | bucketName |
|--|--|
| null | Dev.example.uploads |
| devChris | Devchris.example.uploads |
