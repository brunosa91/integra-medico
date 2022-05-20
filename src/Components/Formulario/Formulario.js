import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  margin: 15px;
  > fieldset {
    display: flex;
    flex-direction: column;
    border: none;
    margin-top: 20px;
    legend {
      text-transform: uppercase;
    }
    label {
      margin-left: 10px;
    }
    div {
      margin-top: 10px;
    }
  }
`;
