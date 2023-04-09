# Naturedoc 
![Logo](https://github.com/TechLabs-Berlin/wt23-naturdoc/blob/main/UX/logoNaturdoc.png)


# UX-Process 
We started the process by defining the Problem and the Solution of the Product: The problem: How to find the right natural remedies for an ailment? Solution: Create a website that can match the users’ symptoms/disease to the right medication/treatment. It helped us to visit different websites with similar project aims as ours. But we also looked at cooking websites to get inspiration on how we could display the remedies. 

We had a couple discussions about the possible project scope in the Naturedoc team to build a common idea of the final product. Based on user stories, we decided on MVPs and stretch goals. 

We thought about our users and their needs. Additionally, we conducted a short survey. Since we did not have a lot of time to wait for the results of the survey, the participants are mostly acquaintances of ours and therefore very similar in their live situation, place of residence and opinions. 


## Our Challenges 
- Building an easy user flow 
- Making the available dataset user friendly and easy to use. 
- Meeting the risk of people not going to the doctors though being seriously sick 

# Web Dev

## Backend

The development process of the backend was challenging especially in the beginning before we decided on a clear MVP and stretch goals and before we decided on a data structure for our remedy recommendations. However, it was great to see the different parts connecting once we had a clealy defined path. 

### Initial project phase - server setup, local DB and user auth:
In the beginning I focussed on getting familiar with using MongoDB and express. After setting up the server, I therefore created a local database which I populated with sample remedy data to be able to work on the API endpoints for the remedy recommendation and the symptoms. When we connected this endpoint to the FE, we initially still used the data from the local database. 
In the meantime I also started working on the user authentication endpoints, because that was going to be needed as a basis for implementing the rating system.The provided user endpoints as of now enable the user to signup, login and logout of the app. 

### Setting up MongoDB Atlas and connecting FE, BE and DS:
Once the datastructure was defined, we set up MongoDB Atlas. After DS had populated the DB, we worked on connecting the three areas to send the remedy recommendations from Python via the backend to the frontend. This was especially challenging because we had worked with sample data before and had not defined a nomenclature for our parameters yet. 

### Development of the rating system 
Once we managed to send the recommendations to the frontend, I concentrated on developing the rating system. Figuring out how to use one-to-one and one-to-many relationships in Mongo was challenging. At the end, I used 4 different Models: user, remedy, rating and symptoms model. The final logic of the rating logic is the following: 
A user can only place one rating per remedy. If the user rates the remedy a second time, the original comment will be overwritten. Hence, 
1. the user model stores one rating for each remedy for that specific user
2. the remedy model stores one rating per user for that specific remedy 
3. the rating model stores one rating per user per remedy

Additionally, the remedy model stores the absolute number of ratings per remedy and the average rating.
Several references are used between these models, for example getting the username from the user model when retrieving data from the ratings model.

Apart from that, I developed the possibility for users to save their favorite remedies / delete remedies from the list of favorite remedies. This feature is not yet used in our app.

At the moment, we have not implemented the connection for user signup, login and logout between Frontend and backend. We are therefor hardcoding the user Id in the backend code as of now. 


# Data Science

## Steps

1. Researching Datasets, databases and other sources of data. Limitations.
2. Data Scraping, Manipulation, Cleaning. WHo and Pytrends.
3. ML approach: no labels, clustering -> by the way of embeddings.
4. Visualisation: visualise ML clusters, talk about issues of high dimension arrays, why other solution worked out better in the end.

### Researching Datasets

### Scraping

### Machine Learning

#### Word Embeddings

Word embeddings are a popular technique used in natural language processing to represent words or phrases as vectors of numerical values. Word embeddings are a type of language model that map words to numerical vectors in a high-dimensional space. These vectors capture the meaning and relationships between words, allowing algorithms to better understand natural language.
Importance of word embeddings for better symptom-herb matching.
improve the accuracy of our symptom-herb matching algorithm.---->can more accurately match symptoms with appropriate herbal remedies.
allow us to make more accurate and effective symptom-herb matches, ultimately providing our users with more personalized and effective natural remedies.
The model we used: 'average_word_embeddings_glove.840B.300d'. We used this model to generate embeddings for our dataset of symptoms .
Steps:
1.converting each symptom into an embedding vector
2. compare and match them based on their semantic similarity in the embedding space.

### Visualisations

## Our Challenges

* finding good datasets
* Limitations of the Pytrends API, including daily limits on the number of queries and the need for proxy servers.
* Difficulty in selecting the most relevant search terms to represent each herb.
* Difficulty in comparing the popularity of different herbs due to differences in spelling and naming conventions.
* Keyword ambiguity: Some herb names may have multiple meanings, leading to ambiguity in the search query. For example, the keyword "sage" could refer to the herb or the act of giving wise advice.
* Data reliability: The popularity of a herb may not be solely reflected by its search volume on Google.
* API limitations: Pytrends is an unofficial API and subject to rate limiting or other restrictions that may affect the reliability or consistency of your data.
* Spelling variations: Different regions or cultures may have different spellings for the same herb, leading to inconsistencies in the search results. For example, the herb known as "cilantro" in the US is called "coriander" in the UK
* Language barriers: Pytrends may not support certain languages, making it difficult to collect data on herbs that are primarily used in non-English speaking countries.

# Summary 
All in all we are happy with the results. We managed our time well and worked well together as a team. 
