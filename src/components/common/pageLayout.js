import React from 'react'
import { Layout, PageHeader } from 'antd'

import NavigationMenu from "./navigationMenu";
import LeftMenu from "./leftMenu";

const { Header, Content, Sider } = Layout;

class PageLayout extends React.Component {

    render() {
        const breadcrumb = this.props.pageHeader.breadcrumb;
        return (
            <div>
                <Layout>
                    <Header className="header">
                        <div className="logo"></div>
                        <NavigationMenu menu={this.props.navigationMenu} />
                    </Header>
                    <Layout>
                        <Sider style={{ background: '#fff',height:'100%',width:'auto' }}>
                            <LeftMenu menu={this.props.leftMenu} />
                        </Sider>
                        <Layout style={{ padding: '0 24px 24px' }}>
                            <PageHeader title={ this.props.pageHeader.title } breadcrumb={{ breadcrumb }} />
                            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280, }} >
                                Content
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        );
    }

}


PageLayout.defaultProps = {
    leftMenu : {
        mode : "inline",
        defaultOpenKeys : ['sub1'],
        defaultSelectedKeys : ['1'],
        style : { height: '100%', borderRight: 0 },
        subMenus : [
            {
                key: "sub1",
                title:"一级菜单-01",
                iconType:"user",
                isRootMenu: true,
                items : [
                    { key:"1", text:"二级菜单-01", isRootMenu: false },
                    { key:"2", text:"二级菜单-02", isRootMenu: false },
                    { key:"3", text:"二级菜单-03", isRootMenu: false }
                ]
            },{
                key: "sub2",
                title:"一级菜单-02",
                iconType:"laptop",
                isRootMenu: true,
                items : [
                    { key:"4", text:"二级菜单-04", isRootMenu: false },
                    { key:"5", text:"二级菜单-05", isRootMenu: false },
                    { key:"6", text:"二级菜单-06", isRootMenu: false }
                ]
            },{
                key: "sub3",
                title:"一级菜单-03",
                iconType:"notification",
                isRootMenu: true,
                items : [
                    { key:"7", text:"二级菜单-07", isRootMenu: false },
                    { key:"8", text:"二级菜单-08", isRootMenu: false },
                    { key:"9", text:"二级菜单-09", isRootMenu: false }
                ]
            }
        ]
    },
    navigationMenu : {
        theme : "dark",
        mode : "horizontal",
        defaultSelectedKeys : [''],
        style : { lineHeight:'64px' },
        items : [
            {key : "1", value : "导航菜单-1"},
            {key : "2", value : "导航菜单-2"},
            {key : "3", value : "导航菜单-3"}
        ]
    },
    pageHeader : {
        title : "Hello",
        breadcrumb : [
            { path: 'index', breadcrumbName: 'First-level Menu', },
            { path: 'first', breadcrumbName: 'Second-level Menu', },
            { path: 'second', breadcrumbName: 'Third-level Menu', },
        ]
    }
};


export default PageLayout;