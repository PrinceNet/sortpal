import sortBySemver from './sortBy/sortBySemver.js';
import sortByDate from './sortBy/sortByDate.js';

var sortpal = function (arr, sortBy) {
  switch (sortBy) {
    case 'semver':
      return sortBySemver(arr);
      break;

    case 'date':
      return sortByDate(arr);
      break;

    default:
      let result = arr;
      result.sort();

      return result;
      break;
  }
};

export default sortpal;
