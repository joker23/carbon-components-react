import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const DropdownItem = ({ className, value, itemText, onClick, ...other }) => {
  const dropdownItemClasses = classNames({
    'bx--dropdown-item': true,
    [className]: className,
  });

  const handleClick = () => {
    const info = {
      value,
      itemText,
    };
    onClick(info);
  };

  return (
    <li
      {...other}
      value={value}
      className={dropdownItemClasses}
      onClick={handleClick}>
      <a
        href="#"
        onClick={/* istanbul ignore next */ evt => evt.preventDefault()}
        className="bx--dropdown-link">
        {itemText}
      </a>
    </li>
  );
};

DropdownItem.propTypes = {
  value: PropTypes.string.isRequired,
  itemText: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

DropdownItem.defaultProps = {
  onClick: /* istanbul ignore next */ () => {},
};

export default DropdownItem;
