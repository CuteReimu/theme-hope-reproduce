---
home: true
---

# 问题重现


::: chart

```js
const config = {
  type: "doughnut",
  data: {
    labels: ["←", "↑", "→"],
    datasets: [{
      label: "数量",
      data: [38, 34, 38],
      hoverOffset: 4,
    }]
  },
  options: {
    plugins: {
      legend: {
        position: "right",
      },
    },
  }
};
```
