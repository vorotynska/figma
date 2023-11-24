const posts = [{
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

function createPostCard(post) {
    return `
        <div class="card">
            <div class="header">
                <div>
                    <img class="avatar" src="${post.avatar}" alt="Avatar">
                </div>
                <div>
                    <p class="name"><span class="bold">${post.name}</span></p>
                    <p class="location">${post.location}</p>
                </div>
            </div>
            <img class="post" src="${post.post}" alt="${post.name}">
            <div class="card-stats">
                <span><img class="icon" src="./images/icon-heart.png" alt="Heart"></span>
                <span><img class="icon" src="./images/icon-comment.png" alt="Comment"></span>
                <span><img class="icon" src="./images/icon-dm.png" alt="Direct Message"></span>
            </div>
            <p class="likes">${post.likes} likes</p>
            <p class="comment"><span class="bold">${post.username}</span> ${post.comment}</p>
        </div>
    `;
}

function renderPosts(posts) {
    const container = document.querySelector('.container');
    posts.forEach(post => {
        const postCard = createPostCard(post);
        container.innerHTML += postCard;
    });
}

// Вызываем функцию для рендеринга постов
renderPosts(posts);