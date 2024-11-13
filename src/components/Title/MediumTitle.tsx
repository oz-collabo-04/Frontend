import { TitleProps } from './type';

const MediumTitle = ({ extraClass, title, fontSize = '2.4rem', fontWeight = '700' }: TitleProps) => {
  return (
    <h6 className={extraClass} style={{ fontSize, fontWeight }}>
      {title}
    </h6>
  );
};

export default MediumTitle;
