module.exports = function towelSort(matrix) {
  if (!matrix) return [];
    let arr = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 !== 0) {
            let matrixNew = matrix[i].sort((a, b) => b - a);
            arr = arr.concat(matrixNew);
        } else {
            arr = arr.concat(matrix[i]);
        }
    }
    return arr
};
