// 1) Shouts the string (returns all caps)
function shout(string) {
    return string.toUpperCase();
  }
  
  // 2) Whispers the string (returns all lowercase)
  function whisper(string) {
    return string.toLowerCase();
  }
  
  // 3) Logs the string in all caps using console.log()
  function logShout(string) {
    console.log(string.toUpperCase());
  }
  
  // 4) Logs the string in all lowercase using console.log()
  function logWhisper(string) {
    console.log(string.toLowerCase());
  }
  
  // 5) Responds to a string depending on whether it's lowercase, uppercase, or a special phrase
  function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
      return "I can't hear you!";
    } else if (string === string.toUpperCase()) {
      return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
      return "I would love to!";
    }
  }
  