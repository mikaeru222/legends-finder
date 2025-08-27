import { createRoot } from 'react-dom/client'
import App from './App'
import './styles.css'   // ← 追加（新規CSSの読み込み）

const el = document.getElementById('root')!
createRoot(el).render(<App />)
