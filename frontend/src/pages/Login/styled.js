import styled from 'styled-components';
import media from 'styled-media-query';

export const Section = styled.section`
    margin-top: 8%;
    margin-bottom: 10%;
    display: flex;
    flex-wrap: wrap;
    max-width: 100vw;
    align-items: center;
    justify-content: center;

    ${media.lessThan('medium')`
        margin-top: 15%;
        margin-bottom: 15%;
    `}
`;

export const Form = styled.form`
    background-color: var(--secondary);
    width: 40%;
    height: 40%;
    padding: 36px 48px 31px;
    border-radius: 10px;

    ${media.between("medium", "large")`
        width: 50%;
        height: 50%;
    `}

    ${media.between("small", "medium")`
        width: 70%;
        height: 70%;
    `}

    ${media.lessThan('small')`
        width: 80%;
        padding: 20px 28px 18px;
    `}
`;

export const Title = styled.h1`
    color: var(--white);
    font-size: 36px;

    ${media.lessThan('medium')`
        font-size: 24px;
    `}
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100px;
    margin-top: 20px;
    margin-bottom: 25px;
`;

export const Field = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding-left: 16px;
    border-radius: 25px;
    background: var(--quaternary);

    & ~ & {
        margin-top: 14px;
    }
`;

export const Input = styled.input`
    margin-left: 10px;
    width: 100%;
    background-color: transparent;
    height: 50px;
    display: flex;
    align-items: center;
    color: white;
    font-size: 16px;
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 18px;
    margin-bottom: 35px;

    ${media.lessThan('small')`
        flex-direction: column-reverse;
    `}
`;

export const ButtonBox = styled.div`
    display: flex;
    align-items: center;

    ${media.lessThan('small')`
        justify-content: space-between;
    `}
`;

export const SocialButton = styled.button`
    cursor: pointer;
    height: 2.5em;
    width: 4em;
    border-radius: 30px;
    &:first-child {
        margin-right: 12px;
    }

    &:hover{
        background: var(--yellow);
    }

    ${media.lessThan('small')`
        width: 45%;
        margin: 0;
    `}
`;

export const Button = styled.button`
    cursor: pointer;
    height: 2.5em;
    width: 7em;
    border-radius: 50px;
    transition: .25s;
    font-size: 18px;

    ${media.lessThan('small')`
        width: 45%;
        margin: 0 0 10px 0;
    `}

    &:first-child {
        margin-right: 21px;
    }

    &.cadastro {
        background-color: transparent;
        border: 2px solid var(--quaternary);
        color: var(--white);

        &:hover{
            background-color: var(--quaternary);
        }
    }

    &.login {
        background-color: var(--purple);
        color: var(--white);

        &:hover{
            background-color: var(--dark-purple);
        }
    }
`;

export const Problem = styled.span`
    display: block;
    margin-top: 20px;
    color: white;
    font-size: 14px;
    text-align: center;
`;