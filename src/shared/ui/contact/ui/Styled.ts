import styled from "styled-components";
import {Button, Input} from "antd";

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: var(--sectionColor, #f5f5f5);
`;

const StyledForm = styled.form`
    background: white;
    padding: 32px;
    border-radius: 16px;
    box-shadow: var(--shadow);
    width: 100%;
    max-width: 300px;
`;

const StyledMain = styled.main`
    margin: 0 auto;
    padding: 32px 16px;
`;

const Title = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 24px;
    color: var(--headerColor);
`;

const FormField = styled.div`
    margin-bottom: 24px;
`;

const Label = styled.label`
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: var(--headerColor);
`;

const ErrorMessage = styled.span`
    color: #ff4d4f;
    font-size: 0.875rem;
    margin-top: 4px;
    display: block;
`;

const SuccessMessage = styled.div`
    text-align: center;
    font-size: 1.25rem;
    color: var(--headerColor);
`;

const StyledInput = styled(Input)`
    &:hover {
        border-color: var(--inputColor);
    }

    &:focus {
        border-color: var(--inputHoverColor);
        box-shadow: var(--shadow);
    }
`;

const StyledTextArea = styled(Input.TextArea)`
    &:hover {
        border-color: var(--inputColor);
    }

    &:focus {
        border-color: var(--inputHoverColor);;
        box-shadow: var(--shadow);
    }
`;

const StyledSubmitButton = styled(Button)`
    background-color: var(--headerColor);
    color: var(--background) !important;

    &:hover {
        background-color: var(--inputColor) !important;
        box-shadow: var(--shadow) !important;
    }

    &:focus,
    &:active {
        background-color: var(--inputHoverColor) !important;
        box-shadow: var(--shadow) !important;
    }
`

export {
    FormContainer,
    StyledForm,
    StyledMain,
    Title,
    FormField,
    Label,
    ErrorMessage,
    SuccessMessage, StyledInput, StyledTextArea, StyledSubmitButton,

}