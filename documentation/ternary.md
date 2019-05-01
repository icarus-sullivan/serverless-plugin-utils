[Home](https://github.com/icarus-sullivan/serverless-plugin-utils/blob/master/README.md)

# fn::ternary
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
  domain:
    fn::ternary:
      - ${opt:stage}
      - prod
      - awesome.com
      - fn::lower: ${opt:stage}.awesome.com
```

Outputs:

| environment | domain |
|--|--|
| prod | awesome.com |
| devFoo | devfoo.awesome.com |
| devChris | devchris.awesome.com |
