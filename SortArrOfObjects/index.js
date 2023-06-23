let testCase1 = [
  {
    name: 'Leo Messi',
    dob: '31-12-1995',
    biology: 95,
    chemistry: 91,
  },
  {
    name: 'Cristiano Ronaldo',
    dob: '31-05-1992',
    biology: 90,
    chemistry: 81,
  },
  {
    name: 'Virat Kohli',
    dob: '31-12-1995',
    biology: 95,
    chemistry: 96,
  },
  {
    name: 'Rohit Sharma',
    dob: '31-12-1995',
    biology: 85,
    chemistry: 86,
  },
  {
    name: 'Viswanathan Anand',
    dob: '12-12-1994',
    biology: 99,
    chemistry: 10,
  },
];

const comparisionFun = (a, b) => {
  const aTotal = a.biology + a.chemistry;
  const bTotal = b.biology + b.chemistry;
  if (aTotal > bTotal) {
    return 1;
  } else if (aTotal === bTotal) {
    if (a.biology > b.biology) {
      return 1;
    } else if (a.biology === b.biology) {
      if (a.chemistry > b.chemistry) {
        return 1;
      } else if (a.chemistry === b.chemistry) {
        const aDOB = new Date(a.dob);
        const bDOB = new Date(b.dob);
        if (aDOB > bDOB) {
          return 1;
        } else {
          return -1;
        }
      }
    }
  }
  return -1;
};

let testCase2 = [
  {
    name: 'Leo Messi',
    dob: '31-12-1995',
    biology: 100,
    chemistry: 80,
  },
  {
    name: 'Cristiano Ronaldo',
    dob: '31-05-1992',
    biology: 80,
    chemistry: 100,
  },
  {
    name: 'Virat Kohli',
    dob: '31-12-1995',
    biology: 30,
    chemistry: 40,
  },
  {
    name: 'Rohit Sharma',
    dob: '31-12-1995',
    biology: 40,
    chemistry: 30,
  },
  {
    name: 'Viswanathan Anand',
    dob: '12-12-1994',
    biology: 99,
    chemistry: 10,
  },
];

//sorting the testcases in ascending order
const case1ResultArr = testCase1.sort(comparisionFun);
const case2ResultArr = testCase2.sort(comparisionFun);

//sorting the arrey in descending order
case1ResultArr.reverse();
case2ResultArr.reverse();

//printing the results
console.log(case1ResultArr.map((player) => player.name));
console.log(case2ResultArr.map((player) => player.name));
