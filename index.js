const path = require('path');
require('dotenv').config()
const NodeGoogleDrive = require('node-google-drive');

const YOUR_ROOT_FOLDER = process.env.ROOT_FOLDER
PATH_TO_CREDENTIALS = path.resolve(`${__dirname}/my_credentials.json`);

// Let's wrap everything in an async function to use await sugar
async function ExampleOperations() {
    const creds_service_user = require(PATH_TO_CREDENTIALS);

    const googleDriveInstance = new NodeGoogleDrive({
        ROOT_FOLDER: YOUR_ROOT_FOLDER
    });

    await googleDriveInstance.useServiceAccountAuth(
        creds_service_user
    );

    // List files under your root folder.
    let listFilesResponse = await googleDriveInstance.listFiles(
        YOUR_ROOT_FOLDER,
        null,
        false
    );

    for (let file of listFilesResponse.files) {
        console.log(file)
    }
}

ExampleOperations();