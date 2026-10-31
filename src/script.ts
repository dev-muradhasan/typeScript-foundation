
// let myString: string = 'murad hasan'
// let myNumber: number = 24354
// let myBoolean: boolean = true
// let mySymbol: symbol = Symbol()
// let myBigInt: bigint = 100n


const addTwo = (a: number, b: number) => {
    return a + b
}
console.log(addTwo(10, 20))

// const strArr: Array<string> = ['programming', '345', '425']
const strArr: string[] = ['programming', '345', '425']
const numArr: number[] = [23, 45, 67, 25,]
const dhakaLatLong: readonly [number, number] = [23.8103, 90.4125]


const concatName = (firstName: string, lastName?: string) => {
    if (!lastName) {
        return firstName
    } else {
        return firstName + ' ' + lastName
    }
}

console.log(concatName('jahid hasan'));


const greetings = (fullName: string, greetings = 'hi')=>{
    console.log(greetings + ' ' + fullName)
}
greetings('Mir')



const sum = (...numbers: number[])=>{
    return numbers.reduce((total, sum)=> total + sum, 0)
}

console.log(sum(3,4,4,3,2,1,5));