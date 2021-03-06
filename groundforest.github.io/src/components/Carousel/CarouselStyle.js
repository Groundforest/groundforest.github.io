import styled from "styled-components";
import { Column, Row } from "../../globalStyles";

export const CarouselContainer = styled(Column)`
    overflow: hidden;

    @media screen and (max-width: 425px) {
        font-size: 36pt;
        height: 100%;
    }


`
export const CarouselMenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: absolute;
    height: 5%;
    width: 100%;

    @media screen and (max-width: 960px) {
        align-items: center;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    @media screen and (max-width: 425px){
        flex-direction: column;
        row-gap: 10px;
    }
`;

export const CarouselMenuHeader = styled.h1`
    display: flex;
    width: 40%;
    justify-content: center;
    font-size: 24pt;

    @media screen and (max-width: 425px) {
        font-size: 16pt;
    }
`;

export const MenuLinksContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 60%;
    column-gap: 10%;
`;

export const CarouselMenuItem = styled.span`
    display:flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    cursor: pointer;
    font-size: 12pt;
    border: none;
    border-radius: 10px;

    @media screen and (max-width: 425px){
        font-size: 8pt;
    }
`;

export const CarouselItemContainer = styled(Row)`
    @media screen and (max-width: 425px){
        height: 100%;
        margin-top: 50px;
        }

        @media screen and (max-width: 375px){
        height: 650px;
        margin-top: 50px;
        }
`;

export const CarouselItem = styled(Row)`
    background-color: ${({ Inverse }) => (Inverse ? '#e2e1e6': 'white')};
    border: none;
    flex-shrink: 0;
    border-radius: 6px;
    

    &.Img960container{
        flex-direction: row;
        width: fit-content;
        height: fit-content;
        @media screen and (max-width: 425px){
        height: 320px;
        }
    };

    @media screen and (max-width: 960px) {
        flex-direction: column;
        height: 90%;
        overflow: hidden;;
    }

    @media screen and (max-width: 425px){
        padding: 15px;
    }
`

