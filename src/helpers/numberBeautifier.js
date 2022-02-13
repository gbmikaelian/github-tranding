const numberBeautifier =  (number) => {
    number = number.toString();

    
    let arr = number.split('');
    arr = arr.reverse();
    let numberStr = '';
    for (let i = arr.length - 1; i >= 0; --i) {
      if (i % 3 === 0 && i !== 0) {
        numberStr += `${arr[i]},`;
      } else {
        numberStr += arr[i];
      }
    }
    return numberStr;
  }

  export default numberBeautifier