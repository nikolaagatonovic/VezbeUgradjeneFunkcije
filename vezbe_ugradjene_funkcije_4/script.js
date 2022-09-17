const characters = [
    {
        name: "Luke Skywalker",
        height: 177,
        mass: 77,
        eye_color: 'green',
        gender: 'male',
    },
    {
        name: "Darth Vader",
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: "Leia Organa",
        height: 160,
        mass: 50,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: "Chewbacca Rahhggaahh Urughaghhh",
        height: 230,
        mass: 110,
        eye_color: 'blue',
        gender: 'male'
    },
];

// MAP
//1. Izvuci niz svih imena
const imena = charac => charac.map(character => character.name)
console.log(imena(characters));

//2. Izvuci niz svih visina
const visine = charac => charac.map(character => character.height)
console.log(visine(characters));

//3. Izvuci niz objekata samo sa svojstvima ime i visina
const imeVisina = charac => charac.map(character => ({name: character.name, height: character.height}))
console.log(imeVisina(characters));

//4. Izvuci niz samo licnih imena
const samoImena = charac => charac.map(character => character.name.split(" ")[0])
console.log(samoImena(characters));

// REDUCE
//1. Izvuci totalnu masu svih likova
const totalnaMasa = charac => charac.reduce((acc, cur) => acc + cur.mass, 0);
console.log(totalnaMasa(characters));

//2. Izvuci totalnu visinu svih likova
const totalnaVisina = charac => charac.reduce((acc, cur) => acc + cur.height, 0)
console.log(totalnaVisina(characters));

//3. Izvuci totalni broj likova razvrstan po boji ociju
const likoviBojaOciju = charac => charac.reduce((acc, cur) => {
    if(acc[cur.eye_color]) { //Ukoliko smo vec videli tu boju ociju zelimo da uzmemo njenu vrednost i apdejtujemo je
        acc[cur.eye_color] = acc[cur.eye_color] + 1; //zato kazemo akumulator sa tom vrednoscu (key) je jednako on plus 1
    } else {
        acc[cur.eye_color] = 1;
    }
    return acc
}, {})
console.log(likoviBojaOciju(characters));
//ILI skraceno
const likoviBojaOciju2 = charac => charac.reduce((acc, cur) => {
    const boja = cur.eye_color;
    if(acc[boja]) {
        acc[boja]++;
    } else {
        acc[boja] = 1;
    }
    return acc;
}, {})
console.log(likoviBojaOciju2(characters));
//znaci ako vidimo ponovo istu povecamo broj za 1 a ako vidimo novu boju dodamo je

//4. Izvuci totalni broj karaktera u imenima svih likova
const karakterImena = charac => charac.reduce((acc, cur) => {
    return acc + cur.name.length
}, 0)
console.log(karakterImena(characters))

// FILTER
//1. Izvuci likove sa masom vecom od 100
const masaVecaOdSto = charac =>
    charac.filter(character => character.mass > 100)
console.log(masaVecaOdSto(characters));

//2. Izvuci likove sa visinom vecom od 200
const visinaVecaOdDvesta = characters
    .filter(character => character.height > 200)
console.log(visinaVecaOdDvesta);

//3. Izvuci sve muske likove
const muskiLikovi = characters
    .filter(character => character.gender === "male")
console.log(muskiLikovi);

//4. Izvuci sve zenske likove
const zenskiLikovi = (likovi) =>
    likovi.filter(lik => lik.gender === "female")
            //console.log(character.name); 
console.log(zenskiLikovi(characters));
// SORT
//1. Sortiraj po imenu abecedno
const poImenu = characters => characters.sort((a, b) => {
    if(a.name < b.name) return -1;
    return 1;
});
console.log(poImenu(characters));

//2. Sortiraj po masi od najtezeg ka najmanjem
const poMasi = characters => {
    return characters.sort((a, b) => a.mass - b.mass);
}
console.log(poMasi(characters));

//3. Sortiraj po visini
const poVisini = characters => {
    return characters.sort((a, b) => a.height - b.height)
}
console.log(poVisini(characters));

//4. Sortiraj po polu
const poPolu = characters => characters.sort((a, b) => a.gender === "female" ? -1 : 1)
console.log(poPolu(characters));
// EVERY
//1. Da li svaki lik ima plave oci?
