interface CopyButtonProps {
  code: string;
}

const CopyButton = ({ code }: CopyButtonProps) => {
  const handleCopy = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        alert("복사되었습니다!");
      })
      .catch((error) => {
        alert("복사에 실패했습니다.");
        console.error(error);
      });
  };

  return (
    <button onClick={handleCopy} type="button" className="copyBtn">
      복사
    </button>
  );
};

export default CopyButton;
