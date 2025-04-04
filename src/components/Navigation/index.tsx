import * as S from "./styled";
import { useState, type FC } from "react";
import React from "react";
import { Hamburger } from "./components/Hamburger";

export const Navigation: FC = () => {
    // to update values for all components, keep the state here
    const [isOpen, setIsOpen] = useState(false);

    return (
        <S.NavigationStyled>
            <S.NavigationListWrapper $isOpen={isOpen}>
                <S.NavigationList>
                    <li>
                        <a href="/">PRINCIPAL</a>
                    </li>
                    <li>
                        <a href="/infinite">HOSPEDAJES</a>
                    </li>
                    <li>
                        <a href="/contact">ACTIVIDADES DEPORTIVAS</a>
                    </li>
                    <li>
                        <a href="/tourims">TURISMO</a>
                    </li>
                    <li>
                        <a href="/cultural">AGENDA CULTURAL</a>
                    </li>
                    <li>
                      <a href="../auth/login">LOGIN</a>
                    </li>
                    <li>
                      <a href="../auth/register">REGISTRARSE</a>
                    </li>
                </S.NavigationList>
            </S.NavigationListWrapper>
            <Hamburger
                state={{
                    open: isOpen,
                    setOpen: setIsOpen,
                }}
            />
        </S.NavigationStyled>
    );
};