[Home](https://github.com/icarus-sullivan/serverless-plugin-utils/blob/master/README.md)

# switch
Performs switch-statement lookups

### Usage
```
cases:
  key1: any
  key2: any

varName: ${switch(key, cases)}
```

Example:
```
custom:
  stages:
    prod: wss://example.com/prod
    test: wss://example.com/test1
    '*': wss://example.com/beta

  socketUri: ${switch(${self:provider.stage}, ${self:custom.stages})}
```

Outputs:

| environment | socketUri |
|--|--|
| null | wss://example.com/beta |
| test | wss://example.com/test1 |
| prod | wss://example.com/prod |
