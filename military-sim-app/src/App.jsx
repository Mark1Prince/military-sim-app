import './App.css';
import { useState } from 'react';
import { XCircle, Info, BookOpenCheck, Map } from 'lucide-react';
import { Link } from 'react-router-dom';

import HeroSection from './components/HeroSection';
import PreparationCards from './components/PreparationCards';
import ArmorInfo from './components/ArmorInfo';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="App">
      <header>
        <h1>Симулятор военных операций</h1>
      </header>

      <HeroSection />
      <PreparationCards />
      <ArmorInfo />

      {/* Кнопка перехода к темам */}
      <div className="button-section" style={{ textAlign: 'center', margin: '20px 0' }}>
        <Link to="/topics">
          <button>
            <BookOpenCheck size={18} style={{ marginRight: '8px' }} />
            Перейти к темам обучения
          </button>
        </Link>
      </div>

      {/* Кнопка открытия модального окна */}
      <div className="floating-modal-button">
        <button onClick={() => setIsModalOpen(true)} className="modal-open-button">
          <Info size={18} style={{ marginRight: '8px' }} />
          Подробнее о симуляции
        </button>
      </div>

      {/* Модальное окно */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>О симуляции</h2>
              <button className="close-button" onClick={() => setIsModalOpen(false)}>
                <XCircle size={24} />
              </button>
            </div>
            <p>
              Это веб-приложение моделирует боевую подготовку солдат, работу с техникой и проведение спецопераций.
              Используется для анализа, обучения и подготовки командных решений.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
