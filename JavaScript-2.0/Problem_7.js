// Fetch the user details using async function

// Fetch user data by ID
async function fetchUser(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return await response.json();
}

// Fetch posts for a user
async function fetchPostsForUser(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );
  return await response.json();
}

// Main function to merge data
async function fetchUsersWithPosts(userIds) {
  const results = [];

  for (const id of userIds) {
    const user = await fetchUser(id);
    const posts = await fetchPostsForUser(id);
    results.push({ user, posts });
  }

  return results;
}

// Demo input
const demoIds = [1, 2];

async function runDemo() {
  try {
    const data = await fetchUsersWithPosts(demoIds);

    // Custom readable output
    data.forEach((entry) => {
      console.log(
        `User: ${entry.user.name}, Total Posts: ${entry.posts.length}`
      );
    });

    // If you want to see the full array as well:
    console.log("\nFull Structure:", data);
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

// Run it
runDemo();
