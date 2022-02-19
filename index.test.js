const {wholeIntegerNumbers, listToMatrix} = require('./index')

describe("Visually aided number test", ()=>{
    test("The Outputs of a recurring number from 1 - 6", ()=>{
        const result = wholeIntegerNumbers(6);
        const recieved = [1,2,'Visual', 4, 'Nuts', 'Visual']
        expect(result).toEqual(recieved)    
    })

    it("should return the number of item in the array", () => {
        const result = wholeIntegerNumbers();
        expect(result.length).toBe(100)
    })

    it("should contain the item Visual", ()=>{
        const result = wholeIntegerNumbers();
        expect(result).toContain('Visual')
    })

    it("should contain the item Nuts", ()=>{
        const result = wholeIntegerNumbers();
        expect(result).toContain('Nuts')
    })

    it("should contain the item Visual Nuts", ()=>{
        const result = wholeIntegerNumbers();
        expect(result).toContain('Visual Nuts')
    })

})


//test("The Conversion of List to Matrix", ()=> {
    //listToMatrix([2,5,8,5,7,4], 3)
    //expect().toBe([[2,4], [5,3], [4,8], [5,2]])
//})