import '@/styles/loadingspinner.scss';

interface LoadingSpinnerProps {
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ className = '' }) => {
  return (
    <div className={`loadingSpinner ${className}`}>
      <div className='spinner'></div>
    </div>
  );
};
export default LoadingSpinner;
