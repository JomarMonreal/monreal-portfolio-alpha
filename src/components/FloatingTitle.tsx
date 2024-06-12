import React from 'react';

interface FloatingTitleProps {
  text: string;
  tag: keyof JSX.IntrinsicElements;
  className: string;
}

const FloatingTitle: React.FC<FloatingTitleProps> = ({ text, tag, className }) => {
  const title = Array.from(text);

  return (
    <div className="flex">
      {title.map((char, index) => {
        if (char === " ") {
          char = "\u2009";
        }
        const TagName = tag;
        return (
          <TagName
            key={index}
            className={`${className} animate-[float_10s_ease-in-out_infinite]`}
            style={{ animationDelay: `${index * 0.5}s` }}
          >
            {char}
          </TagName>
        );
      })}
    </div>
  );
};

export default FloatingTitle;
