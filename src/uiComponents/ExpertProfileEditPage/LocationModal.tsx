import { fetchServiceLocation } from '@/api/services';
import Select from '@/components/Select/Select';
import '@/styles/ExpertProfileEditPage/location.scss';
import { useEffect, useState } from 'react';

type Props = {
  select: string | null;
  setSelect: React.Dispatch<React.SetStateAction<string | null>>;
  selectDetailData: string | null;
  setSelectDetailData: React.Dispatch<React.SetStateAction<string | null>>;
};
interface LocationDummy {
  [key: string]: { [key: string]: string }[];
}

export default function LocationModal({ select, setSelect, selectDetailData, setSelectDetailData }: Props) {
  const [locationData, setLocationData] = useState<LocationDummy | []>([]);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

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

  const optionListDetail = () => {
    if (!Object.entries(locationData!).find(([key, value]) => value.length > 1 && key === select)) {
      return;
    }
    const detailData = Object.entries(locationData!).find(
      ([key, value]) => value.length > 1 && key === select && value
    )![1];

    return (
      <div className='detailLocation'>
        {detailData
          .map((data) => Object.keys(data)[0])
          .map((el, i) => (
            <p onClick={() => setSelectDetailData(el)} key={i}>
              {el}
            </p>
          ))}
      </div>
    );
  };

  return (
    <div className='locationModal'>
      <div className='custom-select'>
        <Select
          width='12rem'
          defaultValue='지역'
          options={Object.entries(locationData!).map(([key]) => key) ?? []}
          onChange={(e) => {
            setSelect(e.target.value);
            setIsDetailOpen(true);
            setSelectDetailData('');
          }}
        />
      </div>

      {isDetailOpen && optionListDetail()}

      {select && <div className='showLocation'>선택하신 지역: {`${select} ${selectDetailData ?? ''}`}</div>}
    </div>
  );
}
