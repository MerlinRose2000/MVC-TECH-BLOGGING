# Mapping-E_commerce-Back_End

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Link](#link)
- [License](#license)

## Description

This project is a blog site built with CMS capabilities, enabling developers to publish blog posts and comment on others' posts. Following the MVC architectural pattern, the site utilizes Handlebars.js for templating, Sequelize as the ORM, and express-session for authentication.

### User Story

AS A developer who writes about tech <br />
I WANT a CMS-style blog site <br />
SO THAT I can publish articles, blog posts, and my thoughts and opinions

### Acceptance Criteria

GIVEN a CMS-style blog site <br />
WHEN I visit the site for the first time <br />
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in <br />
WHEN I click on the homepage option <br />
THEN I am taken to the homepage <br />
WHEN I click on any other links in the navigation <br />
THEN I am prompted to either sign up or sign in <br />
WHEN I choose to sign up <br />
THEN I am prompted to create a username and password <br />
WHEN I click on the sign-up button <br />
THEN my user credentials are saved and I am logged into the site <br />
WHEN I revisit the site at a later time and choose to sign in <br />
THEN I am prompted to enter my username and password <br />
WHEN I am signed in to the site <br />
THEN I see navigation links for the homepage, the dashboard, and the option to log out <br />
WHEN I click on the homepage option in the navigation <br />
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created <br />
WHEN I click on an existing blog post <br />
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment <br />
WHEN I enter a comment and click on the submit button while signed in <br />
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created <br />
WHEN I click on the dashboard option in the navigation <br />
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post <br />
WHEN I click on the button to add a new blog post <br />
THEN I am prompted to enter both a title and contents for my blog post <br />
WHEN I click on the button to create a new blog post <br />
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post <br />
WHEN I click on one of my existing posts in the dashboard <br />
THEN I am able to delete or update my post and taken back to an updated dashboard <br />
WHEN I click on the logout option in the navigation <br />
THEN I am signed out of the site <br />
WHEN I am idle on the site for more than a set time <br />
THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts

## Installation

For installation of the dependencies, please run the following command in the terminal: `npm install`

## Usage

To start the application type the following command in the terminal: `npm run seed`, and then `npm start` or `node server.js`

## Screenshots

<p>Main page before logging in</p>
<img alt="Main page before logging in" src="utils/images/before-login.png">

<p>The login/registration page</p>
<img alt="The login/registration page" src="utils/images/login-registration.png">

<p>Main page after logging in</p>
<img alt="Main page after logging in" src="utils/images/after-login.png">

<p>A blog page with comments</p>
<img alt="A blog page with comments" src="utils/images/blog-page.png">

<p>The dashboard before a blog is made</p>
<img alt="The dashboard before a blog is made" src="utils/images/dashboard1.png">

<p>The dashboard after a blog is made</p>
<img alt="The dashboard after a blog is made" src="utils/images/dashboard2.png">

## Link

https://mvc-tech-blogging.netlify.app/

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)