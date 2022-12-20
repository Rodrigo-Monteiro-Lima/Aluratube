import React, { useState } from 'react';
import { StyledRegisterVideo } from './RegisterVideo.styled';
import useForm from '../hooks/useForm';

const RegisterVideo = ({ theme, supabase }) => {
  const { values, handleImage, handleChange, clearForm } = useForm({
    initialValues: { title: '', url: '', img: '', playlist: '' },
  });
  const { img, title, url, playlist } = values;
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
            supabase.from('video').insert({
              title,
              url,
              thumb: `https://img.youtube.com/vi/${img}/hqdefault.jpg`,
              playlist,
            });
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
              required
            />
            <select
              name="playlist"
              required
              onChange={handleChange}
              value={playlist}
            >
              <option value="" disabled selected>
                Playlist
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
              required
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
