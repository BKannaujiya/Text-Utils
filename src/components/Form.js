import React, {useState} from 'react'

export default function Form(props) {
    
    const handleUpClick = ()=>{
        // console.log("UpperCase Clicked." + text);
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to Uppercase!","success");
    }
    const handleOnChange = (event)=>{
        // console.log("on changed.");
        setText(event.target.value);
    }
    const handleLowerClick = ()=>{
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to lowercase!","success");
    }
    const handleOnClear = ()=>{
        setText('');
        props.showAlert("TextBox Cleared!","success");
    }
    const handleToSpeak = ()=>{
        // let msg = new SpeechSynthesisUtterance();
        // msg.text = text;
        // window.speechSynthesis.speak(msg);
        // setText(msg);
        let msg = new SpeechSynthesisUtterance(text);
        msg.voice = window.speechSynthesis.getVoices()[2];
        window.speechSynthesis.speak(msg);
        props.showAlert("Please listen carefully!","success");
    }

    const handleToCopy = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!","success");
    }
    
    const handleExtraSpace = ()=>{
        let newtext = text.split(/[ ]+/);   //regex used here.
        setText(newtext.join(" "));
        props.showAlert("Extra space removed","success");
    }

    // const handleSentenceCase = () => {
    //     let newText = text.toUpperCase() + text.substring(0, text.length - 1).toLowerCase();
    //     setText(newText);
    //   };
    // const handleUndo = ()=>{
    //     let  newText = text.substring(0 , text.length - 1);
    //     setText(newText);
    // }
    const [text , setText] = useState('');
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'grey'}}>  {/*grey == '#042743'*/}
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor: props.mode ==='dark'?"#0d2933":"white" , color: props.mode ==='dark'?'white':'black'}} id="myBox" rows="8" cols="1"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button> 
        <button className="btn btn-primary mx-2 my-2" onClick={handleLowerClick}>Convert to Lowercase</button>
        {/* <button className="btn btn-primary mx-2 my-2" onClick={handleSentenceCase}>Convert to Sentence Case</button> */}
        <button className="btn btn-danger mx-2 my-2" onClick={handleOnClear}>Clear</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleToSpeak}>Hear</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleToCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace}>remove space</button>
        {/* <button className="btn btn-primary mx-2" onClick={handleUndo}>Undo</button> */}
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'grey'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split('.').length - 1} sentences, {text.split(' ').length - 1} words and {text.length} characters.</p>
        <p>{0.008 * text.split(' ').length - 0.008} minutes time to read.</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the above textbox to preview it here"}</p>
        <p className='container '></p>
    </div>
    </>
  )
}
