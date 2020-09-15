import React from 'react';
import * as S from "../../assets/style/AddTimeLine";
import { moreButton } from '../../assets/img'

const AddPost = () => {
    return (
        <S.mainContainer>
            <S.mainSection>
                <S.writerInfoBox>
                    <S.profileImg>

                    </S.profileImg>
                    <S.form action="">
                        <S.writerInput placeholder="이야기를 들려주세요!" type="text">
                        </S.writerInput>
                    </S.form>
                    </S.writerInfoBox>
                    <S.buttonsContainer>
                        <S.buttonBox>
                            <S.buttonIcon src={moreButton}></S.buttonIcon>
                            녹음
                        </S.buttonBox>
                        <S.buttonBox>
                            <S.buttonIcon src={moreButton}></S.buttonIcon>
                            음성 파일
                        </S.buttonBox>
                        <S.buttonBox>
                            <S.buttonIcon src={moreButton}></S.buttonIcon>
                            음성 커버
                        </S.buttonBox>
                    </S.buttonsContainer>
            </S.mainSection>
        </S.mainContainer>
    );
};

export default AddPost;