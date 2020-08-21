import React from 'react'
import * as S from './style'
import VideoLogo from '../../Svg Icons/VideoTab1/VideoLogo'

export const FirstTab = () => {
        return (
                <S.Container>
                    <S.ContainerColumn>
                        <S.ContainerColumnTop>
                            <S.ContainerColumnTopText>Know why parents love our</S.ContainerColumnTopText>
                            <S.ContainerColumnTopTextSp>Year Long Program</S.ContainerColumnTopTextSp>
                        </S.ContainerColumnTop>
                        <S.ContainerColumnBottom>
                            <VideoLogo />
                        </S.ContainerColumnBottom>
                    </S.ContainerColumn>
                </S.Container>
        )
    
}

export default FirstTab
