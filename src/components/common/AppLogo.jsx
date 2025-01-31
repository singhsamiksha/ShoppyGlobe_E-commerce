/* eslint-disable max-len */
import PropTypes from 'prop-types';

const AppLogo = ({ width = 100, height = 50, color = 'primary.main' }) => {
  const fill = (color === 'primary.main' ? 'var(--primary-bg)' : null)
        ||  (color === 'primary.text' ? 'var(--primary-text)' : null)
        || 'var(--primary-bg)';

  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 187 44.36' width={width} height={height}>
      <title>Shop Pay logo - Brandlogos.net</title>
      <path d='M338.52,376c-1.5-3.15-4.35-5.19-8.65-5.19a8.61,8.61,0,0,0-6.76,3.48l-.16.19V362.09a.27.27,0,0,0-.27-.27h-6.07a.27.27,0,0,0-.26.27v35.46a.26.26,0,0,0,.26.26h6.5a.27.27,0,0,0,.27-.26V382.43a4.77,4.77,0,0,1,5.09-5c3.43,0,4.29,2.82,4.29,5.7v14.44a.26.26,0,0,0,.26.26h6.49a.27.27,0,0,0,.27-.26v-15.3a11.36,11.36,0,0,0-.07-1.54A13.53,13.53,0,0,0,338.52,376Z'
        transform='translate(-290.5 -361.82)'
        style={{ fill }}
      />
      <path d='M306,381.23s-3.31-.78-4.53-1.09-3.35-1-3.35-2.59,1.72-2.13,3.46-2.13,3.68.42,3.83,2.36a.28.28,0,0,0,.28.25l6.41,0,.11,0,.09-.06a.27.27,0,0,0,.07-.21c-.4-6.19-5.83-8.4-10.84-8.4-5.94,0-10.28,3.92-10.28,8.24,0,3.15.89,6.11,7.9,8.17,1.23.36,2.9.82,4.36,1.23,1.75.49,2.7,1.23,2.7,2.39,0,1.35-2,2.29-3.88,2.29-2.79,0-4.77-1-4.93-2.89a.28.28,0,0,0-.28-.24l-6.4,0-.11,0-.09.06a.28.28,0,0,0-.08.2c.29,5.84,5.94,9,11.2,9,7.84,0,11.38-4.41,11.38-8.54C313.08,387.33,312.64,382.91,306,381.23Z'
        transform='translate(-290.5 -361.82)'
        style={{ fill }}
      />
      <path d='M388.52,370.77a10.13,10.13,0,0,0-7.74,4V371a.26.26,0,0,0-.26-.26h-6.08a.26.26,0,0,0-.26.26V405.8a.26.26,0,0,0,.26.26h6.51a.26.26,0,0,0,.26-.26V394.37h.1a9.32,9.32,0,0,0,7.55,3.47c6.94,0,12.73-5.76,12.73-13.54A13.24,13.24,0,0,0,388.52,370.77Zm-.6,20.44a6.9,6.9,0,1,1,6.73-6.91,6.81,6.81,0,0,1-6.73,6.91Z'
        transform='translate(-290.5 -361.82)'
        style={{ fill }}
      />
      <path d='M354.91,369.24A18.11,18.11,0,0,0,343.39,373l-.07,0a.6.6,0,0,0-.18.8l2.4,4.13a.61.61,0,0,0,.43.29.59.59,0,0,0,.49-.13l.19-.16c1.25-1,3.25-2.45,8.1-2.83a8.57,8.57,0,0,1,6.75,2.1,10.32,10.32,0,0,1,3,7.53c0,5.47-3.22,8.91-8.4,9-4.27,0-7.13-2.25-7.13-5.53a4.69,4.69,0,0,1,2.33-4,.6.6,0,0,0,.18-.76l-2.15-4.07a.63.63,0,0,0-.38-.3.61.61,0,0,0-.49.06,9.73,9.73,0,0,0-5.23,9.1c.2,6.42,5.53,11.32,12.47,11.52h.82A14.25,14.25,0,0,0,370.74,385C370.74,377.4,365.19,369.24,354.91,369.24Z'
        transform='translate(-290.5 -361.82)'
        style={{ fill }}
      />
      <path d='M427.23,373.16H423.1a.37.37,0,0,0-.37.37v8.67a.37.37,0,0,0,.37.36h4.13a4.71,4.71,0,0,0,0-9.4Z'
        transform='translate(-290.5 -361.82)'
        style={{ fill }}
      />
      <path d='M439.93,388.51c0,1.26,1.06,2,2.91,2,2.52,0,4-1.36,4-3.78V386l-3.77.2C441.09,386.29,439.93,387.11,439.93,388.51Z'
        transform='translate(-290.5 -361.82)'
        style={{ fill }}
      />
      <path d='M470.54,361.9H415a6.94,6.94,0,0,0-6.93,6.94v30.4a6.94,6.94,0,0,0,6.93,6.94h55.54a6.94,6.94,0,0,0,7-6.93v-30.4a6.94,6.94,0,0,0-7-6.95ZM427.44,386h-4.37a.37.37,0,0,0-.37.37v6.22a.37.37,0,0,1-.37.37h-3.07a.37.37,0,0,1-.37-.37V370.13a.37.37,0,0,1,.37-.37h8.18a8.11,8.11,0,0,1,0,16.22Zm23,6.58a.38.38,0,0,1,0,.14.37.37,0,0,1-.2.2l-.14,0h-2.9l-.14,0a.37.37,0,0,1-.2-.2.36.36,0,0,1,0-.14v-.67a.27.27,0,0,0-.17-.28.27.27,0,0,0-.32.09,5.81,5.81,0,0,1-4.52,1.63c-3.31,0-5.5-1.72-5.5-4.7a4.36,4.36,0,0,1,1.82-3.74c1.19-.9,3-1.36,5.79-1.47l2.91-.1v-.85c0-1.72-1.16-2.45-3-2.45s-3,.66-3.3,1.73a.35.35,0,0,1-.13.19.35.35,0,0,1-.22.07H437.3a.36.36,0,0,1-.37-.42c.43-2.55,2.54-4.48,7-4.48,4.77,0,6.49,2.22,6.49,6.45ZM468.55,378l-6.46,17.24c-1.47,4-4,5-6.86,5a5.46,5.46,0,0,1-1.57-.19.38.38,0,0,1-.28-.36v-2.62a.38.38,0,0,1,0-.16.37.37,0,0,1,.41-.21,7.27,7.27,0,0,0,1.35.13,3.48,3.48,0,0,0,3.51-2.48l.19-.6a.36.36,0,0,0,0-.25l-6-15.52a.36.36,0,0,1,0-.17.38.38,0,0,1,.07-.16.36.36,0,0,1,.13-.11.37.37,0,0,1,.17,0h2.94a.38.38,0,0,1,.35.24l4.1,11a.38.38,0,0,0,.71,0l3.56-10.92a.37.37,0,0,1,.35-.25h3a.38.38,0,0,1,.3.15.38.38,0,0,1,.07.16.37.37,0,0,1,0,.17Z'
        transform='translate(-290.5 -361.82)'
        style={{ fill }}
      />
    </svg>
  );
};

AppLogo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

export default AppLogo;
