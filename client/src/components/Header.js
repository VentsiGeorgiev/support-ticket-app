import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';

function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const OnLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate('/');
    };

    return (
        <header>
            <div className="logo"></div>
            <Link to="/">Customer Support</Link>
            <div className="navigation">
                <ul>
                    {user
                        ? (
                            <>
                                <li>
                                    <button onClick={OnLogout}> <FaSignOutAlt /> Logout</button>
                                </li>
                            </>)
                        : (
                            <>
                                <li>
                                    <Link to="/login">
                                        <FaSignInAlt />
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/register">
                                        <FaUser />
                                        Register
                                    </Link>
                                </li>
                            </>)}

                </ul>
            </div>
        </header>
    );
}

export default Header;
