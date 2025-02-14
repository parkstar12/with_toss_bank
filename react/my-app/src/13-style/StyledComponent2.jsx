import styled from "styled-components";

const Button = styled.button`
  // css문법 사용
  color: grey;
  background-color: yellow;
  border: 2px solid green;
`;

const RoundedButton = styled(Button)`
  border-radius: 16px;
`;

function StyledComponenet2() {
  return (
    <div>
      <Button>Normal</Button>
      <RoundedButton>Rounded</RoundedButton>
    </div>
  );
}

export default StyledComponenet2;
