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

export const SmallInfo = styled.span`
    color:${(props) => props.theme.textColorPrimary};
    font-size:0.7rem;

`

export const Slider = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
    

    &::before{
        position: absolute;
        content: "";
        height: 17px;
        width: 17px;
        left: 4px;
        bottom: 4px;
        background-color: ${(props) => props.theme.mainBackground};
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 50%;
    }
`

export const CheckBox = styled.input`
    opacity: 0;
    width: 0;
    height: 0;
    background-color:red;



    &:checked + ${Slider}{
        background-color: ${(props) => props.color};
        

        &:before {
            
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
        }
    }
    &:not(:checked) + ${Slider}{
        background-color: ${(props) => props.color};
    
    }
        &:focus + ${Slider}{
            box-shadow: 0 0 1px ${(props) => props.color};
        }
    
`


export const Switch = styled.label`
    position: relative;
    display: inline-block;
    width: 50px;
    height: 25px;
    border-radius: 20px;
    overflow: hidden;
    background-color: transparent;
    margin-right: 1rem;
    
    
`

export const TransactionTypeContainer = styled.div`
        display:flex;
        align-items: center;
        text-transform: uppercase;
        color:${(props) => props.color};
        font-weight: 500;
        margin-top:.5rem;
    `
