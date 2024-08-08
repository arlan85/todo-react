 
  const possible_sums = (numbers, target) =>{
    let result = []
    numbers.sort((a, b) => a - b);
   
    function dfs(index, tempResults, target) {
      if (target === 0) {
        result.push([...tempResults]);
        return;
      }

      if (target < 0 || index >= numbers.length) {
        return;
      }

      for (let i = index; i < numbers.length; i++) {
        if (i > index && numbers[i] === numbers[i-1]) {
          continue;
        }
        tempResults.push(numbers[i]);
        dfs(i + 1, tempResults, target - numbers[i]);
        tempResults.pop();
      }
    }
    dfs(0,[], target);
    return result;
  }

  //[1,3,5,2,4,7]
  const data = possible_sums([1,2,1,3,1,1,4,1,1], 6);
  console.log('data', data)
  // module.exports = possible_sums;
  // export default possible_sums;