import { TitleProps } from './type';

const XSmallTitle = ({ extraClass, title, fontSize = '1.8rem', fontWeight = '600' }: TitleProps) => {
  return (
    <h6 className={extraClass} style={{ fontSize, fontWeight }}>
      {title}
    </h6>
  );
};

export default XSmallTitle;
