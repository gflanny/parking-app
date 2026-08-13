'use client';

import { useState } from 'react';

// 建筑类型数据（骨架，后续细化）
const buildingTypes = [
  {
    category: '地上建筑',
    items: [
      { id: '地上-1', label: '待细化-1', icon: '🏠' },
      { id: '地上-2', label: '待细化-2', icon: '🏢' },
      { id: '地上-3', label: '待细化-3', icon: '🏥' },
      { id: '地上-4', label: '待细化-4', icon: '🏭' },
    ],
  },
  {
    category: '地下建筑',
    items: [
      { id: '地下-1', label: '待细化-1', icon: '🅿️' },
      { id: '地下-2', label: '待细化-2', icon: '🗄️' },
      { id: '地下-3', label: '待细化-3', icon: '🏗️' },
      { id: '地下-4', label: '待细化-4', icon: '📦' },
    ],
  },
];

// 车库类型数据（9种）
const garageTypes = [
  { id: '升降横移', label: '升降横移', icon: '📦', desc: '最常见的多层停车' },
  { id: '垂直循环', label: '垂直循环', icon: '🔄', desc: '垂直方向循环运动' },
  { id: '巷道堆垛', label: '巷道堆垛', icon: '🤖', desc: '堆垛机水平作业' },
  { id: 'AGV机器人', label: 'AGV机器人', icon: '🚗', desc: '机器人自动搬运' },
  { id: '车板交换-横向', label: '车板交换-横向', icon: '⬅️', desc: '交换板水平横移' },
  { id: '车板交换-纵向', label: '车板交换-纵向', icon: '⬆️', desc: '交换板水平纵移' },
  { id: '塔库', label: '塔库', icon: '🏬', desc: '垂直塔式停车（待定）' },
  { id: '待定-8', label: '待定-8', icon: '❓', desc: '预留扩展位' },
  { id: '待定-9', label: '待定-9', icon: '❓', desc: '预留扩展位' },
];

// 热门车型（东南亚/国际方向，骨架）
const hotVehicles = [
  { id: 'toyota-camry', label: '丰田凯美瑞', brand: '日系' },
  { id: 'honda-civic', label: '本田思域', brand: '日系' },
  { id: 'tesla-model-y', label: '特斯拉Model Y', brand: '美系' },
  { id: 'bmw-x5', label: '宝马X5', brand: '德系' },
  { id: 'mercedes-c', label: '奔驰C级', brand: '德系' },
  { id: 'hyundai-tucson', label: '现代途胜', brand: '韩系' },
  { id: 'byd-seal', label: '比亚迪海豹', brand: '中国出海' },
  { id: 'perodua-ativa', label: 'Perodua Ativa', brand: '东南亚' },
];

export default function StepGuide() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedBuilding, setSelectedBuilding] = useState<string | null>(null);
  const [selectedGarage, setSelectedGarage] = useState<string | null>(null);
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);
  const [vehicleSearch, setVehicleSearch] = useState('');

  const canProceed = () => {
    if (currentStep === 1) return selectedBuilding !== null;
    if (currentStep === 2) return selectedGarage !== null;
    if (currentStep === 3) return selectedVehicle !== null;
    return false;
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleGenerate = () => {
    if (selectedBuilding && selectedGarage && selectedVehicle) {
      // TODO: 跳转到 /preview 页面，携带参数
      alert(`正在生成方案...\n建筑类型: ${selectedBuilding}\n车库类型: ${selectedGarage}\n车型: ${selectedVehicle}`);
    }
  };

  const filteredVehicles = hotVehicles.filter((v) =>
    v.label.toLowerCase().includes(vehicleSearch.toLowerCase())
  );

  return (
    <section id="step-guide" className="py-12 md:py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* 标题 */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">
            3步定制您的专属方案
          </h2>
          <p className="text-text-secondary">
            选择您的需求，AI将在3秒内为您匹配最佳停车方案
          </p>
        </div>

        {/* 进度条 */}
        <div className="mb-10">
          <div className="flex items-center justify-center gap-2 md:gap-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                    currentStep >= step
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 text-text-muted'
                  }`}
                >
                  {currentStep > step ? '✓' : step}
                </div>
                {step < 3 && (
                  <div
                    className={`w-16 md:w-24 h-1 mx-2 rounded ${
                      currentStep > step ? 'bg-primary' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-2 text-sm text-text-secondary">
            <span className="mx-4">Step 1</span>
            <span className="mx-4">Step 2</span>
            <span className="mx-4">Step 3</span>
          </div>
        </div>

        {/* Step 1: 建筑类型 */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-center text-text-primary">
              您的建筑属于哪种类型？
            </h3>
            <div className="space-y-6">
              {buildingTypes.map((group) => (
                <div key={group.category}>
                  <p className="text-sm font-medium text-text-secondary mb-3">
                    {group.category}
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {group.items.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setSelectedBuilding(item.id)}
                        className={`p-4 rounded-xl border-2 transition-all text-center ${
                          selectedBuilding === item.id
                            ? 'border-primary bg-primary/5 text-primary'
                            : 'border-gray-200 hover:border-primary/50'
                        }`}
                      >
                        <span className="text-3xl block mb-2">{item.icon}</span>
                        <span className="text-sm font-medium">{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: 车库类型 */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-center text-text-primary">
              您需要哪种车库类型？
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {garageTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedGarage(type.id)}
                  className={`p-4 rounded-xl border-2 transition-all text-left ${
                    selectedGarage === type.id
                      ? 'border-primary bg-primary/5 text-primary'
                      : 'border-gray-200 hover:border-primary/50'
                  }`}
                >
                  <span className="text-3xl block mb-2">{type.icon}</span>
                  <span className="text-sm font-bold block">{type.label}</span>
                  <span className="text-xs text-text-muted">{type.desc}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: 车型选择 */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-center text-text-primary">
              您的车型是什么？
            </h3>

            {/* 搜索框 */}
            <div className="max-w-md mx-auto">
              <input
                type="text"
                placeholder="🔍 搜索车型..."
                value={vehicleSearch}
                onChange={(e) => setVehicleSearch(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none"
              />
            </div>

            {/* 热门车型 */}
            <div>
              <p className="text-sm font-medium text-text-secondary mb-3">
                热门车型（东南亚/国际车型）
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                {filteredVehicles.map((vehicle) => (
                  <button
                    key={vehicle.id}
                    onClick={() => setSelectedVehicle(vehicle.id)}
                    className={`px-4 py-2 rounded-full border-2 transition-all text-sm ${
                      selectedVehicle === vehicle.id
                        ? 'border-primary bg-primary text-white'
                        : 'border-gray-200 hover:border-primary/50'
                    }`}
                  >
                    {vehicle.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 选型提示 */}
            {selectedVehicle && (
              <div className="bg-success/10 border border-success/30 rounded-xl p-4 text-center">
                <p className="text-success font-medium">
                  ✅ 已选择：{hotVehicles.find((v) => v.id === selectedVehicle)?.label}
                </p>
              </div>
            )}
          </div>
        )}

        {/* 操作按钮 */}
        <div className="flex justify-center gap-4 mt-10">
          {currentStep > 1 && (
            <button
              onClick={handlePrev}
              className="px-8 py-3 rounded-xl border-2 border-gray-200 text-text-secondary hover:border-primary hover:text-primary transition-all font-medium"
            >
              ← 上一步
            </button>
          )}
          {currentStep < 3 ? (
            <button
              onClick={handleNext}
              disabled={!canProceed()}
              className={`px-8 py-3 rounded-xl font-bold transition-all ${
                canProceed()
                  ? 'bg-primary hover:bg-primary-dark text-white'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              下一步 →
            </button>
          ) : (
            <button
              onClick={handleGenerate}
              disabled={!selectedVehicle}
              className={`px-8 py-3 rounded-xl font-bold text-lg transition-all ${
                selectedVehicle
                  ? 'bg-cta hover:bg-cta-dark text-white shadow-lg transform hover:scale-105'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              🚀 生成我的专属方案
            </button>
          )}
        </div>

        {/* 选中状态提示 */}
        <div className="mt-6 text-center text-sm text-text-muted">
          已选择：建筑【{selectedBuilding || '未选择'}】| 
          车库【{selectedGarage || '未选择'}】| 
          车型【{selectedVehicle || '未选择'}】
        </div>
      </div>
    </section>
  );
}
