import axios from "axios";

const getRemedy = async (term) => {
  try {
    const response = await axios.get(
      `https://my-json-server.typicode.com/rjeantet/server-mock/remedies/${term}`,
      {
        headers: {
          // cf API documentation
        },
        params: {
          id: term,
        },
      }
    );

    console.log("getRemedy response:", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default getRemedy;
