import React, { Component } from "react";
import PropTypes from 'prop-types';

class CheckboxGroup extends Component {
    render() {
        // console.log(this.props)
        return (
            <div>
                {
                    React.Children.map(this.props.children, child => {
                        return React.cloneElement(child, { name: this.props.name, func: this.props.onChange })
                    })
                }
            </div>
        )
    }
}
function CheckboxInput(props) {
    let { children, func, ...rest } = props;
    return (
        <>
            <label>
                <input type="checkbox" {...rest} onChange={func} />
                {children}
                <br />
            </label>
        </>
    )
}

var arr = [
    {
        value: "react", checked: false
    },
    {
        value: "vue", checked: false
    },
    {
        value: "css", checked: false
    },
    {
        value: "html", checked: false
    },
    {
        value: "其他", checked: false
    }
]
var checknum = 0;
class CheckboxIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: arr,
            checkbox: [],
            selectNum: 0
        }
    }
    changeValue = (e) => {
        let item = e.target.value;
        let arr1 = this.state.arr.slice();
        let items = this.state.checkbox.slice();
        let index = items.indexOf(item);
        index === -1 ? items.push(item) : items.splice(index, 1);
        arr1[e.target.id].checked = !arr[e.target.id].checked;
        const arr2 = arr1.filter(it => !it.checked)	// 筛选出 checked 为 false 的个数
        checknum=arr2.length;
        this.setState({
            arr: arr1,
            checkbox: items,
            
        })
    }
    selectAll = (e) => {
        var bool = e.target.checked;

        var arr = this.state.arr;
        arr.map(item => {
            item.checked = bool;
            return item;
        })
      
        this.setState({
            arr: arr
        })

    }
    componentDidMount() {
        // this.setState({
        //     selectAll: checknum
        // })
    }
    render() {
        const { num, selectAll } = this.props;
        checknum=this.state.selectNum;
        return (
            <div>
                {selectAll &&
                    <label>
                        <input type="checkbox" disabled={false} value="选择" onChange={this.selectAll} />
                        选择
                        <br />
                    </label>
                }

                <CheckboxGroup name="jn" onChange={this.changeValue}>
                    {
                        arr.map((item, index) => {
                            console.log(item)
                            if (item.checked) {
                                console.log(33333333333333)
                                checknum=checknum+1;
                            }
                            console.log(checknum, num)
                            return <CheckboxInput disabled={num <= checknum ? item.checked ? false : true : false} key={index} id={index} value={item.value} checked={item.checked}>{item.value}</CheckboxInput>
                        })
                    }
                </CheckboxGroup>
            </div>
        );
    }
}

CheckboxIndex.propTypes = {
    num: PropTypes.number.isRequired
}
export default CheckboxIndex;