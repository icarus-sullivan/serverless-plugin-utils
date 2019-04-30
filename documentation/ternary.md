[Home](https://github.com/icarus-sullivan/serverless-plugin-utils/blob/master/README.md)

# fn::join
Performs an equality check and returns defined results

### Usage
```
varName:
  fn::ternary:
    - left operand
    - right operand
    - truthy
    - falsey
```

This utility is useful for resolving domain names or naming conventions that are shorter in one environment than that of another. 

Example:
```
custom:
  stageDomain:
    fn::join:
      delimiter: '.'
      values: 
        - fn::lower: ${opt:stage}
        - awesome
        - com

  domain:
    fn::ternary:
      - ${opt:stage}
      - prod
      - awesome.com
      - ${self:custom.stageDomain}
```

Outputs:

| environment | domain |
|--|--|
| prod | awesome.com |
| devFoo | devfoo.awesome.com |
| devChris | devchris.awesome.com |
