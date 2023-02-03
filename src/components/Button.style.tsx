import styled from "styled-components";
import ButtonStyled from "./ButtonStyled";
import { insideTheme } from '../insideTheme';

type theme ={
    theme: typeof insideTheme;
}

export const Button = styled.button<{backgroundColor: string}>`
    /* ...colocar nossos estilos  */
    background-color: ${(prop) => prop.backgroundColor ? prop.backgroundColor : "pink"};
    width: 120px;
    height: ${({theme}: theme) => theme.size.xxl};

    &:active{
        background-color: pink;
    }
`;

export const Button2 = styled(ButtonStyled)`
    background-color: ${({theme}: theme) => theme.colors.primary};
    width: 120px;
    height: 60px;
`