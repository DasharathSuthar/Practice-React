import { useState } from "react"
import '/src/components/ColorPicker.css'

export default function ColorPicker(){
    const [color,setColor] = useState("#ffffff");
    function colorChange(e){
       setColor(e.target.value);
        
    }
    return(
        <div className="card">
            <h1>Color Picker</h1>
            <div className="color-container">
                <div className="color-box" style={{backgroundColor:color}}>
                    <span>Color : {color}</span>
                </div>
                <input type="color" value={color} onChange={colorChange}/>
            </div>
        </div>
    )
}