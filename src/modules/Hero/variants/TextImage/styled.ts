import { Container } from "@components/Container";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Image } from "@static/images";
import { Theme } from "@styles/colors";
import { MediaQuery } from "@styles/mediaQuery";

export const TextImageStyled = styled.div`
    width: 100%;
    text-align: left;
    margin: 50px 0;
    align-items: center;
    background: ${Theme.primary};
    overflow: hidden;
    position: relative;
`;

export const TextImageContainer = styled(Container)<{
    $switchPlaces: boolean;
}>`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    align-items: center;
    position: relative;
    min-height: 500px;

    ${MediaQuery.max("lg")} {
        grid-template-columns: 1fr;
        text-align: center;
        min-height: auto;
        gap: 30px;
        
        > div:first-of-type {
            order: 0;
        }

        > figure {
            order: 1;
        }
    }

    ${({ $switchPlaces }) =>
        $switchPlaces &&
        css`
            > div:first-of-type {
                order: 2;
            }

            > figure {
                order: 1;
            }

            ${MediaQuery.max("lg")} {
                > div:first-of-type {
                    order: 0;
                }

                > figure {
                    order: 1;
                }
            }
        `}
`;

export const TextImageFigure = styled.figure`
    width: 100%;
    position: relative;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
    cursor: pointer;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

    &:hover {
        transform: scale(1.02);
        z-index: 2;
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);

        img {
            transform: scale(1.1);
        }
    }

    ${MediaQuery.max("lg")} {
        max-width: 600px;
        margin: 0 auto;
    }
`;

export const TextImage = styled(Image)`
    width: 100%;
    height: 100%;
    min-height: 450px;
    object-fit: cover;
    transition: all 0.5s ease-in-out;
    border-radius: 15px;

    ${MediaQuery.max("lg")} {
        min-height: 300px;
    }

    ${MediaQuery.max("sm")} {
        min-height: 250px;
    }
`;

export const TextImageContent = styled.div`
    position: relative;
    z-index: 1;
    background: rgba(255, 255, 255, 0.95);
    padding: 2.5rem;
    border-radius: 15px;
    backdrop-filter: blur(10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
    }

    ${MediaQuery.max("lg")} {
        max-width: 600px;
        margin: 0 auto;
        padding: 2rem;
    }

    ${MediaQuery.max("sm")} {
        padding: 1.5rem;
    }

    h1 {
        margin-bottom: 20px;
        font-size: 80px;
        line-height: 84px;
        letter-spacing: -1px;
        color: ${Theme.secondary};
        font-weight: 700;

        ${MediaQuery.max("xl")} {
            font-size: 60px;
            line-height: 64px;
        }

        ${MediaQuery.max("lg")} {
            font-size: 50px;
            line-height: 54px;
        }

        ${MediaQuery.max("sm")} {
            font-size: 40px;
            line-height: 44px;
            letter-spacing: -0.5px;
        }
    }

    p {
        color: ${Theme.secondary};
        font-size: 18px;
        line-height: 1.6;
        margin-bottom: 1.5rem;

        ${MediaQuery.min("lg")} {
            max-width: 400px;
        }

        ${MediaQuery.max("lg")} {
            font-size: 16px;
        }
    }
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    gap: 20px;

    ${MediaQuery.min("lg")} {
        gap: 30px;
    }

    ${MediaQuery.max("lg")} {
        flex-direction: column;
        align-items: center;
    }
`;
