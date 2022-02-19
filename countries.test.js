const {
    totalNumberOfCountries, 
    mostOfficialLanguage, 
    highestOfficialLanguage,
    commonOfficialLanguage
} = require('./countries')

beforeEach(() => {
    const data = [ 
        { country:"US", languages: ["en"] },
        { country:"BE", languages: ["nl","fr","de"] },
        { country:"NL", languages: ["nl"] },
        { country:"DE", languages: ["de"] },
        { country:"ES", languages: ["es"] } 
    ];
});

afterEach(() => {
    const data = [ 
        { country:"US", languages: ["en"] },
        { country:"BE", languages: ["nl","fr","de"] },
        { country:"NL", languages: ["nl"] },
        { country:"DE", languages: ["de"] },
        { country:"ES", languages: ["es"] } 
    ];
})

describe("Countries in the world!", ()=>{
    it("should return the total number of countries", ()=>{
        expect(totalNumberOfCountries()).toBe(5)
    })

    it("Should return the most official languages", ()=>{
        expect(mostOfficialLanguage()).toBe(2)
    })

    it("should return the highest official languages", ()=>{
        expect(highestOfficialLanguage()).toBe("BE")
    })

    it("should return the common official languages", ()=>{
        expect(commonOfficialLanguage()).toBe("nl")
    })
})