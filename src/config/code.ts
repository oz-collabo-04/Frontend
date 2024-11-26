// TITLE
export const XLargeTitleCode = `<XLargeTitle title='h2 타이틀' />`;
export const LargeTitleCode = `<LargeTitle title='h3 타이틀' />`;
export const MediumTitleCode = `<MediumTitle title='h4 타이틀' />`;
export const SmallTitleCode = `<SmallTitle title='h5 타이틀' />`;
export const XSmallTitleCode = `<XSmallTitle title='h6 타이틀' />`;
export const FuncTitleCode = `<XSmallTitle title='FuncTitleCode' fontSize='40px' fontWeight='300' extraClass='newClass' />`;
export const pageTitleDefault = `<PageTitle title='페이지 제목' isPrevBtn={true} prevUrl='/' />`;

// BUTTON
export const mainBtnDefault = `<MainBtn name={'button'} />`;
export const mainBtnSize = `<MainBtn name='width/height' width='auto' height='3.2rem' />`;
export const mainBtnLarge = `<MainBtn name='large' size='large' />`;
export const mainBtnMedium = `<MainBtn name='medium' size='medium' />`;
export const mainBtnSmall = `<MainBtn name='small' size='small' />`;
export const mainBtnColor = `<MainBtn name='Color Button' backgroundColor='skyblue' borderColor='green' color='red' />`;
export const mainBtnExtraClass = `<MainBtn name='extraClass' extraClass='extraClass' />`;
export const mainBtnDisabled = `<MainBtn name='Disabled Button' disabled={true} />`;

// ICON-BUTTON
export const iconBtnDefault = `<IconBtn src='/image/test_icon.svg' alt='아이콘버튼' />`;
export const iconBtnIsFull = `<IconBtn src='/image/dalbong.jpg' alt='아이콘버튼' isFull={true} />`;
export const iconBtnSize = `<IconBtn width='50px' height='50px' src='' alt='아이콘버튼' />
<IconBtn width='100px' height='100px' src='/image/dalbong.jpg' alt='아이콘버튼' isFull={true} />`;

// INPUT
export const InputDefault = `<Input type='text' placeholder='placeholder' />`;
export const InputWidth = `<Input type='text' placeholder='placeholder' width='100%' height='70px' />`;
export const InputDisabled = `<Input type='text' placeholder='placeholder' disabled={true} />`;
export const InputPrice = `const [amount, setAmount] = useState<string | number>('');

const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setAmount(e.target.value); // 부모 상태 업데이트
};

<NumberInput
  placeholder='금액을 입력하세요'
  value={amount}
  onChange={handleAmountChange}
  width='100%'
/>`;

// TEXTAREA
export const TextareaDefault = `<Textarea placeholder='placeholder' />`;
export const TextareaSize = `<Textarea width='100%' height='8rem' placeholder='placeholder' />`;
export const TextareaDisabled = `<Textarea placeholder='placeholder' disabled={true} />`;

// SELECT
export const SelectDefault = `<Select
  defaultValue='선택'
  options={['Option 1', 'Option 2', 'Option 3']}
  onChange={(e) => console.log('Selected value:', e.target.value)}
/>`;
export const SelectSize = `<Select
  width='30rem'
  height='5rem'
  defaultValue='선택'
  options={['Option 1', 'Option 2', 'Option 3']}
  onChange={(e) => console.log('Selected value:', e.target.value)}
/>`;

// CHECKBOX
export const CheckboxDefault = `<Checkbox idFor='idFor1' />`;
export const CheckboxChecked = `<Checkbox idFor='idFor2' />`;
export const CheckBoxDisabled = `<Checkbox idFor='idFor3' disabled={true} />`;
export const CheckBoxContent = `<Checkbox idFor='idFor4' content='checkbox' />`;

// RADIO
export const RadioDefault = `<Radio idFor='idFor5' name='radio56' />
<Radio idFor='idFor6' name='radio56' />`;
export const RadioChecked = `<Radio idFor='idFor7' content='radio7' name='radio78' />
<Radio idFor='idFor8' content='radio8' name='radio78' />`;
export const RadioDisabled = `<Radio idFor='idFor9' content='radio9' disabled={true} name='radio910' />
<Radio idFor='idFor10' content='radio10' disabled={true} name='radio910' />`;

// TAB
export const tabDefault = `const tabs = [
  { label: 'TAB1', content: <TabContent1 /> },
  { label: 'TAB2', content: <TabContent2 /> },
  { label: 'TAB3', content: <TabContent3 /> },
  { label: 'TAB이 길어지면', content: <TabContent4 /> },
];

<Tab tabs={tabs} />`;

// BADGE
export const badgeDefault = `<ProfileBadge  />`;

// MODAL
export const modalDefault = `const { openModal } = useModalStore();

<MainBtn name='모달1번' onClick={() => openModal('modal1')} />
<Modal modalId='modal1' title='모달1번' content={<ModalContent1 />} />`;
export const modalSize = `const { openModal } = useModalStore();

<MainBtn name='모달2번' onClick={() => openModal('modal2')} />
<Modal
  modalId='modal2'
  title='모달2번'
  content={<ModalContent2 />}
  width='80rem'
  height='80vh'
  borderRadius='4px'
  firstBtn={true}
  firstBtnName='첫 번째 버튼'
  firstBtnOnClick={() => console.log('첫 번째 버튼 클릭')}
  secondBtn={true}
  secondBtnName='두 번째 버튼'
  secondBtnOnClick={() => console.log('두 번째 버튼 클릭')}
/>`;

// Confirm
export const confirmDefault = `
const { openConfirm, closeConfirm } = useConfirmStore();
const { addToasts } = useToastStore();

<MainBtn name='confirm' onClick={() => openConfirm('confirm')} />
<Confirm
  confirmId='confirm'
  title='Title'
  content='Content'
  width='35em'
  height='17vh'
  borderRadius='2rem'
  trueBtn={true}
  trueBtnName='확인'
  trueBtnOnClick={() => {
    addToasts({ type: 'success', title: '확인되었습니다.', id: Date.now().toString() });
    closeConfirm('confirm');
  }}
  falseBtn={true}
  falseBtnName='취소'
  falseBtnOnClick={() => {
    addToasts({ type: 'error', title: '취소되었습니다.', id: Date.now().toString() });
    closeConfirm('confirm');
  }}
/>`;
