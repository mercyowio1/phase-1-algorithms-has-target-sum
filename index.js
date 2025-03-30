function hasTargetSum(array, target) {
  const seenNumbers = new Set(); // Store numbers we've seen

  for (let num of array) {
    let complement = target - num;
    if (seenNumbers.has(complement)) {
      return true; // Found two numbers that sum to target
    }
    seenNumbers.add(num); // Store the current number
  }

  return false; // No pair found
}

/* 
  Pseudocode:
  1. Create an empty set to store numbers.
  2. Loop through the array:
     a. Compute the complement (target - current number).
     b. If the complement exists in the set, return true.
     c. Otherwise, add the current number to the set.
  3. If no pair is found, return false.
*/

/*
  Explanation:
  - We use a Set to store numbers as we iterate.
  - For each number, we check if the required complement exists in the Set.
  - This allows us to check for a valid pair in **O(1)** time.
  - Instead of a nested loop (`O(n²)`), we solve this in **O(n)** time.
*/

// Test cases
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
