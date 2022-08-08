import styled from "styled-components";

export default function Anchor() {
  return <Redirection></Redirection>;
}

const Redirection = styled(Link)`
  margin-top: 20px;
  font-size: 1em;
  color: #52b6ff;
  text-decoration: underline;
`;
