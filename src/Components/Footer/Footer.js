import React from 'react'
import * as S from './style'

const Footer = () => {
    return (
        <S.Container>
            <S.ContainerOuterBox>
                <S.ContentLeft>©2020-25 Toonofy Global Pvt. Ltd. All rights reserved.</S.ContentLeft>
                <S.ContentRight>
                    <S.NavButtons><i style={{backgroundColor: "white", color: "#377DC8",padding: "4px"}} class="fa fa-3x fa-instagram" aria-hidden="true"></i></S.NavButtons>
                    <S.NavButtons><i style={{backgroundColor: "white", color: "#377DC8",padding: "4px"}} class="fa fa-3x fa-youtube-play" aria-hidden="true"></i></S.NavButtons>
                    <S.NavButtons><i style={{backgroundColor: "white", color: "#377DC8",padding: "4px"}} class="fa fa-3x fa-twitter-square" aria-hidden="true"></i></S.NavButtons>
                    <S.NavButtons><i style={{backgroundColor: "white", color: "#377DC8",padding: "4px"}} class="fa fa-3x fa-facebook" aria-hidden="true"></i></S.NavButtons>
                    <S.NavButtons><i style={{backgroundColor: "white", color: "#377DC8",padding: "4px"}} class="fa fa-3x fa-tumblr-square" aria-hidden="true"></i></S.NavButtons>
                    <S.NavButtons><i style={{backgroundColor: "white", color: "#377DC8",padding: "4px"}} class="fa fa-3x fa-linkedin-square" aria-hidden="true"></i></S.NavButtons>
                    <S.NavButtons><i style={{backgroundColor: "white", color: "#377DC8",padding: "4px"}} class="fa fa-3x fa-pinterest-square" aria-hidden="true"></i></S.NavButtons>
                </S.ContentRight>
            </S.ContainerOuterBox>
        </S.Container>
    )
}

export default Footer
