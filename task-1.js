function getIndexToIns(arr, num) {
    var items = [];
    arr.sort(function(a, b) {
      return a - b;
    });
    items.forEach(function(number, index) {
      if (num <= number) {
      return index;
      }
    });
    return arr.length;
   }
   alert(getIndexToIns([5, 6, 7, 9], 8));