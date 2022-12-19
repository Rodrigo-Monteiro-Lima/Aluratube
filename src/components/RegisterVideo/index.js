import React, { useContext, useState } from 'react';
import { StyledRegisterVideo } from './RegisterVideo.styled';

const RegisterVideo = ({ theme }) => {
  const [showForm, setShowForm] = useState(false);
  const [url, setUrl] = useState(false);
  const [link, setLink] = useState('');
  return (
    <StyledRegisterVideo theme={theme}>
      <button
        type="button"
        className="add-video"
        onClick={() => setShowForm((prev) => !prev)}
      >
        +
      </button>
      {showForm && (
        <form>
          <div>
            <button
              type="button"
              className="close-modal"
              onClick={() => setShowForm((prev) => !prev)}
            >
              X
            </button>
            <input type="text" placeholder="Video Title" />
            <select name="playlist" required>
              <option value="" disabled>
                Playlists
              </option>
              <option value="games">Games</option>
              <option value="music">Music</option>
              <option value="front-end">Front-End</option>
              <option value="back-end">Back-end</option>
            </select>
            <input
              type="text"
              placeholder="Url"
              value={link}
              onChange={({ target }) => setLink(target.value)}
            />
            <button
              type="button"
              className="view-thumb"
              onClick={() => setUrl(link.split('v=')[1])}
            >
              Thumbnail Preview
            </button>
            <button type="submit">Send</button>
            {url ? (
              <img
                src={`https://i.ytimg.com/vi/${url}/hqdefault.jpg`}
                alt="thumb"
              />
            ) : (
              <img
                src="https://t.ctcdn.com.br/8Q_WlNjbkUhra-4MBBWOIzAo0g0=/512x288/smart/filters:format(webp)/i533291.png"
                alt="default thumb"
              />
            )}
          </div>
        </form>
      )}
    </StyledRegisterVideo>
  );
};

export default RegisterVideo;
