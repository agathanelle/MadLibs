var userInputs = [];
var numberOfQuestions = 10;
var questionsTotal = numberOfQuestions;

//var userInputs = ['2090', 'Ashley', 'website', 'goverment system', 'John', 'working out', 'graduation party problem', 'Paul', 'whiskey', 'tea'];
var questionArray = ['Enter year', 'Enter name', 'Enter noun', 'Enter noun', 'Enter name', 'Enter verb with -ing', 'Enter noun', 'Enter name', 'Enter noun', 'Enter noun'];

for (var i = 0; i < questionArray.length; i++) {
	console.log(questionArray[i] + ` ${questionsTotal} questions left`);
	userInputs.push(prompt(questionArray[i] + `... (${questionsTotal} questions left)`));
	questionsTotal--;
}
alert('All done! Ready for your totally-accurate, not-at-all confusing history of technology??');

var originalStory = `<h2>In ${userInputs[0]} computer pioneer ${userInputs[1]} found herself working on ${userInputs[2]}.</h2> 
<h2>Word got out that the team had "debugged" the ${userInputs[3]}.</h2> 
<h2>To her surprise ${userInputs[4]} has suggested ${userInputs[5]} to solve the ${userInputs[6]}.</h2> 
<h2>In meanwhile ${userInputs[7]} started to drink ${userInputs[8]} and nearly spill the ${userInputs[9]}.</h2>`;

console.log(originalStory);
document.write(originalStory);
