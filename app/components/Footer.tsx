export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: '首页', href: '/' },
    { label: '定制案例', href: '/cases' },
    { label: '产品中心', href: '/products' },
    { label: '关于我们', href: '/about' },
    { label: '联系我们', href: '/contact' },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="font-bold text-sm">P</span>
              </div>
              <span className="font-bold text-lg">智能停车决策平台</span>
            </div>
            <p className="text-white/70 text-sm">
              您身边的停车决策顾问<br />
              AI精准匹配，3秒定制专属停车方案
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">快速链接</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">联系我们</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>📧 联系方式待添加</li>
              <li>📞 联系电话待添加</li>
              <li>📍 地址待添加</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm text-white/50">
          <p>© {currentYear} 智能停车决策平台 版权所有</p>
          <p className="mt-1">Parking-MVP · All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
