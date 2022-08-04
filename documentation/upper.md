[Home](https://github.com/icarus-sullivan/serverless-plugin-utils/blob/master/README.md)

# upper
Converts a string to its uppercase representation

### Usage
```
varName: ${upper(value)}
```

Example:
```
provider:
  stage: ${opt:stage, 'dev'}

custom:
  tableName: ${join(Connections, ${upper(${self:provider.stage}}), '-')}
```

Outputs:

| environment | tableName |
|--|--|
| null | Connections-DEV |
| devChris | Connections-DEVCHRIS |
