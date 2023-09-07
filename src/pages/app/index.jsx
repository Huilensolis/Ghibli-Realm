import { BrowserRouter, useRoutes } from 'react-router-dom'

import Home from '../home'
import Chekcout from '../checkout'
import MyTikets from '../my-tikets'
import SignIn from '../sign-in'
import NotFound from '../not-found'
import NavBar from '../../components/nav-bar'
import Details from '../details'

import { CartContextProvider } from '../../context/cart'

const AppRoutes = () => {
    const routes = useRoutes([
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/checkout',
            element: <Chekcout />,
        },
        {
            path: '/my-tikets',
            element: <MyTikets />,
        },
        {
            path: '/details/:id',
            element: <Details />,
        },
        {
            path: '/sign-in',
            element: <SignIn />,
        },
        {
            path: '*',
            element: <NotFound />,
        },
    ])
    return routes
}

const App = () => {
    return (
        <CartContextProvider>
            <BrowserRouter>
                <NavBar />
                <AppRoutes />
            </BrowserRouter>
        </CartContextProvider>
    )
}

export default App
