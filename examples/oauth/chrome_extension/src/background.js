var client = Asana.Client.create({
  clientId: YOUR_CLIENT_ID_HERE
});
client.useOauth();
client.authorize().then(function() {
  return client.users.me().then(function(me) {
    console.log('Hello ' + me.name);
  });
}).catch(function(err) {
  console.log(err);
});

