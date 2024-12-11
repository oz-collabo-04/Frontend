import { fetchServiceLocation } from '@/api/services';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';
import Select from '@/components/Select/Select';
import { useEffect, useState } from 'react';

type Props = {
  select: string | null;
  setSelect: React.Dispatch<React.SetStateAction<string | null>>;
  selectDetail: string | null;
  setSelectDetail: React.Dispatch<React.SetStateAction<string | null>>;
};
interface LocationDetail {
  [key: string]: { [key: string]: string }[];
}
interface Location {
  [key: string]: { [key: string]: string }[] | string;
}

export default function WeddingLocation({ select, setSelect, selectDetail, setSelectDetail }: Props) {
  const [locationLoading, setLocationLoading] = useState<boolean>(false);
  const [locationData, setLocationData] = useState<Location | []>([]);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  useEffect(() => {
    const fetchLocationData = async () => {
      try {
        const data = await fetchServiceLocation();
        setLocationData(data);
        setLocationLoading(true);
        return data;
      } catch (err) {
        console.error(err);
      }
    };

    fetchLocationData();

    const noSelectArray: LocationDetail[] = [];

    Object.entries(locationData).filter(
      ([key, value]) => typeof value === 'object' && noSelectArray.push({ [key]: value })
    );
  }, [locationLoading]);

  const optionListDetail = () => {
    if (!Object.entries(locationData!).find(([key, value]) => typeof value === 'object' && key === select)) {
      return;
    }
    const detailData = Object.entries(locationData!).find(
      ([key, value]) => typeof value === 'object' && key === select && value
    )![1];

    return (
      <div className='detailLocation'>
        {typeof detailData === 'object' &&
          detailData
            .map((data) => Object.keys(data)[0].split(' ')[1])
            .map((el, i) => (
              <p onClick={() => setSelectDetail(el)} key={i}>
                {el}
              </p>
            ))}
      </div>
    );
  };

  if (!locationLoading) {
    return <LoadingSpinner className='locationModalLoading' />;
  }

  return (
    <div className='locationModal'>
      <div className='custom-select'>
        <Select
          width='12rem'
          defaultValue='지역'
          options={Object.keys(locationData) ?? []}
          onChange={(e) => {
            setSelect(e.target.value);
            setIsDetailOpen(true);
            setSelectDetail('');
          }}
        />
      </div>

      {isDetailOpen && optionListDetail()}

      {select && <div className='showLocation'>선택하신 지역: {`${select} ${selectDetail ?? ''}`}</div>}
    </div>
  );
}
