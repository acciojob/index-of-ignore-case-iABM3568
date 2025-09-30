function indexOfIgnoreCase(s1, s2) {
  // write your code here

	// Edge case: if substring is empty, return 0
  if (s2.length === 0) {
    return 0;
  }
  
  // Edge case: if substring is longer than main string, return -1
  if (s2.length > s1.length) {
    return -1;
  }
  
  // Loop through each position in the main string
  // We only need to check up to (s1.length - s2.length)
  for (let i = 0; i <= s1.length - s2.length; i++) {
    let match = true;
    
    // Check if substring matches starting at position i
    for (let j = 0; j < s2.length; j++) {
      // Convert both characters to lowercase and compare
      const charFromS1 = toLowerCase(s1[i + j]);
      const charFromS2 = toLowerCase(s2[j]);
      
      if (charFromS1 !== charFromS2) {
        match = false;
        break; // No match, stop checking this position
      }
    }
    
    // If we found a complete match, return the index
    if (match) {
      return i;
    }
  }
  
  // If we've checked all positions and found no match, return -1
  return -1;
	
	
}

function toLowerCase(char) {
  const code = char.charCodeAt(0);
  
  // If character is uppercase (A-Z has codes 65-90)
  if (code >= 65 && code <= 90) {
    // Convert to lowercase by adding 32
    return String.fromCharCode(code + 32);
  }
  
  // If already lowercase or not a letter, return as is
  return char;
}

// Please do not change the code below 
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
