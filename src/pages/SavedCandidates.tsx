import { useArray } from '../components/PotentialCandidates';

const SavedCandidates = () => {

  const { candidatesArray } = useArray();
  

  // console.log(candidatesArray);
  return (
    <main>
      <h1>Potential Candidates</h1>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Location</th>
            <th>Email</th>
            <th>Company</th>
            <th>Bio</th>
          </tr>
        </thead>
        <tbody>
          {candidatesArray.map((candidate, index) => (
            <tr key={index}>
              <td>{candidate.login}</td>
              <td>{candidate.location}</td>
              <td>{candidate.email}</td>
              <td>{candidate.company}</td>
              <td>{candidate.company}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default SavedCandidates;
