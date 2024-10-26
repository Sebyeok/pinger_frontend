type TQuestion = {
  title: string[];
  titleDesc?: string;
  detailQuestion?: string;
};

type TAnswer = {
  type: string;
  data?: any;
};

export type TPingerCheckData = {
  symptom?: string[];
  question: TQuestion;
  answer: TAnswer;
};
