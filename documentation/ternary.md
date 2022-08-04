[Home](https://github.com/icarus-sullivan/serverless-plugin-utils/blob/master/README.md)

# ternary
Performs an equality check and returns defined results

### Usage
```
varName: ${ternary(leftValue, rightValue, truthy, falsy)}

// leftValue === rightValue ? truthy : falsy
```

This utility is useful for resolving domain names or naming conventions that are shorter in one environment than that of another. 

Example:
```
custom:
  domain: ${ternary( ${opt:stage}, prod, awesome.com, ${lower( ${opt:stage}.awesome.com )} )}
```

Outputs:

| environment | domain |
|--|--|
| prod | awesome.com |
| devFoo | devfoo.awesome.com |
| devChris | devchris.awesome.com |
