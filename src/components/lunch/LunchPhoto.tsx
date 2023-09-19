import Image from 'next/image';
import theme from '@/styles/theme';
import { useRef, useState } from 'react';
import { css } from '@emotion/react';
import { Camera, XSBlack } from '@/assets/icons';

function LunchPhoto() {
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const fileInput = useRef<HTMLInputElement>(null);

  // ref 클릭
  const onClickBtnHandler = () => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };

  // onChange
  const onChangehandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newImages = [...files];
    const newPreviews = [...previews];

    for (let i = 0; i < e.target.files!.length; i += 1) {
      const file = e.target.files![i];
      // 이미지 파일 5개로 제한
      if (newImages.length < 5) {
        // 이벤트객체의 파일을 newImages에 담기
        newImages.push(file);
        // 파일리더 객체 생성
        const reader = new FileReader();
        // 파일 읽어온 후 실행되는 콜백함수
        reader.onload = (event) => {
          // 읽어온 값을 갱신하기
          newPreviews.push(event.target!.result as string);
          setPreviews(newPreviews);
        };
        // 파일 객체를 읽어 base64 형태의 문자열로 변환
        reader.readAsDataURL(file);
      }
    }
    setFiles(newImages);
  };

  // 이미지 삭제
  const onClickDeleteHandler = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    const newImages = [...files];
    const newPreviews = [...previews];

    newImages.splice(index, 1);
    newPreviews.splice(index, 1);

    setFiles(newImages);
    setPreviews(newPreviews);
  };

  return (
    <section css={photoListStyles}>
      <button type="button" onClick={onClickBtnHandler} css={photoStyles}>
        <Camera />
        <p>0/5</p>
      </button>
      <input
        multiple
        type="file"
        ref={fileInput}
        onChange={onChangehandler}
        hidden
        accept="image/*,audio/*,video/mp4,video/x-m4v,application/pdf,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,.csv"
      />
      <ul css={photoListStyles}>
        {previews?.map((value, idx) => (
          <li key={value} css={photoStyles}>
            <Image
              css={ImageStyles}
              width={66}
              height={66}
              src={value}
              alt={`이미지${idx}`}
            />
            <button
              type="button"
              onClick={(e: React.MouseEvent) => onClickDeleteHandler(e, idx)}
            >
              <XSBlack />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

const photoListStyles = css`
  display: flex;
  gap: 8px;

  li {
    position: relative;
    button {
      position: absolute;
      top: 3px;
      right: 3px;
    }
  }
`;

const photoStyles = css`
  text-align: center;
  height: 66px;
  width: 66px;
  overflow: hidden;
  border-radius: 12px;
  border: 1px solid ${theme.palette.greyscale.grey20};
  font: ${theme.font.body.body4};
  color: ${theme.palette.greyscale.grey40};
`;

const ImageStyles = css`
  object-fit: cover;
`;
export default LunchPhoto;
