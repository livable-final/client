import Input from '@/components/common/Input';
import { useState } from 'react';

function Index() {
  // input 사용시 value, setValue state 지정후 props로 전달
  const [value, setValue] = useState('');
  // 적용 예시
  const [placeValue, setPlaceValue] = useState('');
  const [purposeValue, setPurposeValue] = useState('');

  return (
    <>
      <input type="text" placeholder="test" />
      {/* input default */}
      <Input
        variant="default"
        setValue={setValue}
        value={value}
        placeholder="inputText"
      />
      <Input
        variant="disabled"
        setValue={setValue}
        value={value}
        placeholder="inputText"
        isDisabled
      />
      <Input
        variant="default"
        // 적용 예시
        setValue={setPlaceValue}
        value={placeValue}
        placeholder="inputText"
        isError
      />
      {/* input icon box */}
      <Input
        inputIcon
        variant="default"
        // 적용예시
        setValue={setPurposeValue}
        value={purposeValue}
        placeholder="inputText"
      />
      <Input
        inputIcon
        variant="disabled"
        setValue={setValue}
        value={value}
        placeholder="inputText"
        isDisabled
      />
      <Input
        inputIcon
        variant="default"
        setValue={setValue}
        value={value}
        placeholder="inputText"
        isError
        errorType="test"
      />
      {/* input textarea */}
      <Input
        textarea
        variant="default"
        setValue={setValue}
        value={value}
        placeholder="방문목적을 입력해주세요"
      />
      <Input
        textarea
        variant="disabled"
        setValue={setValue}
        value={value}
        placeholder="방문목적을 입력해주세요"
        isDisabled
      />
    </>
  );
}

export default Index;
