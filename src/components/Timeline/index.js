import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { StyledTimeline } from './Timeline.styled';
import PropTypes from 'prop-types';

const Timeline = ({ playlists }) => {
  const { search, mode } = useContext(AppContext);
  const playlistsNames = Object.keys(playlists);
  return (
    <StyledTimeline theme={mode}>
      {playlistsNames.map((playlistName) => {
        const videos = playlists[playlistName];
        return (
          <section key={playlistName}>
            <h2>{playlistName}</h2>
            <div>
              {videos
                .filter(({ title }) =>
                  title.toLowerCase().includes(search.toLowerCase())
                )
                .map((video) => (
                  <a href={video.url} key={video.url}>
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

Timeline.propTypes = {
  playlists: PropTypes.shape({}).isRequired,
};

export default Timeline;
