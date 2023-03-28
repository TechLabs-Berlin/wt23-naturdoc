import axios from "axios";

const putRating = async (remedy, formValues) => {
  try {
    const response = await axios.put(
      `http://localhost:7000/remedies/${remedy._id}/`,
      //BUG this is not working. The response is wrong (full list of symptoms).
      {
        data: {
          ...formValues,
          //TODO userID to be added.
          userId: "[USER ID]",
        },
      }
    );

    console.log("putRating response:", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default putRating;
