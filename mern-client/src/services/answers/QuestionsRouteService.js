import axios from "axios";
import Api from "../api";

class QuestionsRouteService extends Api {
    constructor(endpoint) {
        super(endpoint)
    }

    async get(questionNumber) {
        const data = await axios.get(this.baseUrl  + `/${questionNumber}`);
        return data.data;
      }

}

export default QuestionsRouteService;