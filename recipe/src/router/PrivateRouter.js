import { Navigate } from 'react-router-dom';
// import Login from '../pages/login/Login';

const PrivateRouter = (Component) => {
    const auth = false; //your logic

    return auth ? <Component /> : <Navigate to="/login" />
}
export default PrivateRouter;