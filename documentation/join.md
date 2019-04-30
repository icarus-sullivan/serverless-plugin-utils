[Home](https://github.com/icarus-sullivan/serverless-plugin-utils/blob/master/README.md)

# fn::join
Joins a collection of values with a given delimiter

### Usage
```
varName:
  fn::join:
    delimiter: string
    values: string[]
```

Example:
```
provider:
  stage: ${opt:stage, 'dev'}

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

| environment | stageDomain |
|--|--|
| null | dev.awesome.com |
| prod | prod.awesome.com |
| devChris | devChris.awesome.com |
