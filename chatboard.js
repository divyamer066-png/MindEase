function postMessage() {
    const messageBox = document.getElementById("message");
    const message = messageBox.value.trim();

    if (message === "") {
        alert("Please write a message first!");
        return;
    }

    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.unshift(message);

    localStorage.setItem("posts", JSON.stringify(posts));
    messageBox.value = "";

    displayPosts();
}

function displayPosts() {
    const postsDiv = document.getElementById("posts");
    const posts = JSON.parse(localStorage.getItem("posts")) || [];

    postsDiv.innerHTML = "";

    posts.forEach(post => {
        const p = document.createElement("p");
        p.textContent = "📝 " + post;
        postsDiv.appendChild(p);
    });
}

displayPosts();
function addPost() {
    const message = document.getElementById("messageInput").value;

    if (message === "") {
        alert("Please write something!");
        return;
    }

    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.push(message);

    localStorage.setItem("posts", JSON.stringify(posts));

    document.getElementById("messageInput").value = "";
    displayPosts();
}

function displayPosts() {
    const postsDiv = document.getElementById("posts");
    postsDiv.innerHTML = "";

    let posts = JSON.parse(localStorage.getItem("posts")) || [];

    posts.forEach(post => {
        const p = document.createElement("p");
        p.textContent = post;
        postsDiv.appendChild(p);
    });
}

displayPosts();