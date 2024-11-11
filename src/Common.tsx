import CopyButton from '@/config/CopyButton';
import './global.scss';
import {
  CheckboxChecked,
  CheckBoxContent,
  CheckboxDefault,
  CheckBoxDisabled,
  iconBtnDefault,
  iconBtnIsFull,
  InputDefault,
  InputDisabled,
  InputWidth,
  mainBtnColor,
  mainBtnDefault,
  mainBtnDisabled,
  mainBtnLarge,
  mainBtnMedium,
  mainBtnSmall,
  RadioChecked,
  RadioDefault,
  RadioDisabled,
  tabDefault,
  TextareaDefault,
  TextareaDisabled,
  TextareaSize,
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

function Common() {
  const tabs = [
    { label: 'TAB1', content: <TabContent1 /> },
    { label: 'TAB2', content: <TabContent2 /> },
    { label: 'TAB3', content: <TabContent3 /> },
    { label: 'TAB이 길어지면', content: <TabContent4 /> },
  ];

  return (
    <>
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
              <tr>
                <td>
                  <MainBtn name={'button'} />
                </td>
                <td>
                  <code>{mainBtnDefault}</code>
                  <CopyButton code={mainBtnDefault} />
                </td>
              </tr>
              <tr>
                <td>
                  <MainBtn name='Large Button' size='large' />
                </td>
                <td>
                  <code>{mainBtnLarge}</code>
                  <CopyButton code={mainBtnLarge} />
                </td>
              </tr>
              <tr>
                <td>
                  <MainBtn name='Medium Button' size='medium' />
                </td>
                <td>
                  <code>{mainBtnMedium}</code>
                  <CopyButton code={mainBtnMedium} />
                </td>
              </tr>
              <tr>
                <td>
                  <MainBtn name='Small Button' size='small' />
                </td>
                <td>
                  <code>{mainBtnSmall}</code>
                  <CopyButton code={mainBtnSmall} />
                </td>
              </tr>
              <tr>
                <td>
                  <MainBtn name='Color Button' backgroundColor={'pink'} />
                </td>
                <td>
                  <code>{mainBtnColor}</code>
                  <CopyButton code={mainBtnColor} />
                </td>
              </tr>
              <tr>
                <td>
                  <MainBtn name='Disabled Button' disabled={true} />
                </td>
                <td>
                  <code>{mainBtnDisabled}</code>
                  <CopyButton code={mainBtnDisabled} />
                </td>
              </tr>
              <tr>
                <td>
                  <IconBtn src='/image/test_icon.svg' alt='아이콘버튼' />
                </td>
                <td>
                  <code>{iconBtnDefault}</code>
                  <CopyButton code={iconBtnDefault} />
                </td>
              </tr>
              <tr>
                <td>
                  <IconBtn src='/image/dalbong.jpg' alt='아이콘버튼' isFull={true} />
                </td>
                <td>
                  <code>{iconBtnIsFull}</code>
                  <CopyButton code={iconBtnIsFull} />
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
              <tr>
                <td>
                  <Input type='text' placeholder='placeholder' />
                </td>
                <td>
                  <code>{InputDefault}</code>
                  <CopyButton code={InputDefault} />
                </td>
              </tr>
              <tr>
                <td>
                  <Input type='text' placeholder='placeholder' width='100%' />
                </td>
                <td>
                  <code>{InputWidth}</code>
                  <CopyButton code={InputWidth} />
                </td>
              </tr>
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
              <tr>
                <td>
                  <Textarea placeholder='placeholder' />
                </td>
                <td>
                  <code>{TextareaDefault}</code>
                  <CopyButton code={TextareaDefault} />
                </td>
              </tr>
              <tr>
                <td>
                  <Textarea width='100%' height='8rem' placeholder='placeholder' />
                </td>
                <td>
                  <code>{TextareaSize}</code>
                  <CopyButton code={TextareaSize} />
                </td>
              </tr>
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
              <tr>
                <td>
                  <Checkbox idFor='idFor1' />
                </td>
                <td>
                  <code>{CheckboxDefault}</code>
                  <CopyButton code={CheckboxDefault} />
                </td>
              </tr>
              <tr>
                <td>
                  <Checkbox idFor='idFor2' defaultChecked={true} />
                </td>
                <td>
                  <code>{CheckboxChecked}</code>
                  <CopyButton code={CheckboxChecked} />
                </td>
              </tr>
              <tr>
                <td>
                  <Checkbox idFor='idFor3' disabled={true} />
                </td>
                <td>
                  <code>{CheckBoxDisabled}</code>
                  <CopyButton code={CheckBoxDisabled} />
                </td>
              </tr>
              <tr>
                <td>
                  <Checkbox idFor='idFor4' content='checkbox' />
                </td>
                <td>
                  <code>{CheckBoxContent}</code>
                  <CopyButton code={CheckBoxContent} />
                </td>
              </tr>
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
              <tr>
                <td>
                  <Radio idFor='idFor7' content='radio7' name='radio78' />
                  <Radio idFor='idFor8' content='radio8' defaultChecked={true} name='radio78' />
                </td>
                <td>
                  <code>{RadioChecked}</code>
                  <CopyButton code={RadioChecked} />
                </td>
              </tr>
              <tr>
                <td>
                  <Radio idFor='idFor9' content='radio9' disabled={true} name='radio910' />
                  <Radio idFor='idFor10' content='radio10' defaultChecked={true} disabled={true} name='radio910' />
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
    </>
  );
}

export default Common;
