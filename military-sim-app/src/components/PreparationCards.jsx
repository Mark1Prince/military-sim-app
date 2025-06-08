import './PreparationCards.css';
import {
  Dumbbell,
  Crosshair,
  Wrench,
  Shield,
} from 'lucide-react';

function PreparationCards() {
  return (
    <section className="preparation-cards">
      <div className="card">
        <Dumbbell size={32} color="#80d4a8" />
        <h3>Физическая подготовка солдат</h3>
        <p>Подробное описание и методы обучения в рамках подготовки к специальным операциям.</p>
      </div>
      <div className="card">
        <Crosshair size={32} color="#80d4a8" />
        <h3>Тактические тренировки</h3>
        <p>Подробное описание и методы обучения в рамках подготовки к специальным операциям.</p>
      </div>
      <div className="card">
        <Wrench size={32} color="#80d4a8" />
        <h3>Работа с техникой и оборудованием</h3>
        <p>Подробное описание и методы обучения в рамках подготовки к специальным операциям.</p>
      </div>
      <div className="card">
        <Shield size={32} color="#80d4a8" />
        <h3>Сценарии имитации боевых условий</h3>
        <p>Подробное описание и методы обучения в рамках подготовки к специальным операциям.</p>
      </div>
    </section>
  );
}

export default PreparationCards;


