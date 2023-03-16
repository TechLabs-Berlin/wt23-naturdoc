import axios from "axios";

const getRemedyRecommendation = async (term) => {
  try {
    //  const response = await axios.get(
    //    "https://my-json-server.typicode.com/rjeantet/server-mock/remedies",
    //    {
    //      headers: {
    //        // cf API documentation
    //      },
    //      params: {
    //        matching_symptoms: term,
    //      },
    //    }
    //  );

    const response = await axios({
      method: 'GET',
      url: 'https://localhost:7000/getRemedyRecommendation',

      headers: {
        // cf API documentation
      },
      params: {
        symptom: term,
      }
    }
    )

    console.log("getRemedyRecommendation response:", response.data);
    return response.data;

    /* const randomNum = Math.floor(Math.random() * response.data.length);
    const randomRemedies = response.data
      .sort(() => Math.random() - 0.5)
      .slice(0, randomNum);
  
    return randomRemedies; */
  } catch (error) {
    console.log(error);
  }
};

export default getRemedyRecommendation;
