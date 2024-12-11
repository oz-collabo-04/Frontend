// 서비스 한글변경
export const getServiceKorean = (service: string) => {
  switch (service) {
    case 'mc':
      return '결혼식 사회자';
    case 'singer':
      return '축가 가수';
    case 'video':
      return '영상 촬영';
    case 'snap':
      return '스냅 촬영';
    default:
      return '새로운 서비스';
  }
};
