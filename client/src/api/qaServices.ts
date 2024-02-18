import axios from "axios";

import { QuestionAnswer } from "../models/questionAnswer";
import { qaEndpoints } from "./endpoints";

class QAServices {
  static async qaResponse(questionAnswer: QuestionAnswer): Promise<string> {
    try {
      const response = await axios.post(qaEndpoints.answer_question, questionAnswer);
      return response.data.answer;
    } catch (error) {
      throw new Error('Failed to get answer. Please try again.');
    }
  }
}


export default QAServices