const getArticleElement = ({title, body}) => `<article><h2>${title}</h2><div><p>${body}</p></div></article>`

async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
        const posts = await response.json();
        const articleSection = document.querySelector('section');
        articleSection.innerHTML = posts.map(post => getArticleElement(post)).join('');
    } catch (error) {
        alert('error frtch', error);
    }
}

fetchPosts();