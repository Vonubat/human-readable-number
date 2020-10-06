module.exports = function toReadable(number) {
  if (number === 0) {
    return 'zero'
  }
  else if (number < 10) {

    return numberBelow10(number);

  } else if (number >= 10 && number < 20) {

    return numberBetween10And20(number);

  } else if (number >= 20 && number < 100) {

    let ten = Math.floor(number / 10) * 10;
    let unit = (number % 10);
    return (numberBetween20And100(ten) + (unit === 0 ? ('') : (' ' + numberBelow10(unit))))

  } else {
    let hundred = Math.floor(number / 100);
    let secondpart = number - hundred * 100;
    let temp = 0;
    if (secondpart < 10) {

      temp = numberBelow10(secondpart);

    } else if (secondpart >= 10 && secondpart < 20) {

      temp = numberBetween10And20(secondpart);

    } else if (secondpart >= 20 && secondpart < 100) {

      let ten = Math.floor(secondpart / 10) * 10;
      let unit = (secondpart % 10);
      if (unit === 0) { temp = numberBetween20And100(ten) }
      else { temp = temp = (numberBetween20And100(ten) + ' ' + numberBelow10(unit)) }

    } else if (secondpart === 0) {
      temp = '';
    }



    // return (numberBelow10(hundred) + ' hundred ' + temp);
    return (numberBelow10(hundred) + (secondpart === 0 ? (' hundred') : (' hundred ' + temp)));
  }

  function numberBelow10(input) {
    let numberBelow10 = '';
    switch (input) {
      case 1:
        numberBelow10 = 'one';
        break;
      case 2:
        numberBelow10 = 'two';
        break;
      case 3:
        numberBelow10 = 'three';
        break;
      case 4:
        numberBelow10 = 'four';
        break;
      case 5:
        numberBelow10 = 'five';
        break;
      case 6:
        numberBelow10 = 'six';
        break;
      case 7:
        numberBelow10 = 'seven';
        break;
      case 8:
        numberBelow10 = 'eight';
        break;
      case 9:
        numberBelow10 = 'nine';
        break;

    }
    return numberBelow10;
  }

  function numberBetween10And20(input) {
    let numberBetween10And20 = 0;
    switch (input) {
      case 10:
        numberBetween10And20 = 'ten';
        break;
      case 11:
        numberBetween10And20 = 'eleven';
        break;
      case 12:
        numberBetween10And20 = 'twelve';
        break;
      case 13:
        numberBetween10And20 = 'thirteen';
        break;
      case 14:
        numberBetween10And20 = 'fourteen';
        break;
      case 15:
        numberBetween10And20 = 'fifteen';
        break;
      case 16:
        numberBetween10And20 = 'sixteen';
        break;
      case 17:
        numberBetween10And20 = 'seventeen';
        break;
      case 18:
        numberBetween10And20 = 'eighteen';
        break;
      case 19:
        numberBetween10And20 = 'nineteen';
        break;
    }

    return numberBetween10And20;
  }

  function numberBetween20And100(input) {
    let numberbetween20and100 = 0;
    switch (input) {
      case 20:
        numberbetween20and100 = 'twenty';
        break;
      case 30:
        numberbetween20and100 = 'thirty';
        break;
      case 40:
        numberbetween20and100 = 'forty';
        break;
      case 50:
        numberbetween20and100 = 'fifty';
        break;
      case 60:
        numberbetween20and100 = 'sixty';
        break;
      case 70:
        numberbetween20and100 = 'seventy';
        break;
      case 80:
        numberbetween20and100 = 'eighty';
        break;
      case 90:
        numberbetween20and100 = 'ninety';
        break;
    }
    return numberbetween20and100;
  }

}