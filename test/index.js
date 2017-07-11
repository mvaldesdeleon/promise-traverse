const test = require('tape');
const traverse = require('../index.js');

test('traverse', t => {
    const d = new Date();
    const x = {
        name: Promise.resolve('john'),
        cats: [{color: 'white', date: d}, {color: Promise.resolve('black')}],
        numbers: [1, 13, Promise.resolve(42)]
    };
    const y = {
        name: Promise.resolve('john'),
        cats: [{color: 'white'}, {color: Promise.resolve('black')}],
        numbers: [Promise.reject('boom'), 13, Promise.resolve(42)]
    };

    const a = traverse(x);
    const b = traverse(y);

    const aa = a.then(px => {
        t.deepEqual({
            name: 'john',
            cats: [{color: 'white', date: d}, {color: 'black'}],
            numbers: [1, 13, 42]
        }, px);
    });

    const bb = b.catch(err => t.equal('boom', err));

    Promise.all([aa, bb]).then(_ => t.end());
});
