const chalk = require('chalk')
const readline = require('readline-sync')

console.log(chalk.gray('Initialising the quiz'))

const userName = readline.question(chalk.cyan('Please Enter your Name: '))

console.log('Welcome '+userName+'!')
console.log(chalk.yellow('Quiz'))

let score=0
let wrong=3

function askQuestion(obj){
    console.log(chalk.cyan(obj.question))
    let usrAns = readline.question(chalk.gray('Your Answer: '))

    if(usrAns.toLowerCase() === obj.answer.toLowerCase()){
        console.log(chalk.green('Correct!\n'))
        score +=4
    }
    else{
        console.log(chalk.red('Wrong!'))
        score -=1
        wrong -=1
    }
}

const listQ = [
    {
        question:"What is my favorite food?",
        answer:"samosa"
    },
    {
        question:"Is my hometown in Bihar?(yes/no)",
        answer:"no"

    },
    {
        question:"Do I like snake games?",
        answer:"no"
    },
    {
        question:"Am I learning reactJS?",
        answer:"yes"
    },
    {
        question:"What's my favorite role model?",
        answer:"Swami Vivekananda"
    },
    
]

for (let i=0;i<listQ.length;i++){
    askQuestion(listQ[i])
    if(wrong == 0){
        console.log(chalk.red('Oops! you reached the max count of wrong answers!'));
        break;
    }
}

console.log(chalk.cyan(userName+', your final score is : '+score))

var leaderBoard = [
    {
        name:"Meghnath",
        score:20
    },
    {
        name:"Awasthi",
        score:16
    },
    {
        name:"Shantanu",
        score:15
    }
]

let minScoreInLeaderBoard=20

console.log('\n This is the leader Board!')

for(let i=0;i<leaderBoard.length;i++){
    console.log('Rank '+(i+1)+': '+leaderBoard[i].name+' with score = '+leaderBoard[i].score)
    if(leaderBoard[i].score < minScoreInLeaderBoard){
        minScoreInLeaderBoard = leaderBoard[i].score
    }
}

if(score > minScoreInLeaderBoard){
    console.log(chalk.yellow('\nWonderful Work! Grab you position in top performers. Send us the screenshot of your achievment as verification.'))
}