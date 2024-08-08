import React,{useState} from "react";



function TodoList(){

    const[task,setTask] = useState(['Eat breakfast','Take a Shower','Walk  the dog'])
    const[newtask,setnewTask] = useState('')


    function handleOnchange(event){
        setnewTask(event.target.value)

    }

    function AddElement(){
        if (newtask.trim() !== ''){

            setTask([...task,newtask])
            setnewTask('');
        }

    }

    function deleteTask(index){
         const upadted_task = task.filter((_,i) => i !== index) 
         setTask(upadted_task) 


    }

    function moveUpTask(index){
        if(index > 0){
            const upadted_task = [...task];
            [upadted_task[index], upadted_task[index- 1]] = [upadted_task[index -1],upadted_task[index]] 
            setTask(upadted_task);
        }

    }

    function moveDOwnTask(index){
        if(index < task.length - 1){
            const upadted_task = [...task];
            [upadted_task[index], upadted_task[index + 1]] = 
            [upadted_task[index + 1],upadted_task[index]] 
            setTask(upadted_task);
        }
        

    }

return(
    <>
    <div className="todoList">
        <h1>To-Do-List</h1>

        <div>
            <input 
            type="text" 
            name="" id="" 
            placeholder="Enter a text..." 
            value={newtask}
            onChange={handleOnchange}/>


            <button className="Add_btn"
                    onClick={AddElement} >
                    Add
            </button>

        </div>
        <ol>
            {task.map((Element,index) => 
                 <li key={index}> 
                    <span className="text">{Element}</span>

                    <button 
                       className="delete_btn"
                       onClick={() => deleteTask(index)}>
                       Delete
                    </button> 
                    <button 
                       className="move_btn"
                       onClick={() =>moveUpTask(index)}>
                       👆
                    </button> 
                    <button 
                       className="move_btn"
                       onClick={() => moveDOwnTask(index)}>
                       👇
                    </button> 

                 </li>
            )}
        </ol>
    </div>

    </>

        
);
    
}


export default TodoList;