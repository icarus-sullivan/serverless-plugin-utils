[Home](https://github.com/icarus-sullivan/serverless-plugin-utils/blob/master/README.md)

# split
Splits a string value on a given delimiter. If an index is provided, that value is selected. 

### Usage
```
varName: ${split(value, delimiter, index?)}
```

Example:
```
provider:
  stage: ${opt:stage, 'dev'}
  environment:
    URI_PARTS: ${split(${self:custom.stageDomain}, '.')}

    HOST: ${split(${self:custom.stageDomain}, '.', 1)}


custom:
  stageDomain: ${join(${self:provider.stage}, awesome, com, '.')}
```

Outputs:

| environment | process.env.URI_PARTS | process.env.HOST |
|--|--|--|
| null | [ dev, awesome, com ] | awesome |
| prod | [ prod, awesome, com ] | awesome |
| devChris | [ devChris, awesome, com ] | awesome |


