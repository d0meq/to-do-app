import React, { useState } from 'react'
import './ToDo.css'

function ToDo() {

    const [tasks, setTasks] = useState([])
    const [taskName, setTaskName] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [color, setColor] = useState('#9DBEBB')
    const [body, setBody] = useState('#9DBEBB')
    const darker = darkenColor(color, 10)
    const test = 13

    const addTaskButtonStyle = {
        background: '#7fa8a6',
        border: 'none',
        borderRadius: '25px',
        padding: '12px 25px',
        color: 'white',
        fontSize: '18px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        cursor: 'pointer',
        boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
        margin: '20px'

    }

    const restButtonStyle = {
        background: darker,
        border: 'none',
        borderRadius: '25px',
        padding: '5px 10px',
        color: 'white',
        fontSize: '9px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        cursor: 'pointer',
        boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
        marginRight: '3px' 
    }

    const doneButtonStyle = {
        background: 'green',
        border: 'none',
        borderRadius: '25px',
        padding: '5px 10px',
        color: 'white',
        fontSize: '9px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        cursor: 'pointer',
        boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
        marginRight: '3px',
    }

    const main = document.getElementById('main-container')
    const header = document.getElementById('header')
    const addTaskButton = document.getElementById('add-task')
    const selectedColor = document.getElementById('selected-color')

    function handleTasks() {
        const newTask = { name: taskName, description: description, date: date, done: false };
    
        if (newTask.name === '' || newTask.description === '' || newTask.date === '') {
            let modal = document.getElementById('modal');
            modal.style.display = 'flex';
    
            window.onclick = function (event) {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            };
        } else {
            setTasks(t => [...t, newTask]);
    
            setTimeout(() => {
                const darkerColor = darkenColor(color, 10);
    
                const removeTaskButtons = document.querySelectorAll('.remove-task');
                const markAsDoneButtons = document.querySelectorAll('.mark-as-done');
    
                removeTaskButtons.forEach(button => {
                    button.style.background = darkerColor;
                    button.style.color = isWhite(color) ? '#000000' : '#FFFFFF';
                });
    
                markAsDoneButtons.forEach(button => {
                    button.style.background = darkerColor;
                    button.style.color = isWhite(color) ? '#000000' : '#FFFFFF';
                });
            }, 0);  
        }
    
        setTaskName('');
        setDescription('');
    }

    function removeTasks(index) {
        setTasks(t => t.filter((_, i) => i !== index))
    }

    function markAsDone(index) {
        setTasks(tasks.map((task, i) =>
            i === index ? { ...task, done: !task.done } : task
        ))
    }

    function handleTaskName(e) {
        setTaskName(e.target.value)
    }

    function handleDescription(e) {
        setDescription(e.target.value)
    }

    function handleDate(e) {
        setDate(e.target.value)
    }

    function showSettings(){
        let settings = document.getElementById('settings')

        settings.style.display = 'flex'

        window.onclick = function(event){
            const settings = document.getElementById('settings')
            if(event.target === settings){
                settings.style.display = 'none'
            }
        }
    }


    function handleColorChange(e){
        setColor(e.target.value)
    }

    function changeColor() {
        const darkerColor = darkenColor(color, 10);
    
        setBody(
            main.style.background = color,
            header.style.background = darkerColor,
            addTaskButton.style.background = darkerColor
        );
    
        const removeTaskButtons = document.querySelectorAll('.remove-task');
        const markAsDoneButtons = document.querySelectorAll('.mark-as-done');
    
        removeTaskButtons.forEach(button => {
            button.style.background = darkerColor;
            button.style.color = isWhite(color) ? '#000000' : '#FFFFFF';
        });
    
        markAsDoneButtons.forEach(button => {
            button.style.background = darkerColor;
            button.style.color = isWhite(color) ? '#000000' : '#FFFFFF';
        });
    
        if (isWhite(color)) {
            header.style.color = '#000000';
            addTaskButton.style.color = '#000000';
            selectedColor.style.color = '#FFFFFF';
        } else {
            header.style.color = '#FFFFFF';
            addTaskButton.style.color = '#FFFFFF';
            selectedColor.style.color = '#000000';
        }

        setColor(color)
    }
    
    function restoreToDefault() {
        setBody(
            main.style.background = '#9DBEBB',
            main.style.transition = '0.3s'
        );
    
        setBody(
            header.style.background = '#468189',
            header.style.color = '#FFFFFF',
            header.style.transition = '0.3s'
        );
    
        setBody(
            addTaskButton.style.background = '#7fa8a6',
            addTaskButton.style.color = '#FFFFFF',
            addTaskButton.style.transition = '0.3s'
        );
    
        const removeTaskButtons = document.querySelectorAll('.remove-task');
        const markAsDoneButtons = document.querySelectorAll('.mark-as-done');
    
        removeTaskButtons.forEach(button => {
            button.style.background = '#7fa8a6';
            button.style.color = '#FFFFFF';
            button.style.transition = '0.3s';
        });
    
        markAsDoneButtons.forEach(button => {
            button.style.background = '#7fa8a6';
            button.style.color = '#FFFFFF';
            button.style.transition = '0.3s';
        });
    }

    function isWhite(color) {
        return color === "#ffffff" || color === "rgb(255, 255, 255)";
    }

    function darkenColor(color, amount) {

        let hsl = rgbToHsl(color);
        

        hsl.l = Math.max(0, hsl.l - amount);
        

        return `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
    }
    

    function rgbToHsl(color) {
        let r, g, b;
    

        if (color.startsWith('#')) {
            const hex = color.slice(1);
            r = parseInt(hex.substring(0, 2), 16) / 255;
            g = parseInt(hex.substring(2, 4), 16) / 255;
            b = parseInt(hex.substring(4, 6), 16) / 255;
        } else {

            const rgbValues = color.match(/\d+/g);
            r = rgbValues[0] / 255;
            g = rgbValues[1] / 255;
            b = rgbValues[2] / 255;
        }
    
        const max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;
    
        if (max === min) {
            h = s = 0;
        } else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }
    
        return {
            h: Math.round(h * 360),
            s: Math.round(s * 100),
            l: Math.round(l * 100)
        };
    }

    return (
        <div className='main-container' id='main-container'>
            <h2 id='header'>To Do Ola <span onClick={showSettings} className='settings-header' id='settings-header'>Settings</span><i className='fa fa-bars' id='settings-bars' onClick={showSettings} ></i></h2>

            <div id='modal' className='modal'>
                <div className="modal-content">
                    <p>Please input every information</p>
                </div>
            </div>

            <div className="settings" id='settings'>
                <div className="settings-content">
                    <input type="color" value={color} onChange={handleColorChange}/>
                    <p id='selected-color'>Selected color: {color}</p>
                    <button style={restButtonStyle} onClick={changeColor} className='add-task' id='okay-button'>Okay</button>
                    <button style={restButtonStyle} onClick={restoreToDefault} className='add-task' id='default-button'>Default</button>
                </div>
            </div>


            <ol>
                {tasks.map((task, index) => (
                    <li key={index} style={{textDecoration: task.done ? 'line-through' : 'none'}}>
                        <b>Task name:</b> {task.name}<br />
                        <b>Description:</b> {task.description}<br />
                        <b>Due date:</b> {task.date} <br />
                        <button className='add-task remove-task' id='remove-task'onClick={() => removeTasks(index)} style={restButtonStyle}>Remove Task</button>
                        <button className='add-task remove-task' id='mark-as-done' onClick={() => markAsDone(index)} style={task.done ? doneButtonStyle : restButtonStyle}>
                            {task.done ? 'Undo' : 'Mark as done'}
                        </button>
                    </li>
                ))}
            </ol>

            <div className='input-container'>
                <input type="text" placeholder='Enter task' value={taskName} onChange={handleTaskName} id='task-name' /><br />
                <input type="text" placeholder='Enter description' value={description} onChange={handleDescription} /><br />
                <input type="date" onChange={handleDate} id='date-input' /><br /><br />
            </div>
            <button className='add-task' id='add-task' onClick={handleTasks} style={addTaskButtonStyle}>Add task</button>
        </div>
    )
}

export default ToDo