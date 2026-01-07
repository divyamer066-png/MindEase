function chatResponse(feeling) {
    const output = document.getElementById("chat-output");
    let response = "";

    if (feeling === "anxious") {
        response = `
            <p><strong>Bot:</strong> Try a simple breathing exercise 🌿</p>
            <p>Inhale for 4 seconds, hold for 4, exhale for 6.</p>
            <a href="https://www.youtube.com/watch?v=YRPh_GaiL8s" target="_blank">
                Watch Breathing Exercise
            </a>
        `;
    } 
    else if (feeling === "stress") {
        response = `
            <p><strong>Bot:</strong> Exam stress is normal 💪</p>
            <ul>
                <li>Study in short sessions</li>
                <li>Take regular breaks</li>
                <li>Sleep well before exams</li>
            </ul>
        `;
    } 
    else if (feeling === "lonely") {
        response = `
            <p><strong>Bot:</strong> You are not alone 🤍</p>
            <p>Try sharing your thoughts on the peer chatboard.</p>
        `;
    }

    output.innerHTML = response;
}
