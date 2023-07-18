import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from "@mui/material/Fab";
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

  const [note, setNote] = useState({
    title: '',
    content: ''
  });

  const [click, setClick] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevValue => {
      return {
        ...prevValue, [name]: value
      }
    })
  }

  function handleClick(event) {
    props.onAdd(note);
    setNote({
      title: '',
      content: ''
    })
    event.preventDefault();

  }

  function expand(){
    setClick(true);
  }

  return (
    <div>
      <form className="create-note">
        {click&&<input onChange={handleChange} name="title" placeholder="Title" value={note.title} />}
        <textarea onClick={expand} onChange={handleChange} name="content" placeholder="Take a note..." rows={click?3:1} value={note.content} />
        <Zoom in={click}><Fab onClick={handleClick}><AddIcon /></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;