import axios from "axios";

const putRating = async (term, remedy, formValues) => {
  try {
    const response = await axios.put(`http://localhost:7000/remedies/${term}`, {
      ...formValues,
      userId: "[USER.ID]",
      //remedyId: remedy.id,
      remedyName: remedy.remedyName,
    });

    console.log("putRating response:", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default putRating;
