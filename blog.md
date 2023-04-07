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
