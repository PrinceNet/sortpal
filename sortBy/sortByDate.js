/**
 * Date
 *
 * @param {Array} arr
 */
function sortByDate(arr) {
  let result = arr;

  // get time for components
  result = result.map((el) => {
    const elementTime = new Date(el).getTime();

    return { value: el, time: elementTime };
  });

  // sort by the time time
  result.sort((a, b) => {
    return a.time - b.time;
  });

  // revert array to original state
  result = result.map((el) => el.value);

  return result;
}

export default sortByDate;
