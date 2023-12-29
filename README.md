# Social-Network-Api

## Table of Contents

* [Description](#description)
* [Acceptance Criteria](#acceptancecriteria)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Description

My challenge is to build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.

## Acceptance Criteria
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Installation

1. Create a new repository on your GitHub account and clone it to your computer.

2. When you're ready to deploy, use `git add`, `git commit`, and `git push` commands to save and push your code to your GitHub repository.

3. Navigate in your browser to your GitHub repository and then navigate into your repository's `Settings` tab on the right side of the repository's page.

4. From the settings page, scroll down to the GitHub Pages section and then, in the section labeled `Source`, select that you would like to use the `main` branch as your source.

5. Navigate to `<your-github-username>.github.io/<your-repo-name>` and you will find that your new web page has gone live! (For example, if your GitHub username is `lernantino` and the project is `css-demo-site`, your URL would be `lernantino.github.io/css-demo-site`)

## Usage

Type npm i into terminal
Type npm i express into terminal
Type npm i mongoose into terminal
Type npm i moment into terminal
Type npm start into the terminal

## Credits

Created by [Joshua King](github.com/tfkjosh).

##License

MIT License

Copyright (c) [2023] [Joshua King]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
