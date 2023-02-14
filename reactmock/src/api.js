/* Mock API DATA from https://www.mockend.com
data will be available at: https://mockend.com/rjeantet/react-mock/symptoms
 */

/* "data": [
  {
    "title": "First title",
    "body": "You can use your own data or have random values generated for you."
  },
  {
    "title": "Second title",
    "body": "The rest of the posts will have random values"
  }
] */

import axios from "axios";

const searchContent = async (term) => {
  const response = await axios.get(
    "https://mockend.com/rjeantet/react-mock/remedies",
    {
      headers: {
        // see API documentation
      },
      params: {
        // see API documentation
        //title_contains: term,
      },
    }
  );
  return response.data;
};

export default searchContent;
