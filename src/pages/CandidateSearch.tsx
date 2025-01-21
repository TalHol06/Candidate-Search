import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [githubUsers, setGitHubUsers] = useState<Candidate[]>([]);
  const [count, setCount] = useState(0);
  const [githubUser, setUser] = useState<Candidate | null>(null);

  useEffect(() => {
    const fetchGithubUsers = async () => {
      try {
        const users = await searchGithub();
        console.log('Fetched Github users:', users);
        setGitHubUsers(users);
      } catch (err) {
        console.error('Error fetching Github users:', err);
      }
    };

    fetchGithubUsers();
  }, []);

  useEffect(() => {
    const fetchGithubUser = async () => {
      if (count >= githubUsers.length || !githubUsers[count]) {
        console.warn('Count out of bounds or invalid user');
        return;
      }

      console.log('Processing user:', githubUsers[count]);

      try {
        const user = await searchGithubUser(githubUsers[count].login);
        console.log('Fetched user details:', user);

        if (!user || !user.avatar_url) {
          console.warn('Skipping invalid user:', githubUsers[count]);
          setCount((prev) => prev + 1);
          return;
        }

        setUser(user);
      } catch (err) {
        console.error('Error fetching Github user:', err);
      }
    };

    fetchGithubUser();
  }, [githubUsers, count]);

  return (
    <main>
      <h1>Candidate Search</h1>
      <div>
        {githubUser ? (
          <div>
            <img src={githubUser.avatar_url} alt={`${githubUser.login}'s avatar`} />
            <h3>{githubUser.login}</h3>
            <p>Location: {githubUser.location || 'Not specified'}</p>
            <p>Email: {githubUser.email || 'Not provided'}</p>
            <p>Company: {githubUser.company || 'Not specified'}</p>
            <p>Bio: {githubUser.bio || 'No bio available'}</p>
          </div>
        ) : (
          <p>Loading user details...</p>
        )}
      </div>

      <button onClick={() => setCount((prev) => prev + 1)}>-</button>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </main>
  );
};

export default CandidateSearch;
