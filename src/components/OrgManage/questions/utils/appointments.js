export const propAscSort = propName => (a, b) => {
  let aProp = a[propName],
    bProp = b[propName];

  return aProp || bProp
    ? !aProp ? -1 : !bProp ? 1 : aProp.localeCompare(bProp)
    : 0;
};

export const propDescSort = propName => (b, a) => {
  let aProp = a[propName],
    bProp = b[propName];

  return aProp || bProp
    ? !aProp ? -1 : !bProp ? 1 : aProp.localeCompare(bProp)
    : 0;
};

export const inputFilter = (questionId, questions, options, ans) => question => {

  return (
    question.questionId.toLowerCase().includes(questionId.toLowerCase()) &&
    question.questions.toLowerCase().includes(questions.toLowerCase()) &&
    question.options.toLowerCase().includes(options.toLowerCase()) &&
    question.ans.toLowerCase().includes(ans.toLowerCase())
  );
};
