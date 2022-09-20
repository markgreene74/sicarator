# Sicarator
> Sicara's project generator

![Demo GIF](./demo.gif)

## Installation

- Install a stable version of [Node.js](https://nodejs.org/) (v16.x.x) if you don't have one
- Install [Yeoman](http://yeoman.io) and `Sicarator` via `npm`:
    ```bash
    npm install -g yo sicara/sicarator
    ```

## Usage

- Before generating a new project, make sure to install last version of `Sicarator` by re-running:
    ```bash
    npm install -g sicara/sicarator
    ```

- Generate a new project with:
    ```bash
    yo sicarator
    ```

## Contribute to the project

### Install the project 

- Install the project with:
  ```bash
  git clone git@github.com:sicara/sicarator.git
  ```
  and install dependencies
  ```bash
  npm install
  ```
  
- To be able to run current dev version of the project, you can use the following command in your project directory:
  ```bash
  npm link
  ```
  - Next time you run `yo sicarator`, dev version will be used.
  - If you want to go back to the production version you can re-run:
    ```bash
    npm install -g sicara/sicarator
    ```

### Dev tools

- For debugging, you can run:
  ```bash
  npx --node-options="--inspect" yo sicarator
  ```

- To run the linter (eslint), you can use:
  ```bash
  npm run lint
  ```

- To run the tests, you can use:
  ```bash
  npm test
  ```