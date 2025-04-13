import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import api from '../interceptor/Interceptor'; // Uncomment if you want to use API calls

export const authenticate = createContext();

const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    // Initialize user from localStorage or sessionStorage
    const handleData = async() => {
        // Check localStorage first (for "remember me" users)
        const storedUser = localStorage.getItem('userAuth') || sessionStorage.getItem('userAuth');
        
        if (storedUser) {
            try {
                const userData = JSON.parse(storedUser);
                setUser(userData);
            } catch (error) {
                console.error('Error parsing stored user data:', error);
                // Clear invalid data
                localStorage.removeItem('userAuth');
                sessionStorage.removeItem('userAuth');
            }
        }
    }

    // For future API integration
    const fetchProfile = async() => {
        // If you implement backend API
        // try {
        //     // Only fetch if we have auth token
        //     const storedUser = localStorage.getItem('userAuth') || sessionStorage.getItem('userAuth');
        //     if (storedUser) {
        //         const response = await api.get('/user/profile');
        //         if (response.data) {
        //             setUser(response.data);
        //         }
        //     }
        // } catch (error) {
        //     console.error('Error fetching profile:', error);
        //     // Handle expired tokens, etc.
        //     if (error.response && error.response.status === 401) {
        //         logout();
        //     }
        // }
    }

    // Log out function
    const logout = () => {
        setUser(null);
        localStorage.removeItem('userAuth');
        sessionStorage.removeItem('userAuth');
        navigate('/signin');
    }

    useEffect(() => {
        handleData();
        fetchProfile();
    }, []);

    return (
        <authenticate.Provider value={{ 
            user, 
            setUser, 
            handleData, 
            fetchProfile,
            logout,
            isAuthenticated: !!user
        }}>
            {children}
        </authenticate.Provider>
    );
}

export default AuthContext;