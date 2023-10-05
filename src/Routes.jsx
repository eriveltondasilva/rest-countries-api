import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import GlobalLayout from '@/layouts/GlobalLayout'
import Home from '@/pages/Home'
import Details from '@/pages/Details'
import Error from '@/pages/Error'

export default function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<GlobalLayout />}>
                    <Route index element={<Home />} />
                    <Route path="country/:slug" element={<Details />} />
                    <Route path="error" element={<Error />} />
                </Route>
                <Route path="*" element={<Navigate to="/error" />} />
            </Routes>
        </Router>
    )
}
