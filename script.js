function getSupport(feeling) {
    const display = document.getElementById('chat-display');
    const tips = {
        anxious: "Take a deep breath. 🌿 You are stronger than your thoughts.",
        stressed: "One step at a time. 📝 Focus on what you can control right now.",
        lonely: "You are not alone. 🫂 We are all in this together."
    };
    
    display.style.opacity = 0;
    setTimeout(() => {
        display.innerHTML = `<strong>MindEase:</strong> ${tips[feeling]}`;
        display.style.opacity = 1;
    }, 200);
}

// Peer Board Logic
function savePost() {
    const input = document.getElementById('post-input');
    if(!input || input.value.trim() === "") return;
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.unshift(input.value);
    localStorage.setItem('posts', JSON.stringify(posts));
    input.value = "";
    renderPosts();
}
