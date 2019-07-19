import React from 'react'
import { Breadcrumb } from "antd";

class RightDesc extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Breadcrumb style={this.props.desc.style}>
                {
                    this.props.desc.items.map((value) => {
                        return <Breadcrumb.Item>{value}</Breadcrumb.Item>;
                    })
                }
            </Breadcrumb>
        );
    }

}

RightDesc.defaultProps = {
    desc : {
        style : { margin: '16px 0' },
        items : ["Home", "List", "App"]
    }
}

export default RightDesc;