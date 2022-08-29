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

for(let i = 0; i < companies.length; i++) {
    console.log(companies[i]);
}


//forEach

// companies.forEach(function(company) {
//     console.log(company);
// })

//filter

let canDrink = [];
for(let i = 0; i < ages.length; i++) {
    if(ages[i] >= 21) {
        canDrink.push(ages[i])
    }
}
console.log(canDrink);

let canDrink2 = ages.filter(function(age) {
if(age >= 21) {
    return true
    }
})
console.log(canDrink2);

const canDrink3 = ages.filter(age => age >= 21);
console.log(canDrink3);

//filter retail companies

const retailCompanies = companies.filter(function(company) {
    if(company.category == "Retail") {
        return true;
    }
});
console.log(retailCompanies);

const retailCompanies2 = companies.filter(company => company.category == "Retail");
console.log(retailCompanies2);

//filter 80s companies

const eightiesCompanies = companies.filter(company => company.start < 1990)
console.log(eightiesCompanies);

//lasted 10+ years

const lastedTenYears = companies.filter(company => ((company.end - company.start) >= 10))
console.log(lastedTenYears);

//map
//create array of companies names

const companyNames = companies.map(company => {
    return company.name;
})
console.log(companyNames);

const companyNames2 = companies.map(company => `${company.name} [${company.start} - ${company.end}]`)
console.log(companyNames2);

//kvadratni koren
const ageSquare = ages
    .map(age => Math.sqrt(age))
    .map(age => age * 4);
console.log(ageSquare);

//sort
const sortedCompanies = companies.sort(function(a, b) {
    if(a.start > b.start) {
        return 1
    } else {
        return -1
    }
})

console.log(sortedCompanies);

const sortedCompanies2 = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortedCompanies2);

//sort ages
const sortAges = ages.sort((a, b) => a - b);
console.log(sortAges);

//reduce

let ageSum = 0;
for(let i = 0; i < ages.length; i++) {
    ageSum += ages[i];
}
console.log(ageSum);

const ageSum2 = ages.reduce(function(total, age) {
return total + age;
}, 0) // nula je pocetna vrednost kao nula dodata gore u ageSum

console.log(ageSum);

const ageSum3 = ages.reduce((total, age) => total + age, 0) // nula je pocetna vrednost kao nula dodata gore u ageSum
    
console.log(ageSum3);

//get total years for all companies

const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
console.log(totalYears);

//combine methods

const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b, 0)
    .reduce((a, b) => a + b, 0);

console.log(combined);