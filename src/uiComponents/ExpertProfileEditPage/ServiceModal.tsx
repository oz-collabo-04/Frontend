import Checkbox from '@/components/Checkbox/Checkbox';
import '@/styles/ExpertProfileEditPage/service.scss';

type Service = {
  map?(arg0: (service: Service, index: number) => Service): Service;
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
      <div>
        <Checkbox
          idFor='service1'
          content='결혼식 사회자'
          checked={isChecked[0].check}
          onChange={() => {
            setIsChecked((prev) =>
              prev.map((service: Service, index: number) =>
                index === 0 ? { ...service, check: !service.check } : service
              )
            );
          }}
          disabled={isChecked[1].check || isChecked[2].check || isChecked[3].check ? true : false}
        />
      </div>
      <div>
        <Checkbox
          idFor='service2'
          content='축가 가수'
          checked={isChecked[1].check}
          onChange={() => {
            setIsChecked((prev) =>
              prev.map((service: Service, index: number) =>
                index === 1 ? { ...service, check: !service.check } : service
              )
            );
          }}
          disabled={isChecked[0].check || isChecked[2].check || isChecked[3].check ? true : false}
        />
      </div>
      <div>
        <Checkbox
          idFor='service3'
          content='영상 촬영'
          checked={isChecked[2].check}
          onChange={() => {
            setIsChecked((prev) =>
              prev.map((service: Service, index: number) =>
                index === 2 ? { ...service, check: !service.check } : service
              )
            );
          }}
          disabled={isChecked[0].check || isChecked[1].check || isChecked[3].check ? true : false}
        />
      </div>
      <div>
        <Checkbox
          idFor='service4'
          content='스냅 촬영'
          checked={isChecked[3].check}
          onChange={() => {
            setIsChecked((prev) =>
              prev.map((service: Service, index: number) =>
                index === 3 ? { ...service, check: !service.check } : service
              )
            );
          }}
          disabled={isChecked[0].check || isChecked[1].check || isChecked[2].check ? true : false}
        />
      </div>
    </div>
  );
}
