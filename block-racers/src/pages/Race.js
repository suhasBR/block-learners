// import React, { useState, useEffect } from "react";


// function Race({socket}) {
//   const [userName, setUsername] = useState("");



//   const changeUserName = (e) => {
//       setUsername(e.target.value);
//   }

//   const submit =() =>{
//       const racename = 'race1'
//       socket.emit("joinRace",{userName,racename});
//   }

//   useEffect(() => {

//     socket.on("message",(data) => {
//         console.log(data);
//     })

//   }, [socket]);

//   return (
//     <div>
//       <h1>Race</h1>
//       <input 
//       type="text"
//       onChange={e => changeUserName(e)} 
//       value={userName}/> 
//       <button onClick={submit}>Submit</button>
//     </div>
//   );
// }

// export default Race;
