import { TitleProps } from './type';

const SmallTitle = ({ extraClass, title, fontSize = '2rem', fontWeight = '600' }: TitleProps) => {
  return (
    <h6 className={extraClass} style={{ fontSize, fontWeight }}>
      {title}
    </h6>
  );
};

export default SmallTitle;
