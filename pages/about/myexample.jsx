const Aboutone = {
    icon: "https://placehold.co/600x400/EEE/31343C?text=One",
    name: "peter",
    loginid: "1",
    products: [{
      "productName" : "productName",
      "role" :"role",
      "status" : "status",
      "finalDate" : "finalDate"}]
  };
  
  const Abouttwo = {
    icon: "https://placehold.co/600x400/EEE/31343C?text=Two",
    name: "tom",
    loginid: "2",
    products: [{
      "productName" : "productName",
      "role" :"role",
      "status" : "status",
      "finalDate" : "finalDate"}]
  };

  const Aboutthree = {
    icon: "https://placehold.co/600x400/EEE/31343C?text=Three",
    name: "mary",
    loginid: "3",
    products: [{
      "productName" : "productName",
      "role" :"role",
      "status" : "status",
      "finalDate" : "finalDate"}]
  };
  
  const Aboutfour = {
    icon: "https://placehold.co/600x400/EEE/31343C?text=Four",
    name: "billy",
    loginid: "4",
    products: [{
      "productName" : "productName",
      "role" :"role",
      "status" : "status",
      "finalDate" : "finalDate"}]
  };
  
  const Info = [Aboutone, Abouttwo, Aboutthree, Aboutfour];
  
  export function Icon({ icon }) {
    const userImage = {
      src: icon.userImage,
      name: icon.userName,
    };
    return (
      <>
     <div>{icon} = {userImage.src}</div>
     <div>{icon} = {userImage.name}</div>
      </>
    );
  }
  
  export function Name({ name}) {
    return (
      <>
      <div>{name}</div>
      </>
    );
  }
  
  export function LoginId({ loginid  }) {
    return (
      <>
        <div>{loginid}</div>
      </>
    );
  }
  
  export function Products ({ products }) {
    return (
      <>
      
      <div>
        <div>{products.productName}</div>
        <div>{products.role}</div>
      </div>
      
      <div>
        <div>{products.status}</div>
        <div>{products.finalDate}</div>
      </div>

      </>
    );
  }
  
  export default function Profile() {
    return (
      <>
        {Info.map((item, i) => (
          <div key={i}>
            <Icon icon={item.icon} />
            <Name name={item.name} />
            <LoginId loginid={item.loginid} />
            {/* <Products products={
              item.products.productName
              } 
              /> */}
          </div>
        ))}
      </>
    );
  }
  