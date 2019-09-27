/**
 * Usage:
 *
 *   export ASANA_API_KEY=...
 *   node events.js PROJECT_ID
 */
var asana = require('asana');

// Arguments / constants
var accessToken = process.env.ASANA_ACCESS_TOKEN;
var projectId = process.env.ASANA_PROJECT_ID;

// Set up a client using personal access token
var client = asana.Client.create().useAccessToken(accessToken);

console.log('Listening to new stories on project', projectId);

client.events.stream(projectId, {
    periodSeconds: 3
})
    .on('data', function (event) {
        // Here we filter to just the type of event we care about.
        if (event.type === 'story' && event.action === 'added') {
            // Fetch the story and then process it.
            var storyId = event.resource.id;
            return client.stories.findById(storyId)
                .then(function (story) {
                    console.log(
                        'New story on task',
                        '[' + story.target.name + ']:', story.text);
                })
                .catch(function (error) {
                    console.log('Error fetching story', storyId, error);
                });
        }
    });
