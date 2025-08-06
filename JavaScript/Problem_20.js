// Twitter Post engagement status of an User

const posts = [
  { user: "alice", content: "Hello world!", likes: 20, comments: 5, shares: 2 },
  { user: "bob", content: "JavaScript is awesome!", likes: 15, comments: 2, shares: 3 },
  { user: "alice", content: "Check out my new blog", likes: 30, comments: 10, shares: 5 },
  { user: "alice", content: "Good night!", likes: 10, comments: 1, shares: 0 },
  { user: "bob", content: "Working on a new project", likes: 25, comments: 4, shares: 1 }
];


// -------------------------------------------
// Function 1: Get all posts of a user
// -------------------------------------------
function getUserPosts(posts, username) {
  return posts.filter(post => post.user === username);
}

// -------------------------------------------
// Function 2: Calculate total engagement of a post
// -------------------------------------------
function calculateEngagement(post) {
  return post.likes + post.comments + post.shares;
}

// -------------------------------------------
// Function 3: Get average engagement per post
// -------------------------------------------
function getAverageEngagement(userPosts) {
  if (userPosts.length === 0) return 0;

  const totalEngagement = userPosts.reduce((sum, post) => 
    sum + calculateEngagement(post), 0);

  return totalEngagement / userPosts.length;
}

// -------------------------------------------
// Function 4: Get the post with highest engagement
// -------------------------------------------
function getMostEngagingPost(userPosts) {
  if (userPosts.length === 0) return null;

  return userPosts.reduce((topPost, post) =>
    calculateEngagement(post) > calculateEngagement(topPost) ? post : topPost
  );
}

// -------------------------------------------
// Example usage for 'alice'
// -------------------------------------------

const username = "alice";
const userPosts = getUserPosts(posts, username);

console.log(`📊 ${username}'s Stats`);

userPosts.forEach(post => {
  console.log(`- "${post.content}" => Engagement: ${calculateEngagement(post)}`);
});

console.log(`✅ Average engagement: ${getAverageEngagement(userPosts).toFixed(2)}`);

const mostPopular = getMostEngagingPost(userPosts);
console.log(`🔥 Most engaging post: "${mostPopular.content}" with ${calculateEngagement(mostPopular)} interactions.`);
