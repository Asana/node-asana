/**
 * Usage:
 *
 *   export ASANA_API_KEY=...
 *   node events.js PROJECT_ID
 */
var asana = require('asana');

// Arguments / constants
var apiKey = process.env.ASANA_API_KEY;
var projectId = process.env.ASANA_PROJECT_ID;

// Set up a client using basic authentication
var client = asana.Client.create().useBasicAuth(apiKey);

console.log('Listening to new stories on project', projectId);

client.events.stream(projectId, {
    periodSeconds: 3,
    continueOnError: true
  })
  .on('data', function(event) {
    // Here we filter to just the type of event we care about.
    if (event.type === 'story' && event.action === 'added') {
      // Fetch the story and then process it.
      var storyId = event.resource.id;
      return client.stories.findById(storyId)
        .then(function(story) {
          console.log(
            'New story on task',
            '[' + story.target.name + ']:', story.text);
        })
        .catch(function(error) {
          console.log('Error fetching story', storyId, error);
        });
    }
  });