# serverless-plugin-utils
![Downloads][link-download] ![Version][link-version] ![License][link-license]

A collection of serverless framework utilities

## Installation

```
npm install -D serverless-plugin-utils 
# or 
yarn add -D serverless-plugin-utils
```

## Usage
Add the serverless-plugin-utils entry to the plugins section of your serverless file. 

```
plugins:
 - serverless-plugin-utils
```


## Utility Usage

| Function | Description |
|--|--|
| [fn::lower][fn-lower] | Converts a string to its lowercase representation | 
| [fn::upper][fn-upper] | Converts a string to its uppercase representation |
| [fn::ternary][fn-ternary] | Performs equality check and returns a defined result |
| [fn::join][fn-join] | Joins a collection of values with a given delimiter |
| [fn::split][fn-split] | Splits a string value on a given delimiter | 


## Caveats
All operations are done **after** yaml has been processed. This mean certain operations cannot be done in-line. 

Example:
```
something:
  fn::join:
    delimiter: '-'
    values:
      - one
      - two

injected: ${opt:stage}${self:custom.something}

// Serverless Error ---------------------------------------
// Trying to populate non string value into a string for variable ${self:custom.something}. Please make sure the value of the property is a string.
```

To work around this fully use the utils option. The above can be reworked as the following. 
```
injected:
  fn::join:
    delimiter: '-'
    values:
      - ${opt:stage}one
      - two
```


[link-download]: https://img.shields.io/npm/dt/serverless-plugin-utils.svg
[link-version]: https://img.shields.io/npm/v/serverless-plugin-utils.svg
[link-license]: https://img.shields.io/npm/l/serverless-plugin-utils.svg

[fn-lower]: https://github.com/icarus-sullivan/serverless-plugin-utils/blob/master/documentation/lower.md
[fn-upper]: https://github.com/icarus-sullivan/serverless-plugin-utils/blob/master/documentation/upper.md
[fn-join]: https://github.com/icarus-sullivan/serverless-plugin-utils/blob/master/documentation/join.md
[fn-split]: https://github.com/icarus-sullivan/serverless-plugin-utils/blob/master/documentation/split.md
[fn-ternary]: https://github.com/icarus-sullivan/serverless-plugin-utils/blob/master/documentation/ternary.md