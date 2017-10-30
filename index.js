const knapsack = require('knapsack-js');

const questions = [
	{
		number: 1,
		points: 2,
		level: 1
	},
	{
		number: 2,
		points: 2,
		level: 2
	},
	{
		number: 3,
		points: 1,
		level: 3
	},
	{
		number: 4,
		points: 3,
		level: 4
	},
	{
		number: 5,
		points: 2,
		level: 5
	},
	{
		number: 6,
		points: 2,
		level: 6
	},
	{
		number: 7,
		points: 3,
		level: 1
	},
	{
		number: 8,
		points: 3,
		level: 2
	},
	{
		number: 9,
		points: 2,
		level: 3
	},
	{
		number: 10,
		points: 2,
		level: 4
	},
	{
		number: 11,
		points: 2,
		level: 5
	},
	{
		number: 12,
		points: 1,
		level: 6
	},
	{
		number: 13,
		points: 2,
		level: 1
	},
	{
		number: 14,
		points: 2,
		level: 2
	},
	{
		number: 15,
		points: 1,
		level: 3
	},
	{
		number: 16,
		points: 1,
		level: 4
	},
	{
		number: 17,
		points: 2,
		level: 5
	},
	{
		number: 18,
		points: 1,
		level: 6
	},
	{
		number: 19,
		points: 1,
		level: 1
	},
	{
		number: 20,
		points: 2,
		level: 2
	},
	{
		number: 21,
		points: 2,
		level: 3
	},
	{
		number: 22,
		points: 2,
		level: 4
	},
	{
		number: 23,
		points: 1,
		level: 5
	},
	{
		number: 24,
		points: 1,
		level: 6
	},
	{
		number: 25,
		points: 2,
		level: 1
	},
	{
		number: 26,
		points: 2,
		level: 2
	},
	{
		number: 27,
		points: 1,
		level: 3
	},
	{
		number: 28,
		points: 1,
		level: 4
	},
	{
		number: 29,
		points: 2,
		level: 5
	},
	{
		number: 30,
		points: 2,
		level: 6
	}
];

const generator = totalMarks => {
	const sectionOnePercentage = 0.4;
	const sectionTwoPercentage = 0.4;
	const sectionThreePercentage = 0.2;

	const sectionOneTotal = sectionOnePercentage * totalMarks;
	const sectionTwoTotal = sectionTwoPercentage * totalMarks;
	const sectionThreeTotal = sectionThreePercentage * totalMarks;

	console.log(
		'Section 1 questions: ' +
			JSON.stringify(
				knapsack.resolve(
					sectionOneTotal,
					questions
						.filter(x => x.level === 1 || x.level === 2)
						.map(x => ({ [x.number]: x.points }))
				)
			)
	);

	console.log(
		'Section 2 questions: ' +
			JSON.stringify(
				knapsack.resolve(
					sectionTwoTotal,
					questions
						.filter(x => x.level === 3 || x.level === 4)
						.map(x => ({ [x.number]: x.points }))
				)
			)
	);

	console.log(
		'Section 3 questions: ' +
			JSON.stringify(
				knapsack.resolve(
					sectionThreeTotal,
					questions
						.filter(x => x.level === 4 || x.level === 5)
						.map(x => ({ [x.number]: x.points }))
				)
			)
	);
};

generator(process.argv[2]);
