# Naturedoc Python API Documentation

Similar to how un-deployed Node JS apps require some setup with <code>npm i</code> and startup with <code>npm start</code>, the Python backend provided by Data Science also requires users and testers to start up a Python server locally with bash commands. 

## Setup:

### Setting Up The Correct .env File:
To ensure that our credentials are not exposed on Github, we  set up a <code>.env</code> file containing necessary data to connect to our MongoDB Atlas database.

The <code>.env</code> file contains data in the following format:
```
#MONGO CONFIG
MONGO_URI=mongodb+srv://<user>:<password>@<cluster>.aj9zhtw.mongodb.net/?retryWrites=true&w=majority
```
Therefore, to connect to the database from the DS backend, contact members of the team to receive the necessary file.

### Python Install:
First, Python 3 needs to be installed. We used Python3.8 with FastAPI, so we recommended choosing the same version.

* [Download Python for Windows](https://www.python.org/downloads/windows/) and [Installation Docs for Windows](https://docs.python.org/3.8/using/windows.html)
* [Python for Mac](https://www.python.org/downloads/macos/) and [Installation Docs for Mac](https://docs.python.org/3.8/using/mac.html)

### Installing Python Dependencies:
Once Python has been installed, run <code>pip install -r requirements.txt</code> in the <code>/app/pythonapi</code> folder (where the <code>requirements.txt</code> file is stored) to install all dependencies. If there are several Python versions installed, users might have to specify the version and run <code>python3.8 -m pip install -r requirements.text</code> instead.

### Starting Up Uvicorn Server:
If all indicated dependencies were properly installed, execute <code>uvicorn main:app --reload</code> in the <code>/app/pythonapi</code> folder (where <code>main.py</code> is located) to start the server.