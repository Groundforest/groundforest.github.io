import styled from "styled-components";
import { Column } from "../../globalStyles";


export const HeroContainer = styled(Column)`
    display: flex;
    background-image: url('img/Hero3.jpg');
    background-repeat: no-repeat;
    background-size: 1920px, 908px;
    background-attachment: fixed;
    background-position: top;
    flex-direction: column;
    height: 990px;
    margin-top: -170px;

    @media screen and (max-width: 960px) {
        height: 830px;
        background-size: 1620px, 708px;
    }

    @media screen and (min-width: 2560px) {
        background-size: 100%;
    }
`

export const HeadingContainer = styled(Column)`
    display: flex;
`

export const Topline = styled.h1`
    display: flex;
    width: fit-content;
    height: fit-content;
    align-items: baseline;
    font-size: 32pt;
    font-family: Playfair Display, sans-serif;
    font-weight: 500;
    
    @media screen and (max-width: 960px) {
        font-size: 22pt;
    }
`;



export const GradE =  styled.div`
    display: flex;
    height: 100%;
    width: fit-content;
    margin: ${({ margin }) => (margin ? margin: '')};
    margin-left: ${({ margLeft }) => ( margLeft ? margLeft : '')};
    font-size: 36pt;
    font-family: Playfair Display, sans-serif;
    font-weight: 900;

    background: rgba(202,66,70);
    background: -moz-linear-gradient(135deg, rgba(202,66,70,1) 16.666%, rgba(225,101,65,1) 16.666%, rgba(225,101,65,1) 33.333%, rgba(241,143,67,1) 33.333%, rgba(241,143,67,1) 50%, rgba(139,152,98,1) 50%, rgba(139,152,98,1) 66.666%, rgba(71,96,152,1) 66.666%, rgba(71,96,152,1) 83.333%, rgba(167,72,155,1) 83.333%);
    background: -webkit-linear-gradient(135deg,rgba(202,66,70,1) 16.666%, rgba(225,101,65,1) 16.666%, rgba(225,101,65,1) 33.333%, rgba(241,143,67,1) 33.333%, rgba(241,143,67,1) 50%, rgba(139,152,98,1) 50%, rgba(139,152,98,1) 66.666%, rgba(71,96,152,1) 66.666%, rgba(71,96,152,1) 83.333%, rgba(167,72,155,1) 83.333%);
    background: linear-gradient(135deg,rgba(202,66,70,1) 16.666%, rgba(225,101,65,1) 16.666%, rgba(225,101,65,1) 33.333%, rgba(241,143,67,1) 33.333%, rgba(241,143,67,1) 50%, rgba(139,152,98,1) 50%, rgba(139,152,98,1) 66.666%, rgba(71,96,152,1) 66.666%, rgba(71,96,152,1) 83.333%, rgba(167,72,155,1) 83.333%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ca4246",endColorstr="#a7489b",GradientType=1);
    
    background-size: 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  
   
    &.vision{
    background: rgba(202,66,70);
    background: -moz-linear-gradient(45deg, rgba(202,66,70,1) 16.666%, rgba(225,101,65,1) 16.666%, rgba(225,101,65,1) 33.333%, rgba(241,143,67,1) 33.333%, rgba(241,143,67,1) 50%, rgba(139,152,98,1) 50%, rgba(139,152,98,1) 66.666%, rgba(71,96,152,1) 66.666%, rgba(71,96,152,1) 83.333%, rgba(167,72,155,1) 83.333%);
    background: -webkit-linear-gradient(45deg, rgba(202,66,70,1) 16.666%, rgba(225,101,65,1) 16.666%, rgba(225,101,65,1) 33.333%, rgba(241,143,67,1) 33.333%, rgba(241,143,67,1) 50%, rgba(139,152,98,1) 50%, rgba(139,152,98,1) 66.666%, rgba(71,96,152,1) 66.666%, rgba(71,96,152,1) 83.333%, rgba(167,72,155,1) 83.333%);
    background: linear-gradient(45deg, rgba(202,66,70,1) 16.666%, rgba(225,101,65,1) 16.666%, rgba(225,101,65,1) 33.333%, rgba(241,143,67,1) 33.333%, rgba(241,143,67,1) 50%, rgba(139,152,98,1) 50%, rgba(139,152,98,1) 66.666%, rgba(71,96,152,1) 66.666%, rgba(71,96,152,1) 83.333%, rgba(167,72,155,1) 83.333%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ca4246",endColorstr="#a7489b",GradientType=1);

    background-size: 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

        @media screen and (max-width: 960px) {
        font-size: 26pt;
    }
}`

export const Subtitle = styled.span`
    display: flex;
    height: fit-content;
    width: fit-content;
    align-items: baseline;
    font-size: 18pt;
    margin-top: -20px;
    font-family: Proxima nova, sans-serif;
    font-weight: lighter;

    @media screen and (max-width: 960px) {
        font-size: 14pt;
    }
`;

