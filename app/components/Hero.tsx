export default function Hero() {
  const trustBadges = [
    {
      icon: '🚗',
      value: '50+',
      label: '已收录车型',
    },
    {
      icon: '🏗️',
      value: '9种',
      label: '适配车库类型',
    },
    {
      icon: '📈',
      value: '30%+',
      label: '节省空间',
    },
  ];

  return (
    <section className="bg-gradient-to-br from-primary to-secondary py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 主口号 */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          AI精准匹配，3秒定制专属停车方案
        </h1>

        {/* 副标题 */}
        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          您身边的停车决策顾问 · 基于真实设备参数，物理过滤杜绝AI算错尺寸
        </p>

        {/* 信任徽章 */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {trustBadges.map((badge, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 flex items-center gap-3"
            >
              <span className="text-2xl">{badge.icon}</span>
              <div className="text-left">
                <p className="text-white font-bold text-xl">{badge.value}</p>
                <p className="text-white/70 text-sm">{badge.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA 按钮（锚点引导） */}
        <div className="mt-8">
          <a
            href="#step-guide"
            className="inline-flex items-center gap-2 bg-cta hover:bg-cta-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            <span>🚀</span>
            <span>立即开始定制</span>
          </a>
        </div>
      </div>
    </section>
  );
}
