// It would teach us a lot about the filter method if we try to implement a version of it that behaves exactly like Array.prototype.filter(). It can use either a for loop or Array.prototype.forEach().

// Note: A pure function is allowed to alter local variables defined within its scope, although, it's preferable to avoid that as well.

// Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter(). You may use a for loop or the Array.prototype.forEach() method.

// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  var newArray = [];
  for (let i = 0; i <= this.length; i += 1) {
    if (callback(this[i])) {
      newArray.push(this[i]);
    }
  }
  // Only change code above this line
  console.log(newArray);
  return newArray;
};

var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});
