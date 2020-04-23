const searchForm = document.querySelector("#search-form");
const searchFormInput = searchForm.querySelector("input");
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

function Voice() {

    if (SpeechRecognition) {
        console.log("Your Browser supports speech Recognition")
        searchForm.insertAdjacentHTML("beforeend", '<button type="button" id="input"><i class="fas fa-microphone"></i></button>')
        const micBtn = searchForm.querySelector("button");
        const micIcon = micBtn.querySelector("i");

        const recognition = new SpeechRecognition();
        recognition.continuous = true;

        micBtn.addEventListener("click", micBtnClick)
        function micBtnClick() {

            if (micIcon.classList.contains("fa-microphone")) { //Start speech recognition
                recognition.start();
            }
            else { //Stop Speech recognition
                recognition.stop()
            }
        }

        recognition.onstart = function startSpeechRecogniton() {
            micIcon.classList.remove("fa-microphone")
            micIcon.classList.add("fa-microphone-slash")
            searchFormInput.focus();
            console.log("Speech recognition active.")
        }


        recognition.onend = function endSpeechRecognition() {
            micIcon.classList.remove("fa-microphone-slash");
            micIcon.classList.add("fa-microphone")
            searchFormInput.focus();
            console.log("Speech recognition is not active.")
        }

        recognition.onresult = function (event) {
            const currentResultIndex = event.resultIndex;
            console.log(event.resultIndex)
            const textArea = document.querySelector("#textarea")
            const textAreaTwo = document.querySelector("#textareatwo")
            const save = document.querySelector("#save")
            const textResults = document.querySelector("#textresults")
            const results = document.querySelector("#results")

            const transcript = event.results[currentResultIndex][0].transcript;
            searchFormInput.value = transcript;
            textArea.innerHTML = transcript;
            console.log(transcript)

            save.addEventListener("click", function () {
                textAreaTwo.innerHTML = textArea.innerHTML;
            })

            results.addEventListener("click", function () {
                const resultsText = textArea.innerHTML
                const grabText = resultsText.match(/David/g)
                // const grabTextValue = grabText.value
                console.log(grabText[0])
                if (grabText[0] === "David") {
                    const counter = grabText.length
                    textResults.innerHTML = `You said ${grabText[0]} ${counter} times! Let's work on that a bit more, shall we?`
                }
            })

            if (transcript.toLowerCase().trim() === "stop recording") {
                recognition.stop()
            }
            else if (!searchFormInput.value) {
                searchFormInput.value = transcript;
            }
            else {
                if (transcript.toLowerCase().trim() === "go") {
                    const newResult = event.results[currentResultIndex - 1][0].transcript
                    console.log(newResult)
                    searchFormInput.value = newResult
                    searchForm.submit();
                }
                else if (transcript.toLowerCase().trim() === "reset input") {
                    searchFormInput.value = ""
                    textArea.innerHTML = ""
                }
                else {
                    searchFormInput.value = transcript;
                }
            }
        else {
                console.log("Your browser does not support speech recognition")
            }
        }
    }

    return (
        console.log('working')
    )
    
}

export default Voice;