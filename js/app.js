function countUniqueChars() {
    const input = document.getElementById("userInput").value.toLowerCase();

    if (!input.trim()) {
        document.getElementById("uniqueBox").innerText =
            "Please Enter Some Text!";
        return;
    }

    const cleanInput = input.toLowerCase().replace(/[^a-z]/g, '');

    if (!cleanInput) {
        document.getElementById("uniqueBox").innerText =
            "No Valid alphabetic characters!";
        return
    }

    const uniqueCharCount = new Set(cleanInput);
    // const uniqueChars = [...uniqueCharCount].join(", ");
    // const count = uniqueChar.size;

    document.getElementById("uniqueBox").innerText =
        `Unique Characters Count: ${uniqueCharCount.size}`;
}