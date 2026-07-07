import { Link } from "react-router-dom";

const variants = {
  primary: "bg-blue-700 text-white hover:bg-blue-800 shadow-lg",

  secondary:
    "bg-blue-700 text-white hover:bg-blue-400 hover:text-black shadow-lg",

  outline:
    "border-2 border-blue-700 bg-transparent text-blue-700 hover:bg-blue-700 hover:text-white",

  lightBlue: "bg-blue-400 text-blue-900 hover:bg-blue-300",

  white:
    "border-1 border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white hover:text-blue-900",
};

const Button = ({
  children,
  to,
  href,
  icon,
  variant = "primary",
  className = "",
  ...props
}) => {
  const classes = `
    inline-flex
    items-center
    justify-center
    gap-2
    rounded-full
    px-8
    py-4
    font-semibold
    transition-all
    duration-300
    hover:-translate-y-1
    ${variants[variant]}
    ${className}
  `;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
        {icon}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
      {icon}
    </button>
  );
};

export default Button;
