<p align="center">
<img src="https://raw.githubusercontent.com/TechLabs-Berlin/wt23-naturdoc/main/UX/logoNaturdoc.png" width="140px">
</p>

<h5 align="center">


Naturdoc is a M.E.R.N app that lets users find the best natural remedies to their common symptoms, in two clicks only,</br> thanks to a combination of data science research and user-generated reviews.</br> </br> With the help of Naturdoc, you can learn about the range of applications for each remedy,</br>  rate the remedy and exchange your experience in the comments with other users. </br> Our inbuilt doctor-alert is symptom based and notifies you when you should seek medical help.</br> </br>  We hope you get better soon!
</h5>
<p align="center">
[Badges here eventually, see https://shields.io/]
</p>


&nbsp;

<h5 align="center">
  <a href="#About">About</a>  |
  <a href="#Prototype">Prototype</a>  |
  <a href="#Setup">Setup</a>  |
  <a href="#Running">Run</a>  |
  <a href="#Authors">Authors</a>
</h5>

&nbsp;

## About

Naturdoc is ...

&nbsp;

## Prototype

[Link to video proto here]

&nbsp;

## Setup
##### Requirements: 

### Setting Up The Correct .env File:
To ensure that our credentials are not exposed on Github, we have set up a <code>.env</code> file containing necessary data to connect to our MongoDB Atlas database.

The <code>.env</code> file contains data in the following format:
```
#MONGO CONFIG
MONGO_URI=mongodb+srv://<user>:<password>@<cluster>.aj9zhtw.mongodb.net/?retryWrites=true&w=majority
```
Therefore, to be able to connect to the database, please contact members of the team to receive the necessary credentials.

### Python Install:
First, Python 3 needs to be installed. We used Python3.8 with FastAPI, so we recommended choosing the same version.

* [Download Python for Windows](https://www.python.org/downloads/windows/) and [Installation Docs for Windows](https://docs.python.org/3.8/using/windows.html)
* [Python for Mac](https://www.python.org/downloads/macos/) and [Installation Docs for Mac](https://docs.python.org/3.8/using/mac.html)

### Clone Into The Git Repository:
To clone and run this application, execute the following commands from your command line:

1. Clone git repository
```
git clone https://github.com/TechLabs-Berlin/wt23-naturdoc.git
```
2. Move to new directory

cd st22-ingredient-tracker

3. Navigate to app folder

cd app

4. Navigate to client folder

cd client

5. Install local development dependencies

npm i

6. Start local development - Front End

npm start

7. Navigate to server folder

cd ..

cd server

8. Install server dependencies

npm i

9. Start local server - Back End

npm start

### 

### 

## Running


## Authors
Data Science:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [Aljoscha Beiers](https://github.com/alj-b) &nbsp;

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [Anna Stergianou](https://github.com/annastergianou) &nbsp;

WD Frontend:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [Rose Jeantet](https://github.com/rjeantet) &nbsp;

WD Backend:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [Christina Dechent](https://github.com/ChristinaLisa) &nbsp;

User Experience:&nbsp;&nbsp;&nbsp; [Luzie](https://github.com/hotmail030) &nbsp;

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [Eugenia Lezcano](https://github.com/)
