import axios from "axios";

const postRating = async (remedy, formValues) => {
  try {
    const response = await axios.post(
      `https://my-json-server.typicode.com/rjeantet/server-mock/ratings/`,
      {
        ...formValues,
        userId: "[USER.ID]",
        remedyId: remedy.id,
        remedyName: remedy.remedyName,
        createdAt: "[MONTH.DAY.YEAR] [HOUR:MINUTE]",
        updatedAt: "[MONTH.DAY.YEAR] [HOUR:MINUTE]",
      }
    );

    console.log("postRating response:", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default postRating;
