export default function Test(props){
    let myList = [
        {name: "zobair", id: 1},
        {name: "nada", id: 2},
        {name: "amine", id: 3},
    ];
    return <ul>
        {myList.map(function(item){
            return <li key={item.id}>{item.name} / {item.id}</li>
        })}
    </ul>
}

// export default function Test(props){
//     let myList = ["nada", "zobair", "amine"];
//     return <ul>
//         {myList.map(function(item){
//             return <li>{item}</li>
//         })}
//     </ul>
// }
