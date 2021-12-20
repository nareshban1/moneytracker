import styled from "styled-components";


export const CardContainer = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
background-color:${(props) => props.theme.secondaryBackground};
color:${(props) => props.theme.textColorPrimary};
box-shadow: rgb(0 0 0 / 15%) 0px 0px 10px 0px; 
padding:.5rem;
border-radius: 5px;
margin-top: 1rem;
font-size: 0.9rem;
border-right:3px solid ${(props) => props.borderColor}
`

export const TransactionName = styled.p`

`
export const TransactionAmt = styled.p``
