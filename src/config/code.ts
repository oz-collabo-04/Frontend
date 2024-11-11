// BUTTON
export const mainBtnDefault = `<MainBtn name={'button'} />`;
export const mainBtnLarge = `<MainBtn name='Medium Button' size='large' />`;
export const mainBtnMedium = `<MainBtn name="Medium Button" size="medium" />`;
export const mainBtnSmall = `<MainBtn name='Small Button' size='small' />`;
export const mainBtnColor = `<MainBtn name='Color Button' backgroundColor={'red'} />`;
export const mainBtnDisabled = `<MainBtn name='Disabled Button' disabled={true} />`;

// ICON-BUTTON
export const iconBtnDefault = `<IconBtn src='/image/test_icon.svg' alt='아이콘버튼' />`;
export const iconBtnIsFull = `<IconBtn src='/image/dalbong.jpg' alt='아이콘버튼' isFull={true} />`;

// INPUT
export const InputDefault = `<Input type='text' placeholder='placeholder' />`;
export const InputWidth = `<Input type='text' placeholder='placeholder' width='100%' />`;
export const InputDisabled = `<Input type='text' placeholder='placeholder' disabled={true} />`;

// TEXTAREA
export const TextareaDefault = `<Textarea placeholder='placeholder' />`;
export const TextareaSize = `<Textarea width='100%' height='8rem' placeholder='placeholder' />`;
export const TextareaDisabled = `<Textarea placeholder='placeholder' disabled={true} />`;

// CHECKBOX
export const CheckboxDefault = `<Checkbox idFor='idFor1' />`;
export const CheckboxChecked = `<Checkbox idFor='idFor2' defaultChecked={true} />`;
export const CheckBoxDisabled = `<Checkbox idFor='idFor3' disabled={true} />`;
export const CheckBoxContent = `<Checkbox idFor='idFor4' content='checkbox' />`;

// RADIO
export const RadioDefault = `<Radio idFor='idFor5' name='radio56' />
<Radio idFor='idFor6' name='radio56' />`;
export const RadioChecked = `<Radio idFor='idFor7' content='radio7' name='radio78' />
<Radio idFor='idFor8' content='radio8' defaultChecked={true} name='radio78' />`;
export const RadioDisabled = `<Radio idFor='idFor9' content='radio9' disabled={true} name='radio910' />
<Radio idFor='idFor10' content='radio10' defaultChecked={true} disabled={true} name='radio910' />`;

export const tabDefault = `const tabs = [
  { label: 'TAB1', content: <TabContent1 /> },
  { label: 'TAB2', content: <TabContent2 /> },
  { label: 'TAB3', content: <TabContent3 /> },
  { label: 'TAB이 길어지면', content: <TabContent4 /> },
];

<Tab tabs={tabs} />`;
