export default function Test2(props){
    return <ul>
        {props.list.map(function(item){
        return <li>{item}</li>}
        )}
    </ul>
}