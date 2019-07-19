import React from 'react'
import { Menu } from 'antd'

class NavigationMenu extends React.Component {

    render() {
        return (
            <Menu
                theme={this.props.menu.theme}
                mode={this.props.menu.mode}
                defaultSelectedKeys={this.props.menu.defaultSelectedKeys}
                style={this.props.menu.style}>
                {
                    this.props.menu.items.map((element) => {
                        return <Menu.Item key={"nav-menu-"+element.key}>{element.value}</Menu.Item>;
                    })
                }
            </Menu>
        );
    }

}

NavigationMenu.defaultProps = {
    menu : {
        theme : "dark",
        mode : "horizontal",
        defaultSelectedKeys : [''],
        style : { lineHeight:'64px' },
        items : [
            {key : "1", value : "导航菜单-1"},
            {key : "2", value : "导航菜单-2"},
            {key : "3", value : "导航菜单-3"}
        ]
    }
}

export default NavigationMenu;