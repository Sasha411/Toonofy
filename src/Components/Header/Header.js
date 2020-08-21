import React, { Component } from 'react'
import * as S from './style'
import ToonofyLogo from '../Svg Icons/Toonfony-logo/Toonofy-Logo'

export class Header extends Component {
    render() {
        return (
            <S.Container>
                <S.ContainerRow>
                <S.ContainerRowLeft>
                    <ToonofyLogo />
                </S.ContainerRowLeft>    
                <S.ContainerRowRight>
                    <S.NavigationText>HOME</S.NavigationText>
                    <S.NavigationText>OLYMPIADS</S.NavigationText>
                    <S.NavigationTextCurrrent>YLP</S.NavigationTextCurrrent>
                    <S.NavigationText>WORKSHEETS</S.NavigationText>
                    <S.NavigationText>VIDEOS</S.NavigationText>
                    <S.NavigationText>LOGIN</S.NavigationText>
                </S.ContainerRowRight>    
                </S.ContainerRow>
                
            </S.Container>
        )
    }
}

export default Header
