import useWindowSize from './hooks/lw.jsx'
import './App.css'

function App() {
  const { width, height } = useWindowSize();

  return (  
      <div>
        <h1>Window Size</h1>
            <p>
                height: {height}
            </p>
            <p>
                width: {width}
            </p>
      </div>
  )
}

export default App
