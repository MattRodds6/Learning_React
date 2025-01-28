
export default function Input({labelName, ...props}){   
    return(
        <p>
            <label>{labelName}</label>
            <input {...props}/> 
        </p>
    );    
}