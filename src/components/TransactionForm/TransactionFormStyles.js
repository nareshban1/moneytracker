import styled from "styled-components";

export const TransactionFormContainer = styled.div`
margin-top:1.5rem;

`
export const TransactionTitle = styled.p`
    font-weight: 500;
    text-transform: uppercase;
    color:${(props) => props.theme.textColorPrimary};
`

export const AddTransactionForm = styled.form`
font-size: 0.9rem;
margin-top: 1rem;
color:${(props) => props.theme.textColorPrimary};

`

export const FormInput = styled.input`
padding:0.5rem;
border-radius: 3px;
    margin-top:.5rem;
    background-color:${(props) => props.theme.secondaryBackground};
    border:none;
    box-shadow: rgb(0 0 0 / 15%) 0px 0px 5px 0px; 
    font-family: 'Poppins';
    color:${(props) => props.theme.textColorPrimary};

    &:focus{
        border-radius: 3px;
        outline:1px solid #44BAFF;
        box-shadow: #44BAFF 0px 0px 5px 0px; 
        color:${(props) => props.theme.textColorPrimary};
    }
`

export const FormSelect = styled.select`
padding:0.5rem;
border-radius: 3px;
    margin-top:.5rem;
    background-color:${(props) => props.theme.secondaryBackground};
    border:none;
    box-shadow: rgb(0 0 0 / 15%) 0px 0px 5px 0px; 
    font-family: 'Poppins';
    color:${(props) => props.theme.textColorPrimary};

    &:focus{
        border-radius: 3px;
        outline:1px solid #44BAFF;
        box-shadow: #44BAFF 0px 0px 5px 0px; 
        color:${(props) => props.theme.textColorPrimary};
    }

`

export const FormOptions = styled.option`
font-family: 'Poppins';
    color:${(props) => props.theme.textColorPrimary};
`
export const AddButton = styled.button`
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
export const FormLabel = styled.label`
    display:flex;
    flex-direction: column;
    margin-top:.5rem;
`