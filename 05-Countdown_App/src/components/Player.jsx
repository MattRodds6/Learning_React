import {useState} from 'react'; 

export default function Player() {
  const [endteredPlayerName, setEnteredPlayerName] = useState('');
  const [submited, setSubmited] = useState(false);

  function handleChange(event){
    setEnteredPlayerName(event.target.value);
  }

  function handleClick(){
    setSubmited(true);
  }
  return (
    <section id="player">
      <h2>Welcome {submited ? endteredPlayerName : "unknown entity"}</h2>
      <p>
        <input type="text" onChange={handleChange} value={endteredPlayerName}/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
