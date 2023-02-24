import { useRoutes } from 'react-router-dom';

import MainPage from '../pages'
import Projects from '../pages/projects'
import CV from '../pages/CV'
import Error404 from '../pages/404'

export default function Routes() {
    return useRoutes([
        {
            path: '/',
            children: [
                {
                    path: '',
                    element: <MainPage />
                },
                {
                    path: 'projects',
                    children: [
                        {
                            path: '',
                            element: <Projects />
                        },
                    ]
                },
                {
                    path: 'CV',
                    children: [
                        {
                            path: '',
                            element: <CV />
                        },
                    ]
                }
            ]
        },
        {
            path: '*',
            element: <Error404 />
        }
    ]);
}