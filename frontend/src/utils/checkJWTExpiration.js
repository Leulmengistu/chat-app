import {jwtDecode} from 'jwt-decode';

const getCookie = (name) => {
    const cookies = document.cookie.split(';');


    for (let cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=').map(item => item.trim());

        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }

    return null;
};

const checkJWTExpiration = () => {
    const jwt = getCookie('jwt'); 

    if(!jwt){

        localStorage.clear()
    }
    if (jwt) {
        const decodedToken = jwtDecode(jwt); 
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp < currentTime) {
            // document.cookie = 'jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        }
    }
};

export default checkJWTExpiration;