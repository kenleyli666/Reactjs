import React, { useState } from 'react';

export function User({ userDetail }) {
  const userImage = {
    src: userDetail.userImage,
    name: userDetail.userName,
  };

  return (
    <>
      <UserImage image={userImage} />
      <UserName name={userDetail.userName} />
      <Student
        studentId={userDetail.studentId}
        classCode={userDetail.classCode}
      />
    </>
  );
}

export function UserImage({image}) {
  return <img src={image.src} alt={image.name} />;
}

export function UserName({name}) {
  return <div>{name}</div>;
}

export function Student({studentId, classCode}) {
  const renderClassCode = (classCode)=> {
    
    if(Array.isArray(classCode)) {
      return classCode.map(classCodeDetail => <span>{classCodeDetail}</span>);
    }
    
    return <div>{classCode}</div>;
  }

  return (
    <>
      <div>{studentId}</div>
      { renderClassCode(classCode) }
    </>
  );
}

export function UserImageAndUserName({name, image}) {
  return (
    <>
      <UserImage image={image} />
      <UserName name={name} />
    </>
  );
}

export function Profile({item, score}) { // { item } = props
  return (
    <>
      <h1>{item.name}</h1>
      <img
        className="avatar"
        src={item.imageUrl}
        alt={'Photo of ' + item.name}
        style={{
          width: item.imageSize,
          height: item.imageSize
        }}
      />
    </>
  );
}


export function Counter () {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <p>Counter: {counter}</p>  
      <button onClick={() => setCounter(counter + 1)} >click me to change the counter</button>
    </>
  );
}

export default function AboutUs() {
  const title = <h1>Index Copy About us</h1>;
  const currentDate = new Date();
  const [inputText, setInputText] = useState(null);

  const users = [
    {
      name: '1',
      imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
      imageSize: 90,
    }
    ,{
      name: '2',
      imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
      imageSize: 90,
    }
    ,{
      name: '3',
      imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
      imageSize: 90,
    }
    ,{
      name: '4',
      imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
      imageSize: 90,
    }
  ];

  const studentDemoData = {
    userImage: 'https://placehold.co/600x400/EEE/31343C',
    userName: 'Ethan',
    studentId: 'HKSC001',
    classCode: 'Front-end-course',
  };

  const studentDemoDataSet = [
    {
      userImage: 'https://placehold.co/600x400/EEE/31343C?text=Ethan',
      userName: 'Ethan',
      studentId: 'HKSC001',
      classCode: 'Front-end-course',
    },
    {
      userImage: 'https://placehold.co/600x400/EEE/31343C?text=John',
      userName: 'John',
      studentId: 'HKSC002',
      classCode: 'Front-end-course',
    },
    {
      userImage: 'https://placehold.co/600x400/EEE/31343C?text=Sam',
      userName: 'Sam',
      studentId: 'HKSC003',
      classCode: [
        'Front-end-course',
        'Back-end-course',
      ],
    },
  ];

    return (
      <>
        {/* <div>
          <User userDetail={studentDemoData} />
        </div>
        <div>
          
          <UserImageAndUserName
            name={studentDemoData.userName}
            image={{
              name: studentDemoData.userName,
              src: studentDemoData.userImage,
            }}
          />
        </div> */}
        <p>Input Data: {inputText}</p>
        <input type="text" name="" id="" onInput={(e) => {
          setInputText(e.target.value);
        }} />
        <div className='container'>
          {
            studentDemoDataSet.map((studentData, index) => {
              return (
                <div key={studentData.studentId}>
                  {/* <UserImageAndUserName
                    name={studentData.userName}
                    image={{
                      name: studentData.userName,
                      src: studentData.userImage,
                    }}
                  /> */}
                  <User userDetail={studentData} />
                </div>
              );
            })
          }
        </div>
      </>
    );
  }