const questions = [
    "What did you learn today?",
    "What bothered you today?",
    "What should do I to improve?",
    "What made me happy?",
    "Did I help anyone today?How many?"

]

const ask = ( index = 0) => {
 process.stdout.write("\n\n" + questions[index] + " > ")  //função pela saída na tela  
}

ask()

const answers = []
process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length) {
        ask(answers.length)
    } else {
        console.log(answers)
       process.exit() 
    }
})
process.on('exit', () => {
    console.log(`
    Hello,
    
    You learned today:
    ${answers[0]}
    
    About what bothered you and how you can procedure about this:
    ${answers[1]}
    
    What make you happy today:
    ${answers[2]}
    
    Hey!Think about this! You helped ${answers[3]}!!
    
    I'll be here waiting for you tomorrow!!}
    `)
})