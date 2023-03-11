import axios from "axios";

const getSymptoms = async (term) => {
  try {
    const response = await axios.get(
      "https://my-json-server.typicode.com/rjeantet/server-mock/symptoms",
      {
        headers: {
          // cf API documentation
        },
        params: {
          title: term,
        },
      }
    );
    console.log("Full symptoms list JSON response:", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default getSymptoms;
