# foxyjs

![](https://img.shields.io/badge/svg-editor-blue)
![](https://img.shields.io/badge/svg-foxyjs-red)

![](https://darkdragonblade.github.io/foxyjs-svgeditor/static/gif.gif)

A **simple and powerful Javascript HTML5 SVG library**.

- [online demo(editor)][onlineDemo]
- [reactjs usege][reactjs]
- [中文官网][website]

---

## Features

- Out of the box interactions such as scale, move, rotate, skew, group...
- Built in shapes, controls, animations, image filters, gradients, patterns, brushes...
- `JPG`, `PNG`, `JSON` and `CANVAS` , `PDF` , `DFX` , `AI(adobe illustrator)`

#### Supported Browsers/Environments

|   Context   | Supported Version | Notes                           |
| :---------: | :---------------: | ------------------------------- |
|   Firefox   |        ✔️         | modern version (tbd)            |
|   Safari    |        ✔️         | version >= 10.1                 |
|    Opera    |        ✔️         | chromium based                  |
|   Chrome    |        ✔️         | modern version (tbd)            |
|    Edge     |        ✔️         | chromium based                  |
| Edge Legacy |        ❌         |
|    IE11     |        ❌         |
|   Node.js   |        ✔️         | [Node.js installation](#nodejs) |

## Installation

```bash
$ npm install foxyjs --save
// or
$ yarn add foxyjs
```

#### Browser

See [browser modules][mdn_es6] for using es6 imports in the browser or use a dedicated bundler.

## Quick Start

```js
import { Stage, SVGStar } from "foxyjs";
```

<details><summary><b>Plain HTML</b></summary>

```html
<div id="container" width="100vw" height="100vh"></div>
<script>
  const container = document.getElementById("container");
  const stage = new Stage(container);
  const star = new SVGStar({
    x: 100,
    y: 100,
    rx: 60,
    ry: 60,
    fill: "red",
  });
  stage.addGraph(star);
  stage.selectedElements.set(star);
  stage.toggleTool("transform-tool");
</script>
```

</details>

<details><summary><b>ReactJS</b></summary>

```js
import React, { useRef } from "react";
import { Stage, SVGStar } from "foxyjs";

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    const board = document.querySelector("#board");
    const stage = new Stage(board);
    const star = new SVGStar({
      x: 100,
      y: 100,
      rx: 60,
      ry: 60,
      fill: "red",
    });
    stage.addGraph(star);
    stage.selectedElements.set(star);
    stage.toggleTool("transform-tool");
  }

  render = () => {
    return (
      <div className="App">
        <div id="board"></div>
      </div>
    );
  };
}

export default App;
```

</details>

<details><summary><b>Vue2</b></summary>

```js
<template>
  <div id="container"></div>
</template>;

import { Stage, SVGStar } from "foxyjs";

mounted(() => {
  const container = document.getElementById("container");
  const stage = new Stage(container);
  const star = new SVGStar({
    x: 100,
    y: 100,
    rx: 60,
    ry: 60,
    fill: "red",
  });
  stage.addGraph(star);
  stage.selectedElements.set(star);
  stage.toggleTool("transform-tool");
});
```

</details>

<details><summary><b>Vue3</b></summary>

```js
<template>
  <div id="container"></div>
</template>;

import { computed, onMounted, ref } from "vue";
import { Stage, SVGStar } from "foxyjs";

onMounted(() => {
  const container = document.getElementById("container");
  const stage = new Stage(container);
  const star = new SVGStar({
    x: 100,
    y: 100,
    rx: 60,
    ry: 60,
    fill: "red",
  });
  stage.addGraph(star);
  stage.selectedElements.set(star);
  stage.toggleTool("transform-tool");
});
```

</details>

---

[mdn_es6]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
[onlineDemo]: https://darkdragonblade.github.io/foxyjs-svgeditor/demo
[reactjs]: https://github.com/darkdragonblade/foxyjs-svgeditor/tree/main/src
[website]: https://darkdragonblade.github.io/foxyjs-svgeditor/web
