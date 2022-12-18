import { useCallback, useEffect, useRef, useState } from 'react';
import { StyledTimeline } from './Timeline.styled';
import { motion } from 'framer-motion';

const Timeline = ({ playlists }) => {
  const [key, setContainerKey] = useState(1);
  const [width, setWidth] = useState(0);
  const id = 1;
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - 500);
  }, []);

  const handleLeftConstraint = useCallback(() => {
    const el = document.getElementById(id);
    if (el) {
      setWidth(el.scrollWidth - el.offsetWidth);
    }
  }, [id]);

  useEffect(() => {
    const handleResize = () => {
      setContainerKey((prev) => prev + 1);
      handleLeftConstraint();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleLeftConstraint]);
  const playlistsNames = Object.keys(playlists);
  return (
    <StyledTimeline>
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: 'grabbing' }}
        key={key}
        id={id}
      >
        {playlistsNames.map((playlistName) => {
          const videos = playlists[playlistName];
          return (
            <section key={playlistName}>
              <h2>{playlistName}</h2>
              <motion.div
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                className="inner-carousel"
              >
                {videos.map((video) => (
                  <motion.div className="item">
                    <a
                      href={video.url}
                      key={video.url}
                      draggable={false}
                      target="_blank"
                    >
                      <img src={video.thumb} alt="thumb" draggable={false} />
                      <span>{video.title}</span>
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            </section>
          );
        })}
      </motion.div>
    </StyledTimeline>
  );
};

export default Timeline;
