import { useEffect, useState } from 'react';
import PlaceForm from './PlaceForm';

export default function PlaceList() {
  const [places, setPlaces] = useState<any[]>([]);

  const fetchPlaces = async () => {
    const res = await fetch('/api/places');
    const data = await res.json();
    setPlaces(data);
  };

  const addPlace = async (place: any) => {
    await fetch('/api/places', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(place),
    });
    fetchPlaces();
  };

  useEffect(() => {
    fetchPlaces();
  }, []);

  return (
    <div>
      <PlaceForm onAdd={addPlace} />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {places.map((place) => (
          <div key={place.id} style={{ margin: '10px', border: '1px solid #ddd', padding: '10px' }}>
            <h3>{place.title}</h3>
            <p>Price: ${place.price}</p>
            <p>Discount: {place.discount}%</p>
            <ul>
              {place.itinerary.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
