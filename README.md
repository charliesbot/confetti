# ReactFitti

![Demo Animation](./confetti-demo.gif?raw=true)

> 

[![NPM](https://img.shields.io/npm/v/confetti.svg)](https://www.npmjs.com/package/confetti) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install reactfitti

yarn add reactfitti
```

## Usage

```tsx
import React from "react";
import Confetti from "confetti";

const App = () => {
  return (
    <div>
      <Confetti />
    </div>
  );
};

export default App;
```

## Props
| Prop             | Type     | Optional | Default | Description                           |
|------------------|----------|----------|---------|---------------------------------------|
| colors           | string[] | Yes      |         | Random colors for the confetti papers |
| numberOfElements | number   | Yes      | 250     | Amount of pieces on the view          |
|                  |          |          |         |                                       |                        |


## License

MIT © [charliesbox](https://github.com/charliesbox)
