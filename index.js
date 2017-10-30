const knapsack = require("knapsack-js");

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
    "Section 1 questions: " +
      JSON.stringify(
        randomChooser(
          sectionOneTotal,
          questions.filter(x => x.level === 1 || x.level === 2)
        )
      )
  );

  console.log(
    "Section 2 questions: " +
      JSON.stringify(
        randomChooser(
          sectionTwoTotal,
          questions.filter(x => x.level === 3 || x.level === 4)
        )
      )
  );

  console.log(
    "Section 3 questions: " +
      JSON.stringify(
        randomChooser(
          sectionThreeTotal,
          questions.filter(x => x.level === 5 || x.level === 6)
        )
      )
  );
};

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const randomChooser = (limit, questions) => {
  const shuffled = shuffle(questions);

  const chosenQuestions = shuffled.reduce((chosen, question) => {
    const sumTotal = chosen.reduce((sum, x) => sum + x.points, 0);
    if (sumTotal + question.points <= limit) return [...chosen, question];
    else return chosen;
  }, []);

  return chosenQuestions;
};

generator(process.argv[2]);
