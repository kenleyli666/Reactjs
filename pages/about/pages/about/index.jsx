import React, { useState } from 'react';


const user = {
  name : "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize : 100,
};

const users = [
  user,
  user,
  user,
  user,
];

export function Counter() {
  const [counter , setCounter] = useState(0);

  return(
    <>
    <p>Counter: { counter }</p>

    <button onClick={() => { 
        setCounter(counter + 1);
      }}>
        Increase
      </button>
    </>
  );
}

export function Profile() {
    return (
      <>
        <h1>{user.name}</h1>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={`Photo of ` + user.name}
          style={{ 
            width: user.imageSize,
            height: user.imageSize
          }}
        />
        <ul>
          <li>Invent new traffic lights</li>
          <li>Rehearse a movie scene</li>
          <li>Improve spectrum technology</li>
        </ul>
      </>
    );
  }

  export default function About() {
    return(
    <>
    < Counter />
    {users.map(user => <Profile />)}
    
    {/* {users.map((user, i) => (
        <Profile key={i} />
      ))}
         */}
    </>
    );
  };

// import React, { useState } from 'react';

// const user = {
//   name: "Hedy Lamarr",
//   imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
//   imageSize: 100,
// };

// const users = [
//   user,
//   user,
//   user,
//   user,
// ];

// export function Counter() {
//   const [counter, setCounter] = useState(0);
//   return (
//     <>
//       <p>Counter: {counter}</p>
//       <button onClick={() => setCounter(counter + 1)}>
//         Increase
//       </button>
//     </>
//   );
// }

// export function Profile() {
//   return (
//     <>
//       <h1>{user.name}</h1>
//       <img
//         className="avatar"
//         src={user.imageUrl}
//         alt={`Photo of ` + user.name}
//         style={{
//           width: user.imageSize,
//           height: user.imageSize,
//         }}
//       />
//       <ul>
//         <li>Invent new traffic lights</li>
//         <li>Rehearse a movie scene</li>
//         <li>Improve spectrum technology</li>
//       </ul>
//     </>
//   );
// }

// export default function About() {
//   return (
//     <>
//       <Counter />
//       {users.map((user, i) => (
//         <Profile key={i} />
//       ))}
//     </>
//   );
// }
