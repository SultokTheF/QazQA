const BASE_URL = "http://localhost:8000/api/v1";

const createEndpoint = (path: string): string => `${BASE_URL}/${path}`;

const qaEndpoints = {
  answer_question: createEndpoint('answer_question/'),
};

export {
  qaEndpoints
}