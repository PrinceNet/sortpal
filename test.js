import sortpal from './index.js';

// semantic versioning example
let semverArr = ['v1.0.0', 'v12.0.0', 'v2.1.0', 'v1.5.0', 'v2.3.0', 'v2.2.0', 'v3.0.0', 'v14.0.0'];

console.group('Semantic versioning: ');
console.log(semverArr);
console.log(sortpal(semverArr, 'semver'));
console.groupEnd();

// date example
let dateArr = [
  'Thu Jan 01 1970 02:00:00 GMT+0200 (Israel Standard Time)', // 1
  'Thu Jan 01 1970 04:46:39 GMT+0200 (Israel Standard Time)', // 5
  'Sun Sep 09 2001 04:46:39 GMT+0300 (Israel Daylight Time)', // 10
  'Sun Apr 26 1970 19:46:39 GMT+0200 (Israel Standard Time)', // 8
  'Mon Jan 12 1970 15:46:39 GMT+0200 (Israel Standard Time)', // 7
  'Thu Jan 01 1970 02:01:39 GMT+0200 (Israel Standard Time)', // 3
  'Sat Nov 20 2286 19:46:39 GMT+0200 (Israel Standard Time)', // 11
  'Thu Jan 01 1970 02:16:39 GMT+0200 (Israel Standard Time)', // 4
  'Thu Jan 01 1970 02:00:09 GMT+0200 (Israel Standard Time)', // 2
  'Sat Mar 03 1973 11:46:39 GMT+0200 (Israel Standard Time)', // 9
  'Fri Jan 02 1970 05:46:39 GMT+0200 (Israel Standard Time)', // 6
];

console.group('Date: ');
console.log(dateArr);
console.log(sortpal(dateArr, 'date'));
console.groupEnd();
