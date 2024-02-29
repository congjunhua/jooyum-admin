import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons'
import { Menu } from 'antd'

export default function SideMenu() {
    function getItem(label, key, icon, children, type) {
        return {
            key,
            icon,
            children,
            label,
            type,
        }
    }

    const items = [
        getItem('功能 A', 'sub1', <MailOutlined />, [
            getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
            getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
        ]),
        getItem('功能 B', 'sub2', <AppstoreOutlined />, [
            getItem('Option 5', '5'),
            getItem('Option 6', '6'),
            getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
        ]),
        {
            type: 'divider',
        },
        getItem('功能 C', 'sub4', <SettingOutlined />, [
            getItem('Option 9', '9'),
            getItem('Option 10', '10'),
            getItem('Option 11', '11'),
            getItem('Option 12', '12'),
        ]),
        getItem('功能 D', 'sub5', <MailOutlined />, [
            getItem('Item 1', 'g3', null, [getItem('Option 1', '13'), getItem('Option 2', '14')], 'group'),
            getItem('Item 2', 'g4', null, [getItem('Option 3', '15'), getItem('Option 4', '16')], 'group'),
        ]),
        getItem('功能 E', 'sub6', <AppstoreOutlined />, [
            getItem('Option 5', '17'),
            getItem('Option 6', '18'),
            getItem('Submenu', 'sub7', null, [getItem('Option 70', '19'), getItem('Option 8', '20')]),
        ]),
        {
            type: 'divider',
        },
        getItem('功能 F', 'sub8', <SettingOutlined />, [
            getItem('Option 9', '21'),
            getItem('Option 10', '22'),
            getItem('Option 11', '23'),
            getItem('Option 12', '24'),
        ])
    ]

    return (
        <Menu
            style={{
                width: 256,
                color: 'grey',
                background: '#2A3138',
                position: 'fixed',
                top: '72px',
                left: '0'
            }}
            theme='dark'
            mode="inline"
            items={items}
        />
    )
}