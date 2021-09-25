import styles from "styles/Button.module.scss";
import PropTypes from "prop-types";
import Link from "next/link";

const Button = ({
  startIcon,
  endIcon,
  label,
  variant,
  href,
  onClick,
  fullWidth,
  fullHeight,
  rounded,
  type,
  disabled,
}) => {
  const classes =
    `${styles["btn"]} ${styles[variant]}` +
    (fullWidth ? ` ${styles["fullWidth"]}` : "") +
    (fullHeight ? ` ${styles["fullHeight"]}` : "") +
    (rounded ? ` ${styles["rounded"]}` : "") +
    (disabled ? ` ${styles["disabled"]}` : "");
  return href ? (
    <Link href={href}>
      <a className={classes}>
        {startIcon}
        {label && <span>{label}</span>}
        {endIcon}
      </a>
    </Link>
  ) : (
    <button className={classes} onClick={onClick} type={type}>
      {startIcon}
      {label && <span>{label}</span>}
      {endIcon}
    </button>
  );
};

Button.propTypes = {
  startIcon: PropTypes.element,
  endIcon: PropTypes.element,
  label: PropTypes.string,
  variant: PropTypes.oneOf(["contained", "outlined", "text"]),
  href: PropTypes.string,
  onClick: PropTypes.func,
  fullWidth: PropTypes.bool,
  fullHeight: PropTypes.bool,
  rounded: PropTypes.bool,
  type: PropTypes.oneOf(["submit", "button", "reset"]),
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  variant: "text",
  fullWidth: false,
  fullHeight: false,
  rounded: false,
  onClick: () => {},
  type: "button",
  disabled: false,
};

export default Button;
