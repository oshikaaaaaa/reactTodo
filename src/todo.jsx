import React , {useState} from 'react';

const Todo = () =>
{
    const [tasks, setTasks] = useState([]);
    const[newtask,setNewTask] = useState("");

    const handleSubmit= (e)=>
    {
        e.preventDefault();
        if(newtask!== "")
        {
            setTasks([...tasks, { text: newtask, isChecked: false }]);
            setNewTask("");
        }

    }

    const deleteone = (index) =>
    {
      const newarr = [...tasks];
        newarr.splice(index,1);
        setTasks(newarr);

    }

    const deleteall = () =>
    {
        setTasks([]);
    }

    const check = (index)=>
    {
        const newTasks = [...tasks];
       newTasks[index].isChecked = !newTasks[index].isChecked;
         setTasks(newTasks);
 
    }

    return(
        <div>
            <h1> TODO APP</h1>
            <form onSubmit={handleSubmit}>
                <label >
                    Add Tasks:
                    <input type="text"  value={newtask} onChange={(e) => setNewTask(e.target.value)}/>
                </label>

                <input type="submit" value="Submit"/><button onClick={deleteall}>Delete all</button>
                

            </form>
            

          
        <div>
            <ul>
                {tasks.map((task,index) =>
                (
                    <li key={index} 
                    style = {{ textDecoration: task.isChecked ? 'line-through' : 'none' }}
                    
                    
                    > <input type="checkbox" onChange={()=>check(index)}></input>{task.text} <button onClick={() => deleteone(index)}>Delete</button></li>
                    
                )
                
                )}
            </ul>
        </div>
        </div>

    )

}

export default Todo;