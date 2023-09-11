import { checkToken } from '../../utilities/users-service';

export default function Books() {
  async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate);
  }
  
  return (
    <>
      <h1>Our Books</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </>
  );
}