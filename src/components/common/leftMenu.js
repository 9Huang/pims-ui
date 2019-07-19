import React from 'react'
import { Icon, Menu } from "antd";

const { SubMenu, Item } = Menu;

class LeftMenu extends React.Component {

    constructor(props) {
        super(props);
        this.menu = this.props.menu;
    }

    render() {
        return (
            <Menu
                mode={this.menu.mode}
                defaultOpenKeys={this.menu.defaultOpenKeys}
                defaultSelectedKeys={this.menu.defaultSelectedKeys}
                style={this.menu.style}>
                {
                    this.menu.subMenus.map((subMenu) => {
                        return <SubMenu key={subMenu.key} title={<span><Icon type={subMenu.iconType}/>{subMenu.title}</span>}>
                            {
                                subMenu.items.map((item) => {
                                    return <Item key={item.key}>{item.text}</Item>;
                                })
                            }
                            </SubMenu>;
                    })
                }
            </Menu>
        );
    }

}

LeftMenu.defaultProps = {
    menu : {
        mode : "inline",
        defaultOpenKeys : ['sub1'],
        defaultSelectedKeys : ['1'],
        style : { height: '100%', borderRight: 0 },
        subMenus : [
            {
                key: "sub1",
                title:"一级菜单-01",
                iconType:"user",
                items : [
                    { key:"1", text:"二级菜单-01" },
                    { key:"2", text:"二级菜单-02" },
                    { key:"3", text:"二级菜单-03" }
                ]
            },{
                key: "sub2",
                title:"一级菜单-02",
                iconType:"user",
                items : [
                    { key:"4", text:"二级菜单-04" },
                    { key:"5", text:"二级菜单-05" },
                    { key:"6", text:"二级菜单-06" }
                ]
            },{
                key: "sub3",
                title:"一级菜单-03",
                iconType:"user",
                items : [
                    { key:"7", text:"二级菜单-07" },
                    { key:"8", text:"二级菜单-08" },
                    { key:"9", text:"二级菜单-09" }
                ]
            }
        ]
    }
};

export default LeftMenu