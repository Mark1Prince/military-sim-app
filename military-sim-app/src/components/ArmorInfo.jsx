function ArmorInfo() {
  return (
<div className="armor">
  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
    <Truck size={28} color="#9ecfff" />
    <h2>Бронетехника</h2>
  </div>
  <p>
    Включает современные танки, бронетранспортёры и боевые машины пехоты, используемые для поддержки
    наземных операций и защиты личного состава.
  </p>
</div>

  );
}

export default ArmorInfo;

import { Truck, BookOpenCheck, PlayCircle } from 'lucide-react';

