const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989},
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// // for(let i = 0; i < companies.length; i++) {
// //     console.log(companies[i]);
// // }


// //forEach

// // companies.forEach(function(company) {
// //     console.log(company);
// // })

// //filter
// //get 21 or older

// // let canDrink = [];
// // for(let i = 0; i < ages.length; i++) {
// //     if(ages[i] >= 21) {
// //         canDrink.push(ages[i]);
// //     }
// // }

// // const canDrink2 = ages.filter(function(age) {
// //     if(age >= 21) {
// //         return true
// //     }
// // });

const posleDevedesete = companies.filter(company => company.start > 1989);
console.log(posleDevedesete);

const filter2 = (array, filterFunction) => {
    let filtered = [];
    for(let i = 0; i < array.length; i++) {
        const result = filterFunction(array[i]);
        if(result) {
            filtered.push(result)
        }
    }
    return filtered
}

const filterCB = (element) => {
    if(element.start >= 1990) {
        return element;
    }
}

console.log(filter2(companies, filterCB));

// const canDrink3 = ages.filter(age => age >= 21)
// console.log(canDrink3);

// //filter retail companies

// const retailCompanies = companies.filter(function(company) {
//     if(company.category === "Retail") {
//         return true;
//     }
// });
// console.log(retailCompanies);

// const retailCompanies2 = companies.filter(company => company.category == "Retail")
// console.log(retailCompanies2);

// // Get 80s companies

// const eightiesCompanies = companies.filter(company => (company.start >= 1980 & company.start <= 1989));
// console.log(eightiesCompanies);

// // Get companies that lasted 10 years or more

// const lastTenYears = companies.filter(company => (company.end - company.start >= 10))
// console.log(lastTenYears);

// //map
// //Create array of company names
// // const companyNames = companies.map(function(company) {
// //     return company.name;
// // });

// console.log(companyNames);

// const testMap = companies.map(function(company) {
//     return `${company.name} [${company.start} - ${company.end}]`;
// });
// console.log(testMap);

// const testMap2 = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
// console.log(testMap2);

// koren
// const agesSquare = ages.map(age => Math.sqrt(age))
// console.log(agesSquare);

// //kvadriranje
// const agesTimesTwo = ages.map(age => age ** 2);
// console.log(agesTimesTwo);

// //koren pa zaokruzi na veci broj pa puta 2
// const ageMap = ages
//     .map(age => Math.sqrt(age))
//     .map(age => Math.ceil(age))
//     .map(age => age * 2);
// console.log(ageMap);

// //sort
// const sortedCompanies = companies.sort(function(a, b) {
//     if(a.start > b.start) {
//         return 1;
//     } else {
//         return -1;
//     }
// });
// console.log(sortedCompanies);

//const sortedCompanies2 = companies.sort((a, b) => (a.start < b.start))
//console.log(sortedCompanies2);

//Sort ages
// const sortAges = ages.sort((a, b) => a - b); //ako stavimo b - a onda redja od najveceg ka najmanjem

// console.log(sortAges);


//reduce
//sabrati sumu godina
// let ageSum = 0;
// for(let i = 0; i < ages.length; i++) {
//     ageSum += ages[i];
// }
// console.log(ageSum);

// const ageSum2 = ages.reduce(function(total, age) {
//     return total + age;
// }, 0);
// console.log(ageSum2);

// const ageSum3 = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum3);

// //Get total years for all companies

// const totalYears = companies.reduce(function(total, company) {
//     return total + (company.end - company.start);
// }, 0);
// console.log(totalYears);

// const totalYears2 = companies.reduce((total, company) => total + (company.end - company.start), 0)
// console.log(totalYears2);

// // Combine methods

// const combined = ages
//     .map(age => age * 2)
    

// console.log(combined);