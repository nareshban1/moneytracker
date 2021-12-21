import styled from "styled-components";

export const DeleteModalContainer = styled.div`
    background-color: rgba(0,0,0,0.6);
    position: fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index: 1;
    display: grid;
    place-items: center;

`

export const DeleteModalCard = styled.div`
    background-color: ${(props) => props.theme.mainBackground};
    color:${(props) => props.theme.textColorPrimary};
    padding:1rem;
    border-radius: 10px;
    min-width:250px;
    max-width:300px;

`

export const Header = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
`

export const Title = styled.h3`
    font-family: 'poppins',sans-serif;
`

export const CloseButton = styled.div`
    &:hover{
        transform: scale(1.2);

    }
`

export const DeleteInfo = styled.p`
margin-top: 1rem;

`
export const DeleteButton = styled.button`
    background-color: rgb(217,83,79);
    border: 1px solid rgb(217,83,79);
    color:white;
    padding:0.5rem;
    border-radius: 5px;
    font-family: 'poppins',sans-serif;
    margin-top: 1rem;


    &:hover{
        background-color: transparent;

    }
`