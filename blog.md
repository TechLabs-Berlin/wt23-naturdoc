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

#### Example for a remedy item: 

![Example DB entry](https://github.com/TechLabs-Berlin/wt23-naturdoc/blob/documentation/images/db_example.png)

Apart from that, I developed the possibility for users to save their favorite remedies / delete remedies from the list of favorite remedies. This feature is not yet used in our app.

At the moment, we have not implemented the connection for user signup, login and logout between Frontend and backend. We are therefor hardcoding the user Id in the backend code as of now. 


# Data Science

 Early on, we established that the Naturedoc MVP required datasets containing information on symptoms and their possible treatments with natural remedies, particularly through the use of herbs. To that end, for the Data Science aspect of Naturedoc, we generally had to take care of the following tasks:

1. Researching Datasets
2. Data Scraping, Manipulation and Cleaning
3. Machine Learning
4. Visualisation
5. Python API and Recommendation Script

## Researching Datasets

The initial pitch had already provided a couple datasets, however upon closer inspection we realised that they were difficult for us to use. Some of them were hidden behind a pay wall, others included a dataset of images to train models based on image recognition - which did not fit the scope of what Naturedoc needed from us, and we knew that we had to look for other datasets or find possible sources of scraping.

Out of the many different datasets we explored, [Dr. Duke's Phytochemical and Ethnobotanical Databases](https://catalog.data.gov/dataset/dr-dukes-phytochemical-and-ethnobotanical-databases-cecc0) became the solid backbone of our data project. This dataset obviously required further work: on the one hand, we had to extract the essence of what we needed for Naturedoc from its complex information. On the other hand, we also needed to supplement it with more data from other sources to better fit the vision of what we wanted Naturedoc to be.

To that end, we explored other sources of data, such as the [Plants of the World Online](https://powo.science.kew.org/) by the _Royal Botanic Gardens, Kew_, the [WHO monographs on selected medicinal plants](https://apps.who.int/iris/handle/10665/42052) and also considered ways to include Google Trends data into the project.

## Data Scraping, Manipulation and Cleaning

After these initial explorations of available datasets, we proceeded with necessary steps to extract, clean and manipulate the data we found to be able to provide a custom, modified dataset, which would later form the basis of our remedy database on MongoDB Atlas.

This work included pivoting dataframes, e.g. to group all uses for a single herb together in a list (instead of having unique herb and use pairings), removing nan values and certain columns altogether, as well as providing new columns for ratings etc. containing the appropriate datatype so that backend could modify their information once uploaded to the database.

Extracting information from the WHO Monographs as well as trying to use the pytrends library presented particular challenges to us.

Extracting text data from a PDF is a messy process, especially due to the formatting quirks of the original files. In the end, we decided to stop this extraction process after the first two monographs (out of four): we managed to extract more detailed information on treatments for about 70 or so herbs. We consider this as a good _proof of concept_ that worked well enough for the MVP - in our honest opinion, if we do want to have complex written information on how to prepare and ingest the herbs, all their medicinal uses and more, we should not rely on data scraped from elsewhere but base it on our own custom content. Not only do we have legal and ethical concerns about scraping others' intellectual property, but there simply were no sources of data that provided that kind of detailed, written information on more than a handful of herbs at a time, anyway.

## Machine Learning

We initially had trouble identifying appropriate labels for our data, so a supervised machine learning approach seemed difficult to achieve. And while we already had a Python script in place that sent remedy recommendations to the backend, Naturedoc was faced with another Data Science problem, in that the "symptoms" that we initially provided were... pretty awful:

* The Dr. Duke's dataset provided a column of so called _ACTIVITIES_, paired with a single remedy. 
* Activities were recorded in a specific format that was not very user-friendly and not how a human would freely input a symptom (e.g. head ache as “Ache(Head)”).
* There were many similar, if not downright identical, labels (such as "Abortifacient", "Abortive", "Abortive?").
* The activity column would not just describe symptoms treated, but also included other uses. A single activity could refer to:
    * an illness or symptom treated, such as _diabetes mellitus_ or _fever_
    * a culinary use, such as _spice_
    * a medicinal property, such as _antibiotic_

With some guiding words from our mentor Rafael Saraiva, we then decided on an approach using unsupervised Clustering algorithms that would allow us to solve the symptom-problem as well:

Using word embeddings, we generated a distance matrix and clustered both activities and a set of more user-friendly symptoms based on their semantic proximity, using both a custom Python script as well as [HDBSCAN*](https://hdbscan.readthedocs.io/en/latest/index.html). 

Somewhat disappointingly, the more useable results were provided by our Python script that simply matched data points to one another based on a certain distance threshold, while HDBSCAN* clustering in general produced both more generic and therefore less sensible matches. 

### Word Embeddings

Word embeddings are a popular technique used in natural language processing to represent words or phrases as vectors of numerical values. Word embeddings are a type of language model that map words to numerical vectors in a high-dimensional space. These vectors capture the meaning and relationships between words, allowing algorithms to better understand natural language.

The model we used: 'average_word_embeddings_glove.840B.300d'. While we experimented with another model as well, the results of this model generated much better results for our dataset of symptoms.

Steps:
1. Converting each symptom into an embedding vector.
2. Compare and match them based on their semantic similarity in the embedding space.

## Visualisations

Although the clustering results were maybe not as satisfying as we had hoped, they allowed us to make certain observations when visualising the data. There were two types of visualisations we generated: 
1. Scatterplots of the word embeddings. We used TSNE to reduce the multidimensional embeddings array and visualised clusters created by HDBSCAN*.
2. Linear distance graphs using data of the distance matrix for a single row. 

![A 2D projection of all symptoms and activities based on their Embedding Vectors](./images/symptom_scatter.png)

The data we worked with possesses an inherently high dimensional complexity, and therefore all visualisation in 2D space can be quite misleading. As a general reminder, they are a projection and the displayed distances only tell a part of the story.

This became more obvious when visualising the clusters identified by HDBSCAN*. We generated the maximum amount of clusters possible, and while it looks like sometimes extremely distant data points were clustered together, when we took a look at the specific terms matched, their semantic proximity would become obvious (at least for the most part). 

![A 2D projection of all data points - lines connect clusters, red dots represent outliers](./images/symptom_cluster_lines_w-out.png)

## Python API and Recommendation Script

Python API, work with Web Dev, align on terms etc.

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
