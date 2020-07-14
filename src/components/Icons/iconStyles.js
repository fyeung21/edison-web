import styled from "styled-components";

export const IconCont = styled.div`
    color: #BBBBBB;
`
export const NavIconCont = styled.div`
    color: ${({ theme }) => theme.inactiveTxtColor};
    :hover {
        color: ${({ theme }) => theme.mainTxtColor};
    }
`