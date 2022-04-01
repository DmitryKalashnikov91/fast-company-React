import React from "react";
import User from "./user";

const Users = ({users, ...rest}) => {
  //console.log(users)
  return <>
  {users.length > 0 && (
    <table className="table">
     <thead>
       <tr>
         <th scope="col">Имя</th>
         <th scope="col">Качества</th>
         <th scope="col">Профессия</th>
         <th scope="col">Встретился раз</th>
         <th scope="col">Оценка</th>
         <th scope="col">Избранное</th>
         <th scope="col"></th>
       </tr>
     </thead>
     <tbody>
     {users.map(user=> <User key={user._id} { ...user} {...rest}/>)}
    
   
     </tbody>
    </table>)
    } 
  </>
  
  }
//   const [users, setUser] = useState(api.users.fetchAll());
//   const handleDeleteUser = (userId) => {
//     setUser(users.filter((user) => user._id !== userId));
// };


//   const renderPhrase = (number) => {
//     const lastOne = Number(number.toString().slice(-1));
//     if (number > 4 && number < 15) return "человек тусанет";
//     if ([2, 3, 4].indexOf(lastOne) >= 0) return "человека тусанут";
//     if (lastOne === 1) return "человек тусанет";
//     return "человек тусанет";
// };

// return (
//     //<>
// //       //</><h2>
// //             //<span
// //                 className={"badge " + (users.length > 0 ? "bg-primary" : "bg-danger")}
// //            //</h2> >
// //                 {users.length > 0
// //                     ? `${users.length + " " + renderPhrase(users.length)} с тобой сегодня`
// //                     : "Никто с тобой не тусанет"}
// //             </span>
// //         </h2>
           
//     // {users.length > 0 && (

//     <table className="table">
//     <thead>
//       <tr>
//         <th scope="col">Имя</th>
//         <th scope="col">Качества</th>
//         <th scope="col">Профессия</th>
//         <th scope="col">Встретился раз</th>
//         <th scope="col">Оценка</th>
//       </tr>
//     </thead>
//     <tbody>
    
//       {users.map((user) => (
//         <tr key={user._id}>
//           <td>{user.name}</td>
//           <td>
//             {user.qualities.map((item)=> (
//             <span className={'badge m-1 bg-' + item.color}  key={item._id}>{item.name}</span>
//           ))}
//           </td>
//           <td>{user.profession.name}</td>
//           <td>{user.completedMeetings}</td>
//           <td>{user.rate}/5</td>
//           <td><button type="button" className="btn btn-danger" onClick={()=>handleDeleteUser(user._id)}>Удалить</button></td>
//         </tr>
//         )
//       )
//     }
//     </tbody>
//   </table> 
//     </> 
//   );
// };
  

export default Users;