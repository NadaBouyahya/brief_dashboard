export default function Test(props){
    let myList = ["nada", "zobair", "amine"];
    return <ul>
        {myList.map(function(item){
            return <li>{item}</li>
        })}
    </ul>
}
