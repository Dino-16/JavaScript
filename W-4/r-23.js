/**
 * API Service Module
 * This file handles all network communication.
 */

const BASE_URL = 'https://jsonplaceholder.typicode.com'; // Using a real testing API

// 1. A GET Request function
async function getPosts() {
  try {
    const response = await fetch(`${BASE_URL}/posts?_limit=5`);

    // Standard check: Did the server respond with success?
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    console.log("Fetched Posts:", data);
    return data;

  } catch (error) {
    console.error("Failed to get posts:", error.message);
  }
}

// 2. A POST Request function (with Headers and Body)
async function createPost(newPostTitle) {
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': 'Bearer YOUR_SECRET_TOKEN' // Example header
      },
      body: JSON.stringify({
        title: newPostTitle,
        body: 'This is the content of my new post.',
        userId: 1,
      }),
    });

    if (!response.ok) {
      throw new Error(`Could not create post: ${response.status}`);
    }

    const result = await response.json();
    console.log("Post Created Successfully:", result);
    return result;

  } catch (error) {
    console.error("Post Creation Error:", error.message);
  }
}

// --- HOW TO RUN IT ---
getPosts(); 
createPost("My Awesome AI Post");