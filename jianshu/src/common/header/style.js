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
    padding-right: 50px;
    background: white;
    box-sizing: border-box
`

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    color: #333;
    font-size: 17px;
    font-family: -apple-system,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a
    }
`

export const NavSearch = styled.input`
    width: 160px;
    height: 38px;
    margin-top: 9px;
    margin-left: 15px;
    padding: 0 40px 0 20px;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    box-sizing: border-box;
    font-size: 14px;
    &::placeholder {
        color: #999
    }
`

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`
export const Button = styled.div`
    float: right;
    border: 1px solid #ec6149b3;
    border-radius: 20px;
    font-size: 15px;
    line-height: 38px;
    padding: 0 12px;
    margin-top: 9px;
    margin-right: 20px;
    &.sign-up {
        width: 80px;
        text-align: center;
        color: #ea6f5a;
        box-sizing: border-box
    }
    &.writing {
        width: 100px;
        box-sizing: border-box;
        background: #ea6f5a;
        text-align: center;
        color: #fff
    }
`