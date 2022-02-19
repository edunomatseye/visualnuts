const data = [ 
    { country:"US", languages: ["en"] },
    { country:"BE", languages: ["nl","fr","de"] },
    { country:"NL", languages: ["nl"] },
    { country:"DE", languages: ["de"] },
    { country:"ES", languages: ["es"] } 
];

//return the number of countries in the world
function totalNumberOfCountries() {
    return data.length;
}

//return countries with most German(de) as official language
function mostOfficialLanguage(officialLanguage= "de") {
    const offLanguageCountries = data.filter(nation => nation.languages.includes(officialLanguage))
    return offLanguageCountries.length
}

//returns country with the highest number of official languages
function highestOfficialLanguage() {
    const noOfLanguages = data.map(nation => ({country: nation.country, noOfLang: nation.languages.length}))
    noOfLanguages.sort((a,b) => b.noOfLang - a.noOfLang)
    return noOfLanguages[0].country
}

//returns most common official languages
function commonOfficialLanguage() {
    const officialLanguages = ["en", "nl", "fr", "de", "es"]
    const countries = []
    for(let i = 0; i < officialLanguages.length; i++) {
        const count = data.filter(nation => nation.languages.includes(officialLanguages[i])).length
        countries.push({count, language: officialLanguages[i]})
    }
    const maxLang = Math.max([...countries])
    countries.sort((a,b)=> b.count - a.count);
    return countries[0].language
}

module.exports = {totalNumberOfCountries, mostOfficialLanguage, highestOfficialLanguage, commonOfficialLanguage}