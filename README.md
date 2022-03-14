# Manufacturer Recall Number API

An API to update vehicle data with manufacturer recall number and fetch the updated data

## Available Endpoints

- POST at /api/recalls - saves the provided vehicle recall data into a MongoDB database instance along with the manufacturer recall number data from the [Vehicle Recall Database API](https://open.canada.ca/data/en/dataset/1ec92326-47ef-4110-b7ca-959fab03f96d)

Note: Please provide vehicle recall data in JSON format in the request body (for example: CSCompVehicleRecallStart.json in the root of the project repo)

- GET at /api/recalls - fetches the previously saved vehicle recall data from the MongoDB database instance

- GET at /api/recalls/<manufacturerRecallNumber> - fetches vehicle recall data for the provided manufacturer recall number

## Environment Setup

1. Download and Install the latest version of [Node.js & npm](https://nodejs.org/en/download/) on you computer.

## Getting Started

1. Either download the zipped project from GitHub or clone the repo into your local machine.
   The rest of the steps need to be executed in the Terminal:
2. cd into the directory manufacturer-recall-number-api.
3. To install all of the dependency packages for the project locally, run: `npm install`
4. Rename the "test.env" file to ".env" and provide a connection url for a running MongoDB database instance
5. To start up the app, execute: `npm start` or `npm run start` or `npm run-script start`

## Getting Help

If help is needed to understand something in the app or just to provide feedback/suggestion, please send an email to muntasir2165@hotmail.com

## Author

**Muntasir Biojid** - [GitHub Profile](https://github.com/muntasir2165)
