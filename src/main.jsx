
import { createRoot } from 'react-dom/client'
import { QueryClientProvider,QueryClient} from '@tanstack/react-query'
import App from './App.jsx'

const queryClient=new QueryClient()
createRoot(document.getElementById('root')).render(
<QueryClientProvider client={queryClient}>
        <App />
    
</QueryClientProvider>
    

)