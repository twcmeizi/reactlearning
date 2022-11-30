import React from 'react'
export default class LifeCycle extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            test: "测试"
        }
    }
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps', props, state)
        return {}
    }
    componentDidMount() {
        console.log('componentDidMount')
    }
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return true;
    }
    getSnapshotBeforeUpdate(prevprops, prevstate) {
        console.log("getSnapshotBeforeUpdate", prevprops, prevstate)
        return {
            cc: 11
        }
    }
    componentDidUpdate() {
        console.log("componentDidUpdate");
    }
    render() {
        console.log('render', this.state)
        return (
            <>
                <div dangerouslySetInnerHTML={{ __html: '<p>dddd</p>' }}></div>
                <div></div>
                <div>fgdg</div>
                <div></div>
                <button onClickCapture={() => { console.log('捕获阶段') }} onClick={(e) => {
                    window.a = e
                    console.log('冒泡阶段')
                    this.setState({
                        test: 'dd'
                    })
                }}>按钮</button>
                <input type="text" onPaste={(e) => { console.log(e); }} value={this.state.test} />
                <input
                    onChange={(e) => { this.setState({ test: e.target.value }) }}
                    onPaste={(e) => { console.log(e.clipboardData.getData('text')) }}
                />
            </>
        )
    }
}
