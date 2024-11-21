import { fetchServiceLocation } from '@/api/services';
import Select from '@/components/Select/Select';
import '@/styles/ExpertProfileEditPage/location.scss';
import { useEffect, useRef, useState } from 'react';

type Props = {
  select1: string | null;
  setSelect1: React.Dispatch<React.SetStateAction<string | null>>;
  select2: string | null;
  setSelect2: React.Dispatch<React.SetStateAction<string | null>>;
  select2DetailData: string | null;
  setSelect2DetailData: React.Dispatch<React.SetStateAction<string | null>>;
};
interface LocationDummy {
  [key: string]: string[];
}

export default function LocationModal({
  select1,
  setSelect1,
  select2,
  setSelect2,
  select2DetailData,
  setSelect2DetailData,
}: Props) {
  const [locationData, setLocationData] = useState<LocationDummy | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const select1Ref = useRef<HTMLSelectElement>(null);
  const select2Ref = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: LocationDummy[] = await fetchServiceLocation();
        data!.flatMap((e) => setLocationData(e));
        return data;
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const optionList = (name: string) => {
    const option =
      locationData &&
      Object.entries(locationData!)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .filter(([_, value]) => {
          if (name === '특별/광역시') {
            return value.length === 0;
          } else if (name === '도') {
            return value.length > 0;
          }
        })
        .map(([key]) => key);

    return option;
  };

  return (
    <div className='locationModal'>
      <div className='custom-select'>
        <Select
          nameRef={select1Ref}
          width='12rem'
          defaultValue='특별/광역시'
          options={optionList('특별/광역시') ?? []}
          onChange={(e) => {
            setSelect1(e.target.value);
            setSelect2(null);
            setIsDetailOpen(false);
            select2Ref!.current!.selectedIndex = 0;
          }}
        />
      </div>

      <div className='custom-select'>
        <Select
          nameRef={select2Ref}
          width='12rem'
          defaultValue='도'
          options={optionList('도') ?? []}
          onChange={(e) => {
            setSelect2(e.target.value);
            setSelect1(null);
            setIsDetailOpen(true);
            select1Ref!.current!.selectedIndex = 0;
          }}
        />
      </div>

      {isDetailOpen && (
        <div className='detailLocation'>
          {locationData &&
            select2 &&
            Object.entries(locationData!)
              .find(([key, value]) => value.length > 0 && key === select2)?.[1]
              .map((el, i) => (
                <p onClick={() => setSelect2DetailData(el)} key={i}>
                  {el}
                </p>
              ))}
        </div>
      )}

      {(select1 || select2) && (
        <div className='showLocation'>선택하신 지역: {select1 ?? (select2 && select2 + ' ' + select2DetailData)}</div>
      )}
    </div>
  );
}
