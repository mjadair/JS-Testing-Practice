const Calculate = {

  factorial: function(input) {
    for (let i = input - 1; i >= 1; i--) {
      input = input * i 
    }
    
    return input
  }

}


module.exports = Calculate



























//Basic Testing=============================================================


// // Define a rooster
// const Rooster = {}

// // Return a morning rooster call
// Rooster.announceDawn = () => {
//   return 'moo!'
// }

// // Return hour as string
// // Throws Error if hour is not between 0 and 23 inclusive
// Rooster.timeAtDawn = (hour) => {
//   if (hour < 0 || hour > 23) {
//     throw new RangeError
//   } else {
//     return hour.toString()
//   }
// }

// module.exports = Rooster