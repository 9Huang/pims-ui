import React from 'react'
import { Icon, Menu } from "antd";

const { SubMenu, Item } = Menu;

class LeftSubMenu extends React.Component {

    constructor(props) {
        super(props);
        this.subMenu = this.props.subMenu;
        this.parentMenu = {isRootMenu:false};
    }

    render() {
        console.log(JSON.stringify(this.subMenu))
        return (
            <SubMenu parentMenu={this.parentMenu}
                key={this.subMenu.key}
                title={<span><Icon type={this.subMenu.iconType}/>{this.subMenu.title}</span>}>
                {
                    this.subMenu.items.map((item) => {
                        return <Item key={item.key}>{item.text}</Item>;
                    })
                }
            </SubMenu>
        );
    }

}

LeftSubMenu.defaultProps = {
    subMenu : {
        key: "sub1",
        title:"一级菜单-01",
        iconType:"user",
        items : [
            { key:"1", text:"二级菜单-01" },
            { key:"2", text:"二级菜单-02" },
            { key:"3", text:"二级菜单-03" }
        ]
    }
}

export default LeftSubMenu;