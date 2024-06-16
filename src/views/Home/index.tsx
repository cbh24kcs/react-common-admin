import React, { useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import './style.scss'
import classnames from 'classnames'
import { styled } from "styled-components";

// 样式组件
const Title = styled.h1`

    color: ${props => props.color};

`

function Demo() {
    return <div>
        <h1>这是一个 Demo</h1>
    </div>
}



const Home: React.FC = () => {

    const [isRed, setIsRed] = useState(false)

    return <div>
        <h1 className={classnames({title: isRed})} onClick={() => setIsRed(!isRed)}>首页</h1>
        <Title color="red" >你好啊</Title>
        <Title color="green" >你好啊</Title>
        <Outlet />
    </div>
}

export default Home
