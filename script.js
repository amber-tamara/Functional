const companies = [
  { name: "Comoany One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1982, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Thechnology", start: 2009, end: 2014 },
  { name: "Company six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company eight", category: "Thechnology", start: 2011, end: 2016 },
  { name: "Company nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//Looping over companies and printing them to the log

// for (i = 0; i < companies.length; i++) {
//   console.log(companies);
// }
//forEach || sycranous
// companies.forEach(i => {
//   console.log(i);
// });

//IF over 18 filter

// const cannDrink = ages.filter(age => age >= 18);
//   if (age >= 18) {
//     return true;
//   }
//);
// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 18) {
//     canDrink.push(ages[i]);
//   }
// }

//Get company names that start after 1995

// const companyName = companies
//   .map(company => ({ start: company.start, name: company.name }))
//   .filter(company => company.start > 1995)
//   .map(company => company.name);
// console.log(companyName);

//Filter retail companies

// const retailCompaines = companies.filter(company => {
//   if (company.category === "Retail") {
//     return true;
//   }
// });
// const retailCompanines = companies.filter(
//   company => company.category === "Retail"
// );
// console.log(retailCompanines);

//Filter companines that started in the 80s

// const fs = companies.filter(
//   company => company.start >= 1980 && company.start < 1990
// );
// console.log(fs);

//Get companies that lasted 10 years or more
// const et = companies.filter(company => company.end - company.start >= 10);
// console.log(et);
//map

//Create array of company names

// const companyNames = companies.map(company => {
//   return 1;
// });
// console.log(companyNames);
// const companyNames = companies.map(company => {
//   return `${company.name}, ${company.start} - ${company.end}`;
// });
// console.log(companyNames);
// const companyNames = companies.map(
//   company => `${company.name}, ${company.start} - ${company.end}`
// );
// const ageMap = ages.map(age => Math.sqrt(age)).map(age => age * 2);
// console.log(ageMap);

//Sort

// Sort ages from smallest to largest

// const sortedCompanies = companies.sort(function(c1, c2) {
//   if (c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
// console.log(sortedCompanies);
// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// const sortAges = ages.sort(function(a, b) {
//   if (a > b) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
// const sortAges = ages.sort((a, b) => (a > b ? 1 : -1));
// const sortAges = ages.sort((a, b) => a - b);
// console.log(sortAges);

//Reduce

//Get total for all ages

// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }
// const ageSum = ages.reduce((total, age) => total + age, 0);
// const ageSum = ages.reduce((a, b) => (a += b));

//Get total years for all companies

// const totalYears = companies.reduce(
//   (total, company) => total + (company.end - company.start),
//   0
// );
// console.log(totalYears);

// Combine Methods

const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((total, ages) => (total += ages), 0);

console.log(combined);
