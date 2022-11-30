import React, { useState, useEffect, Component } from 'react'
import { Link } from 'react-router-dom'
// export default function UseCallbackParent() {
//     const [first, setfirst] = useState(0);
//     const [count, setcount] = useState(0);
//   return (
//     <div>UseCallbackParent
//         <Children a={first}/>
//         <button onClick={()=>{setcount(count+1)}}>点击</button>
//     </div>
//   )
// }
// function Children(props) {
//     useEffect(() => {
//      console.log('children')
//     })

//     return(
//         <div>
//             Children
//         </div>
//     )
// }
// 问题是：父组件给子组件传递了一个参数，父组件修改了另一个参数，子组件重新渲染。



//想要实现父组件给子组件传递的参数不变，子组件不重新渲染。怎么实现。
class UseCallbackParent extends Component {
    constructor(props) {
        super(props);
        console.log("parent-constructor")
        this.state = {
            first: 0,
            count: 0,
            lists: [{ "title": "标题1", id: 1 }, { "title": "标题2", id: 2 }, { "title": "标题3", id: 3 }, { "title": "标题4", id: 4 }]
        }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("parent-getDerivedStateFromProps", nextProps, prevState)
        return { a: 1, b: 2 };
    }
    setCount = () => {
        this.setState((state, props) => {
            console.log(state, props)
            return {
                count: state.count + 1
            }
        }, () => {
            console.log('aaaaaaaaa')
        })
        this.setState({
            b: 4,
            a: 5
        }, () => {
            console.log('dddddd')
        })
        console.log(this.state)
    }
    // componentDidMount() {
    //     console.log("parent-componentDidMount挂载完成")
    // }
    componentDidUpdate() {
        console.log("parent-componentDidUpdate更新", this.state)
    }

    render() {
        console.log("parent-render-props", this.props)
        return (
            <div >
                {this.state.count}
                <Children a={this.state.first} />
                <button onClick={this.setCount} > 点击 </button>
                {
                    this.state.lists.map((list, index) => {
                        return (<Link to={`/hooks/${list.id}`}>{list.title}</Link>)
                    })
                }
            </div>
        );
    }
}
export default UseCallbackParent;



class Children extends Component {
    constructor(props) {
        console.log("child-constructor")
        super(props);
        this.state = {

        }
    }
    // componentDidMount() {
    //     console.log('child-componentDidMount挂载完成')
    // }
    componentDidUpdate() {
        console.log('child-componentDidUpdate-更新')
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        const { a } = nextProps;
        if (a !== prevState.a) {
            console.log(2222222222);
            return { a }
        }
        console.log("child-getDerivedStateFromProps", nextProps, prevState)
        return null;
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('child-shouldComponentUpdate-是否更新')
    //     console.log(this.props, nextProps, nextState)
    //     if (this.props.a == nextProps.a) {
    //         console.log('不更新')
    //         return false;
    //     } else {
    //         console.log('更新')
    //         return true;
    //     }

    // }
    render() {
        console.log('child-render渲染了', this.state)
        return (<div > {this.props.a} </div>);
    }
}