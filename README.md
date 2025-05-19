# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




traccia esercizio del 19/25/2025
Ciao ragazzi,
Esercizio di oggi: React Context API
repo: react-context-api
Consegna
Sfruttiamo le Context API per rendere disponibile la lista dei post in tutta la nostra app.
Create una nuova repo e seguite i seguenti passaggi:
Partiamo col definire la lista dei post all’interno di App.jsx (quindi utilizzerete il primo "metodo" visto a lezione, quello più immediato, senza la personalizzazione del provider)
Create un componente PostsPage.jsx che conterrà al suo interno un titolo e un componente PostsList.jsx che mostra la lista di tutti i nostri post.
Creiamo un file per definire il nostro Context ed esportiamolo
Importiamo il Provider in App.jsx e wrappiamoci la nostra applicazione
Facciamo in modo che il componente PostsList.jsx recuperi i post consumando il Context e crei dunque una card per ciascuno di essi.
La struttura dell’App deve essere
App.jsx > PostsPage.jsx > PostsList.jsx > PostCard.jsx
Ecco l'elenco dei posts
const posts = [
    { id: 1, title: 'React Basis', content: 'React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.', category: 'FrontEnd' },
    { id: 2, title: 'What is Express.js?', content: 'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.', category: 'Backend' },
    { id: 3, title: 'Run JavaScript Everywhere', content: 'Node.js® is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.', category: 'Backend' },
    { id: 4, title: 'Build fast, responsive sites with Bootstrap', content: 'Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins.', category: 'Frontend' },
  ];
Numero minimo di push: 10;
Bonus
Implementare un componente Alert gestito tramite Context