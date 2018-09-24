import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div `
    position: relative;
    height: 58px;
    border-bottom: 1px solid #f0f0f0;
    background: #fff
    box-sizing: border-box
`

export const Logo = styled.a `
    position: absolute;
    top: 0;
    left: 0;
    height: 58px;
    display: block;
    width: 100px;
    height: 56px;
    background: url(${logoPic});
    background-size: contain;
`
export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
    background: pink
`