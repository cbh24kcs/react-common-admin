import React, { Suspense } from "react"
import { Spin } from "antd";

export const lozyLoad = (Component: React.LazyExoticComponent<React.FC>): React.ReactNode => {

    // 加载组件样式
    const spinStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    }

    return (
        <Suspense fallback={<Spin size="large" style={spinStyle} />}>
            <Component />
        </Suspense>
    )
}
