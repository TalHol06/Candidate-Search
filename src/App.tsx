import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import { ArrayProvider } from './components/PotentialCandidates.tsx';

function App() {
  return (
    <>
      <Nav />
      <main>
        <ArrayProvider>
            <Outlet />
        </ArrayProvider>

      </main>
    </>
  );
}

export default App;
