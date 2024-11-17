import CopyButton from '@/config/CopyButton';
import './global.scss';
import {
  badgeDefault,
  CheckBoxContent,
  CheckboxDefault,
  CheckBoxDisabled,
  FuncTitleCode,
  iconBtnDefault,
  iconBtnIsFull,
  iconBtnSize,
  InputDefault,
  InputDisabled,
  InputPrice,
  InputWidth,
  LargeTitleCode,
  mainBtnColor,
  mainBtnDefault,
  mainBtnDisabled,
  mainBtnExtraClass,
  mainBtnLarge,
  mainBtnMedium,
  mainBtnSize,
  mainBtnSmall,
  MediumTitleCode,
  modalDefault,
  modalSize,
  pageTitleDefault,
  RadioChecked,
  RadioDefault,
  RadioDisabled,
  SmallTitleCode,
  tabDefault,
  TextareaDefault,
  TextareaDisabled,
  TextareaSize,
  XLargeTitleCode,
  XSmallTitleCode,
} from './config/code';
import MainBtn from './components/Button/MainBtn';
import IconBtn from './components/IconButton/IconBtn';
import Input from './components/Input/Input';
import Textarea from './components/Textarea/Textarea';
import Checkbox from './components/Checkbox/Checkbox';
import Radio from './components/Radio/Radio';
import Tab from './components/Tab/Tab';
import TabContent1 from './components/Tab/TabContent1';
import TabContent2 from './components/Tab/TabContent2';
import TabContent3 from './components/Tab/TabContent3';
import TabContent4 from './components/Tab/TabContent4';
import XLargeTitle from './components/Title/XLargeTitle';
import LargeTitle from './components/Title/LargeTitle';
import MediumTitle from './components/Title/MediumTitle';
import SmallTitle from './components/Title/SmallTitle';
import XSmallTitle from './components/Title/XSmallTitle';
import ProfileBadge from './components/Badge/ProfileBadge';
import Modal from './components/Modal/Modal';
import ModalContent1 from './components/Modal/ModalContent1';
import { useModalStore } from './store/modalStore';
import ModalContent2 from './components/Modal/ModalContent2';
import NumberInput from './components/Input/NumberInput';
import { useState } from 'react';
import PageTitle from './components/PageTitle/PageTitle';

function Common() {
  const { openModal } = useModalStore();

  const [amount, setAmount] = useState<string | number>('');

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value); // 부모 상태 업데이트
  };

  const tabs = [
    { label: 'TAB1', content: <TabContent1 /> },
    { label: 'TAB2', content: <TabContent2 /> },
    { label: 'TAB3', content: <TabContent3 /> },
    { label: 'TAB이 길어지면', content: <TabContent4 /> },
  ];

  return (
    <>
      {/* TITLE */}
      <div className='commonBox'>
        <h6 className='title'>Title</h6>
        <div className='table-box'>
          <table>
            <colgroup>
              <col width='300px' />
              <col width='' />
            </colgroup>
            <thead>
              <tr>
                <th>UI</th>
                <th>CODE</th>
              </tr>
            </thead>
            <tbody>
              {/* XLargeTitle */}
              <tr>
                <td>
                  <XLargeTitle title='h2 타이틀' />
                </td>
                <td>
                  <code>{XLargeTitleCode}</code>
                  <CopyButton code={XLargeTitleCode} />
                </td>
              </tr>

              {/* LargeTitle */}
              <tr>
                <td>
                  <LargeTitle title='h3 타이틀' />
                </td>
                <td>
                  <code>{LargeTitleCode}</code>
                  <CopyButton code={LargeTitleCode} />
                </td>
              </tr>

              {/* MediumTitle */}
              <tr>
                <td>
                  <MediumTitle title='h4 타이틀' />
                </td>
                <td>
                  <code>{MediumTitleCode}</code>
                  <CopyButton code={MediumTitleCode} />
                </td>
              </tr>

              {/* SmallTitle */}
              <tr>
                <td>
                  <SmallTitle title='h5 타이틀' />
                </td>
                <td>
                  <code>{SmallTitleCode}</code>
                  <CopyButton code={SmallTitleCode} />
                </td>
              </tr>

              {/* XSmallTitle */}
              <tr>
                <td>
                  <XSmallTitle title='h6 타이틀' />
                </td>
                <td>
                  <code>{XSmallTitleCode}</code>
                  <CopyButton code={XSmallTitleCode} />
                </td>
              </tr>

              {/* newClass / fontSize / fontWeight */}
              <tr>
                <td>
                  <XSmallTitle title='기능추가' fontSize='40px' fontWeight='300' extraClass='newClass' />
                </td>
                <td>
                  <code>{FuncTitleCode}</code>
                  <CopyButton code={FuncTitleCode} />
                </td>
              </tr>

              {/* PageTitle */}
              <tr>
                <td>
                  <PageTitle title='페이지 제목' isPrevBtn={true} prevUrl='/' />
                </td>
                <td>
                  <code>{pageTitleDefault}</code>
                  <CopyButton code={pageTitleDefault} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* BUTTON */}
      <div className='commonBox'>
        <h6 className='title'>Button</h6>
        <div className='table-box'>
          <table>
            <colgroup>
              <col width='300px' />
              <col width='' />
            </colgroup>
            <thead>
              <tr>
                <th>UI</th>
                <th>CODE</th>
              </tr>
            </thead>
            <tbody>
              {/* 기본 버튼 */}
              <tr>
                <td>
                  <MainBtn name={'button'} />
                </td>
                <td>
                  <code>{mainBtnDefault}</code>
                  <CopyButton code={mainBtnDefault} />
                </td>
              </tr>

              {/* Large 버튼 */}
              <tr>
                <td>
                  <MainBtn name='large' size='large' />
                </td>
                <td>
                  <code>{mainBtnLarge}</code>
                  <CopyButton code={mainBtnLarge} />
                </td>
              </tr>

              {/* Medium 버튼 */}
              <tr>
                <td>
                  <MainBtn name='medium' size='medium' />
                </td>
                <td>
                  <code>{mainBtnMedium}</code>
                  <CopyButton code={mainBtnMedium} />
                </td>
              </tr>

              {/* Small 버튼 */}
              <tr>
                <td>
                  <MainBtn name='small' size='small' />
                </td>
                <td>
                  <code>{mainBtnSmall}</code>
                  <CopyButton code={mainBtnSmall} />
                </td>
              </tr>

              {/* width / height */}
              <tr>
                <td>
                  <MainBtn name='width/height' width='auto' height='3.2rem' />
                </td>
                <td>
                  <code>{mainBtnSize}</code>
                  <CopyButton code={mainBtnSize} />
                </td>
              </tr>

              {/* backgroundColor / borderColor / color */}
              <tr>
                <td>
                  <MainBtn name='Color Button' backgroundColor='skyblue' borderColor='green' color='red' />
                </td>
                <td>
                  <code>{mainBtnColor}</code>
                  <CopyButton code={mainBtnColor} />
                </td>
              </tr>

              {/* ExtraClass */}
              <tr>
                <td>
                  <MainBtn name='extraClass' extraClass='extraClass' />
                </td>
                <td>
                  <code>{mainBtnExtraClass}</code>
                  <CopyButton code={mainBtnExtraClass} />
                </td>
              </tr>

              {/* Disabled */}
              <tr>
                <td>
                  <MainBtn name='Disabled Button' disabled={true} />
                </td>
                <td>
                  <code>{mainBtnDisabled}</code>
                  <CopyButton code={mainBtnDisabled} />
                </td>
              </tr>

              {/* 아이콘버튼 */}
              <tr>
                <td>
                  <IconBtn src='/image/test_icon.svg' alt='아이콘버튼' />
                </td>
                <td>
                  <code>{iconBtnDefault}</code>
                  <CopyButton code={iconBtnDefault} />
                </td>
              </tr>

              {/* 아이콘버튼(image full) */}
              <tr>
                <td>
                  <IconBtn src='/image/dalbong.jpg' alt='아이콘버튼' isFull={true} />
                </td>
                <td>
                  <code>{iconBtnIsFull}</code>
                  <CopyButton code={iconBtnIsFull} />
                </td>
              </tr>

              {/* 아이콘 버튼 width / height */}
              <tr>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <IconBtn width='100px' height='100px' src='' alt='아이콘버튼' />
                    <IconBtn width='50px' height='50px' src='/image/dalbong.jpg' alt='아이콘버튼' isFull={true} />
                  </div>
                </td>
                <td>
                  <code>{iconBtnSize}</code>
                  <CopyButton code={iconBtnSize} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* INPUT */}
      <div className='commonBox'>
        <h6 className='title'>Input</h6>
        <div className='table-box'>
          <table>
            <colgroup>
              <col width='400px' />
              <col width='' />
            </colgroup>
            <thead>
              <tr>
                <th>UI</th>
                <th>CODE</th>
              </tr>
            </thead>
            <tbody>
              {/* 기본 인풋 */}
              <tr>
                <td>
                  <Input type='text' placeholder='placeholder' />
                </td>
                <td>
                  <code>{InputDefault}</code>
                  <CopyButton code={InputDefault} />
                </td>
              </tr>

              {/* width / height */}
              <tr>
                <td>
                  <Input type='text' placeholder='placeholder' width='100%' height='70px' />
                </td>
                <td>
                  <code>{InputWidth}</code>
                  <CopyButton code={InputWidth} />
                </td>
              </tr>

              {/* input price */}
              <tr>
                <td>
                  <NumberInput
                    placeholder='금액을 입력하세요'
                    value={amount}
                    onChange={handleAmountChange}
                    width='100%'
                  />
                </td>
                <td>
                  <code>{InputPrice}</code>
                  <CopyButton code={InputPrice} />
                </td>
              </tr>

              {/* Disabled */}
              <tr>
                <td>
                  <Input type='text' placeholder='placeholder' disabled={true} />
                </td>
                <td>
                  <code>{InputDisabled}</code>
                  <CopyButton code={InputDisabled} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* TEXTAREA */}
      <div className='commonBox'>
        <h6 className='title'>Textarea</h6>
        <div className='table-box'>
          <table>
            <colgroup>
              <col width='400px' />
              <col width='' />
            </colgroup>
            <thead>
              <tr>
                <th>UI</th>
                <th>CODE</th>
              </tr>
            </thead>
            <tbody>
              {/* 기본 textarea */}
              <tr>
                <td>
                  <Textarea placeholder='placeholder' />
                </td>
                <td>
                  <code>{TextareaDefault}</code>
                  <CopyButton code={TextareaDefault} />
                </td>
              </tr>

              {/* width / height */}
              <tr>
                <td>
                  <Textarea width='100%' height='8rem' placeholder='placeholder' />
                </td>
                <td>
                  <code>{TextareaSize}</code>
                  <CopyButton code={TextareaSize} />
                </td>
              </tr>

              {/* Disabled */}
              <tr>
                <td>
                  <Textarea placeholder='placeholder' disabled={true} />
                </td>
                <td>
                  <code>{TextareaDisabled}</code>
                  <CopyButton code={TextareaDisabled} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* CHECKBOX / RADIO */}
      <div className='commonBox'>
        <h6 className='title'>Checkbox / Radio</h6>
        <div className='table-box'>
          <table>
            <colgroup>
              <col width='200px' />
              <col width='' />
            </colgroup>
            <thead>
              <tr>
                <th>UI</th>
                <th>CODE</th>
              </tr>
            </thead>
            <tbody>
              {/* 기본 체크박스 */}
              <tr>
                <td>
                  <Checkbox idFor='idFor1' />
                </td>
                <td>
                  <code>{CheckboxDefault}</code>
                  <CopyButton code={CheckboxDefault} />
                </td>
              </tr>

              {/* 체크박스 - disabled */}
              <tr>
                <td>
                  <Checkbox idFor='idFor3' disabled={true} />
                </td>
                <td>
                  <code>{CheckBoxDisabled}</code>
                  <CopyButton code={CheckBoxDisabled} />
                </td>
              </tr>

              {/* 체크박스 + 텍스트 */}
              <tr>
                <td>
                  <Checkbox idFor='idFor4' content='checkbox' />
                </td>
                <td>
                  <code>{CheckBoxContent}</code>
                  <CopyButton code={CheckBoxContent} />
                </td>
              </tr>

              {/* 기본 라디오 */}
              <tr>
                <td>
                  <Radio idFor='idFor5' name='radio56' />
                  <Radio idFor='idFor6' name='radio56' />
                </td>
                <td>
                  <code>{RadioDefault}</code>
                  <CopyButton code={RadioDefault} />
                </td>
              </tr>

              {/* 라디오 - checked */}
              <tr>
                <td>
                  <Radio idFor='idFor7' content='radio7' name='radio78' />
                  <Radio idFor='idFor8' content='radio8' name='radio78' />
                </td>
                <td>
                  <code>{RadioChecked}</code>
                  <CopyButton code={RadioChecked} />
                </td>
              </tr>

              {/* 라디오 - disabled */}
              <tr>
                <td>
                  <Radio idFor='idFor9' content='radio9' disabled={true} name='radio910' />
                  <Radio idFor='idFor10' content='radio10' disabled={true} name='radio910' />
                </td>
                <td>
                  <code>{RadioDisabled}</code>
                  <CopyButton code={RadioDisabled} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* TAB */}
      <div className='commonBox'>
        <h6 className='title'>Tab</h6>
        <div className='table-box'>
          <table>
            <colgroup>
              <col width='500px' />
              <col width='' />
            </colgroup>
            <thead>
              <tr>
                <th>UI</th>
                <th>CODE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Tab tabs={tabs} />
                </td>
                <td>
                  <code>{tabDefault}</code>
                  <CopyButton code={tabDefault} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* BADGE */}
      <div className='commonBox'>
        <h6 className='title'>badge</h6>
        <div className='table-box'>
          <table>
            <colgroup>
              <col width='500px' />
              <col width='' />
            </colgroup>
            <thead>
              <tr>
                <th>UI</th>
                <th>CODE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <ProfileBadge />
                </td>
                <td>
                  <code>{badgeDefault}</code>
                  <CopyButton code={badgeDefault} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL */}
      <div className='commonBox'>
        <h6 className='title'>Modal</h6>
        <div className='table-box'>
          <table>
            <colgroup>
              <col width='200px' />
              <col width='' />
            </colgroup>
            <thead>
              <tr>
                <th>UI</th>
                <th>CODE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <MainBtn name='모달1번' onClick={() => openModal('modal1')} />
                  <Modal modalId='modal1' title='모달1번' content={<ModalContent1 />} />
                </td>
                <td>
                  <code>{modalDefault}</code>
                  <CopyButton code={modalDefault} />
                </td>
              </tr>
              <tr>
                <td>
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
                  />
                </td>
                <td>
                  <code>{modalSize}</code>
                  <CopyButton code={modalSize} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Common;
