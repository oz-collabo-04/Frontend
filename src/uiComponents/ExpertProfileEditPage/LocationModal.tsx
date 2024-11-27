import { fetchServiceLocation } from '@/api/services';
import LoadingSpinner from '@/components/LodingSpinner/LodingSpinner';
import Select from '@/components/Select/Select';
import '@/styles/ExpertProfileEditPage/location.scss';
import { useEffect, useState } from 'react';

type Props = {
  select: string | null;
  setSelect: React.Dispatch<React.SetStateAction<string | null>>;
  selectDetailData: string | null;
  setSelectDetailData: React.Dispatch<React.SetStateAction<string | null>>;
  setNoSelect: React.Dispatch<React.SetStateAction<[] | LocationDetail[]>>;
};
interface LocationDetail {
  [key: string]: { [key: string]: string }[];
}
interface LocationDummy {
  [key: string]: { [key: string]: string }[] | string;
}

export default function LocationModal({
  select,
  setSelect,
  selectDetailData,
  setSelectDetailData,
  setNoSelect,
}: Props) {
  const [isData, setIsData] = useState<boolean>(false);
  const [locationData, setLocationData] = useState<LocationDummy | []>([]);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchServiceLocation();
        setLocationData(data);
        setIsData(true);
        return data;
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();

    const noSelectArray: LocationDetail[] = [];

    Object.entries(locationData).filter(
      ([key, value]) => typeof value === 'object' && noSelectArray.push({ [key]: value })
    );

    setNoSelect(noSelectArray);
  }, [isDetailOpen === true]);

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
              <p onClick={() => setSelectDetailData(el)} key={i}>
                {el}
              </p>
            ))}
      </div>
    );
  };

  if (!isData) {
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
            setSelectDetailData('');
          }}
        />
      </div>

      {isDetailOpen && optionListDetail()}

      {select && <div className='showLocation'>선택하신 지역: {`${select} ${selectDetailData ?? ''}`}</div>}
    </div>
  );
}
