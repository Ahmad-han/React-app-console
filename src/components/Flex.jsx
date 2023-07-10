import styled from "styled-components"

const FlexWrapper = styled.div`
    display: flex;
    flex-direction: ${props => props.direction};
    align-items: ${props => props.align};
    justify-content: ${props => props.justify};
    margin: ${({ margin }) => margin || "0"};
`



export const Flex = (props) => {

    return (
        <FlexWrapper {...props}/>
    )
}