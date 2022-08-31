import { DataProvider } from './context/DataContext'
import Grid from './layouts/Grid'
import Button from './ui/Button'
import Footer from './layouts/Footer'
import Navbar from './layouts/Navbar'

function App() {
  return (
    <div className="flex flex-col">
      <DataProvider>
        <Navbar />
        <div className="flex flex-col w-full max-w-7xl mx-auto px-8 gap-10 mt-10">
          <div className="w-full h-36 bg-blue-300" />
          <div className="flex lg:gap-10">
            <div className="flex flex-col w-full col-span-2 lg:col-span-1">
              <Grid />
              <div
                className="self-center h-[48px] my-7"
                onClick={() => alert('boton sin funcionalidad')}
              >
                <Button type="none">
                  <span className="font-medium p-4 text-xl text-blue-500 hover:text-white">
                    Cargar mas articulos
                  </span>
                </Button>
              </div>
            </div>
            <div className="hidden lg:flex h-screen w-[300px] bg-blue-300" />
          </div>
          <Footer />
        </div>
      </DataProvider>
    </div>
  )
}

export default App
