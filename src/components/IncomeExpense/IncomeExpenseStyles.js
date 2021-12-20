import styled from "styled-components";


export const IncomeExpenseContainer = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
background-color:${(props) => props.theme.secondaryBackground};
color:${(props) => props.theme.textColorPrimary};
box-shadow: rgb(0 0 0 / 15%) 0px 0px 10px 0px; 
padding:1rem;
margin-top: 1.5rem;
border-radius: 5px;



`
export const AmtContainer = styled.div`
    width:100%;
    text-align:center;

    &:first-child{
        border-right:2px solid rgb(0 0 0 / 15%)

    }

`

export const AmtTitle = styled.p`
text-transform: uppercase;
font-weight: 500;
`
export const Amt = styled.p`
    color:${(props) => props.color};
    font-weight:600;
    font-size: 1.3rem;
`