export function isPersianLeap(year: number): Boolean {
      const decimal = 0.24219858156;
      const constant = 2346;

      let calculation = (year + constant) * decimal;
      let result = calculation - Math.floor(calculation);
      if (result < decimal) {
            return true;
      } else {
            return false;
      }
}
