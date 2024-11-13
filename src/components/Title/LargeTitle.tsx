import { TitleProps } from './type';

const LargeTitle = ({ extraClass, title, fontSize = '2.8rem', fontWeight = '700' }: TitleProps) => {
  return (
    <h6 className={extraClass} style={{ fontSize, fontWeight }}>
      {title}
    </h6>
  );
};

export default LargeTitle;
