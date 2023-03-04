import axios from "axios";

const GetRemedies = async (term) => {
  try {
    const response = await axios.get(
      "https://my-json-server.typicode.com/rjeantet/server-mock/remedies",
      {
        headers: {
          // cf API documentation
        },
        params: {
          matching_symptoms: term,
        },
      }
    );
    console.log("Filtered remedies JSON response:", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default GetRemedies;
