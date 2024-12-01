import { Expert } from './types';

export const expertDummy: Expert[] = [
  {
    id: '1',
    user: {
      id: '101',
      name: '김철수',
      gender: 'male',
    },
    available_location: ['서울특별시', '경기도 성남시'],
    appeal: '100명 이상의 결혼식을 성공적으로 진행했습니다.',
    service: '결혼식 사회자',
    careers: [
      {
        title: '결혼식 사회자',
        description: '중소규모 결혼식 전문 사회 진행',
        start_date: '2020-05-10',
        end_date: '2023-09-20',
      },
    ],
    expert_image: 'https://example.com/images/chulsoo.jpg',
  },
  {
    id: '2',
    user: {
      id: '102',
      name: '이영희',
      gender: 'female',
    },
    available_location: ['부산광역시', '경상남도 창원시'],
    appeal: '300명 이상의 대형 세미나를 전문적으로 진행한 경력이 있습니다.',
    service: '세미나 사회자',
    careers: [
      {
        title: '세미나 사회자',
        description: '대형 세미나 및 컨퍼런스 전문 진행',
        start_date: '2018-03-15',
        end_date: '2023-08-30',
      },
    ],
    expert_image: 'https://example.com/images/younghee.jpg',
  },
  {
    id: '3',
    user: {
      id: '103',
      name: '박민수',
      gender: 'male',
    },
    available_location: ['대전광역시', '충청북도 청주시'],
    appeal: '이벤트 행사 사회자로 5년 이상 활동한 경험이 있습니다.',
    service: '이벤트 사회자',
    careers: [
      {
        title: '이벤트 사회자',
        description: '지역 축제 및 기업 이벤트 진행',
        start_date: '2015-06-01',
        end_date: '2022-12-15',
      },
    ],
    expert_image: 'https://example.com/images/minsoo.jpg',
  },
  {
    id: '4',
    user: {
      id: '104',
      name: '최은지',
      gender: 'female',
    },
    available_location: ['광주광역시', '전라남도 목포시'],
    appeal: '각종 스포츠 경기 개막식 사회를 전문으로 합니다.',
    service: '스포츠 경기 사회자',
    careers: [
      {
        title: '스포츠 경기 사회자',
        description: '지역 및 전국 단위 경기 진행',
        start_date: '2017-04-20',
        end_date: '2023-05-15',
      },
    ],
    expert_image: 'https://example.com/images/eunji.jpg',
  },
  {
    id: '5',
    user: {
      id: '105',
      name: '정현우',
      gender: 'male',
    },
    available_location: ['제주특별자치도'],
    appeal: '제주 지역의 소규모 결혼식에 최적화된 사회 서비스를 제공합니다.',
    service: '소규모 결혼식 사회자',
    careers: [
      {
        title: '소규모 결혼식 사회자',
        description: '제주 지역 결혼식 전문',
        start_date: '2019-01-01',
        end_date: null,
      },
    ],
    expert_image: 'https://example.com/images/hyunwoo.jpg',
  },
];

export const reservationsDummy = [
  {
    id: 1,
    status: '예약 확정',
    estimation: {
      id: 1,
      request_id: 3,
      expert_id: 4,
      location: '경기도 광주',
      due_date: '2024-12-24 12:20:00',
      service: '결혼식 사회자',
      charge: 270000,
      created_at: '2024-11-23 12:02:30',
      request_user: {
        id: 3,
        name: '권순율',
        phone: '010-1234-1234',
      },
      expert: {
        user_id: 4,
        email: 'example@example.com',
        phone: '010-5678-5678',
        name: '홍길동',
        profile_image: 'ImageFile1',
      },
    },
  },
  {
    id: 2,
    status: '서비스 완료',
    estimation: {
      id: 2,
      request_id: 6,
      expert_id: 7,
      location: '서울 강남구',
      due_date: '2025-01-05 15:00:00',
      service: '스냅 촬영',
      charge: 1500000,
      created_at: '2024-11-22 10:45:00',
      request_user: {
        id: 6,
        name: '김민수',
        phone: '010-3456-3456',
      },
      expert: {
        user_id: 7,
        email: 'photographer@example.com',
        phone: '010-9876-5432',
        name: '이영호',
        profile_image: 'ImageFile2',
      },
    },
  },
  {
    id: 3,
    status: '예약 취소',
    estimation: {
      id: 3,
      request_id: 9,
      expert_id: 11,
      location: '부산 해운대구',
      due_date: '2024-12-30 14:00:00',
      service: '결혼식 사회자',
      charge: 500000,
      created_at: '2024-11-20 09:30:00',
      request_user: {
        id: 9,
        name: '최지혜',
        phone: '010-8765-8765',
      },
      expert: {
        user_id: 11,
        email: 'planner@example.com',
        phone: '010-6543-2109',
        name: '박지훈',
        profile_image: 'ImageFile3',
      },
    },
  },
  {
    id: 4,
    status: '채팅 중',
    estimation: {
      id: 4,
      request_id: 12,
      expert_id: 15,
      location: '인천 남동구',
      due_date: '2024-12-15 11:00:00',
      service: '영상 촬영',
      charge: 800000,
      created_at: '2024-11-15 13:00:00',
      request_user: {
        id: 12,
        name: '윤아름',
        phone: '010-3456-2345',
      },
      expert: {
        user_id: 15,
        email: 'makeupartist@example.com',
        phone: '010-3210-9876',
        name: '김미정',
        profile_image: 'ImageFile4',
      },
    },
  },
  {
    id: 5,
    status: '예약 확정',
    estimation: {
      id: 5,
      request_id: 18,
      expert_id: 19,
      location: '대전 유성구',
      due_date: '2024-12-20 13:30:00',
      service: '축가 가수',
      charge: 500000,
      created_at: '2024-11-12 15:45:00',
      request_user: {
        id: 18,
        name: '박성훈',
        phone: '010-4567-7890',
      },
      expert: {
        user_id: 19,
        email: 'singer@example.com',
        phone: '010-1112-2223',
        name: '최은영',
        profile_image: 'ImageFile5',
      },
    },
  },
  {
    id: 6,
    status: '서비스 완료',
    estimation: {
      id: 6,
      request_id: 21,
      expert_id: 25,
      location: '광주 북구',
      due_date: '2024-12-18 15:00:00',
      service: '영상 촬영',
      charge: 2000000,
      created_at: '2024-11-10 10:20:00',
      request_user: {
        id: 21,
        name: '정민호',
        phone: '010-7890-5678',
      },
      expert: {
        user_id: 25,
        email: 'videographer@example.com',
        phone: '010-5432-6789',
        name: '장수현',
        profile_image: 'ImageFile6',
      },
    },
  },
  {
    id: 7,
    status: '예약 취소',
    estimation: {
      id: 7,
      request_id: 27,
      expert_id: 29,
      location: '울산 남구',
      due_date: '2024-12-22 16:00:00',
      service: '축가 가수',
      charge: 3000000,
      created_at: '2024-11-08 11:30:00',
      request_user: {
        id: 27,
        name: '한지수',
        phone: '010-2345-6789',
      },
      expert: {
        user_id: 29,
        email: 'venue@example.com',
        phone: '010-6789-5432',
        name: '오승환',
        profile_image: 'ImageFile7',
      },
    },
  },
  {
    id: 8,
    status: '채팅 중',
    estimation: {
      id: 8,
      request_id: 33,
      expert_id: 35,
      location: '제주 제주시',
      due_date: '2024-12-28 12:00:00',
      service: '스냅 촬영',
      charge: 1200000,
      created_at: '2024-11-07 14:40:00',
      request_user: {
        id: 33,
        name: '이서윤',
        phone: '010-8765-1234',
      },
      expert: {
        user_id: 35,
        email: 'florist@example.com',
        phone: '010-2345-1234',
        name: '송하나',
        profile_image: 'ImageFile8',
      },
    },
  },
];

export const estimationsDummy = [
  {
    "id": 2402,
    "request": 50,
    "expert": {
      "id": 51,
      "rating": 0,
      "expert_image": "http://localhost/media/https%3A/dummyimage.com/200x200",
      "service": "singer",
      "service_displays":"축가가수",
      "standard_charge": 712786,
      "appeal": "Odit sunt itaque debitis. Ex temporibus deserunt totam soluta labore porro. Ut nobis perspiciatis provident ipsum ducimus recusandae.",
      "available_location": [
        "jeonnam_suncheon"
      ],
      "user": {
        "id": 100,
        "name": "안수민",
        "email": "영진706@naver.com",
        "phone_number": "010-4323-4220",
        "gender": "F"
      },
      "careers": [
        {
          "id": 98,
          "title": "(유) 한 4년 근무",
          "description": "Maxime adipisci culpa officiis tenetur. Sunt reprehenderit quae ipsa error mollitia dolorem officia.",
          "start_date": "2024-11-29",
          "end_date": "2028-11-29"
        }
      ]
    },
    "location": "jeonnam_suncheon",
    "due_date": "2024-12-26",
    "service": "singer",
    "charge": 315785,
    "created_at": "2024-11-29T10:52:27.736151+09:00",
    "updated_at": "2024-11-29T10:52:27.736154+09:00"
  },
  {
    "id": 2403,
    "request": 50,
    "expert": {
      "id": 52,
      "rating": 0,
      "expert_image": "http://localhost/media/https%3A/picsum.photos/200/200",
      "service": "mc",
      "standard_charge": 810785,
      "appeal": "Neque rerum aliquam minus ea. Neque quisquam voluptas mollitia excepturi iusto quod. Molestias vitae itaque tenetur saepe vitae. Facilis corrupti voluptatem nam repellat ab. Earum animi at facere veritatis laboriosam vitae. Repudiandae eius ut nisi quidem nulla excepturi.",
      "available_location": [
        "jeonnam_suncheon"
      ],
      "user": {
        "id": 101,
        "name": "김수민",
        "email": "서준394@naver.com",
        "phone_number": "010-7454-8084",
        "gender": "F"
      },
      "careers": [
        {
          "id": 99,
          "title": "유한회사 김 2년 근무",
          "description": "Assumenda ipsum earum ipsam facilis ad. Porro deserunt cum perspiciatis consequatur eos.",
          "start_date": "2024-11-29",
          "end_date": "2026-11-29"
        },
        {
          "id": 100,
          "title": "(유) 김 3년 근무",
          "description": "Atque distinctio reiciendis ipsum modi porro asperiores illo. Sequi sequi cupiditate alias.",
          "start_date": "2024-11-29",
          "end_date": "2027-11-29"
        },
        {
          "id": 101,
          "title": "송송 3년 근무",
          "description": "Officia libero voluptate architecto vero.",
          "start_date": "2024-11-29",
          "end_date": "2027-11-29"
        }
      ]
    },
    "location": "jeonnam_suncheon",
    "due_date": "2024-12-26",
    "service": "mc",
    "charge": 39811,
    "created_at": "2024-11-29T10:52:27.738181+09:00",
    "updated_at": "2024-11-29T10:52:27.738184+09:00"
  },
  {
    "id": 2404,
    "request": 50,
    "expert": {
      "id": 53,
      "rating": 0,
      "expert_image": "http://localhost/media/https%3A/dummyimage.com/200x200",
      "service": "singer",
      "standard_charge": 111245,
      "appeal": "In fugit beatae doloribus asperiores. Culpa a magnam inventore ab officia suscipit. Sit corporis hic magni dicta facilis. Recusandae ducimus sint cum vitae maxime hic.",
      "available_location": [
        "jeonnam_suncheon"
      ],
      "user": {
        "id": 102,
        "name": "류영미",
        "email": "광수122@naver.com",
        "phone_number": "010-9695-8826",
        "gender": "F"
      },
      "careers": [
        {
          "id": 102,
          "title": "박오전 4년 근무",
          "description": "Dolorem accusantium dolorum sequi voluptatibus laborum neque. Delectus facere repellat officia laborum velit laudantium velit.",
          "start_date": "2024-11-29",
          "end_date": "2028-11-29"
        },
        {
          "id": 103,
          "title": "김이박 3년 근무",
          "description": "Quaerat corporis rem tenetur necessitatibus labore aperiam.",
          "start_date": "2024-11-29",
          "end_date": "2027-11-29"
        },
        {
          "id": 104,
          "title": "김성김 3년 근무",
          "description": "Eos vitae ea blanditiis quae sed inventore praesentium. Repellendus inventore sint sint.",
          "start_date": "2024-11-29",
          "end_date": "2027-11-29"
        }
      ]
    },
    "location": "jeonnam_suncheon",
    "due_date": "2024-12-26",
    "service": "singer",
    "charge": 207300,
    "created_at": "2024-11-29T10:52:27.739682+09:00",
    "updated_at": "2024-11-29T10:52:27.739685+09:00"
  },
  {
    "id": 2405,
    "request": 50,
    "expert": {
      "id": 54,
      "rating": 0,
      "expert_image": "http://localhost/media/https%3A/placekitten.com/200/200",
      "service": "singer",
      "standard_charge": 677298,
      "appeal": "Accusantium quia fugiat nam. Neque eveniet optio ea voluptates odit. Minima atque voluptatum voluptatibus blanditiis. Exercitationem sunt ratione cumque fugiat placeat mollitia. Eius quod mollitia.",
      "available_location": [
        "jeonnam_suncheon"
      ],
      "user": {
        "id": 103,
        "name": "백성현",
        "email": "경자864@naver.com",
        "phone_number": "010-3404-5631",
        "gender": "F"
      },
      "careers": [
        {
          "id": 105,
          "title": "(유) 최김김 1년 근무",
          "description": "Voluptatibus facere sunt vitae illum temporibus. Perferendis error asperiores tenetur cupiditate.",
          "start_date": "2024-11-29",
          "end_date": "2025-11-29"
        },
        {
          "id": 106,
          "title": "김박 5년 근무",
          "description": "Voluptatum magni alias fugit qui iste saepe earum. Illo porro dicta sequi totam debitis facere accusantium.",
          "start_date": "2024-11-29",
          "end_date": "2029-11-29"
        }
      ]
    },
    "location": "jeonnam_suncheon",
    "due_date": "2024-12-26",
    "service": "singer",
    "charge": 311760,
    "created_at": "2024-11-29T10:52:27.741206+09:00",
    "updated_at": "2024-11-29T10:52:27.741209+09:00"
  },
  {
    "id": 2406,
    "request": 50,
    "expert": {
      "id": 55,
      "rating": 3.5,
      "expert_image": "http://localhost/media/https%3A/picsum.photos/200/200",
      "service": "singer",
      "standard_charge": 727722,
      "appeal": "Porro sapiente quae dolore. Culpa minima voluptate ipsum optio ad. Quos dignissimos eos natus expedita tempore nam dignissimos. Ducimus accusantium soluta fugiat accusamus consequuntur placeat. Facere eum fugit veritatis aut sequi. Porro quis asperiores pariatur molestiae ad facilis ipsam.",
      "available_location": [
        "jeonnam_suncheon"
      ],
      "user": {
        "id": 104,
        "name": "이명숙",
        "email": "종수323@naver.com",
        "phone_number": "010-4956-9577",
        "gender": "F"
      },
      "careers": [
        {
          "id": 107,
          "title": "이나김 5년 근무",
          "description": "Sit praesentium distinctio repudiandae. Culpa libero repellat sit saepe inventore id.",
          "start_date": "2024-11-29",
          "end_date": "2029-11-29"
        },
        {
          "id": 108,
          "title": "(주) 최 1년 근무",
          "description": "Rem sequi sint odit soluta.",
          "start_date": "2024-11-29",
          "end_date": "2025-11-29"
        },
        {
          "id": 109,
          "title": "유한회사 구 1년 근무",
          "description": "Accusamus corrupti repellendus aspernatur assumenda sit corrupti.",
          "start_date": "2024-11-29",
          "end_date": "2025-11-29"
        }
      ]
    },
    "location": "jeonnam_suncheon",
    "due_date": "2024-12-26",
    "service": "singer",
    "charge": 453414,
    "created_at": "2024-11-29T10:52:27.742895+09:00",
    "updated_at": "2024-11-29T10:52:27.742897+09:00"
  },
  {
    "id": 2407,
    "request": 50,
    "expert": {
      "id": 56,
      "rating": 0,
      "expert_image": "http://localhost/media/https%3A/picsum.photos/200/200",
      "service": "singer",
      "standard_charge": 788978,
      "appeal": "Nesciunt soluta molestiae repudiandae. Totam atque repellendus quos enim molestias. Illo sit reprehenderit earum facilis molestias mollitia.",
      "available_location": [
        "jeonnam_suncheon"
      ],
      "user": {
        "id": 105,
        "name": "김재현",
        "email": "지연932@naver.com",
        "phone_number": "010-8884-3619",
        "gender": "F"
      },
      "careers": [
        {
          "id": 110,
          "title": "(유) 손 2년 근무",
          "description": "Iusto iste consequuntur sit doloremque fugit. Eum ex minus modi repudiandae.",
          "start_date": "2024-11-29",
          "end_date": "2026-11-29"
        },
        {
          "id": 111,
          "title": "안안 2년 근무",
          "description": "Et perferendis itaque dignissimos quia.",
          "start_date": "2024-11-29",
          "end_date": "2026-11-29"
        },
        {
          "id": 112,
          "title": "이김김 3년 근무",
          "description": "Eligendi suscipit debitis minus cum.",
          "start_date": "2024-11-29",
          "end_date": "2027-11-29"
        }
      ]
    },
    "location": "jeonnam_suncheon",
    "due_date": "2024-12-26",
    "service": "singer",
    "charge": 287303,
    "created_at": "2024-11-29T10:52:27.744467+09:00",
    "updated_at": "2024-11-29T10:52:27.744470+09:00"
  },
  {
    "id": 2408,
    "request": 50,
    "expert": {
      "id": 57,
      "rating": 0,
      "expert_image": "http://localhost/media/https%3A/picsum.photos/200/200",
      "service": "singer",
      "standard_charge": 741490,
      "appeal": "Amet rem consectetur distinctio quos. Doloribus minus beatae nobis quis omnis officiis. Dicta error molestias at. Repudiandae numquam blanditiis esse nostrum quisquam.",
      "available_location": [
        "jeonnam_suncheon"
      ],
      "user": {
        "id": 106,
        "name": "박시우",
        "email": "수빈910@naver.com",
        "phone_number": "010-8590-7321",
        "gender": "F"
      },
      "careers": [
        {
          "id": 113,
          "title": "주식회사 양 3년 근무",
          "description": "Omnis suscipit veritatis.",
          "start_date": "2024-11-29",
          "end_date": "2027-11-29"
        },
        {
          "id": 114,
          "title": "유한회사 최한류 1년 근무",
          "description": "Veniam quaerat error vel nam. Eius atque veniam excepturi ratione nesciunt reiciendis.",
          "start_date": "2024-11-29",
          "end_date": "2025-11-29"
        }
      ]
    },
    "location": "jeonnam_suncheon",
    "due_date": "2024-12-26",
    "service": "singer",
    "charge": 93471,
    "created_at": "2024-11-29T10:52:27.745925+09:00",
    "updated_at": "2024-11-29T10:52:27.745928+09:00"
  },
  {
    "id": 2409,
    "request": 50,
    "expert": {
      "id": 58,
      "rating": 3,
      "expert_image": "http://localhost/media/https%3A/picsum.photos/200/200",
      "service": "mc",
      "standard_charge": 878590,
      "appeal": "Impedit eum sapiente provident. Deserunt commodi eligendi quia. Omnis ut quas molestias quo voluptates. Temporibus exercitationem facere repellendus ea rem nam. Recusandae consequuntur quaerat aspernatur ab.",
      "available_location": [
        "jeonnam_suncheon"
      ],
      "user": {
        "id": 107,
        "name": "이예은",
        "email": "숙자815@naver.com",
        "phone_number": "010-9669-8372",
        "gender": "F"
      },
      "careers": [
        {
          "id": 115,
          "title": "장박문 3년 근무",
          "description": "Placeat voluptates rem quo voluptatem voluptates. Necessitatibus enim aperiam nobis fugit.",
          "start_date": "2024-11-29",
          "end_date": "2027-11-29"
        },
        {
          "id": 116,
          "title": "유한회사 이 2년 근무",
          "description": "Culpa earum quia accusantium quae. Tenetur quo tempora ducimus.",
          "start_date": "2024-11-29",
          "end_date": "2026-11-29"
        },
        {
          "id": 117,
          "title": "이윤김 1년 근무",
          "description": "Impedit cum libero.",
          "start_date": "2024-11-29",
          "end_date": "2025-11-29"
        }
      ]
    },
    "location": "jeonnam_suncheon",
    "due_date": "2024-12-26",
    "service": "mc",
    "charge": 112346,
    "created_at": "2024-11-29T10:52:27.747396+09:00",
    "updated_at": "2024-11-29T10:52:27.747399+09:00"
  },
  {
    "id": 2410,
    "request": 50,
    "expert": {
      "id": 59,
      "rating": 0,
      "expert_image": "http://localhost/media/https%3A/dummyimage.com/200x200",
      "service": "singer",
      "standard_charge": 534985,
      "appeal": "Quo suscipit repudiandae eum praesentium illo. Numquam quasi atque aspernatur tempore in. Dolores amet illum nisi.",
      "available_location": [
        "jeonnam_suncheon"
      ],
      "user": {
        "id": 108,
        "name": "서우진",
        "email": "경희853@naver.com",
        "phone_number": "010-8610-4059",
        "gender": "F"
      },
      "careers": [
        {
          "id": 118,
          "title": "노김허 4년 근무",
          "description": "Magnam unde accusamus ipsum placeat. Possimus quam cum voluptatem veniam.",
          "start_date": "2024-11-29",
          "end_date": "2028-11-29"
        },
        {
          "id": 119,
          "title": "양김오 5년 근무",
          "description": "Cupiditate aperiam ex eaque qui explicabo quam. Quia debitis sit dolorum quia rerum.",
          "start_date": "2024-11-29",
          "end_date": "2029-11-29"
        }
      ]
    },
    "location": "jeonnam_suncheon",
    "due_date": "2024-12-26",
    "service": "singer",
    "charge": 132847,
    "created_at": "2024-11-29T10:52:27.748998+09:00",
    "updated_at": "2024-11-29T10:52:27.749000+09:00"
  }
];