// Higher Order Functions

import { posts } from "./posts.js";
posts.forEach( (post) => {
    console.log(post);
});

console.clear();

const filteredPosts = posts.filter((post)=>{
    return post.userId ===1;
});

console.log(filteredPosts);

const mappedPost = filteredPosts.map((post)=>{
    return post.id*10;
});
console.log(mappedPost);

const reducedPostsValue = mappedPost.reduce((sum, post)=>{
    return sum + post;
});
console.log(reducedPostsValue);