import { DatabaseFilled, HomeFilled, GoldFilled, CustomerServiceFilled } from '@ant-design/icons'
import css from './topmenu.module.css'

export default function TopMenu() {
    const menus = [
        {name: '首页', icon: <HomeFilled />},
        {name: '主数据', icon: <DatabaseFilled />},
        {name: '辖区管理', icon: <GoldFilled style={{fontSize: '20px'}}/>},
        {name: '销讯通', icon: <CustomerServiceFilled />}
    ]
    return (
        <div className={css.menus}>
            {
                menus.map(
                    ({name, icon}) => <div className={css.menu} key={name}>
                        <div className={css.icon}>
                            {icon}
                        </div>
                        <span className={css.name}>{name}</span>
                    </div>
                )
            }
        </div>
    )
}