import styled from "styled-components";

export const IconCont = styled.div`
    color: ${({ theme }) => theme.inactiveTxtColor};
`
export const NavIconCont = styled.div`
    color: ${({ theme }) => theme.inactiveTxtColor};
    
    :hover {
        color: ${({ theme }) => theme.mainTxtColor};
    }
`