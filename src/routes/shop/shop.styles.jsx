import styled from "styled-components";

export const ProductsContainer = styled.div`
  /* display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 50px; */

  @media only screen and (max-width: 600px) {
    & {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
