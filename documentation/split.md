[Home](https://github.com/icarus-sullivan/serverless-plugin-utils/blob/master/README.md)

# fn::split
Splits a string value on a given delimiter. If an index is provided, that value is selected. 

### Usage

```
varName:
  fn::split:
    delimiter: string
    value: string
    index?: number
```

Example:

```
provider:
  stage: ${opt:stage, 'dev'}
  environment:
    URI_PARTS: 
      fn::split:
        delimiter: '.'
        value: ${self:custom.stageDomain}
    HOST:
      fn::split:
        delimiter: '.'
        value: ${self:custom.stageDomain}
        index: 1

custom:
  stageDomain: 
    fn::join:
      delimiter: '.'
      values:
        - ${self:provider.stage}
        - awesome
        - com
```

Outputs:

| environment | process.env.URI_PARTS | process.env.HOST |
|--|--|--|
| null | [ dev, awesome, com ] | awesome |
| prod | [ prod, awesome, com ] | awesome |
| devChris | [ devChris, awesome, com ] | awesome |


