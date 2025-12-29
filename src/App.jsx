import { BrowserRouter } from 'react-router-dom';

import Layout from './Layout.jsx';


function App() {


  return (
    <div style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>

      <BrowserRouter>
        <Layout />
      </BrowserRouter>

    </div>
  )
}

export default App
