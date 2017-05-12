# promise-traverse

`Promise.all` as it should've been.

```JS
var traverse = require('promise-traverse');
var deep = {
    name: Promise.resolve('john'),
    cats: [
        {
            color: 'white'
        },
        {
            color: Promise.resolve('black')
        }
    ],
    numbers: [1, 13, Promise.resolve(42)]
};

traverse(deep).then(console.dir.bind(console));
// Profit
```

# install
with [npm](https://npmjs.org) do:

```
npm install promise-traverse
```

# license

MIT
