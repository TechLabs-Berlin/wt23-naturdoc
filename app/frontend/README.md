## Prerequisites:

Basic understanding of React.

## Project Stack

Project bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
UI Framework [Material UI](https://mui.com/material-ui/).

## How to run

1. Navigate to reactApp:

### `cd reactApp`

2. Intall dependencies, run:

### `npm install`

2. Still in the frontend project directory (reactApp), you can run:

### `npm start`

3. This will run the app in development mode.
   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

4. In case of errors. make sure all your dependencies are installed. You can see a list of all dependencies installed as well as their version in: package.json

For example, if terminal indicates that material UI is missing, your can run:

```
// npm
npm install @mui/material
```

5. API Endpoints
   API Endpoints are located in the folder /data

6. In case of difficulties connecting to the backend, you can still render the App by using a "fake testing API".
   To do so, go into the .js file under /data, comment the code pointing to "localhost/7000..." and uncomment the code pointing to "https://my-json-server.typicode.com/rjeantet/server-mock/..."
