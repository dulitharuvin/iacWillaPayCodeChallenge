## Description

.

## Installation

- Clone the repository to your local machine, that machine needs have nodejs setup, if not setup nodejs first

- CD in to the cloned repo root directory and do a npm install

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

- The application will run on port 3000 on localhost
- Try hitting the endpoint of http://localhost:3000/import-data-base using any api client platform such as POSTMAN
- If you use POSTMAN you can directly import the api collection to your POSTMAN workspace by importing the "Willapay.postman_collection.json" json file located in the "setup_and_test_files" directory

- After importing the api collection to postman, open the api call and navigate to the "Body" tab of the POST call of (http://localhost:3000/import-data-base) and select "form-data" as the data type.

- Attach a "database.json" which is also situated in "setup_and_test_files" directory to form data key value pair of "dbschema" which has been set to type file.

- After attaching the "database.json" as the value of the "dbschema" key send the POST request and observe the correctly ordered list of table names in the response body as a string array.

- You can repeat the api call with different json files conforming to the same specification.

## Test

```bash
# unit tests
$ npm run test
```

## Stay in touch

- Author - [Dulitha Daluwatta](https://www.linkedin.com/in/dulitha-ruvin-daluwatta/)

## License

Application is [MIT licensed](LICENSE).
