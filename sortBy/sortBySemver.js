/**
 * Semantic Versioning
 *
 * @param {Array} arr
 */
function sortBySemver(arr) {
  let result = arr;
  let semverMaxDigits = {
    major: 1,
    minor: 1,
    patch: 1,
  };

  // get max digits in each component
  result.forEach((el) => {
    const [major, minor, patch] = el.replace('v', '').split('.');

    semverMaxDigits['major'] = Math.max(semverMaxDigits['major'], major.length);
    semverMaxDigits['minor'] = Math.max(semverMaxDigits['minor'], minor.length);
    semverMaxDigits['patch'] = Math.max(semverMaxDigits['patch'], patch.length);
  });

  // pad components with '0'
  result = result.map((el) => {
    const [major, minor, patch] = el.replace('v', '').split('.');

    const majorDifference = semverMaxDigits['major'] - major.length;
    const minorDifference = semverMaxDigits['minor'] - minor.length;
    const patchDifference = semverMaxDigits['patch'] - patch.length;

    const majorPaded = (majorDifference > 0 ? '0'.repeat(majorDifference) : '') + major;
    const minorPaded = (minorDifference > 0 ? '0'.repeat(minorDifference) : '') + minor;
    const patchPaded = (patchDifference > 0 ? '0'.repeat(patchDifference) : '') + patch;

    return `v${majorPaded}.${minorPaded}.${patchPaded}`;
  });

  // sort the padded array
  result.sort((a, b) => {
    return a.localeCompare(b);
  });

  // remove pad from components
  result = result.map((el) => {
    const [major, minor, patch] = el.replace('v', '').split('.');

    return `v${Number(major)}.${Number(minor)}.${Number(patch)}`;
  });

  return result;
}

export default sortBySemver;
