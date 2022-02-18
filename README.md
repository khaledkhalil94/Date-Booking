# Date Booking Application

A simple application to allow operators to book time slots

This project is bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and Typescript.

---

## Requirements

- Node: `v12.18.2`

---

## Structure

```
 src/
  ├── adapters                      # directory for external communication ports (REST)
  │   ├── index.ts                  # main instance for the REST library
  │   └── config.ts                 # contains any configurations for REST adapter
  ├── components                    # reusable, domain-specific components. each component directory contains the 
  │   └── [ComponentName]
  │      ├── index.stories.tsx      # stories with all variants for the component
  │      ├── index.styles.tsx       # all component-specific styles
  │      ├── index.tsx              # main component implementation
  │      └── index.types.tsx        # types for the component
  ├── core                          # this is the application layer
  │   ├── api                       # all apis for entities
  │   ├── services                  # this is the core of the application business logic
  │   └── store                     # data store to share data across the application
  ├── types                         # contains all models for different entities
  ├── utils                         # custom reusable utility functions
  └── view                          # the view layer, contains pages that connect components to data
```

---

## Before Running

### All dependencies must be installed.
Run `npm i` before starting.

### A server must be running to serve the JSON data.
* You can run the command `npm run start-server` to start local server.
* If JSON data are provided from another server, make sure to update the baseURL in `src/adapters/config.ts`.
  
### JSON schema note:
* The application API expect JSON data to be in the following schema
```JSON
{
  "data": [
    {
      "id": 1,
      "name": "Company 1",
      "type": "company",
      "time_slots": []
    }
  ]
}
```
This is due to using `json-server`.

If JSON api has the original schema
```JSON
[
  {
    "id": 1,
    "name": "Company 1",
    "type": "company",
    "time_slots": []
  }
]
```

Then update the API url in `src/core/api/index.ts -> getData('/data)` to be `getData('/)`.


## Available Scripts

In the project directory, you can run:

---

### `npm i`

Installs packages

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run start-server`

Starts local server for JSON data.

### `npm run storybook`

Starts storybook for applications.
