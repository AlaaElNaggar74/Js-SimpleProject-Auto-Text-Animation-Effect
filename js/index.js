let diplsy = document.getElementById("mCont");
let wordArr = [
  "Full Stack",
  "Front End",
  "Back End",
  "Web Developer",
  ];

let wordCount = 0;
let charCount = 0;

updateline();

function updateline() {
    charCount++;
  diplsy.innerHTML = `<h1 style="font-size:5rem">I am ${
    wordArr[wordCount] == "Back End" ? "an" : "a"
  } ${wordArr[wordCount].slice(0, charCount)}</h1>`;
 
  if (charCount == wordArr[wordCount].length) {
    charCount = 0;
    wordCount++;
  }
  if (wordCount == wordArr.length) {
   
    wordCount = 0;
  }

  setTimeout(updateline, 900);
}
