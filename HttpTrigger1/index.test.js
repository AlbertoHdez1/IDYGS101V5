const functions = require('./index');
const context = require('../testing/context');

test('Http trigger example', async() => {
    const request = {
        query: { name: 'Alberto' }
    };

    var iterations = 100000;
    console.time('FUNCTION #1');
    for (var i = 0; i < iterations; i++) {
        await functions(context, request);
    }
    console.timeEnd('FUNCTION #1');
    expect(context.res.body).toEqual('Welcome, alberto');
    expect(context.log.mock.calls.length).toBe(100000);
});