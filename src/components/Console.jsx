import styled from "styled-components"
import { Flex } from "./Flex"
import { useState } from "react"
import { Line } from "./Line"


const StyledConsole = styled.textarea`
    width: 100%;
    height: 70vh;
    background-color: black;
    color: ${({ color }) => color || "white"};
    resize: none;
    &:focus {
        outline: none;
    };
    border: none;
    font-size: 24px;
`


export const Console = ({ color,...props }) => {
const [lines, setLines] = useState(["C:Users/Ahmad>"])

const onKeyPress = (event) => {
    if(event.charCode == 13) {
        setLines([...lines, "C:Users/Ahmad>"])
    }
}




    return (
        <Flex margin="40px 0">
            <Flex direction="column" margin="0 10px">
                {
                    lines.map((line) => {
                        return <Line color="green">{line}</Line>
                    })
                }
            </Flex>
            <StyledConsole onKeyPress={onKeyPress} color="green" {...props}/>
        </Flex>
    )
}