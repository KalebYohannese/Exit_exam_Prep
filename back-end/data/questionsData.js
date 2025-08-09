// question format

const questions = [
  {
    question: `Consider the following fragment of C++ code:

const int x = 8;
const int y = 16;
if(x > y)
{
    int z = x + y;
}

For codes like the above one, which technique of code optimization is appropriate?`,
    options: [
      "Arithmetic simplification",
      "Compile time evaluation",
      "Code motion",
      "Dead code elimination",
    ],
    answer: 3,
    explanation:
      "Dead code elimination would remove the entire if block since the condition (8 > 16) is always false at compile time, making the code inside unreachable.",
    course: 9,
    year: 2015,
  },
];

module.exports = questions;
