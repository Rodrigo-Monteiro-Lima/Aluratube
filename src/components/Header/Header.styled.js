import styled from 'styled-components';

export const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1rem 2rem;
    gap: 1rem;
  }
`;

export const StyledBanner = styled.div`
  margin-top: 55px;
  background: url(${(props) => props.bg}) center;
  background-size: cover;
  min-height: 230px;
  height: 20vw;
`;
