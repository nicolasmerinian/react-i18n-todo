import i18n from 'i18next';
import lngs from '../languages.js';
import './LanguageButton.css';

const LanguageButton = ({ lng }) => {
  return (
    <div 
        key={lng} 
        className={ i18n.resolvedLanguage === lng ? 'LanguageButton language-selected' : 'LanguageButton' }
        type="submit" 
        onClick={() => i18n.changeLanguage(lng)}
    >
        {lngs[lng].short}
    </div>
  )
}

export default LanguageButton;