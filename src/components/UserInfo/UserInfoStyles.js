import styled from "styled-components";


export const UserHeader = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
`;
export const UserProfileContainer = styled.div`
display:flex;
align-items: center;
`;
export const UserImage = styled.img`
    height:50px;
    border-radius: 50%;
`;
export const UserName = styled.p`
margin-left:10px;
color:${(props) => props.theme.textColorPrimary}
`;