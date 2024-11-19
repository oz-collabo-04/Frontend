import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';
import { MouseEventHandler } from 'react';

interface ArrowProps {
  extraClass?: string;
  onClick?: MouseEventHandler;
}
export function NextArrow({ extraClass, onClick }: ArrowProps) {
  return (
    <>
      <button type='button' onClick={onClick} className={`customArrow right ${extraClass}`}>
        <ArrowRightCircle size='40' />
      </button>
    </>
  );
}
export function PrevArrow({ extraClass, onClick }: ArrowProps) {
  return (
    <>
      <button type='button' onClick={onClick} className={`customArrow left ${extraClass}`}>
        <ArrowLeftCircle size='40' />
      </button>
    </>
  );
}
