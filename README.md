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
| [lower][lower] | Converts a string to its lowercase representation | 
| [upper][upper] | Converts a string to its uppercase representation |
| [ternary][ternary] | Performs equality check and returns a defined result |
| [join][join] | Joins a collection of values with a given delimiter |
| [split][split] | Splits a string value on a given delimiter | 
| [switch][switch] | Performs switch-statement lookups | 
| [capitalize][capitalize] | Converts a string to its Titlecase representation | 


[link-download]: https://img.shields.io/npm/dt/serverless-plugin-utils.svg
[link-version]: https://img.shields.io/npm/v/serverless-plugin-utils.svg
[link-license]: https://img.shields.io/npm/l/serverless-plugin-utils.svg

[lower]: https://github.com/icarus-sullivan/serverless-plugin-utils/blob/master/documentation/lower.md
[upper]: https://github.com/icarus-sullivan/serverless-plugin-utils/blob/master/documentation/upper.md
[join]: https://github.com/icarus-sullivan/serverless-plugin-utils/blob/master/documentation/join.md
[split]: https://github.com/icarus-sullivan/serverless-plugin-utils/blob/master/documentation/split.md
[ternary]: https://github.com/icarus-sullivan/serverless-plugin-utils/blob/master/documentation/ternary.md
[switch]: https://github.com/icarus-sullivan/serverless-plugin-utils/blob/master/documentation/switch.md
[capitalize]: https://github.com/icarus-sullivan/serverless-plugin-utils/blob/master/documentation/capitalize.md