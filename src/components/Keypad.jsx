const Keypad = ({ usedKeys }) => {
  const letters = [
    { key: "a" },
    { key: "b" },
    { key: "c" },
    { key: "d" },
    { key: "e" },
    { key: "f" },
    { key: "g" },
    { key: "h" },
    { key: "i" },
    { key: "j" },
    { key: "k" },
    { key: "l" },
    { key: "m" },
    { key: "n" },
    { key: "o" },
    { key: "p" },
    { key: "q" },
    { key: "r" },
    { key: "s" },
    { key: "t" },
    { key: "u" },
    { key: "v" },
    { key: "w" },
    { key: "x" },
    { key: "y" },
    { key: "z" },
  ];

  return (
    <div className="keypad">
      {letters.map((l, i) => {
        const color = usedKeys[l.key];
        return (
          <div key={i} className={color}>
            {l.key}
          </div>
        );
      })}
    </div>
  );
};

export default Keypad;
