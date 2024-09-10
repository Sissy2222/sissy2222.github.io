const Ably = require('ably/promises');

module.exports = async function (context, req) {
    const client = new Ably.Realtime(process.env.FZr9XA.CvsK0Q:Xce_um2jsT5OcTw5bz7szIfM2EwG1otn5diBx8cnHZA);
    const tokenRequestData = await client.auth.createTokenRequest({ clientId: 'ably-whiteboard' });
    context.res = {
        headers: { "content-type": "application/json" },
        body: JSON.stringify(tokenRequestData)
    };
};
