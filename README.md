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
All operations are done **after** yaml has been processed. This means operations cannot be done in-place such as references like `${self:custom:variable}`.

[link-download]: https://img.shields.io/npm/dt/serverless-plugin-utils.svg
[link-version]: https://img.shields.io/npm/v/serverless-plugin-utils.svg
[link-license]: https://img.shields.io/npm/l/serverless-plugin-utils.svg

[fn-lower]: https://github.com/icarus-sullivan/serverless-plugin-utils/blob/master/documentation/lower.md
[fn-upper]: https://github.com/icarus-sullivan/serverless-plugin-utils/blob/master/documentation/upper.md
[fn-join]: https://github.com/icarus-sullivan/serverless-plugin-utils/blob/master/documentation/join.md
[fn-split]: https://github.com/icarus-sullivan/serverless-plugin-utils/blob/master/documentation/split.md
[fn-ternary]: https://github.com/icarus-sullivan/serverless-plugin-utils/blob/master/documentation/ternary.md