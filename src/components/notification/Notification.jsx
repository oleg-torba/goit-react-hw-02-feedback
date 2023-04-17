import PropTypes from 'prop-types';

export function Notification({ message }) {
  <span>{message}</span>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
