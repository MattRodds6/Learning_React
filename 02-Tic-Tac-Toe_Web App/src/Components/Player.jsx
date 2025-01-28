import { useState } from "react";

export default function Player ({ intitialPlayerName, symbol, isActive, onSaveClick }){
    const [playerName, setPlayerName] = useState(intitialPlayerName);
    const [isEditing, setIsEditing] = useState(false);

    let editPlayerName = <span className ="player-name">{ playerName }</span>;
    let buttonCaption = "Edit";

    function handleEditClick(){
        setIsEditing(editing => !editing);
        if(isEditing){
            onSaveClick(symbol, playerName);
        }
    }

    function handleChange(event){
        setPlayerName(event.target.value);
    }

    if (isEditing) {
        editPlayerName = (
            <input type = "text" required value = { playerName } onChange={ handleChange }/>
        );
        buttonCaption = "Save";
    }

    return(
        <li className={ isActive ? 'active' : undefined}>
            <span className = "player">
                { editPlayerName }
                <span className ="player-symbol">{ symbol }</span>
            </span>
            <button onClick={ handleEditClick }>{ buttonCaption }</button>
        </li>
    ); 
}