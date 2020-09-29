module.exports = function toReadable (number) {
   const zeroNineteen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
                        'seven', 'eight', 'nine', 'ten', 'eleven',
                        'twelve', 'thirteen', 'fourteen', 'fifteen',
                        'sixteen', 'seventeen', 'eighteen', 'nineteen'];
   const twentyNinety = ['twenty', 'thirty', 'forty', 'fifty', 'sixty',
                           'seventy', 'eighty', 'ninety'];
   const hundreed = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred',
                      'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
   
   const splitNum = (num) => {
      let str = num.toString().split('');
      str = str.map(item => {
         return Number(item);
      })
      return str;
   }
   const zeroToNinety = (number) => {
      if(number >= 0 && number < 20) {
         return zeroNineteen[number];
      }
      if(number >= 20 && number < 100) {
         let arrNum = splitNum(number);
         return arrNum[1]===0 ? twentyNinety[arrNum[0]-2] : twentyNinety[arrNum[0]-2] + ' ' + zeroNineteen[arrNum[1]];
      }
   }
   if(number >= 0 && number < 100) {
      return zeroToNinety(number);
   }
   if(number >= 100 && number < 1000) {
      let arrNum = splitNum(number);
      const str = '' + arrNum[1] + arrNum[2];
      const num = Number(str);
      const secondNum = zeroToNinety(num);
      const firstNum = hundreed[arrNum[0]-1];
      return firstNum + (secondNum === 'zero' ?'':' ') + (secondNum === 'zero' ? '' : secondNum);
   }
}
