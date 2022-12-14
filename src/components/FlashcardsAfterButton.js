import styled from 'styled-components';
import React from 'react';


export default function FlashcardsAfterButton(props) {


    const { color } = props

    return (
        <>

            <FlashCard data-identifier="flashcard">
                <PerguntaFechadaComBot√£oCLicado color={color}>
                    <p>{props.numberOfQuestion}</p>
                    {props.children}
                </PerguntaFechadaComBot√£oCLicado>
            </FlashCard>
        </>
    )
}




const PerguntaFechadaComBot√£oCLicado = styled.div`
    align-items: center;
    background-color:#FFFFFF;
    border-radius: 5px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    display: flex;
    height: 35px;
    justify-content: space-between;
    margin: 12px;
    padding: 15px;
    width: 300px;
    p{
        color: ${props => (props.color)};
        font-family: 'Recursive';
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 19px;
        text-decoration: line-through;
    }
`;

const FlashCard = styled.div`-
    border-box:box-sizing;  
    width: 300px;
    perspective: 1000px;
`;

