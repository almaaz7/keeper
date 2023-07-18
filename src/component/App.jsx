import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateArea from './CreateArea';
import Note from "./Note";


function App() {
    const [notes,setNotes]= useState([]);

    function addNote(note){
        setNotes(prevValue=>{
            return [...prevValue,note]
        })

    }

    function deleteNote(id){
        setNotes(prevNotes=>{
           return prevNotes.filter((note,index)=>{
                return index !== id;
            })
        })
    }
    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote}/>
            {notes.map((note,index)=><Note key={index} title={note.title} content={note.content} id={index} onDelete={deleteNote}/>)}
            <Footer />
        </div>
    );
}

export default App;