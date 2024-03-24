//1
// function qiymatlilari(str, value) {
//   let index = str.indexOf(value);
//   if (index === -1) {
//     return str;
//   }
//   return str.slice(0, index) + str.slice(index + value.length);
// }
// console.log(qiymatlilari("I like legends", "end"));
// console.log(qiymatlilari("ABABAB", "BA"));
// =================================================
// 2
// function qvsolci(str) {
//   return str.replace(/^<|>$/g, "");
// }
// console.log(qvsolci("<Nizomiddin>"));
// console.log(qvsolci("<Abdusattorov>"));
// console.log(qvsolci("<a>"));
// ==============================================
//3
// function boshlanish(n) {
//   if (n <= 1) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(boshlanish(4));
// console.log(boshlanish(5));
// console.log(boshlanish(6));
// console.log(boshlanish(7));
// console.log(boshlanish(11));
// console.log(boshlanish(12));
// console.log(boshlanish(16));
// console.log(boshlanish(17));
// console.log(boshlanish(18));
// ==============================================
// 4
// function group(array, keySelector, valueSelector) {
//   const result = {};
//   array.forEach((item) => {
//     let key = keySelector(item);
//     let value = valueSelector(item);
//     if (!result[key]) {
//       result[key] = [];
//     }
//     result[key].push(value);
//   });

//   return result;
// }
// let data = [
//   { country: "Belarus", city: "Brest" },
//   { country: "Russia", city: "Omsk" },
//   { country: "Russia", city: "Samara" },
//   { country: "Belarus", city: "Grodno" },
//   { country: "Belarus", city: "Minsk" },
//   { country: "Poland", city: "Lodz" },
// ];

// let result = group(
//   data,
//   (item) => item.country.toLowerCase(),
//   (item) => item.city
// );
// console.log(result);
// =======================================================
// ================================================
// 5
// function sonlar(n1, n2) {
//   let nzm = 0;
//   const start = Math.min(n1, n2);
//   const end = Math.max(n1, n2);

//   for (let i = start; i <= end; i++) {
//     nzm += i;
//   }
//   return nzm;
// }
// console.log(sonlar(5, 10));
//=================================================
// ============================================
// 6
// function element(arr) {
//   const qoganelment = [];

//   arr.forEach((element) => {
//     if (arr.indexOf(element) === arr.lastIndexOf(element)) {
//       qoganelment.push(element);
//     }
//   });

//   return qoganelment;
// }

// const arr = [1, 2, 2, 4, 4, 5, 6, 7, 8, 9, 9, 10, 10];
// const result = element(arr);
// console.log(result);
// ===========================================
//7============================================
// function removeDuplicates(arr) {
//   const arry = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arry.indexOf(arr[i]) === -1) {
//       arry.push(arr[i]);
//     }
//   }
//   return arry;
// }
// const originalArray = [1, 2, 3, 4, 5, 1, 2, 6, 7, 3, 8, 9, 10, 5];
// const newArray = removeDuplicates(originalArray);

// console.log("masiv:", originalArray);
// console.log("qoganmasiv", newArray);
// ============================================
// 8
// function index(arr, k, m) {
//   if (k > m && m > arr.length) {

//     return "xto,error,oshipka";
//   }

//   let newArr = arr.splice(k, m - k + 1);
//   return {
//     soni: arr.length,
//     elementlari: arr,
//   };
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(index(arr, 1));
// ================================================
//9
// const books = [
//   {
//     title: "Halqa",
//     author: "Akrom Malik",
//     alreadyRead: false,
//   },
//   {
//     title: "Dunyo ishlari",
//     author: "O'tkir Hoshimov",
//     alreadyRead: true,
//   },
//   {
//     title: "Vaqtning qadri",
//     author: "Abdulfattoh Abu G'udda",
//     alreadyRead: false,
//   },
// ];

// books.forEach((book, index) => {
//   if (book.alreadyRead) {
//     console.log(`${index + 1}. ${book.author}ning "${book.title}"  o'qilgan;`);
//   } else {
//     console.log(
//       `${index + 1}. ${book.author}ning "${book.title}"  o'qilmagan;`
//     );
//   }
// });
// ===================================================
//10
//Mahsulotlar massividagi objectlarni sonini, chegirmasini hisobga olib, umumiy summani hisoblang.
// const products = [
//   { name: "Product 1", narx: 20000, chegirma: 10, miqdor: 5 },
//   { name: "Product 2", narx: 10000, chegirma: 20, miqdor: 4 },
//   { name: "Product 3", narx: 15000, chegirma: 8, miqdor: 10 },
//   { name: "Product 4", narx: 18000, chegirma: 5, miqdor: 6 },
//   { name: "Product 5", narx: 5000, chegirma: 10, miqdor: 16 },
// ];
// function calculateTotal(products) {
//   let totalmiqdor = 0;
//   let totalchegirma = 0;
//   let totalnarx = 0;
//   for (let i = 0; i < products.length; i++) {
//     const product = products[i];
//     totalmiqdor += product.miqdor;
//     totalchegirma += ((product.narx * product.chegirma) / 100) * product.miqdor;
//     totalnarx +=
//       ((product.narx * (100 - product.chegirma)) / 100) * product.miqdor;
//   }
//   return { totalmiqdor, totalchegirma, totalnarx };
// }
// const { totalmiqdor, totalchegirma, totalnarx } = calculateTotal(products);
// console.log("mahsulot soni:", totalmiqdor);
// console.log("chegirma", totalchegirma);
// console.log("summa", totalnarx);
//===========================================================
