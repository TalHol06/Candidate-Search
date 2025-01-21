// TODO: Create an interface for the Candidate objects returned by the API
interface Candidate{
  avatar_url: string;
  login: string;
  location: string;
  email: string;
  company: string;
  bio: string;
}

export default Candidate;