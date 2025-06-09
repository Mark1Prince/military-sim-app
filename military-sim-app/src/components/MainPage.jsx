import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpenCheck, Info } from 'lucide-react';
import HeroSection from './HeroSection';
import PreparationCards from './PreparationCards';
import InteractiveMap from './InteractiveMap'; // добавили карту

function MainPage({ setIsModalOpen }) {
  return (
    <div className="App">
      <header>
        <h1>Симулятор военных операций</h1>
      </header>

      <HeroSection />
      <PreparationCards />
      <InteractiveMap /> {/* Вставили карту сюда */}

      <div className="button-section" style={{ textAlign: 'center', margin: '20px 0' }}>
        <Link to="/topics">
          <button>
            <BookOpenCheck size={18} style={{ marginRight: '8px' }} />
            Перейти к темам обучения
          </button>
        </Link>
      </div>

      <div className="floating-modal-button">
        <button onClick={() => setIsModalOpen(true)} className="modal-open-button">
          <Info size={18} style={{ marginRight: '8px' }} />
          Подробнее о симуляции
        </button>
      </div>
    </div>
  );
}

export default MainPage;
