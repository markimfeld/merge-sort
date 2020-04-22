// const merge = (A, B, m, n) => {
//   let C = [];
//   let k = 0;

//   let i = 0;
//   let j = 0;

//   while (i < m && j < n) {
//     if (A[i] < B[j]) {
//       C[k++] = A[i++];
//     } else {
//       C[k++] = B[j++];
//     }
//   }

//   for (; i < m; i++) {
//     C[k++] = A[i];
//   }
//   for (; j < n; j++) {
//     C[k++] = B[j];
//   }

//   return C;
// }

// let A = [2, 8, 15, 18, 105];
// let B = [5, 9, 12, 17, 25, 98];

// let C = merge(A, B, A.length, B.length);


// // console.log(C);


// const countdown = n => {
//   console.log(n);
//   if (n <= 1) {
//     return;
//   } else {
//     setTimeout(() => {
//       countdown(n - 1);
//     }, 1000);
//   }
// }

// // countdown(5);

// // n! = n · (n - 1) · (n - 2) ··· 3 · 2 · 1

// const factorial = n => {
//   if (n === 1 || n === 0) return 1;
//   return n * factorial((n - 1))
// }

// console.log(factorial(4));