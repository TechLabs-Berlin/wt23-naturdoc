import axios from "axios";

const getRatings = async (term) => {
  try {
    const response = await axios.get(
      `http://localhost:7000/remedies/${term}/ratings`
    );

    console.log("get rating response:", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default getRatings;
