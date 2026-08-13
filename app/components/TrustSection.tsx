export default function TrustSection() {
  const stats = [
    { value: '50+', label: '收录车型', icon: '🚗' },
    { value: '9种', label: '车库类型', icon: '🏗️' },
    { value: '30%+', label: '空间节省', icon: '📈' },
    { value: '400+', label: '方案组合', icon: '🎯' },
  ];

  const brands = [
    '丰田Toyota',
    '本田Honda', 
    '特斯拉Tesla',
    '宝马BMW',
    '现代Hyundai',
    '比亚迪BYD',
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* 数据墙 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-background"
            >
              <span className="text-3xl mb-2 block">{stat.icon}</span>
              <p className="text-3xl md:text-4xl font-bold text-primary mb-1">
                {stat.value}
              </p>
              <p className="text-text-secondary text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* 合作品牌 Logo 墙 */}
        <div className="text-center">
          <p className="text-text-muted text-sm mb-6">覆盖车型品牌</p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="px-6 py-3 rounded-full bg-gray-100 text-text-secondary font-medium"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>

        {/* 信任说明 */}
        <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <span className="text-3xl">🛡️</span>
            <div>
              <p className="font-bold text-primary">基于真实设备参数，物理过滤杜绝AI算错尺寸</p>
              <p className="text-sm text-text-secondary mt-1">
                所有推荐方案均基于真实机械停车设备参数，确保尺寸匹配精准无误
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
