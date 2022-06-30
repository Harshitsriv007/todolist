import { useState } from "react";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


export default function Index()
{
    const [data,setData]= useState([]);
    const [text,setText]= useState([]);
    const [count,setCount]= useState(0);
    const [id,setId]= useState(0);

    const clearState = () =>
    {
        setText([]);
        setData([]);
    }

    const submitdata=()=>{
        setData([...data,text]);
        setCount(count+1);
        setId(id+1);
    }
    const dataCollect=(e)=>{
                    setText({
                        ...text,
                        'id':id,
                        [e.target.name]: e.target.value.trim()
                    });
    }
    const handleDelete=(deleteId)=>
    {
        var array=[];
        data.map((dataSet)=>{
            if(dataSet.id !== deleteId)
            {
                array.push(dataSet);
            }
        })
        setData(array);

    }
    return <>
    <h1 style={{textAlign:'center'}}>To-Do List!</h1>
    <input type="text" name="Input" onChange={(e)=>dataCollect(e)}></input>
    <button value="submit" onClick={()=>submitdata()}>Submit</button>
    <br></br>
    <br></br>
    {
        (count !== 0)?
        (
        data.map((dataset)=>{
            return(<div key={dataset.id}>{dataset.Input} <FontAwesomeIcon icon={faTrash} onClick={()=>handleDelete(dataset.id)}/></div>);
        })
        ):
         <h1> </h1>
    }
    </>
}