import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';
import { MouseEventHandler } from 'react';

interface ArrowProps {
  extraClass?: string;
  onClick?: MouseEventHandler;
}
export function NextArrow({ extraClass, onClick }: ArrowProps) {
  return (
    <>
      <button type='button' onClick={onClick}>
        <ArrowRightCircle size='45' className={`customArrow right ${extraClass}`} />
      </button>
    </>
  );
}
export function PrevArrow({ extraClass, onClick }: ArrowProps) {
  return (
    <>
      <button type='button' onClick={onClick}>
        <ArrowLeftCircle size='45' className={`customArrow left ${extraClass}`} />
      </button>
    </>
  );
}
