const Aboutone = {
    icon: {
      src: "https://placehold.co/600x400/EEE/31343C?text=One",
      alt : "this is pic",
      width : "200px",
      height : "200px"
    },
    name: "peter",
    loginid: "1",
    products: {
      productName : "product 1",
      role :"role 1",
      status : "pending",
      finalDate : "2023-3-3"}
  };
  
  const Abouttwo = {
    icon: {
      src: "https://placehold.co/600x400/EEE/31343C?text=Two",
      alt : "this is pic",
      width : "200px",
      height : "200px"
    },
    name: "tom",
    loginid: "2",
    products: {
      productName : "product 2",
      role :"role 2",
      status : "completed",
      finalDate : "2025-5-5"}
  };

  const Aboutthree = {
    icon: {
      src: "https://placehold.co/600x400/EEE/31343C?text=Three",
      alt : "this is pic",
      width : "200px",
      height : "200px"
    },
    name: "mary",
    loginid: "3",
    products: {
      productName : "product 3",
      role :"role 3",
      status : "active",
      finalDate : "2024-1-1"}
  };
  
  const Aboutfour = {
    icon: {
      src: "https://placehold.co/600x400/EEE/31343C?text=Four",
      alt : "this is pic",
      width : "200px",
      height : "200px"
    },
    name: "billy",
    loginid: "4",
    products: {
      productName : "product 4",
      role :"role 4",
      status : "inactive",
      finalDate : "2024-2-2"}
  };
  
  const Info = [Aboutone, Abouttwo, Aboutthree, Aboutfour];
  
  export function Icon({ icon }) {
    return (
      <>
      <div style={{display : 'inline-flex'}}>
        <img 
        src={icon.src} 
        alt={icon.alt} 
        width={icon.width} 
        height={icon.height} />
      </div>
      </>
    );
  }
  
  export function Name({ name}) {
    return (
      <>
      <div style={{display : 'inline-flex'}}>
      <div>{name}</div>
      </div>
      </>
    );
  }
  
  export function LoginId({ loginid  }) {
    return (
      <>
        <div style={{display : 'inline-flex'}}>
        <div>{loginid}</div>
        </div>
      </>
    );
  }
  
  export function Products ({ products }) {
    return (
      <>
      <div style={{display : 'inline-flex'} }>
          <div>
            <div>{`Products : ${products.productName}`}</div>
            <div>{`Role : ${products.role}`}</div>
          </div>
          
          <div>
            <div>{`Status : ${products.status}`}</div>
            <div>{`FinalDate : ${products.finalDate}`}</div>
          </div>
      </div>
      </>
    );
  }
  
  export default function Profile() {
    return (
      <>
        {Info.map((item, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'row', marginBottom: '10px' }}>
            <Icon icon={item.icon} />
            <Name name={`Name: ${item.name}`} />
            <br />
            <LoginId loginid={`LoginId: ${item.loginid}`} />
            <Products products={item.products} />
          </div>
        ))}
      </>
    );
  }
  