function testLessThan(val) {
  if (val < 25) {// Change this line
    return "Under 25";
  }

  if (val < 55) {// Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);

// examples
/*
2   < 5 // true
'3' < 7 // true
5   < 5 // false
3   < 2 // false
'8' < 4 // false

*/