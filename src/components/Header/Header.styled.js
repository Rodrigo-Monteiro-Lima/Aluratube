import styled from 'styled-components';

export const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.backgroundBase};
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    display: flex;
    align-items: center;
    width: 100vw;
    padding: 1rem 2rem;
    gap: 1rem;
    color: ${({ theme }) => theme.textColorBase};
  }
`;

export const StyledBanner = styled.div`
  margin-top: 55px;
  background: url(${(props) => props.bg}) center;
  background-size: cover;
  min-height: 230px;
  height: 20vw;
  width: 100vw;
`;
