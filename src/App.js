import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import QuizTopic from './components/QuizTopic/QuizTopic';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';
import Main from './Layout/Main';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/home',
          element: <Home />
        },
        {
          path: '/topics',
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Topics />
        },
        {
          path: '/quiz/:quizId',
          loader: ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element: <QuizTopic />
        },
        {
          path: '/statistics',
          element: <Statistics />
        },
        {
          path: '/blog',
          element: <Blog />
        },
        {
          path: '*', element: <div> Ufffs..! This route not founded. 404.</div>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
