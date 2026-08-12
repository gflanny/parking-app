export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl w-full space-y-8 text-center">
        {/* 标题 - 使用主色 */}
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          智能停车决策平台
        </h1>
        
        {/* 副标题 - 使用辅色 */}
        <p className="text-xl text-secondary">
          Parking-MVP 设计系统测试
        </p>
        
        {/* 颜色展示卡片 */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {/* 主色 */}
          <div className="p-4 rounded-lg bg-primary text-white">
            <p className="font-semibold">主色 Primary</p>
            <p className="text-sm opacity-80">#1A3A5C</p>
          </div>
          
          {/* 辅色 */}
          <div className="p-4 rounded-lg bg-secondary text-white">
            <p className="font-semibold">辅色 Secondary</p>
            <p className="text-sm opacity-80">#2B7BE4</p>
          </div>
          
          {/* 强调色 */}
          <div className="p-4 rounded-lg bg-accent text-white">
            <p className="font-semibold">强调色 Accent</p>
            <p className="text-sm opacity-80">#5BA3F5</p>
          </div>
          
          {/* 成功色 */}
          <div className="p-4 rounded-lg bg-success text-white">
            <p className="font-semibold">成功 Success</p>
            <p className="text-sm opacity-80">#16A34A</p>
          </div>
          
          {/* CTA色 */}
          <div className="p-4 rounded-lg bg-cta text-white">
            <p className="font-semibold">行动 CTA</p>
            <p className="text-sm opacity-80">#F59E0B</p>
          </div>
          
          {/* 错误色 */}
          <div className="p-4 rounded-lg bg-error text-white">
            <p className="font-semibold">错误 Error</p>
            <p className="text-sm opacity-80">#DC2626</p>
          </div>
        </div>
        
        {/* 说明文字 */}
        <p className="text-text-secondary mt-8">
          如果上面的颜色卡片显示正确，说明 Tailwind 配置成功！
        </p>
      </div>
    </main>
  );
}
