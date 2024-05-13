import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from './Body';
import {netflixLogo,mainImg} from '../utils/constants'

function Header() {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                const userData = { uid, email, name: displayName };
                setUserData(userData);
                navigate('/browse')
            } else {
                setUserData(null);
                navigate('/')
            }
        });

        return () => unsubscribe();
    }, []);

    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
        }).catch((error) => {
            navigate('/error');
        });
    };

    return (
        <div className="absolute px-8 py-2 w-screen bg-gradient-to-b from-black z-10 flex justify-between">
            <img className="w-44" src={netflixLogo} alt="netflix-logo" />
            {userData && (
                <div className="flex p-2">
                    <img className="w-12 h-12  flex" src={mainImg} alt="" />
                    <button onClick={handleSignOut} className="font-bold text-white">Sign Out</button>
                </div>
            )}
        </div>
    );
}

export default Header;
