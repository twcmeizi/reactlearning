import React, { Component } from 'react'

function RadioGroup(props) {
// 如果props.children是jsx，此时它是不能修改的
    return (
        <div>
            {React.Children.map(props.children, child => {
                // 要修改child属性必须先克隆它
                return React.cloneElement(child, { name: props.name, radioValue: props.onClick });
            })}
        </div>
    );
}

class Radio extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var { children, radioValue, ...rest } = this.props;
        return (
            <label><input type="radio" {...rest} onChange={radioValue}></input>{children}</label>
        )
    }
}
function Radio1({ children, ...rest }) {
    return (
        <label>
            <input type="radio" {...rest} />
            {children}
        </label>
    );
}

export default class RadioIndex extends Component {
    radioValue = (e) => {
        console.log(e.target.value)
    }
    render() {
        return (
            <div>
                {/* 如果使用ref呢 */}
                <RadioGroup name="js" onClick={this.radioValue}>
                    <Radio value="react">react</Radio>
                    <Radio value="vue">vue</Radio>
                    <Radio value="angular">angular</Radio>
                </RadioGroup>
                <RadioGroup name="sex" onClick={this.radioValue}>
                    <Radio value="male">男性</Radio>
                    <Radio value="female">女性</Radio>
                </RadioGroup>
            </div>
        )
    }
}
