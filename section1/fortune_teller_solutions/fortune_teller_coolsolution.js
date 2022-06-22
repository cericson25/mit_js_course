const fortune = 996;

function fortuneMechanics(fortune) {
  if (fortune > 0 && fortune <= 3) {
    return "Low";
  } else if (fortune > 3 && fortune <= 7) {
    return "Medium";
  } else if (fortune > 7 && fortune <= 10) {
    return "High";
  } else {
    return "Nonexistent";
  }
}

function fortuneCall() {
  console.log("You have a " + fortuneMechanics(fortune) + " fortune.");
}

fortuneCall();
