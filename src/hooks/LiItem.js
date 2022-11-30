import React, { useState } from 'react';

// class LiItem extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//         };
//     }

//     render() {
//         console.log('liitem', this.props)
//         return <li>{this.props.title}</li>;
//     }
// }
function LiItem(props) {
    console.log(props);
    const [id, setid] = useState(props.match.params.id);
    //执行数据获取
    return <li>{props.title}</li>;
}


export default LiItem;