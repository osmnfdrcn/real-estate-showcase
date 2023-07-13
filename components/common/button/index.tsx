type Props = {
  text: string;
  variant: "primary" | "secondary";
  onClick: () => void;
};

const Button = ({ text, onClick, variant }: Props) => {
  const getButtonStyle = (variant: "primary" | "secondary") => {
    const style = {
      primary:
        "bg-slate-900 text-white border  border-white hover:border-yellow-400  hover:text-yellow-400 ",
      secondary: "bg-blue-600 text-white hover:bg-blue-800",
    };
    return style[variant];
  };
  const style = getButtonStyle(variant);
  return (
    <button
      className={`${style} w-full px-4 py-2.5 rounded-md  font-light text-sm tracking-widest transition duration-300 cursor-pointer`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
