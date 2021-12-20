import styled from "styled-components";

export const SigninButton = styled.button`
    padding:0.5rem;
    margin-top: 1rem;
    width: 100%;
    background-color: #7765CA;
    border:1px solid #7765CA;
    color:white;
    font-family: 'Poppins';
    border-radius: 3px;
    cursor: pointer;
    &:hover{
        opacity: 0.5;
    }
`

export const LogoutButton = styled.button`
    padding:0.5rem;
    cursor: pointer;
    background-color: #7765CA;
    border:1px solid #7765CA;
    color:white;
    font-family: 'Poppins';
    border-radius: 3px;
    &:hover{
        opacity: 0.5;
    }
`