const Aboutone = {
  one: "No 1",
  two: "www.123.com",
  three: "peter lam",
  four: "from one student",
};

const Abouttwo = {
  one: "No 1",
  two: "www.123.com",
  three: "peter lam",
  four: "from one student",
};

const Aboutthree = {
  one: "No 1",
  two: "www.123.com",
  three: "peter lam",
  four: "from one student",
};

const Aboutfour = {
  one: "No 1",
  two: "www.123.com",
  three: "peter lam",
  four: "from one student",
};

const Info = [Aboutone, Abouttwo, Aboutthree, Aboutfour];

export function User({ user }) {
  return (
    <>
      <p>{user}</p>
    </>
  );
}

export function UserImage({ image }) {
  return (
    <>
      <p>{image}</p>
    </>
  );
}

export function UserName({ username }) {
  return (
    <>
      <h1>{username}</h1>
    </>
  );
}

export function Student({ student }) {
  return (
    <>
      <p>{student}</p>
    </>
  );
}

export default function Profile() {
  return (
    <>
      {Info.map((info, i) => (
        <div key={i}>
          <User user={info.one} />
          <UserImage image={info.two} />
          <UserName username={info.three} />
          <Student student={info.four} />
        </div>
      ))}
    </>
  );
}
