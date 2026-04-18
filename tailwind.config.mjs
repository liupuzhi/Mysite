/** @type {import('tailwindcss').Config} - JSDoc类型注释，提供类型提示 */
// 导出Tailwind CSS配置对象
export default {
  // 指定Tailwind CSS扫描的文件路径，用于生成所需的CSS类
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",  // 扫描src目录下所有Astro、HTML、JS、TS文件
  ],
  // 主题扩展配置
  theme: {
    extend: {
      // 自定义颜色配置
      colors: {
        primary: {
          50: '#f0f4ff',   // 最浅的主色调
          100: '#e0e7ff',  // 浅主色调
          200: '#c7d2fe',  // 较浅主色调
          300: '#a5b4fc',  // 中浅主色调
          400: '#818cf8',  // 中等主色调
          500: '#6366f1',  // 标准主色调
          600: '#4f46e5',  // 较深主色调
          700: '#4338ca',  // 深主色调
          800: '#3730a3',  // 较深主色调
          900: '#312e81',  // 最深主色调
        },
      },
      // 自定义背景图片
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',  // 主渐变色
      },
      // 自定义字体
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],  // 无衬线字体栈
      },
      // 自定义阴影
      boxShadow: {
        'card': '0 10px 30px rgba(0, 0, 0, 0.2)',       // 卡片阴影
        'card-hover': '0 15px 40px rgba(0, 0, 0, 0.25)', // 卡片悬停阴影
      },
      // 自定义动画
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',  // 慢速脉冲动画
      }
    },
  },
  // Tailwind CSS插件列表（当前未使用任何插件）
  plugins: [],
};
