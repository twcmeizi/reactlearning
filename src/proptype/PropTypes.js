import React from 'react'
import PropTypes from 'prop-types';


class Father extends React.Component {
    render() {
        return (
            <>
                <Son name="字符串" title="我是string类型"></Son>
                <Son num={1} title="我是number类型"></Son>
                <Son arr={[1, 2, 3]} title="我是[]数组类型"></Son>
                <Son obj={{ a: 1, b: 2 }} title="我是{}对象类型"></Son>
                <Son func={this.func} title="我是函数()类型"></Son>

            </>
        )
    }
}
Father.propTypes = {
    num: PropTypes.string.isRequired
}
export default Father;

class Son extends React.Component {
    render() {
        return (
            <>
                <div>{this.props.name}</div>
                <div>{this.props.num}</div>
                <div>{this.props.arr}</div>
                <div>{this.props.obj}</div>
                <div>{this.props.func}</div>
            </>
        )
    }
}
Son.propTypes = {
    name: PropTypes.string
}


