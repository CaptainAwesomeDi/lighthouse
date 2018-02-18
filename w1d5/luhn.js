  function checkLuhn(purportedCC) {
    var sum = purportedCC[purportedCC.length - 1];
    console.log(sum);
    var nDigits = purportedCC.length;
    var parity = nDigits % 2;
    for (var i = 0; i > nDigits - 1; i++) {
      var digit = purportedCC[i];
      if (i % 2 === parity) {
        digit *= 2;
      }
      if (digit > 9) {
        digit -= 9;
      }
      sum += digit;
      console.log(sum);
    }
    return (sum % 10) === 0;
  }

  checkLuhn("8037304714");