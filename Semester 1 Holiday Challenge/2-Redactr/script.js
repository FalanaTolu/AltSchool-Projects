const btn = document.querySelector("button")
let wordCount, characterCount, scannedWords, duration = 0
let scrambledText = []

const replaceText = () => {
  let start = performance.now()

  let inputText = document.getElementById("text-input").value
  inputText = inputText.split(" ")
  scannedWords = inputText.length
  
  let textToScramble = document.getElementById("text-scramble").value
  textToScramble = textToScramble.split(" ")

  let scramblerChar = document.getElementById("scrambler").value

  wordCount = 0
  characterCount = 0
  for (text of inputText) {
    if (textToScramble.includes(text)) {
      let foundText = text
      for (t of foundText) {
        foundText = foundText.replace(t, scramblerChar)
        characterCount++;
      }
      inputText[inputText.indexOf(text)] = foundText
      wordCount++;
    }
    scrambledText = inputText.join(" ")
  }
  duration = performance.now() - start
  return (scrambledText)
}

const outputText = () => {
  document.getElementById("output").value = scrambledText
}

const outputStats = () => {
  document.getElementById("stats").innerText = `The total run time was: ${duration} ms\n Total number of words entered: ${scannedWords}\n Total number of words scrambled: ${wordCount}\n Total number of characters scrambled: ${characterCount}`
}

const redactNow = () => {
  replaceText()
  outputText()
  outputStats()
}

btn.addEventListener("click", redactNow)