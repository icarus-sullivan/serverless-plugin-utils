[Home](https://github.com/icarus-sullivan/serverless-plugin-utils/blob/master/README.md)

# fn::capitalized
Converts a string to its Titlecase representation

### Usage

```
service: Example

provider:
  stage: ${opt:stage, 'dev'}

custom:
  bucketName: 
    fn::capitalized: ${self:provider.stage}.${self:service}.uploads
```



Outputs:

| environment | bucketName |
|--|--|
| null | Dev.example.uploads |
| devChris | Devchris.example.uploads |
