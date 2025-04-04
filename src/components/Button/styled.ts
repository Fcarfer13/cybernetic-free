import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Theme } from "@styles/colors";
import { MediaQuery } from "@styles/mediaQuery";

export const ButtonWrapper = styled.div<{
    $align?: "left" | "center" | "right";
}>`
    display: flex;
    justify-content: ${({ $align }) => $align || "flex-start"};
    margin-top: 20px;
`;

export const ButtonLink = styled.a<{
    $variant: "primary" | "secondary";
}>`
    text-transform: uppercase;
    transition: all 0.3s ease;
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    z-index: 2;
    font-weight: 600;
    letter-spacing: 1px;
    overflow: hidden;

    ${({ $variant }) => $variant === "primary" && PrimaryVariant};
    ${({ $variant }) => $variant === "secondary" && SecondaryVariant};
`;

export const Button = ButtonLink.withComponent("button");

const PrimaryVariant = css`
    font-size: 14px;
    line-height: 1.2;
    padding: 10px 25px;
    margin-top: 15px;
    background: transparent;
    color: ${Theme.primary};
    border: 1px solid ${Theme.primary};
    border-radius: 4px;
    position: relative;
    overflow: hidden;
    z-index: 1;

    ${MediaQuery.max("lg")} {
        font-size: 13px;
        padding: 8px 20px;
        margin-top: 10px;
    }

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${Theme.primary};
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.3s ease;
        z-index: -1;
    }

    &:hover {
        color: ${Theme.secondary};
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

        &:before {
            transform: scaleX(1);
            transform-origin: left;
        }

        img {
            transform: translateX(3px);
            opacity: 1;
        }
    }

    img {
        margin-left: 6px;
        transition: all 0.3s ease;
        opacity: 0.8;
    }
`;

const SecondaryVariant = css`
    padding: 12px 30px;
    min-width: 120px;
    border: 2px solid ${Theme.secondary};
    font-size: 14px;
    line-height: 1.2;
    letter-spacing: 1.5px;
    font-weight: 600;
    border-radius: 6px;
    background: rgba(97, 97, 97, 0.9);
    color: ${Theme.primary};
    position: relative;
    overflow: hidden;
    z-index: 1;
    backdrop-filter: blur(5px);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    ${MediaQuery.max("lg")} {
        padding: 10px 25px;
        font-size: 13px;
    }

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${Theme.secondary};
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.3s ease;
        z-index: -1;
    }

    &:hover {
        color: ${Theme.primary};
        transform: translateY(-3px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        background: rgba(255, 255, 255, 1);

        &:before {
            transform: scaleX(1);
            transform-origin: left;
        }
    }
`;
