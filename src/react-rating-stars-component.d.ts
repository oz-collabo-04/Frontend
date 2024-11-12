declare module 'react-rating-stars-component' {
    import * as React from 'react';
  
    interface RatingProps {
      count?: number;
      value?: number;
      onChange?: (newRating: number) => void;
      size?: number;
      isHalf?: boolean;
      edit?: boolean;
      activeColor?: string;
      color?: string;
      emptyIcon?: React.ReactNode;
      halfIcon?: React.ReactNode;
      filledIcon?: React.ReactNode;
    }
  
    const Rating: React.FC<RatingProps>;
  
    export default Rating;
  }
  