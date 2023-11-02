import  useFetch  from './useFetch';
export const url = 'https://api.github.com/users/QuincyLarson';
export const FetchData = () => {
  const [isLoading,isError,user]=useFetch(url)
  const { avatar_url, name, company, bio } = user;
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>There was an error...</h2>;
  }
  return (
    <div>
      <img
        style={{ width: "100px", borderRadius: "25px" }}
        src={avatar_url}
        alt={name}
      />
      <h2>{name}</h2>
      <h4>works at {company}</h4>
      <p>{bio}</p>
    </div>
  )
}
export default FetchData;
