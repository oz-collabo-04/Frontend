import { TitleProps } from './type';

const XLargeTitle = ({ extraClass, title, fontSize = '3.2rem', fontWeight = '700' }: TitleProps) => {
  return (
    <h6 className={extraClass} style={{ fontSize, fontWeight }}>
      {title}
    </h6>
  );
};

export default XLargeTitle;
