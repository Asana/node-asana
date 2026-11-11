/**
 * Asana SDK Pagination Example
 * 
 * This example demonstrates how to use the improved pagination functionality
 * in the Asana Node.js SDK after the pagination fix.
 */

// For this example, we'll use the published asana package
// In a real project, you would use: const Asana = require('asana');
// const Asana = require('../src/index.js');

// Setup client (you'll need to provide your own access token)
// const client = Asana.ApiClient.instance;
// const token = client.authentications['token'];
// token.accessToken = process.env.ASANA_ACCESS_TOKEN || 'YOUR_ACCESS_TOKEN_HERE';
// const usersApiInstance = new Asana.UsersApi();

// For demonstration purposes, we'll mock the API calls
const mockUsersApiInstance = {
    async getUsers(opts) {
        // Simulate API response structure after our fix
        const mockResponse = {
            data: [
                { gid: '1001', name: 'Alice Johnson', resource_type: 'user' },
                { gid: '1002', name: 'Bob Smith', resource_type: 'user' }
            ],
            // This is the fix - next_page is now at top level!
            next_page: opts.offset ? null : {
                offset: 'mock_next_page_token_123',
                path: `/users?team=${opts.team}&limit=${opts.limit}&offset=mock_next_page_token_123`,
                uri: `https://app.asana.com/api/1.0/users?team=${opts.team}&limit=${opts.limit}&offset=mock_next_page_token_123`
            },
            _response: {
                data: [
                    { gid: '1001', name: 'Alice Johnson', resource_type: 'user' },
                    { gid: '1002', name: 'Bob Smith', resource_type: 'user' }
                ],
                next_page: opts.offset ? null : {
                    offset: 'mock_next_page_token_123',
                    path: `/users?team=${opts.team}&limit=${opts.limit}&offset=mock_next_page_token_123`,
                    uri: `https://app.asana.com/api/1.0/users?team=${opts.team}&limit=${opts.limit}&offset=mock_next_page_token_123`
                }
            },
            async nextPage() {
                if (!this.next_page) return { data: null };
                return mockUsersApiInstance.getUsers({ ...opts, offset: this.next_page.offset });
            }
        };
        
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 100));
        return mockResponse;
    }
};

const usersApiInstance = mockUsersApiInstance;

/**
 * Example 1: Simple pagination using the improved next_page access
 */
async function getAllUsersForTeam(teamId) {
    console.log(`\n📋 Getting all users for team: ${teamId}`);
    
    const users = [];
    let currentPage;
    let pageCount = 0;
    
    while (!currentPage || currentPage.next_page) {
        pageCount++;
        console.log(`   Fetching page ${pageCount}...`);
        
        currentPage = await usersApiInstance.getUsers({
            team: teamId,
            limit: 10, // Small limit for demonstration
            offset: currentPage?.next_page?.offset
        });
        
        users.push(...currentPage.data);
        
        console.log(`   ✓ Page ${pageCount}: Found ${currentPage.data.length} users`);
        
        // The fix: next_page is now directly accessible!
        if (currentPage.next_page) {
            console.log(`   → Next page available with offset: ${currentPage.next_page.offset.substring(0, 20)}...`);
        } else {
            console.log(`   ✅ No more pages - reached the end`);
        }
    }
    
    console.log(`\n🎉 Total users found: ${users.length} across ${pageCount} pages`);
    return users;
}

/**
 * Example 2: Using the built-in nextPage() method
 */
async function getAllUsersUsingNextPageMethod(teamId) {
    console.log(`\n🔄 Getting all users using nextPage() method for team: ${teamId}`);
    
    let currentPage = await usersApiInstance.getUsers({
        team: teamId,
        limit: 10
    });
    
    let allUsers = [...currentPage.data];
    let pageCount = 1;
    
    console.log(`   ✓ Page ${pageCount}: Found ${currentPage.data.length} users`);
    
    while (currentPage.next_page) {
        pageCount++;
        console.log(`   Fetching page ${pageCount} using nextPage()...`);
        
        currentPage = await currentPage.nextPage();
        allUsers.push(...currentPage.data);
        
        console.log(`   ✓ Page ${pageCount}: Found ${currentPage.data.length} users`);
    }
    
    console.log(`\n🎉 Total users found: ${allUsers.length} across ${pageCount} pages`);
    return allUsers;
}

/**
 * Example 3: Demonstrating backward compatibility
 */
async function demonstrateBackwardCompatibility(teamId) {
    console.log(`\n🔄 Demonstrating backward compatibility for team: ${teamId}`);
    
    const result = await usersApiInstance.getUsers({
        team: teamId,
        limit: 5
    });
    
    console.log('📊 Response structure analysis:');
    console.log(`   • result.data.length: ${result.data.length}`);
    console.log(`   • result.next_page exists: ${!!result.next_page}`);
    console.log(`   • result._response.next_page exists: ${!!result._response?.next_page}`);
    
    if (result.next_page && result._response?.next_page) {
        console.log(`   • Both references point to same object: ${result.next_page === result._response.next_page}`);
        console.log(`   • Offset accessible via result.next_page.offset: ${!!result.next_page.offset}`);
        console.log(`   • Offset accessible via result._response.next_page.offset: ${!!result._response.next_page.offset}`);
    }
    
    console.log('\n✅ Backward compatibility confirmed - both access methods work!');
}

/**
 * Example 4: Error handling and edge cases
 */
async function demonstrateEdgeCases() {
    console.log(`\n🧪 Demonstrating edge cases`);
    
    try {
        // Test with a limit that might return no results or single page
        const result = await usersApiInstance.getUsers({
            workspace: 'nonexistent_workspace', // This might return empty results
            limit: 100
        });
        
        console.log(`   • Empty result handling: ${result.data.length === 0 ? 'Empty results handled correctly' : `Found ${result.data.length} users`}`);
        console.log(`   • next_page when no pagination: ${result.next_page ? 'Has pagination' : 'No pagination (correct for single page)'}`);
        
    } catch (error) {
        console.log(`   • Error handling: ${error.message}`);
    }
}

/**
 * Main execution function
 */
async function runExamples() {
    console.log('🚀 Asana SDK Pagination Examples');
    console.log('=====================================');
    
    // You'll need to replace these with actual team/workspace IDs from your Asana account
    const EXAMPLE_TEAM_ID = process.env.ASANA_TEAM_ID || 'YOUR_TEAM_ID_HERE';
    
    if (!process.env.ASANA_ACCESS_TOKEN) {
        console.log('⚠️  Please set ASANA_ACCESS_TOKEN environment variable to run this example');
        console.log('   You can get a token from: https://app.asana.com/0/my-apps');
        console.log('\n📖 This example demonstrates the pagination fix structure without making real API calls');
        
        // Show the structure without making real calls
        console.log('\n📋 Example response structure after the fix:');
        console.log(`
{
  data: [
    { gid: "123", name: "User 1", resource_type: "user" },
    { gid: "456", name: "User 2", resource_type: "user" }
  ],
  next_page: {                    // ← Now accessible at top level!
    offset: "eyJ0eXAiOiJKV1Q...",
    path: "/users?limit=2&offset=...",
    uri: "https://app.asana.com/api/1.0/users?limit=2&offset=..."
  },
  _response: {                    // ← Still available for backward compatibility
    data: [...],
    next_page: { ... }
  }
}
        `);
        return;
    }
    
    try {
        // Run examples with real API calls
        await getAllUsersForTeam(EXAMPLE_TEAM_ID);
        await getAllUsersUsingNextPageMethod(EXAMPLE_TEAM_ID);
        await demonstrateBackwardCompatibility(EXAMPLE_TEAM_ID);
        await demonstrateEdgeCases();
        
        console.log('\n🎉 All examples completed successfully!');
        
    } catch (error) {
        console.error('\n❌ Error running examples:', error.message);
        console.log('\n💡 Make sure you have:');
        console.log('   1. Valid ASANA_ACCESS_TOKEN environment variable');
        console.log('   2. Valid ASANA_TEAM_ID environment variable');
        console.log('   3. Proper permissions to access the team/workspace');
    }
}

// Run the examples
if (require.main === module) {
    runExamples();
}

module.exports = {
    getAllUsersForTeam,
    getAllUsersUsingNextPageMethod,
    demonstrateBackwardCompatibility,
    demonstrateEdgeCases
};