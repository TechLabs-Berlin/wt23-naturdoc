import axios from "axios";


const MongoConnect = axios.create({
  baseURL: 'http://localhost:7000',
    headers: {

      },
    }
);

// --------------------- SYMPTOMS --------------------- //

// Get list of symptoms from backend, if not available, get from local symptoms.JSON
export const getSymptoms = async (term) => {
    const dbUrl = "http://localhost:7000/getSymptoms";
    const localUrl = '/db/symptoms.json';
  try {
    let response = await axios.get(dbUrl, {
      params: {
        symptomName: term,
      },
    });
    console.log("Get list of symptoms from backend:", response.data);
    return response.data;
  } catch (error) {
    console.log(error);

    try {
      let response = await axios.get(localUrl, {
        params: {
          symptomName: term,
        },
      });
      console.log("Backup list of symptoms local JSON:", response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
};


// --------------------- REMEDIES --------------------- //

// Get list of recommended remedies from backend given the symptoms provided by the user
export const getRemedyRecommendation = async (term) => {
    try {
        const response = await MongoConnect.get(
            "/getRemedyRecommendation",
            {
            params: {
              symptomsUser: term,
            },
          });
        console.log("get remedy recommendations response:", response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
    }

// Get a specific remedy by Id from the backend
export const getRemedy = async (_id) => {
    try {
        const response = await MongoConnect.get(`/remedies/${_id}`);
        console.log("get remedy by id response:", response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
    }


// --------------------- RATINGS --------------------- //

// Get a specific remedy's ratings from the backend
export const getRatings = async (term) => {
    try {
        const response = await MongoConnect.get(`/remedies/${term}/ratings`);
        console.log('get rating response:', response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

// Post a rating to the backend
export const putRating = async (remedy, formValues) => {
    try {
        const response = await MongoConnect.put(`/remedies/${remedy._id}/`,
        {
            data: {
              ...formValues,
            },
          }
        );
        console.log('put rating response:', response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}


// --------------------- USERS --------------------- //

export const getUsers =  () => {
// HARD-CODED FOR TESTINGS AND DEMO PURPOSES. 
    // To be replaced by the API call to get the user ID
    // Simultaniously, the Test UserID should be matched in the backend, @: backend/controllers/remedyController.js
    const userId = "64297844df5a9bc1c56deb32"

    return  (userId)
  }

