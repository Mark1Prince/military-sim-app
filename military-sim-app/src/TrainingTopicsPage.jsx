import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TrainingTopicsPage.css';
import { X } from 'lucide-react';

import {
  ArrowLeft,
  ListChecks,
  Globe,
  Target,
  Laptop,
  Radio,
  SatelliteDish,
  Shield,
  Truck,
  Users
} from 'lucide-react';

const topicsData = [
  {
    id: 1,
    title: 'Тактическое планирование',
    description: 'Разработка планов действий с учётом реальных сценариев и угроз.',
    details: 'Построение боевых порядков, взаимодействие между подразделениями, адаптация к изменениям на поле боя.',
    icon: <ListChecks size={28} />,
    category: 'Тактика',
  },
  {
    id: 2,
    title: 'Ориентирование на местности',
    description: 'Навигация по цифровой и топографической карте в боевых условиях.',
    details: 'Изучение координат, GPS, построение маршрутов, работа с компасом и картой.',
    icon: <Globe size={28} />,
    category: 'Тактика',
  },
  {
    id: 3,
    title: 'Работа в команде',
    description: 'Согласованные действия в отрядах, передача команд и контроль.',
    details: 'Упражнения по взаимодействию, распределению ролей, командной реакции на угрозу.',
    icon: <Users size={28} />,
    category: 'Связь',
  },
  {
    id: 4,
    title: 'Техническое обеспечение',
    description: 'Использование дронов, систем связи и БПЛА в операции.',
    details: 'Настройка и запуск техники, радиосвязь, контроль над беспилотниками.',
    icon: <Laptop size={28} />,
    category: 'Техника',
  },
  {
    id: 5,
    title: 'Анализ противника',
    description: 'Сбор и оценка информации о силах противника.',
    details: 'Оценка численности, вооружения, возможных маршрутов и стратегий противника.',
    icon: <Shield size={28} />,
    category: 'Тактика',
  },
  {
    id: 6,
    title: 'Радиообмен',
    description: 'Настройка каналов связи и ведение радиообмена.',
    details: 'Кодовые сообщения, работа в эфире, переключение частот.',
    icon: <Radio size={28} />,
    category: 'Связь',
  },
  {
    id: 7,
    title: 'Управление техникой',
    description: 'Навигация и использование бронетехники и транспорта.',
    details: 'Управление танками, логистика, техническое обслуживание.',
    icon: <Truck size={28} />,
    category: 'Техника',
  },
  {
    id: 8,
    title: 'Спутниковая разведка',
    description: 'Использование спутниковых данных для анализа местности.',
    details: 'Распознавание объектов, планирование по спутниковым снимкам.',
    icon: <SatelliteDish size={28} />,
    category: 'Техника',
  },
];



const categories = ['Все', 'Тактика', 'Связь', 'Техника'];

const TrainingTopicsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [selectedTopic, setSelectedTopic] = useState(null);

  const filteredTopics =
    selectedCategory === 'Все'
      ? topicsData
      : topicsData.filter(topic => topic.category === selectedCategory);

  return (
    <div className="topics-wrapper">
      <div className="topics-header">
        <Link to="/" className="back-link">
          <ArrowLeft size={20} /> Назад
        </Link>
        <h1 className="topics-title">Темы обучения</h1>
      </div>

      <div className="filter-buttons">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="topic-cards">
        {filteredTopics.map(topic => (
          <div
            key={topic.id}
            className="topic-card"
            onClick={() => setSelectedTopic(topic)}
          >
            {topic.icon}
            <h3>{topic.title}</h3>
            <p>{topic.description}</p>
          </div>
        ))}
      </div>

      {selectedTopic && (
        <div className="modal-overlay" onClick={() => setSelectedTopic(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selectedTopic.title}</h2>
              <button className="close-button" onClick={() => setSelectedTopic(null)}>
                <X size={24} />
              </button>
            </div>
            <p><strong>Описание:</strong> {selectedTopic.description}</p>
            <p style={{ marginTop: '10px' }}>
              <strong>Подробности:</strong> {selectedTopic.details}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrainingTopicsPage;
