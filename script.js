<script>
            var words = [];
            function myFunction() {
                var word = document.getElementById("inputWord").value;
                words.push(word);
                document.addEventListener('click', function() {
                    document.getElementById("inputWord").value = '';
                })
                console.log(words);
            }
            function search() {
                let found = 0;
                var wordToSearch = document.getElementById("inputSearch").value;
                for (let i = 0; i < words.length; ++i) {
                    if (words[i] === wordToSearch) {
                        found = 1;
                    }
                }
                if (found == 1) {
                    alert("The word " + "'" + wordToSearch + "'" + " is already in the dictionary!");
                } else {
                    alert("The word " + "'" + wordToSearch + "'" + " is not in the dictionary!");
                }
            }
        </script>