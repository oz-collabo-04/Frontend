import { ExpertRegister } from './types';

interface LocationDummy {
  [key: string]: string[];
}

export const locationDummy: LocationDummy[] = [
  {
    경기도: [
      '수원시',
      '고양시',
      '용인시',
      '성남시',
      '부천시',
      '안산시',
      '안양시',
      '남양주시',
      '화성시',
      '평택시',
      '의정부시',
      '파주시',
      '시흥시',
      '김포시',
      '광명시',
      '광주시',
      '군포시',
      '오산시',
      '이천시',
      '양주시',
      '구리시',
      '안성시',
      '포천시',
      '의왕시',
      '하남시',
      '여주시',
      '양평군',
      '동두천시',
      '과천시',
      '가평군',
      '연천군',
    ],
    경상남도: [
      '창원시',
      '김해시',
      '진주시',
      '양산시',
      '거제시',
      '통영시',
      '사천시',
      '밀양시',
      '함안군',
      '거창군',
      '창녕군',
      '고성군',
      '하동군',
      '합천군',
      '산청군',
      '남해군',
      '의령군',
    ],
    경상북도: [
      '포항시',
      '경주시',
      '구미시',
      '김천시',
      '안동시',
      '영주시',
      '상주시',
      '문경시',
      '경산시',
      '영천시',
      '의성군',
      '청송군',
      '영양군',
      '영덕군',
      '청도군',
      '고령군',
      '성주군',
      '칠곡군',
      '예천군',
      '봉화군',
      '울진군',
      '울릉군',
    ],
    전라남도: [
      '목포시',
      '여수시',
      '순천시',
      '나주시',
      '광양시',
      '담양군',
      '곡성군',
      '구례군',
      '고흥군',
      '보성군',
      '화순군',
      '장흥군',
      '강진군',
      '해남군',
      '영암군',
      '무안군',
      '함평군',
      '영광군',
      '장성군',
      '완도군',
      '진도군',
      '신안군',
    ],
    전라북도: [
      '전주시',
      '익산시',
      '군산시',
      '정읍시',
      '남원시',
      '김제시',
      '완주군',
      '진안군',
      '무주군',
      '장수군',
      '임실군',
      '순창군',
      '고창군',
      '부안군',
    ],
    충청남도: [
      '천안시',
      '아산시',
      '서산시',
      '논산시',
      '계룡시',
      '당진시',
      '공주시',
      '보령시',
      '부여군',
      '서천군',
      '청양군',
      '홍성군',
      '예산군',
      '태안군',
    ],
    충청북도: [
      '청주시',
      '충주시',
      '제천시',
      '보은군',
      '옥천군',
      '영동군',
      '증평군',
      '진천군',
      '괴산군',
      '음성군',
      '단양군',
    ],
    강원도: [
      '춘천시',
      '원주시',
      '강릉시',
      '동해시',
      '태백시',
      '속초시',
      '삼척시',
      '홍천군',
      '횡성군',
      '영월군',
      '평창군',
      '정선군',
      '철원군',
      '화천군',
      '양구군',
      '인제군',
      '고성군',
      '양양군',
    ],
    제주도: ['제주시', '서귀포시'],
    서울특별시: [],
    부산광역시: [],
    인천광역시: [],
    대구광역시: [],
    대전광역시: [],
    광주광역시: [],
    울산광역시: [],
  },
];

export const expertDummy: ExpertRegister[] = [
  {
    id: '1',
    available_location: ['서울특별시', '경기도 성남시'],
    appeal: '100명 이상의 결혼식을 성공적으로 진행했습니다.',
    service: '결혼식 사회자',
    careers: [
      {
        title: '결혼식 사회자',
        explanation: '중소규모 결혼식 전문 사회 진행',
        start_date: '2020-05-10',
        end_date: '2023-09-20',
      },
    ],
    expert_image: 'https://example.com/image1.jpg',
  },
  {
    id: '2',
    available_location: ['경상남도 창원시'],
    appeal: '재치있는 입담으로 즐거운 분위기를 만듭니다.',
    service: '결혼식 사회자',
    careers: [
      {
        title: '결혼식 사회자',
        explanation: '유명 호텔 결혼식 전문 진행',
        start_date: '2018-03-15',
        end_date: '2024-11-20',
      },
    ],
    expert_image: 'https://example.com/image2.jpg',
  },
  {
    id: '3',
    available_location: ['경상북도 구미시'],
    appeal: '고객 맞춤형 사회 진행으로 특별한 날을 더 특별하게!',
    service: '결혼식 사회자',
    careers: [
      {
        title: '결혼식 사회자',
        explanation: '300회 이상의 결혼식 경험 보유',
        start_date: '2015-01-20',
        end_date: '2023-11-30',
      },
    ],
    expert_image: 'https://example.com/image3.jpg',
  },
  {
    id: '4',
    available_location: ['서울', '인천'],
    appeal: '깔끔하고 정제된 언어로 품격 있는 결혼식을 완성합니다.',
    service: '결혼식 사회자',
    careers: [
      {
        title: '결혼식 사회자',
        explanation: '대규모 행사 전문 진행 경험',
        start_date: '2019-06-01',
        end_date: '2024-01-15',
      },
    ],
    expert_image: 'https://example.com/image4.jpg',
  },
  {
    id: '5',
    available_location: ['광주', '전라남도 여수시'],
    appeal: '유쾌하고 센스있는 사회로 고객 만족 1위!',
    service: '결혼식 사회자',
    careers: [
      {
        title: '결혼식 사회자',
        explanation: '지역 커뮤니티 추천 1위 사회자',
        start_date: '2022-02-10',
        end_date: '2024-06-05',
      },
    ],
    expert_image: 'https://example.com/image5.jpg',
  },
  {
    id: '6',
    available_location: ['대전', '충청남도 천안시'],
    appeal: '진정성 있는 목소리로 소중한 순간을 만들어 드립니다.',
    service: '결혼식 사회자',
    careers: [
      {
        title: '결혼식 사회자',
        explanation: '맞춤형 서비스 제공으로 높은 고객 만족도',
        start_date: '2021-07-01',
        end_date: '2024-12-12',
      },
    ],
    expert_image: 'https://example.com/image6.jpg',
  },
  {
    id: '7',
    available_location: ['제주', '서귀포시'],
    appeal: '제주도에서의 특별한 결혼식을 더욱 빛나게 합니다.',
    service: '결혼식 사회자',
    careers: [
      {
        title: '결혼식 사회자',
        explanation: '제주 지역 전문 사회자',
        start_date: '2017-03-15',
        end_date: '2023-10-01',
      },
    ],
    expert_image: 'https://example.com/image7.jpg',
  },
  {
    id: '8',
    available_location: ['서울', '경기도 고양시'],
    appeal: '탄탄한 진행력과 감각적인 연출로 기억에 남는 결혼식을 만들어 드립니다.',
    service: '결혼식 사회자',
    careers: [
      {
        title: '결혼식 사회자',
        explanation: '15년 이상의 경력 보유',
        start_date: '2008-09-10',
        end_date: '2024-05-15',
      },
    ],
    expert_image: 'https://example.com/image8.jpg',
  },
  {
    id: '9',
    available_location: ['부산', '울산'],
    appeal: '따뜻한 마음과 재치있는 진행으로 특별한 순간을 만들어 드립니다.',
    service: '결혼식 사회자',
    careers: [
      {
        title: '결혼식 사회자',
        explanation: '기업 행사와 결혼식 진행 전문',
        start_date: '2012-11-01',
        end_date: '2024-08-20',
      },
    ],
    expert_image: 'https://example.com/image9.jpg',
  },
  {
    id: '10',
    available_location: ['서울', '경기도 수원시'],
    appeal: '다양한 스타일의 결혼식 진행 경험을 보유하고 있습니다.',
    service: '결혼식 사회자',
    careers: [
      {
        title: '결혼식 사회자',
        explanation: '스타일 맞춤형 진행 가능',
        start_date: '2010-04-05',
        end_date: '2024-12-30',
      },
    ],
    expert_image: 'https://example.com/image10.jpg',
  },
];
