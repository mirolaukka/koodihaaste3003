

function pieninSuurin(arr){
        arr = arr.sort();
        return [arr[0], arr[arr.length - 1]];
}

console.log(pieninSuurin([5,2,6,1])); // Palauttaa [1,6]

console.log("\n-----\n") // Jakaja consoliin

function parillinenLuku(n){
    return Number.isInteger(n/2) ? "Parillinen": "Pariton"; // Käytetään Ternary operaattoria selkeämmän koodin takia.
}

console.log(parillinenLuku(2)); // Palauttaa "Pariton" tai "Parillinen"

console.log("\n-----\n") // Jakaja consoliin

function kuukausi(k){
    var kuukaudet = ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskyy", "Lokakuu", "Marraskuu", "Joulukuu"]; // Kuukaudet
    return kuukaudet[k-1];
}

console.log(kuukausi(1)); // Yhdeksäs kuukais on syyskyy, functio palautaa "Syyskuu"

console.log("\n-----\n") // Jakaja consoliin

function Henkilo(etun, sukun, osoite, postinro, postitoimipk, puh, sposti){
    this.etunimi = etun;
    this.sukunimi = sukun;
    this.osoite = osoite;
    this.postinumero = postinro;
    this.postitoimipaikka = postitoimipk;
    this.puhelin = puh;
    this.sahkoposti = sposti;
}

var Kalle = new Henkilo("Kalle", "Pekka", "Lapintie 5", "04292", "Oulu", "2938195827819", "kalle.pekka@hotmail.fi");
var Kaisa = new Henkilo("Kaisa", "Lukko", "Pelikäisentie 2", "03220", "Turku", "73917588192", "kaisa.lukko@gmail.com");
var Toni = new Henkilo("Toni", "Ullakko", "Kovaoja 6", "04520", "Tuusula", "02523476123", "ullakko.toni@icloud.com");

console.log(Kalle.osoite); // Tulostaa Kallen osoitteen
console.log(Toni.osoite); // Tulostaa Tonin osoitteen
console.log(Kaisa.osoite); // Tulostaa Kaisan osoitteen

console.log("\n-----\n") // Jakaja consoliin

function akkosissa(s){
    sArr = s.split("");
    sArr = sArr.sort();
    return sArr.join("")
}

console.log(akkosissa("dcba")) // Palauttaa "abcd"

console.log("\n-----\n") // Jakaja consoliin

function arvostaja(n, a){
    switch(true){
        case (a < 50):
            return n + " Hylätty"
        case (a < 60):
            return n + " T1"
        case (a < 70):
            return n + " T2"
        case (a < 80):
            return n + " H3"
        case (a < 90):
            return n + " H4"
        case (a < 100):
            return n + " K5"
    }
}

console.log(arvostaja("Miro", 82)) // Palauttaa "Miro H4"
