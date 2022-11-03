let words = [];
function addWords() {
    words.push(document.getElementById("inputWord").value);
    document.getElementById("inputWord").value = '';
}
function search() {
    let wordToSearch = document.getElementById("wordToSearch").value;
    if (words.indexOf(wordToSearch) > -1) {
        document.getElementById("verifyExistance").innerHTML = "The word: " + "'" +  wordToSearch + "'" + " is in the dictionary!";
    } else {
        document.getElementById("verifyExistance").innerHTML = "The word: " + "'" +  wordToSearch + "'" + " is not in the dictionary!";
    }
    document.getElementById("wordToSearch").value = '';
}
