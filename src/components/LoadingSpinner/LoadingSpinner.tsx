import '@/styles/loadingspinner.scss';

interface LoadingSpinnerProps {
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ className = '' }) => {
  return (
    <div className={`loadingspinner ${className}`}>
    </div>
  );
};

export default LoadingSpinner;
