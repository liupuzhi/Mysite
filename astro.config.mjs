// @ts-check - 启用TypeScript类型检查
// 导入Astro配置定义函数
import { defineConfig } from 'astro/config';
// 导入Tailwind CSS集成插件
import tailwind from '@astrojs/tailwind';
// 导入站点地图生成插件
import sitemap from '@astrojs/sitemap';

// Astro配置文档地址：https://astro.build/config
// 导出Astro配置对象
export default defineConfig({
  site: 'https://hj-portfolio.com',  // 网站URL，用于生成站点地图和规范链接
  integrations: [tailwind(), sitemap()],  // 集成插件：Tailwind CSS和站点地图生成器
});
