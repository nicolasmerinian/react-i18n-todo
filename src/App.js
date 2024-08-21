import { useTranslation } from 'react-i18next';
import Todolist from './components/Todolist';
import LanguageButton from './components/LanguageButton';
import lngs from './languages.js';
import './App.css';

function App() {
  const { t } = useTranslation();

  return (
      <div className='App'>
        <header className='App-header'>
          <p>{t('header')}</p>
          <div>
            { Object.keys(lngs).map((lng) => (
              <LanguageButton lng= {lng }/>
            ))}
          </div>
        </header>
        <Todolist />
      </div>
  )
}

export default App;
