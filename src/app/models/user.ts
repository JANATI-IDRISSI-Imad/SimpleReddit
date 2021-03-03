export interface User {
    username : string;
    email : string;
    password : string;
}

export interface UsernameAndPasswordAuthenticationRequest{
    username : string;
    password : string;
}