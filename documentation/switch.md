[Home](https://github.com/icarus-sullivan/serverless-plugin-utils/blob/master/README.md)

# fn::switch
Performs switch-statement lookups

### Usage
```
varName:
  fn::switch:
    key: string
    cases:
      string: any
      '*': any // default case 
```

Example:
```
custom:
  socketUri:
    fn::switch: 
      key: ${opt:stage}
      cases:
        prod: wss://example.com/prod
        test: wss://example.com/test1
        '*': wss://example.com/beta
```

Outputs:

| environment | socketUri |
|--|--|
| null | wss://example.com/beta |
| test | wss://example.com/test1 |
| prod | wss://example.com/prod |
