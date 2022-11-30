import React,{useReducer,useRef} from 'react'

const initialState = {count: 10};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <br/>
      <UserHobby/>
    </>
  );
}
 function deepCopy(obj) {
  let newObj = obj.constructor === Array ? [] : {} //判断是深拷贝对象还是数组
  for (let i in obj) {
   if (typeof obj[i] === 'object') {
    newObj[i] = deepCopy(obj[i]) //  如果要拷贝的对象的属性依然是个复合类型，递归
   } else {
    newObj[i] = obj[i]
   }
  }
  return newObj
 }
 
// 存在问题，数组对象的深拷贝问题
const user=[{
    name:'lili',age:25,hobby:['read','cook']
},{
    name:'li',age:22,hobby:['game','sleep']
}]
function reducerUser(state,action) {
  console.log(4444444444)
  var data=deepCopy(state);  //问题，user[i].hobby指向的是同一个地址,解决了push两个的问题，但是还是会触发两次reducerUser
  console.log(data)
    switch (action.type) {
        case 'addHobby':
        
           data.map((v,i)=>{
            if(i == action.payload.id){
             v.hobby.push(action.payload.hobby);
            }
            return v;
          })
          return  data;
         
            break;
        case 'removeHobby':
          break;
        default:
            break;
    }
}

function UserHobby(){
  const [hobby,dispatch]=useReducer(reducerUser,user);
  // var hobbyref=React.createRef();//错误做法，只能在类组件里面进行使用
  var hobbyref=useRef(null)
  var index=0;
  function submit(){  console.log(555555555)
    // console.log(i ,hobbyref.current, hobbyref.current.value)
    if(hobbyref.current.value){
       dispatch({
       type:'addHobby',
       payload:{
         id:index,
         hobby: hobbyref.current.value
       }
     })
    }
    
  }
  function selectName(e){
    index=e.target.value
    console.log('dfs',e.target.value)
  }
  return(
    <div>
      <select  onChange={selectName}>
       {
          hobby.map((v,i)=>(
            <option key={v.name} value={i}>{v.name}</option>
          ))
       }
       </select>
       <input type="text"  ref={hobbyref}/>  <button onClick={submit}>提交</button>
      {
        hobby.map(function(v,i){
          return (<li key={i}>
            姓名：{v.name}
            <br/>
            爱好：{
              v.hobby.map((v,i)=>{
                return (<>
                <input type="checkbox" key={v} />
                {v}
                </>)
              })
            }
            {/* <input type="text"  ref={hobbyref}/>  <button data-id={i} onClick={submit.bind(this,i)}>提交</button> */}
          </li>)
        })
      }
    </div>
  )
}