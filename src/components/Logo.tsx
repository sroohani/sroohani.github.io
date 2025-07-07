type LogoProps = {
  logo?: string;
  title?: string;
};

const Logo = ({ logo, title }: LogoProps) => {
  return (
    <div className="logo">
      <img className="logo__image" src={logo} />
      <span className="logo__title">{title}</span>
    </div>
  );
};

export default Logo;
