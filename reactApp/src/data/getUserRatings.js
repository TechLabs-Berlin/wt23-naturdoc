import axios from "axios";

const getUserRatings = async (term) => {
  try {
    const response = await axios.get(
      `https://my-json-server.typicode.com/rjeantet/server-mock/ratings/`,
      {
        headers: {
          // cf API documentation
        },
        params: {
          remedyId: term,
        },
      }
    );

    console.log("get rating response:", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default getUserRatings;
