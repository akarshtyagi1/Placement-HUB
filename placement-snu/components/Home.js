export default function Home(props) {
  const user = JSON.parse(props.user);
  console.log(user);
  return (
    <>
      <h1>Home Page</h1>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <img src={user.image} width="100" height="100" />
    </>
  );
}