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
    status: 'confirmed',
    estimation: {
      id: 1,
      request_id: 1,
      request_user: {
        id: 1,
        name: '권순율',
        email: 'user1@example.com',
        phone_number: '010-1234-1234',
      },
      expert: {
        id: 1,
        user: {
          id: 4,
          name: '홍길동',
          email: 'example@example.com',
          phone_number: '010-5678-5678',
        },
        expert_image: 'ImageFile1',
      },
      service: 'mc',
      location: 'gyeonggi-gwangju',
      due_date: '2024-12-24',
      charge: 270000,
      created_at: '2024-11-23T12:02:30',
    },
    created_at: '2024-11-23T12:02:30',
    updated_at: '2024-11-24T12:00:00',
  },
  {
    id: 2,
    status: 'completed',
    estimation: {
      id: 2,
      request_id: 2,
      request_user: {
        id: 2,
        name: '김민수',
        email: 'user2@example.com',
        phone_number: '010-3456-3456',
      },
      expert: {
        id: 2,
        user: {
          id: 7,
          name: '이영호',
          email: 'photographer@example.com',
          phone_number: '010-9876-5432',
        },
        expert_image: 'ImageFile2',
      },
      service: 'snap',
      location: 'seoul-gangnam',
      due_date: '2025-01-05',
      charge: 1500000,
      created_at: '2024-11-22T10:45:00',
    },
    created_at: '2024-11-22T10:45:00',
    updated_at: '2024-11-25T15:00:00',
  },
  {
    id: 3,
    status: 'canceled',
    estimation: {
      id: 3,
      request_id: 3,
      request_user: {
        id: 3,
        name: '최지혜',
        email: 'user3@example.com',
        phone_number: '010-8765-8765',
      },
      expert: {
        id: 3,
        user: {
          id: 11,
          name: '박지훈',
          email: 'planner@example.com',
          phone_number: '010-6543-2109',
        },
        expert_image: 'ImageFile3',
      },
      service: 'mc',
      location: 'busan-haeundae',
      due_date: '2024-12-30',
      charge: 500000,
      created_at: '2024-11-20T09:30:00',
    },
    created_at: '2024-11-20T09:30:00',
    updated_at: '2024-11-21T11:00:00',
  },
  {
    id: 4,
    status: 'completed',
    estimation: {
      id: 4,
      request_id: 4,
      request_user: {
        id: 4,
        name: '윤아름',
        email: 'user4@example.com',
        phone_number: '010-3456-2345',
      },
      expert: {
        id: 4,
        user: {
          id: 15,
          name: '김미정',
          email: 'makeupartist@example.com',
          phone_number: '010-3210-9876',
        },
        expert_image: 'ImageFile4',
      },
      service: 'video',
      location: 'incheon-namdong',
      due_date: '2024-12-15',
      charge: 800000,
      created_at: '2024-11-15T13:00:00',
    },
    created_at: '2024-11-15T13:00:00',
    updated_at: '2024-11-16T14:00:00',
  },
  {
    id: 5,
    status: 'completed',
    estimation: {
      id: 5,
      request_id: 5,
      request_user: {
        id: 5,
        name: '정민호',
        email: 'user5@example.com',
        phone_number: '010-7890-5678',
      },
      expert: {
        id: 5,
        user: {
          id: 25,
          name: '장수현',
          email: 'videographer@example.com',
          phone_number: '010-5432-6789',
        },
        expert_image: 'ImageFile5',
      },
      service: 'video',
      location: 'gwangju-bukgu',
      due_date: '2024-12-18',
      charge: 2000000,
      created_at: '2024-11-10T10:20:00',
    },
    created_at: '2024-11-10T10:20:00',
    updated_at: '2024-11-11T11:20:00',
  },
  {
    id: 6,
    status: 'canceled',
    estimation: {
      id: 6,
      request_id: 6,
      request_user: {
        id: 6,
        name: '한지수',
        email: 'user6@example.com',
        phone_number: '010-2345-6789',
      },
      expert: {
        id: 6,
        user: {
          id: 29,
          name: '오승환',
          email: 'venue@example.com',
          phone_number: '010-6789-5432',
        },
        expert_image: 'ImageFile6',
      },
      service: 'singer',
      location: 'ulsan-namgu',
      due_date: '2024-12-22',
      charge: 3000000,
      created_at: '2024-11-08T11:30:00',
    },
    created_at: '2024-11-08T11:30:00',
    updated_at: '2024-11-09T12:30:00',
  },
  {
    id: 7,
    status: 'completed',
    estimation: {
      id: 7,
      request_id: 7,
      request_user: {
        id: 7,
        name: '이서윤',
        email: 'user7@example.com',
        phone_number: '010-8765-1234',
      },
      expert: {
        id: 7,
        user: {
          id: 35,
          name: '송하나',
          email: 'florist@example.com',
          phone_number: '010-2345-1234',
        },
        expert_image: 'ImageFile7',
      },
      service: 'snap',
      location: 'jeju-jeju',
      due_date: '2024-12-28',
      charge: 1200000,
      created_at: '2024-11-07T14:40:00',
    },
    created_at: '2024-11-07T14:40:00',
    updated_at: '2024-11-08T15:40:00',
  },
  {
    id: 8,
    status: 'confirmed',
    estimation: {
      id: 8,
      request_id: 8,
      request_user: {
        id: 8,
        name: '박준호',
        email: 'user8@example.com',
        phone_number: '010-4321-1234',
      },
      expert: {
        id: 8,
        user: {
          id: 40,
          name: '서지민',
          email: 'expert@example.com',
          phone_number: '010-9876-5432',
        },
        expert_image: 'ImageFile8',
      },
      service: 'flower',
      location: 'daejeon-seogu',
      due_date: '2024-12-27',
      charge: 1000000,
      created_at: '2024-11-06T10:00:00',
    },
    created_at: '2024-11-06T10:00:00',
    updated_at: '2024-11-07T11:00:00',
  },
  {
    id: 9,
    status: 'completed',
    estimation: {
      id: 9,
      request_id: 9,
      request_user: {
        id: 9,
        name: '김다혜',
        email: 'user9@example.com',
        phone_number: '010-5678-3456',
      },
      expert: {
        id: 9,
        user: {
          id: 50,
          name: '안승현',
          email: 'planner@example.com',
          phone_number: '010-8765-2345',
        },
        expert_image: 'ImageFile9',
      },
      service: 'mc',
      location: 'gangwon-chuncheon',
      due_date: '2024-12-20',
      charge: 600000,
      created_at: '2024-11-05T11:15:00',
    },
    created_at: '2024-11-05T11:15:00',
    updated_at: '2024-11-06T12:15:00',
  },
  {
    id: 123,
    status: 'canceled',
    estimation: {
      id: 13,
      request_id: 15,
      request_user: {
        id: 123,
        name: '최영수',
        email: 'user10@example.com',
        phone_number: '010-7890-4567',
      },
      expert: {
        id: 1245,
        user: {
          id: 60,
          name: '이승준',
          email: 'expert2@example.com',
          phone_number: '010-5432-6789',
        },
        expert_image: 'ImageFile10',
      },
      service: 'snap',
      location: 'seoul-dobong',
      due_date: '2024-12-10',
      charge: 1800000,
      created_at: '2024-11-04T08:50:00',
    },
    created_at: '2024-11-04T08:50:00',
    updated_at: '2024-11-05T09:50:00',
  },
];

export const estimationsDummy = [
  {
    id: 2402,
    request: 50,
    expert: {
      id: 51,
      rating: 0,
      expert_image: 'http://localhost/media/https%3A/dummyimage.com/200x200',
      service: 'singer',
      service_displays: '축가가수',
      standard_charge: 712786,
      appeal:
        'Odit sunt itaque debitis. Ex temporibus deserunt totam soluta labore porro. Ut nobis perspiciatis provident ipsum ducimus recusandae.',
      available_location: ['jeonnam_suncheon'],
      user: {
        id: 100,
        name: '안수민',
        email: '영진706@naver.com',
        phone_number: '010-4323-4220',
        gender: 'F',
      },
      careers: [
        {
          id: 98,
          title: '(유) 한 4년 근무',
          description:
            'Maxime adipisci culpa officiis tenetur. Sunt reprehenderit quae ipsa error mollitia dolorem officia.',
          start_date: '2024-11-29',
          end_date: '2028-11-29',
        },
      ],
    },
    location: 'jeonnam_suncheon',
    due_date: '2024-12-26',
    service: 'singer',
    charge: 315785,
    created_at: '2024-11-29T10:52:27.736151+09:00',
    updated_at: '2024-11-29T10:52:27.736154+09:00',
  },
  {
    id: 2403,
    request: 50,
    expert: {
      id: 52,
      rating: 0,
      expert_image: 'http://localhost/media/https%3A/picsum.photos/200/200',
      service: 'mc',
      standard_charge: 810785,
      appeal:
        'Neque rerum aliquam minus ea. Neque quisquam voluptas mollitia excepturi iusto quod. Molestias vitae itaque tenetur saepe vitae. Facilis corrupti voluptatem nam repellat ab. Earum animi at facere veritatis laboriosam vitae. Repudiandae eius ut nisi quidem nulla excepturi.',
      available_location: ['jeonnam_suncheon'],
      user: {
        id: 101,
        name: '김수민',
        email: '서준394@naver.com',
        phone_number: '010-7454-8084',
        gender: 'F',
      },
      careers: [
        {
          id: 99,
          title: '유한회사 김 2년 근무',
          description: 'Assumenda ipsum earum ipsam facilis ad. Porro deserunt cum perspiciatis consequatur eos.',
          start_date: '2024-11-29',
          end_date: '2026-11-29',
        },
        {
          id: 100,
          title: '(유) 김 3년 근무',
          description: 'Atque distinctio reiciendis ipsum modi porro asperiores illo. Sequi sequi cupiditate alias.',
          start_date: '2024-11-29',
          end_date: '2027-11-29',
        },
        {
          id: 101,
          title: '송송 3년 근무',
          description: 'Officia libero voluptate architecto vero.',
          start_date: '2024-11-29',
          end_date: '2027-11-29',
        },
      ],
    },
    location: 'jeonnam_suncheon',
    due_date: '2024-12-26',
    service: 'mc',
    charge: 39811,
    created_at: '2024-11-29T10:52:27.738181+09:00',
    updated_at: '2024-11-29T10:52:27.738184+09:00',
  },
  {
    id: 2404,
    request: 50,
    expert: {
      id: 53,
      rating: 0,
      expert_image: 'http://localhost/media/https%3A/dummyimage.com/200x200',
      service: 'singer',
      standard_charge: 111245,
      appeal:
        'In fugit beatae doloribus asperiores. Culpa a magnam inventore ab officia suscipit. Sit corporis hic magni dicta facilis. Recusandae ducimus sint cum vitae maxime hic.',
      available_location: ['jeonnam_suncheon'],
      user: {
        id: 102,
        name: '류영미',
        email: '광수122@naver.com',
        phone_number: '010-9695-8826',
        gender: 'F',
      },
      careers: [
        {
          id: 102,
          title: '박오전 4년 근무',
          description:
            'Dolorem accusantium dolorum sequi voluptatibus laborum neque. Delectus facere repellat officia laborum velit laudantium velit.',
          start_date: '2024-11-29',
          end_date: '2028-11-29',
        },
        {
          id: 103,
          title: '김이박 3년 근무',
          description: 'Quaerat corporis rem tenetur necessitatibus labore aperiam.',
          start_date: '2024-11-29',
          end_date: '2027-11-29',
        },
        {
          id: 104,
          title: '김성김 3년 근무',
          description: 'Eos vitae ea blanditiis quae sed inventore praesentium. Repellendus inventore sint sint.',
          start_date: '2024-11-29',
          end_date: '2027-11-29',
        },
      ],
    },
    location: 'jeonnam_suncheon',
    due_date: '2024-12-26',
    service: 'singer',
    charge: 207300,
    created_at: '2024-11-29T10:52:27.739682+09:00',
    updated_at: '2024-11-29T10:52:27.739685+09:00',
  },
  {
    id: 2405,
    request: 50,
    expert: {
      id: 54,
      rating: 0,
      expert_image: 'http://localhost/media/https%3A/placekitten.com/200/200',
      service: 'singer',
      standard_charge: 677298,
      appeal:
        'Accusantium quia fugiat nam. Neque eveniet optio ea voluptates odit. Minima atque voluptatum voluptatibus blanditiis. Exercitationem sunt ratione cumque fugiat placeat mollitia. Eius quod mollitia.',
      available_location: ['jeonnam_suncheon'],
      user: {
        id: 103,
        name: '백성현',
        email: '경자864@naver.com',
        phone_number: '010-3404-5631',
        gender: 'F',
      },
      careers: [
        {
          id: 105,
          title: '(유) 최김김 1년 근무',
          description:
            'Voluptatibus facere sunt vitae illum temporibus. Perferendis error asperiores tenetur cupiditate.',
          start_date: '2024-11-29',
          end_date: '2025-11-29',
        },
        {
          id: 106,
          title: '김박 5년 근무',
          description:
            'Voluptatum magni alias fugit qui iste saepe earum. Illo porro dicta sequi totam debitis facere accusantium.',
          start_date: '2024-11-29',
          end_date: '2029-11-29',
        },
      ],
    },
    location: 'jeonnam_suncheon',
    due_date: '2024-12-26',
    service: 'singer',
    charge: 311760,
    created_at: '2024-11-29T10:52:27.741206+09:00',
    updated_at: '2024-11-29T10:52:27.741209+09:00',
  },
  {
    id: 2406,
    request: 50,
    expert: {
      id: 55,
      rating: 3.5,
      expert_image: 'http://localhost/media/https%3A/picsum.photos/200/200',
      service: 'singer',
      standard_charge: 727722,
      appeal:
        'Porro sapiente quae dolore. Culpa minima voluptate ipsum optio ad. Quos dignissimos eos natus expedita tempore nam dignissimos. Ducimus accusantium soluta fugiat accusamus consequuntur placeat. Facere eum fugit veritatis aut sequi. Porro quis asperiores pariatur molestiae ad facilis ipsam.',
      available_location: ['jeonnam_suncheon'],
      user: {
        id: 104,
        name: '이명숙',
        email: '종수323@naver.com',
        phone_number: '010-4956-9577',
        gender: 'F',
      },
      careers: [
        {
          id: 107,
          title: '이나김 5년 근무',
          description: 'Sit praesentium distinctio repudiandae. Culpa libero repellat sit saepe inventore id.',
          start_date: '2024-11-29',
          end_date: '2029-11-29',
        },
        {
          id: 108,
          title: '(주) 최 1년 근무',
          description: 'Rem sequi sint odit soluta.',
          start_date: '2024-11-29',
          end_date: '2025-11-29',
        },
        {
          id: 109,
          title: '유한회사 구 1년 근무',
          description: 'Accusamus corrupti repellendus aspernatur assumenda sit corrupti.',
          start_date: '2024-11-29',
          end_date: '2025-11-29',
        },
      ],
    },
    location: 'jeonnam_suncheon',
    due_date: '2024-12-26',
    service: 'singer',
    charge: 453414,
    created_at: '2024-11-29T10:52:27.742895+09:00',
    updated_at: '2024-11-29T10:52:27.742897+09:00',
  },
  {
    id: 2407,
    request: 50,
    expert: {
      id: 56,
      rating: 0,
      expert_image: 'http://localhost/media/https%3A/picsum.photos/200/200',
      service: 'singer',
      standard_charge: 788978,
      appeal:
        'Nesciunt soluta molestiae repudiandae. Totam atque repellendus quos enim molestias. Illo sit reprehenderit earum facilis molestias mollitia.',
      available_location: ['jeonnam_suncheon'],
      user: {
        id: 105,
        name: '김재현',
        email: '지연932@naver.com',
        phone_number: '010-8884-3619',
        gender: 'F',
      },
      careers: [
        {
          id: 110,
          title: '(유) 손 2년 근무',
          description: 'Iusto iste consequuntur sit doloremque fugit. Eum ex minus modi repudiandae.',
          start_date: '2024-11-29',
          end_date: '2026-11-29',
        },
        {
          id: 111,
          title: '안안 2년 근무',
          description: 'Et perferendis itaque dignissimos quia.',
          start_date: '2024-11-29',
          end_date: '2026-11-29',
        },
        {
          id: 112,
          title: '이김김 3년 근무',
          description: 'Eligendi suscipit debitis minus cum.',
          start_date: '2024-11-29',
          end_date: '2027-11-29',
        },
      ],
    },
    location: 'jeonnam_suncheon',
    due_date: '2024-12-26',
    service: 'singer',
    charge: 287303,
    created_at: '2024-11-29T10:52:27.744467+09:00',
    updated_at: '2024-11-29T10:52:27.744470+09:00',
  },
  {
    id: 2408,
    request: 50,
    expert: {
      id: 57,
      rating: 0,
      expert_image: 'http://localhost/media/https%3A/picsum.photos/200/200',
      service: 'singer',
      standard_charge: 741490,
      appeal:
        'Amet rem consectetur distinctio quos. Doloribus minus beatae nobis quis omnis officiis. Dicta error molestias at. Repudiandae numquam blanditiis esse nostrum quisquam.',
      available_location: ['jeonnam_suncheon'],
      user: {
        id: 106,
        name: '박시우',
        email: '수빈910@naver.com',
        phone_number: '010-8590-7321',
        gender: 'F',
      },
      careers: [
        {
          id: 113,
          title: '주식회사 양 3년 근무',
          description: 'Omnis suscipit veritatis.',
          start_date: '2024-11-29',
          end_date: '2027-11-29',
        },
        {
          id: 114,
          title: '유한회사 최한류 1년 근무',
          description: 'Veniam quaerat error vel nam. Eius atque veniam excepturi ratione nesciunt reiciendis.',
          start_date: '2024-11-29',
          end_date: '2025-11-29',
        },
      ],
    },
    location: 'jeonnam_suncheon',
    due_date: '2024-12-26',
    service: 'singer',
    charge: 93471,
    created_at: '2024-11-29T10:52:27.745925+09:00',
    updated_at: '2024-11-29T10:52:27.745928+09:00',
  },
  {
    id: 2409,
    request: 50,
    expert: {
      id: 58,
      rating: 3,
      expert_image: 'http://localhost/media/https%3A/picsum.photos/200/200',
      service: 'mc',
      standard_charge: 878590,
      appeal:
        'Impedit eum sapiente provident. Deserunt commodi eligendi quia. Omnis ut quas molestias quo voluptates. Temporibus exercitationem facere repellendus ea rem nam. Recusandae consequuntur quaerat aspernatur ab.',
      available_location: ['jeonnam_suncheon'],
      user: {
        id: 107,
        name: '이예은',
        email: '숙자815@naver.com',
        phone_number: '010-9669-8372',
        gender: 'F',
      },
      careers: [
        {
          id: 115,
          title: '장박문 3년 근무',
          description: 'Placeat voluptates rem quo voluptatem voluptates. Necessitatibus enim aperiam nobis fugit.',
          start_date: '2024-11-29',
          end_date: '2027-11-29',
        },
        {
          id: 116,
          title: '유한회사 이 2년 근무',
          description: 'Culpa earum quia accusantium quae. Tenetur quo tempora ducimus.',
          start_date: '2024-11-29',
          end_date: '2026-11-29',
        },
        {
          id: 117,
          title: '이윤김 1년 근무',
          description: 'Impedit cum libero.',
          start_date: '2024-11-29',
          end_date: '2025-11-29',
        },
      ],
    },
    location: 'jeonnam_suncheon',
    due_date: '2024-12-26',
    service: 'mc',
    charge: 112346,
    created_at: '2024-11-29T10:52:27.747396+09:00',
    updated_at: '2024-11-29T10:52:27.747399+09:00',
  },
  {
    id: 2410,
    request: 50,
    expert: {
      id: 59,
      rating: 0,
      expert_image: 'http://localhost/media/https%3A/dummyimage.com/200x200',
      service: 'singer',
      standard_charge: 534985,
      appeal:
        'Quo suscipit repudiandae eum praesentium illo. Numquam quasi atque aspernatur tempore in. Dolores amet illum nisi.',
      available_location: ['jeonnam_suncheon'],
      user: {
        id: 108,
        name: '서우진',
        email: '경희853@naver.com',
        phone_number: '010-8610-4059',
        gender: 'F',
      },
      careers: [
        {
          id: 118,
          title: '노김허 4년 근무',
          description: 'Magnam unde accusamus ipsum placeat. Possimus quam cum voluptatem veniam.',
          start_date: '2024-11-29',
          end_date: '2028-11-29',
        },
        {
          id: 119,
          title: '양김오 5년 근무',
          description: 'Cupiditate aperiam ex eaque qui explicabo quam. Quia debitis sit dolorum quia rerum.',
          start_date: '2024-11-29',
          end_date: '2029-11-29',
        },
      ],
    },
    location: 'jeonnam_suncheon',
    due_date: '2024-12-26',
    service: 'singer',
    charge: 132847,
    created_at: '2024-11-29T10:52:27.748998+09:00',
    updated_at: '2024-11-29T10:52:27.749000+09:00',
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