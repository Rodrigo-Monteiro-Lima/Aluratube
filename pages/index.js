import config from '../config.json';
import styled from 'styled-components';
import { CSSReset } from '../src/components/CSSReset';
import Menu from '../src/components/Menu';
import { StyledTimeline } from '../src/components/Timeline';

function HomePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      <CSSReset />
      <Menu />
      <Header />
      <Timeline playlists={config.playlists} />
    </div>
  );
}

export default HomePage;

const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    margin-top: 50px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1rem 2rem;
    gap: 1rem;
  }
`;
const Header = () => {
  return (
    <StyledHeader>
      {/* <img src="" alt="banner" /> */}
      <section className="user-info">
        <img src={config.github} alt="profile pic" />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
};

const Timeline = ({ playlists }) => {
  const playlistsNames = Object.keys(playlists);
  return (
    <StyledTimeline>
      {playlistsNames.map((playlistName) => {
        const videos = playlists[playlistName];
        console.log(videos);
        return (
          <section>
            <h2>{playlistName}</h2>
            <div>
              {videos.map((video) => (
                <a href={video.url}>
                  <img src={video.thumb} alt="thumb" />
                  <span>{video.title}</span>
                </a>
              ))}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
};
