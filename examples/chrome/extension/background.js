
//xcxc
SANDBOX_URL = 'https://localhost.asana.com:8180/';
Asana.Dispatcher.ROOT_URL = SANDBOX_URL + 'api/1.0';

var client = Asana.Client.oauth({
  baseUrl: SANDBOX_URL,
  clientId: 2102
});

client.authorize().then(function() {
  client.users.me().then(function(me) {
    console.log('Hello ' + me.name);
  });
});
