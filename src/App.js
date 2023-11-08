import { useEffect, useRef, useState } from "react";
import send_btn from './assets/send.svg';

const App = () => {
  const inputref = useRef()
  const [groups,setGroups] = useState([
    {
      name : "sample",
      color: "#f00",
      notes: [
        {
          time: "",
          content: "Lorem5050505005"
        },
        {
          time: "",
          content: "Lorem5050505005"
        },
        {
          time: "",
          content: "Lorem5050505005"
        },
      ]
    },
    {
      name : "sample1",
      color: "#f00",
      notes: [
        {
          time: "",
          content: "Lorem5050505005"
        },
        {
          time: "",
          content: "Lorem5050505005"
        },
        {
          time: "",
          content: "Lorem5050505005"
        },
      ]
    },
  ])
  const [currGroup,setCurrGroup] = useState("");

  useEffect(() => {
    if(currGroup !== ""){
      const right = document.querySelector('.right_section')
      const left = document.querySelector('.left_section')
      left.style.display = "none"
      right.style.display = "block"
    }
  },[currGroup])

  const uploadNote = () => {
    groups?.map((group) => {
      if(group.name === groups[currGroup].name){
        const newNote = [...group.notes, {time: "",content: inputref.current.value}]
        console.log(group)
      }
    })
  }

  return (
    <div className="App container">
      <div className="left_section">
        <h1 className="header">Pocket Notes</h1>
        <div className="create_btn" onClick={() => console.log("clicked")}>+ Create Notes Group</div>
        <div className="group_list">
          {
            groups.map((group,index) => (
              <div className={`group ${groups[currGroup]?.name === group.name ? "active" : null}`} key={index} onClick={() => {setCurrGroup(index)}}>
                <div className="avatar">{group.name.slice(0,2)}</div>
                <div className="group_name">{group.name}</div>
              </div>
            ))
          }
        </div>
      </div>
      <div className="right_section">
        <div className="notes_list">
          {
            groups[currGroup]?.notes?.map((note,index) => (
              <div className="note" key={index}>
                <div className="time">{note.time}</div>
                <div className="note_content">{note.content}</div>
              </div>
            ))
          }
        </div>
        <div className="input_box">
          <textarea ref={inputref} placeholder="Enter your text here..........."></textarea>
          <div className="send_btn" onClick={() => uploadNote()}>
            <img src={send_btn} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
