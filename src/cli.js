import readlineSync from 'readline-sync';


const getName = () => {
    const name = readlineSync.question('May I have your name?\n')
    return name
}


export default () => {
    console.log('Welcome to the Brain Games!')
    const name = getName()
    console.log( `Hello, ${name}`)
}
