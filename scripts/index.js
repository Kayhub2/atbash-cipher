function convertToAtbash() {
    const input = document.getElementById("inputText").value;
    const resultSpan = document.getElementById("result");
    let result = "";
  
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      const code = char.charCodeAt(0);
  
      // Uppercase A–Z
      if (code >= 65 && code <= 90) {
        result += String.fromCharCode(90 - (code - 65));
      }
      // Lowercase a–z
      else if (code >= 97 && code <= 122) {
        result += String.fromCharCode(122 - (code - 97));
      }
      // Non-alphabetic characters (space, punctuation, etc.)
      else {
        result += char;
      }
    }
  
    resultSpan.textContent = result;
  }
  