import React, { useState } from 'react';
import { StyledRegisterVideo } from './RegisterVideo.styled';
import useForm from '../hooks/useForm';

const RegisterVideo = ({ theme }) => {
  const { values, handleImage, handleChange, clearForm } = useForm({
    initialValues: { title: '', url: '', img: '' },
  });
  const { img, title, url } = values;
  const [showForm, setShowForm] = useState(false);
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
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setShowForm((prev) => !prev);
            clearForm();
          }}
        >
          <div>
            <button
              type="button"
              className="close-modal"
              onClick={() => setShowForm((prev) => !prev)}
            >
              X
            </button>
            <input
              type="text"
              name="title"
              placeholder="Video Title"
              value={title}
              onChange={handleChange}
            />
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
              name="url"
              value={url}
              onChange={handleChange}
            />
            <button type="button" className="view-thumb" onClick={handleImage}>
              Thumbnail Preview
            </button>
            <button type="submit">Send</button>
            {img ? (
              <img
                src={`https://i.ytimg.com/vi/${img}/hqdefault.jpg`}
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
