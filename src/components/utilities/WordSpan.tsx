type Props = {
  word: string;
};

const WordSpan = ({ word }: Props) => {
  const charArray = [...word];

  return (
    <>
      {charArray.map((char) => {
        return <span>{char}</span>;
      })}
    </>
  );
};

export default WordSpan;
