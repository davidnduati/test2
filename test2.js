console.log(fetch("https://jsonplaceholder.typicode.com/posts"))// am getting a promise so it is possible foe asyn

// new post create
async function createPost(title, body, userId) {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, body, userId }),
    };
    const newPost = await fetchData(url, options);
    console.log('Created post:', newPost);
}

// fetch data api
async function fetchData(url, options = {}) {
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

// func to list
async function listPosts() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const posts = await fetchData(url);
    console.log('All posts:', posts);
}


createPost('New Title', 'New Body', 1);
listPosts();


