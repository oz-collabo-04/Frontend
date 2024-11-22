import Checkbox from '@/components/Checkbox/Checkbox';
import '@/styles/ExpertProfileEditPage/service.scss';

type Service = {
  name: string;
  check: boolean;
};

type Props = {
  isChecked: Service[];
  setIsChecked: React.Dispatch<React.SetStateAction<Service[]>>;
};

export default function ServiceModal({ isChecked, setIsChecked }: Props) {
  return (
    <div className='serviceModal'>
      {isChecked &&
        isChecked.map((data: Service, i: number) => (
          <div key={i}>
            <Checkbox
              name='services'
              idFor={`service${i + 1}`}
              content={data.name}
              checked={data.check}
              onChange={() => {
                setIsChecked((prev) =>
                  prev.map((service: Service, index: number) =>
                    index === i ? { ...service, check: !service.check } : service
                  )
                );
              }}
              disabled={isChecked.filter((e) => e.name !== data.name).some((el) => el.check)}
            />
          </div>
        ))}
    </div>
  );
}
