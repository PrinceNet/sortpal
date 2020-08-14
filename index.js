import semver from './sortBy/semver.js';

var sortpal = function (arr, sortBy) {
  switch (sortBy) {
    case 'semver':
      return semver(arr);
      break;

    default:
      let result = arr;
      result.sort();

      return result;
      break;
  }
};

export default sortpal;
