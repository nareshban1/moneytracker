import styled from "styled-components";

export const Title = styled.p`
font-family:'Poppins',sans-serif;
text-transform: uppercase;
font-weight: 500;
`
export const BalanceAmount = styled.h2`
font-family:'Poppins',sans-serif;

`

export const BalanceContainer = styled.div`
color:${(props) => props.theme.textColorPrimary};
margin-top: 1.5rem;

`