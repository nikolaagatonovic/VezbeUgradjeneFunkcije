const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1996, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989},
    {name: "Company Ten", category: "Retail", start: 1981, end: 1983},
    {name: "Company Eleven", category: "Auto", start: 1981, end: 1982},
    {name: "Company Twelve", category: "Finance", start: 1974, end: 1989},
    {name: "Company Thirteen", category: "Auto", start: 1981, end: 1989},
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];



// for(let i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
// }

// //forEach

// companies.forEach(function(company) {
//     console.log(company.name);
// })

//filter

let canDrink = [];
for(let i = 0; i < ages.length; i++) {
    if(ages[i] >= 20) {
        canDrink.push(ages[i]);
    }
}
console.log(canDrink);

let canDrink2 = ages.filter(function(age) {
    if(age >=20) {
        return true
    }
});
console.log(canDrink2);

let canDrink3 = ages.filter(age => age >= 20);
console.log(canDrink3);


//filter Finance companies

const finCompanies = companies.filter(company => company.category == "Finance");
console.log(finCompanies );

//filter Auto and Retail koji su poceli 80-ih i trajali maks 5 godina.

const autoRetail = companies.filter(company => (company.category == "Auto" || company.category == "Retail") && (company.end - company.start <= 5))
console.log(autoRetail); 

//get 80s companies

const eighties = companies.filter(company => company.start >= 1980 && company.end < 1990);
console.log(eighties);

//map
//Napraviti niz imena kompanija
const companyNames = companies.map(company => `${company.name}`)
console.log(companyNames);

//izvaditi korenje iz svih parnih brojeva u nizu
const ageSquare = ages.map(age => age % 2 == 0 ? Math.sqrt(age) : age)
console.log(ageSquare);

//izvaditi korenje pa zaokruziti na veci ceo broj a zatim ga pretvoriti u negativan ukoliko je neparan
const ageSquareNeg = ages
    .map(age => Math.sqrt(age))
    .map(age => Math.ceil(age))
    .map(age => age % 2 !== 0 ? age * -1 : age);
console.log(ageSquareNeg);

//svaki broj sa parnim indeksom u nizu podici na kub
// const cube = (ages, index)
//     ages.map(index % 2 == 0 ? age ** 3 : age)
// console.log(cube);

const cube2 = ages
    .map((age, index) => index % 2 === 0 ? age ** 3 : age)
console.log(cube2);

//sort
const sortedCompanies = companies
    .sort((comp1, comp2) => comp1.start > comp2.start ? 1 : -1)
console.log(sortedCompanies);

const sortedAges = ages
    .sort((a, b) => b - a)
console.log(sortedAges);

//[33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//reduce

let ageSum = 0;
for(let i = 0; i < ages.length; i++) {
    ageSum += ages[i]
}
console.log(ageSum);

const ageSum2 = ages
    .reduce((total, age) => total + age, 0)
console.log(ageSum2);

//Ukupno godina za sve kompanije

const totalYears = companies
    .reduce((total, company) => total + (company.end - company.start), 0)
console.log(totalYears);

//Combine methods

const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((a, b) => a + b, 0)
console.log(combined);