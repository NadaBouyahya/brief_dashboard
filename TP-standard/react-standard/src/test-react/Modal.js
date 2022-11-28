export default function Modal(props){

    if(props.show === false){
        return;
    }

    return (
        <div>
            <h1>my modal</h1>
            <button onClick={()=>props.closeModal(false)}>close</button>
        </div>
    )
}