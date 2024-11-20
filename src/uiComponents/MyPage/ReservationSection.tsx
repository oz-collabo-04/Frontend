import { Link } from 'react-router-dom';

export function ReservationSection({ className, title, linkTo }: { className: string; title: string; linkTo: string }) {
  return (
    <Link to={linkTo}>
      <div className={className}>
        <div>{title}</div>
        <button>{'>'}</button>
      </div>
    </Link>
  );
}
