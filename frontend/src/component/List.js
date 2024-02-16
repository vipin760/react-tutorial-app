import { Component } from "react";

class List extends Component{
state={
    data:[
        {id:1001,name:"jhone",age:26},
        {id:1002,name:"samuel",age:26}
    ]
}


    render(){
        return(
         <div>
            <ul>
                {
                    this.state.data.map((data,index)=>(
                        <li key={index}>{index}-{data.id}-{data.name}-{data.age}</li>
                    ))
                }
            </ul>
         </div>

        )
    }
} 


export default List