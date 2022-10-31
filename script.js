var words = [];
function addWords() {
    words.push(document.getElementById("inputWord").value);
    document.getElementById("inputWord").value = '';
}
function search() {
    var wordToSearch = document.getElementById("wordToSearch").value;
    if (words.indexOf(wordToSearch) > -1) {
        alert("The word " + "'" + wordToSearch + "'" + " is in the dictionary!");
    } else {
        alert("The word " + "'" + wordToSearch + "'" + " is not in the dictionary!");
    }
    document.getElementById("wordToSearch").value = '';
}