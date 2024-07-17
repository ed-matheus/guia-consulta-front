import React, { useState, useEffect } from 'react';

const AuthComponent = () => {
    const [token, setToken] = useState(null);

    const fetchToken = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/v1/token/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: 'admin',
                    password: 'admin'
                })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Token:', data);
        } catch (error) {
            console.error('Error fetching token:', error);
        }
    };

    return (
        <div>
            {/* <button onClick={fetchToken}>Get Token</button> */}
            {token && <div>Token: {token}</div>}
        </div>
    );
};

export default AuthComponent;
