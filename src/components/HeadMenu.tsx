import { FC } from 'react'
import { Layout, Menu } from 'antd'

interface MainMenu {}

const { Header } = Layout

const MainMenu:FC<MainMenu> = () => {

    return (
        <Header>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={new Array(15).fill(null).map((_, index) => {
                    const key = index + 1;
                    return {
                        key,
                        label: `${key}`,
                    };
                })}
            />
        </Header>
    )
}

export default MainMenu