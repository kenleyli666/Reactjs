/*
function Profile() {
  return (
    <a href="#">
      <img
        src="https://i.imgur.com/MK3eW3As.jpg"
        alt="Katherine Johnson"
      />
      <div>Katherine Johnson</div>
    </a>
  );
}
*/

function Profile({src, name}) {
  return (
    <a href="#">
      <img
        src={src}
        alt={name}
      />
      <div>{name}</div>
    </a>
  );
}

export default function ContactUs() {
  const profiles = [
    {
      src: 'https://i.imgur.com/MK3eW3As.jpg',
      name: 'Katherine Johnson'
    },
    {
      src: 'https://i.imgur.com/MK3eW3As.jpg',
      name: 'Katherine Johnson'
    },
    {
      src: 'https://i.imgur.com/MK3eW3As.jpg',
      name: 'Katherine Johnson'
    }
  ];
    return (
      <section>
        <h1>Amazing scientists</h1>
        {/* <Profile />
        <Profile />
        <Profile /> */}
        {
          profiles.map(profile => 
            <Profile src={profile.src} name={profile.name} />
          )
        }
      </section>
    );
  }