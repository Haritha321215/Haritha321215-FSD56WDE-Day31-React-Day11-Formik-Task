# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Flow starts from main.jsx -> app.jsx -> layout.jsx -> header.jsx + sidebar.jsx( consisits links to admin operations for books and authors) + body.jsx(books.jax+ author.jsx) + footer.jsx

books and authors components consists the CRUD operations to create, read, update and delete the books or authors.
Installations to run program 
  1.   Routing the pages
      npm I npm i react-router-dom@6
    
      npm I react-router-dom@6

  2. Material UI 
      npm install @mui/material @emotion/react @emotion/styled

      npm install @mui/icons-material

      the below links should be placed inside head tag of the index.html

        <link rel="stylesheet"  href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" />
      <link  rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>

  3. Formik and Yup building forms and their validations
  
    npm install formik --save

    yup installation for validations

    npm install yup --save

