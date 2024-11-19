# **Movie List Management System**

This project is a movie management application that allows users to search, view, and maintain a personalized list of favorite movies by interacting with the OMDb API. The system provides a user-friendly interface and efficient tools for searching movies and managing a dynamic movie list, stored locally in the browser.

---

## **KEY FEATURES**

### 1. **Search for Movies by Title and Year**
   Users can search for movies by entering the title and optionally the release year. The application fetches movie details from the OMDb API, including title, poster, plot, cast, and genre.

### 2. **Dynamic Modal for Movie Details**
   A responsive modal displays detailed movie information fetched from the API, including a synopsis, cast, genre, and poster. This enables users to review movies before adding them to their list.

### 3. **Add Movies to a Personal List**
   Users can add selected movies to a personal list that persists locally using browser `localStorage`. Duplicate entries are prevented with a validation mechanism.

### 4. **Movie Removal Functionality**
   The application allows users to remove movies from their personal list with a single click. This ensures flexibility in managing the movie collection.

### 5. **Local Data Storage**
   The system uses `localStorage` to save and retrieve the movie list, providing data persistence between sessions without requiring a backend database.

### 6. **Responsive Design**
   The application is fully responsive, with an adaptive layout for both desktop and mobile devices, ensuring usability across screen sizes.

---

## **TECHNOLOGIES USED**

### 1. **HTML5 & CSS3**
   - HTML5 provides the structure for the movie list and modal.
   - CSS3, along with custom and Bootstrap icons, is used for styling, responsiveness, and user experience enhancement.

### 2. **JavaScript**
   - Core functionality for searching, data fetching, localStorage interaction, and dynamic UI updates is implemented in vanilla JavaScript.

### 3. **OMDb API**
   - The OMDb API is used to fetch detailed movie information, ensuring a rich and diverse dataset for users to explore.

### 4. **LocalStorage**
   - Enables data persistence for the user's movie list without the need for server-side storage.

### 5. **Notie.js**
   - Lightweight notification library integrated for user alerts and messages.

---

## **CONCLUSION**

This **Movie List Management System** provides a simple yet robust solution for movie enthusiasts to search, view, and organize their favorite movies. Its integration with the OMDb API, coupled with localStorage-based persistence and a responsive design, makes it an accessible and enjoyable tool for all users.
