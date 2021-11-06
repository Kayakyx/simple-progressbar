# simple-progressbar

> A simple terminal progress bar

## Install

```
$ npm i @kayakyx/simple-progressbar
```

## Usage

```js
const { createProgressBar } = require('simple-progressbar')

const total = 66

const progress = createProgressBar({ total })

for (let i = 0; i < total; i++) {
  await asyncSomething()
  progress()
}
```

## Output
```text
[|||||||||||||||||||||||||||||||||||||||||||||||.....................................................] 47.27%
```

## API

### createProgressBar(options)

Returns a `progress` function.

#### options.total

Required\
Type: `number`\
Minimum: `1`\

Total tasks.

#### options.firstChar

Type: `string`\
Default: `[`

First character of progress bar.

#### options.lastChar

Type: `string`\
Default: `]`

Last character of progress bar.

#### options.completedChar

Type: `string`\
Default: `|`

Characters displayed in the completed part of the progress bar.

#### options.uncompletedChar

Type: `string`\
Default: `.`

Characters displayed in the uncompleted part of the progress bar.

## Character position
```text
[|||||||||||||||||||||||||||||||||||||||||||||||.....................................................] 47.27%
^                       ^                                   ^                                        ^
|                       |                                   |                                        |
firstChar          completedChar                      uncompletedChar                             lastChar 
```

