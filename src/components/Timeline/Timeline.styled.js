import styled from 'styled-components';

export const StyledTimeline = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  overflow: hidden;

  /* .carousel {
    cursor: grab;
    overflow: hidden;
  }

  .inner-carousel {
    gap: 25px;
  } */
  /* background-color: ${({ theme }) => theme.backgroundBase}; */
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
    /* color: ${({ theme }) => theme.textColorBase}; */
  }
  img {
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 210px;
    height: auto;
    user-select: none;
  }
  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px 0 16px 16px;
    div {
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px, 1fr);
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      ::-webkit-scrollbar {
        width: 4px;
      }
      /* div {
        position: relative;
      } */
      a {
        scroll-snap-align: start;
        span {
          padding-top: 8px;
          display: block;
          padding-right: 24px;
          color: ${({ theme }) => theme.textColorBase || '#222222'};
        }
      }
      /* button {
        position: absolute;
        top: 0;
        right: 0;
        color: #ffffff;
        background-color: red;
        width: 24px;
        height: 24px;
        border: none;
      } */
    }
  }
`;
