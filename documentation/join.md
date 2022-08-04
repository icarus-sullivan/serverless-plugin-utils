[Home](https://github.com/icarus-sullivan/serverless-plugin-utils/blob/master/README.md)

# join
Joins a collection of values with a given delimiter

### Usage
```
varName: ${join(...items, delimiter)}
```

Example:
```
provider:
  stage: ${opt:stage, 'dev'}

custom:
  stageDomain: ${join(${self:provider.stage}, awesome, com, '.')}
```

Outputs:

| environment | stageDomain |
|--|--|
| null | dev.awesome.com |
| prod | prod.awesome.com |
| devChris | devChris.awesome.com |
