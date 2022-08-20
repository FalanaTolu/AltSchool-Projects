let countText, countChars, scannedWords
let duration = 0
let scrambledText = []

const replaceText = () => {
  let start = performance.now()
  let inputText = document.getElementById("text-input").value

  inputText = inputText.split(" ")
  scannedWords = inputText.length
  let textToScramble = document.getElementById("text-scramble").value
  textToScramble = textToScramble.split(" ")

  let scramblerChar = document.getElementById("scrambler").value

  countText = 0
  countChars = 0
  for (text of inputText) {
    if (textToScramble.includes(text)) {
      let foundText = text
      for (t of foundText) {
        foundText = foundText.replace(t, scramblerChar)
        countChars++;
      }
      inputText[inputText.indexOf(text)] = foundText
      countText++;
    }
    scrambledText = inputText.join(" ")
  }
  duration = performance.now() - start
  console.log(scannedWords)
  console.log(countChars)
  console.log(countText)
  console.log(scrambledText)
  console.log(`The total run time was: ${duration} ms`)
  return (scrambledText)
}

const outputText = () => {
  document.getElementById('output').value = scrambledText
}

const outputStats = () => {
  document.getElementById('stats').innerText = `The total run time was: ${duration} ms\n Words entered: ${scannedWords}\n Words scrambled: ${countText}\n Characters scrambled: ${countChars}`
}


let btn = document.querySelector("button")
btn.addEventListener("click", replaceText)
btn.addEventListener("click", outputText)
btn.addEventListener("click", outputStats)