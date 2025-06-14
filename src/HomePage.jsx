
import React from "react";

const vehicleData = [
  {
    name: "Toyota Supra",
    type: "Car",
    country: "Japan",
    hp: 335,
    cc: 2998,
    price: "$43,000",
    rarity: "Common",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/2019_Toyota_Supra_%28A90%29.jpg/320px-2019_Toyota_Supra_%28A90%29.jpg"
  },
  {
    name: "F-22 Raptor",
    type: "Jet",
    country: "USA",
    hp: "35,000 lbf",
    cc: "N/A",
    price: "$150 Million",
    rarity: "Extremely Rare",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/F-22_Raptor_Flying.jpg/320px-F-22_Raptor_Flying.jpg"
  },
  {
    name: "Mercedes Sprinter Van",
    type: "Van",
    country: "Germany",
    hp: 188,
    cc: 2143,
    price: "$39,000",
    rarity: "Common",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Mercedes-Benz_Sprinter_%28W907%29_IMG_3243.jpg/320px-Mercedes-Benz_Sprinter_%28W907%29_IMG_3243.jpg"
  }
];

export default function HomePage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Global Vehicle Info Hub</h1>
      <input type="text" placeholder="Search vehicle..." style={{ marginBottom: '1rem', padding: '0.5rem', width: '100%' }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
        {vehicleData.map((vehicle, index) => (
          <div key={index} style={{ backgroundColor: 'white', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <img src={vehicle.image} alt={vehicle.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div style={{ padding: '1rem' }}>
              <h2 style={{ fontSize: '1.2rem', fontWeight: '600' }}>{vehicle.name}</h2>
              <p>Type: {vehicle.type}</p>
              <p>Country: {vehicle.country}</p>
              <p>HP: {vehicle.hp}</p>
              <p>CC: {vehicle.cc}</p>
              <p>Price: {vehicle.price}</p>
              <p>Rarity: {vehicle.rarity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
