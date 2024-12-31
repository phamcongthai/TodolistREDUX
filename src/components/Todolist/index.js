import './style.scss';
import { useSelector, useDispatch } from 'react-redux';
import { add, complete, dele, undo } from '../actions/todolist';
import { useState } from 'react';
import { TiTickOutline } from "react-icons/ti";
import { MdCancel } from "react-icons/md";
import Swal from 'sweetalert2';
import { LuUndo2 } from "react-icons/lu";

function Todolist() {
    const data = useSelector(state => state.todolistReducer);
    const dispatch = useDispatch();
    const [valueInput, setValueInput] = useState('');
    console.log(valueInput);
    console.log(data);

    const handleAdd = () => {
        if (valueInput.trim()) {
            dispatch(add(valueInput));
            Swal.fire({
                title: "Bạn đã thêm thành công!",
                icon: "success",
                draggable: true
            });
            setValueInput('');
        }
    }

    const handleComplete = (id) => {
        dispatch(complete(id));
    }
    const handleUndo = (id) => {
        dispatch(undo(id));
    }
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(dele(id));
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
    }
    console.log(data);
    
    return (
        <>
            <div className="todolist">
                <div className="todolist__group">
                    <p className='todolist__p'>ToDoList</p>
                    <input
                        type="text"
                        name="content"
                        placeholder="Hôm nay bạn muốn làm gì ..."
                        className='todolist__input'
                        id='content'
                        value={valueInput}
                        onChange={(e) => setValueInput(e.target.value)}
                        required
                    />
                    <button onClick={handleAdd} className='todolist__button'>+</button>
                </div>
                <ul className='todolist__list'>
                    {data.map((item) => {
                        return (
                            <li className='todolist__list-item' key={item.id}>
                                <div className='todolist__list-toDo'>
                                    {item.completed ? (
                                        <del>{item.toDo}</del>
                                    ) : (
                                        item.toDo
                                    )}
                                </div>
                                {item.completed ? (
                                    <button
                                        className='todolist__list-button1'
                                        onClick={() => handleUndo(item.id)}>
                                        <LuUndo2 />
                                    </button>
                                ) : (
                                    <button
                                        className='todolist__list-button1'
                                        onClick={() => handleComplete(item.id)}>
                                        <TiTickOutline />
                                    </button>
                                )}
                                <button className='todolist__list-button2' onClick={() => handleDelete(item.id)}>
                                    <MdCancel />
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default Todolist;
