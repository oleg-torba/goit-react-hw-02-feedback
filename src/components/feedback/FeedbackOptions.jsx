import PropTypes from 'prop-types';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      <div className="buttonItem">
        {options.map((item, index) => {
          return (
            <li className="buttonList" key={index}>
              <button className="button" name={item} onClick={onLeaveFeedback}>
                {item}
              </button>
            </li>
          );
        })}
      </div>
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
