const array = [1, 3, 5, 7, 8, 9, 10];

 const minMax = (array)=> {
  const arrayLength = array.length;

   console.log(arrayLength);

  array.sort((a, b) => a - b);
  const min = array.slice(0, 4).reduce((sum, num) => sum + num, 0);
  const max = array.slice(arrayLength-4).reduce((sum, num) => sum + num, 0);
  console.log(max,min);
}

minMax(array);
