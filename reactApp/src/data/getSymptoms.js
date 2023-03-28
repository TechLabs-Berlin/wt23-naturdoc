import axios from "axios";

const dbUrl = "http://localhost:7000/getSymptoms";
const localUrl = "/db/symptoms.json";

const getSymptoms = async (term) => {
  try {
    let response = await axios.get(dbUrl, {
      params: {
        symptomName: term,
      },
    });
    console.log("Get list of symptoms from backend:", response.data);
    return response.data;
  } catch (error) {
    console.log(error);

    try {
      let response = await axios.get(localUrl, {
        params: {
          symptomName: term,
        },
      });
      console.log("Backup list of symptoms local JSON:", response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
};

export default getSymptoms;
