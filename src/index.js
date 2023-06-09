import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StyledGlobal from './styled';
import store from './store';
import { ThemeProvider } from "styled-components";
import { Provider } from 'react-redux';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from "./pages/errorPage/Error";
import AppTasks from './pages/tasksListPage/tasks';
import Author from './pages/authorPage';
import TaskPage from './pages/taskPage'
import Demo from './pages/demoPage';

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Demo /> },
      {
        path: "tasks",
        element: <AppTasks />
      },
      {
        path: "author",
        element: <Author />
      },
      {
        path: "tasks/:taskId",
        element: <TaskPage />,
      }
    ]
  }
])

const theme = {
  colors: {
    done: {
      display: "hsl(120, 100%, 25%)",
      hover: "hsl(120, 100%, 28%)",
      active: "hsl(120, 100%, 31%)"
    },
    remove: {
      display: "hsl(0, 100%, 50%)",
      hover: "hsl(0, 100%, 62%)",
      active: "hsl(0, 100%, 68%)"
    }
  },
  breakPoints: {
    mobiles: 767
  },
  maxWidth: 1100
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RouterProvider router={router} />
        <StyledGlobal />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
