[Home](https://github.com/icarus-sullivan/serverless-plugin-utils/blob/master/README.md)

# fn::upper
Converts a string to its uppercase representation

### Usage

```
provider:
  stage: ${opt:stage, 'dev'}

custom:
  tableName: 
    fn::join:
      delimiter: '-'
      values:
        - Connections
        - fn::upper: $self:provider.stage}
```

Outputs:

| environment | tableName |
|--|--|
| null | Connections-DEV |
| devChris | Connections-DEVCHRIS |
