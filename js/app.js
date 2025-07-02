function countUniqueChars() {
    const input = document.getElementById("userInput").value.toLowerCase();
    const resultBox = document.getElementById("uniqueBox");

    resultBox.classList.remove("hidden");

    if (!input.trim()) {
        resultBox.innerText = "Please Enter Some Text!";
        updateStats(0)
        return;
    }

    const cleanInput = input.toLowerCase().replace(/[^a-z]/g, '');

    if (!cleanInput) {
        resultBox.innerText = "No Valid alphabetic characters!";
        updateStats(0)
        return
    }

    const uniqueCharCount = new Set(cleanInput);
    // const uniqueChars = [...uniqueCharCount].join(", ");
    // const count = uniqueChar.size;

    resultBox.innerText = `Unique Characters Count: ${uniqueCharCount.size}`;

    const characters = input.length;
    const words = input.trim().split(/\s+/).filter(Boolean).length
    const sentences = input.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    const paragraphs = input.split(/\n+/).filter(p => p.trim().length > 0).length;
    const spaces = (input.match(/ /g) || []).length;
    updateStats(characters, words, sentences, paragraphs, spaces)
}

function updateStats(characters, words, sentences, paragraphs, spaces) {
    document.querySelector(".characters-count span").innerText = characters;
    document.querySelector(".words-count span").innerText = words;
    document.querySelector(".sentences-count span").innerText = sentences;
    document.querySelector(".paragraphs-count span").innerText = paragraphs;
    document.querySelector(".spaces-count span").innerText = spaces;
}