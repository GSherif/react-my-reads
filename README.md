# About "My Reads" Project:

It's a library to categorize books into the proper shelf based on the status of each book for the user
and there are three shelves for books which are ("Currently Reading", "Want to Read" & "Read"). 


# To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── components # all components of the project.
    │   ├── BookCard.js
    │   ├── BookShelf.js  
    │   ├── BookShelfChanger.js  
    │   └── BooksList.js
    ├── constants
    │   └── Shelf.js
    ├── pages # main pages for the project.
    │   ├── ListBooksPage.js
    │   └── SearchBooksPage.js
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## My Reads Functionalities
* Search for books using any of the mentioned keywords in the SEARCH_TERMS.md file
* List books in their assigned shelves
* Move books from shelf to another


## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.