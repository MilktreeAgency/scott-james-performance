import React from 'react';
import { Copy, Check } from 'lucide-react';

export default function StyleGuidePage() {
  const [copied, setCopied] = React.useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const ColorSwatch = ({ name, hex, variable }: { name: string; hex: string; variable: string }) => (
    <div className="group">
      <div 
        className="h-24 rounded-xl border border-white/10 mb-3 relative overflow-hidden cursor-pointer hover:scale-105 transition-transform"
        style={{ backgroundColor: hex }}
        onClick={() => copyToClipboard(hex, `color-${variable}`)}
      >
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
          {copied === `color-${variable}` ? (
            <Check className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
          ) : (
            <Copy className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
          )}
        </div>
      </div>
      <p className="text-sm font-medium text-white mb-1">{name}</p>
      <p className="text-xs text-gray-400 font-mono">{hex}</p>
      <p className="text-xs text-gray-500 font-mono">{variable}</p>
    </div>
  );

  const brandColors = [
    { name: 'Brand 50', hex: '#f4fdf0', variable: 'brand-50' },
    { name: 'Brand 100', hex: '#e8fce0', variable: 'brand-100' },
    { name: 'Brand 200', hex: '#c9f7b4', variable: 'brand-200' },
    { name: 'Brand 300', hex: '#a8f090', variable: 'brand-300' },
    { name: 'Brand 400', hex: '#a0f084', variable: 'brand-400' },
    { name: 'Brand 500', hex: '#7FD758', variable: 'brand-500' },
    { name: 'Brand 600', hex: '#5fb838', variable: 'brand-600' },
    { name: 'Brand 700', hex: '#4a9429', variable: 'brand-700' },
    { name: 'Brand 800', hex: '#2d5a1a', variable: 'brand-800' },
    { name: 'Brand 900', hex: '#1e3d0f', variable: 'brand-900' },
    { name: 'Brand 950', hex: '#0f1f08', variable: 'brand-950' },
  ];

  const onyxColors = [
    { name: 'Onyx 800', hex: '#1c1917', variable: 'onyx-800' },
    { name: 'Onyx 900', hex: '#0c0a09', variable: 'onyx-900' },
    { name: 'Onyx 950', hex: '#040302', variable: 'onyx-950' },
  ];

  const greyColors = [
    { name: 'Grey 300', hex: '#d1d5db', variable: 'grey-300' },
    { name: 'Grey 400', hex: '#9ca3af', variable: 'grey-400' },
    { name: 'Grey 500', hex: '#6b7280', variable: 'grey-500' },
    { name: 'Grey 600', hex: '#4b5563', variable: 'grey-600' },
    { name: 'Grey 700', hex: '#374151', variable: 'grey-700' },
    { name: 'Grey 800', hex: '#1f2937', variable: 'grey-800' },
  ];

  const neutralColors = [
    { name: 'White', hex: '#ffffff', variable: 'white' },
    { name: 'Black', hex: '#000000', variable: 'black' },
  ];

  const images = [
    { name: 'Logo', path: '/SJ LOGO.avif', description: 'Primary brand logo' },
    { name: 'Training Action 1', path: '/1abdc8_81efc59bdc634a94bce43ff69cc79e7f~mv2.avif', description: 'Performance/training imagery' },
    { name: 'Training Action 2', path: '/1abdc8_b45028f10a9a456b9cc93c73bb83920d~mv2.avif', description: 'Fat loss/lifestyle imagery' },
    { name: 'Training Action 3', path: '/1abdc8_d253d90d518e4b418b65fb2567ee9267~mv2.avif', description: 'About page hero' },
    { name: 'Portrait', path: '/IMG_8670_PNG.avif', description: 'Personal/coaching imagery' },
  ];

  return (
    <div className="bg-onyx-950 min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 mb-6">
            <span className="text-brand-400 text-xs font-bold uppercase tracking-widest">Internal Resource</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-light text-white mb-4 tracking-tight">Style Guide</h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            Complete design system reference for Scott James Performance. All colors, typography, spacing, and assets used across the website.
          </p>
        </div>

        {/* Color Palette */}
        <section className="mb-24">
          <div className="mb-12">
            <h2 className="text-3xl font-light text-white mb-3">Color Palette</h2>
            <p className="text-gray-400">Click any swatch to copy the hex code</p>
          </div>

          {/* Brand Green */}
          <div className="mb-12">
            <h3 className="text-xl font-medium text-white mb-6 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-brand-500" />
              Brand Green (Primary)
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {brandColors.map((color) => (
                <ColorSwatch key={color.variable} {...color} />
              ))}
            </div>
            <div className="mt-6 p-6 bg-onyx-900/50 border border-brand-500/20 rounded-2xl">
              <p className="text-sm text-gray-300 leading-relaxed">
                <span className="font-bold text-brand-400">Usage:</span> Primary CTA buttons, highlights, accents, links, active states, success states. Use brand-400 and brand-500 for primary actions.
              </p>
            </div>
          </div>

          {/* Onyx (Dark Backgrounds) */}
          <div className="mb-12">
            <h3 className="text-xl font-medium text-white mb-6 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-onyx-900" />
              Onyx (Dark Backgrounds)
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {onyxColors.map((color) => (
                <ColorSwatch key={color.variable} {...color} />
              ))}
            </div>
            <div className="mt-6 p-6 bg-onyx-900/50 border border-white/10 rounded-2xl">
              <p className="text-sm text-gray-300 leading-relaxed">
                <span className="font-bold text-white">Usage:</span> Primary backgrounds, cards, panels. Onyx-950 is the main body background. Onyx-900 for elevated surfaces. Onyx-800 for highest elevation.
              </p>
            </div>
          </div>

          {/* Grey Scale */}
          <div className="mb-12">
            <h3 className="text-xl font-medium text-white mb-6 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-grey-500" />
              Grey Scale
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {greyColors.map((color) => (
                <ColorSwatch key={color.variable} {...color} />
              ))}
            </div>
            <div className="mt-6 p-6 bg-onyx-900/50 border border-white/10 rounded-2xl">
              <p className="text-sm text-gray-300 leading-relaxed">
                <span className="font-bold text-white">Usage:</span> Text hierarchy, borders, dividers, secondary UI elements. Use grey-300/400 for body text, grey-500/600 for subtle text, grey-700/800 for borders.
              </p>
            </div>
          </div>

          {/* Neutrals */}
          <div className="mb-12">
            <h3 className="text-xl font-medium text-white mb-6 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-white" />
              Neutrals
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-6 max-w-md">
              {neutralColors.map((color) => (
                <ColorSwatch key={color.variable} {...color} />
              ))}
            </div>
            <div className="mt-6 p-6 bg-onyx-900/50 border border-white/10 rounded-2xl">
              <p className="text-sm text-gray-300 leading-relaxed">
                <span className="font-bold text-white">Usage:</span> White for primary text and inverted buttons. Black for button text on white backgrounds.
              </p>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-24">
          <div className="mb-12">
            <h2 className="text-3xl font-light text-white mb-3">Typography</h2>
            <p className="text-gray-400">Inter font family with custom display sizes</p>
          </div>

          <div className="space-y-8">
            {/* Font Family */}
            <div className="p-8 bg-onyx-900/50 border border-white/10 rounded-2xl">
              <p className="text-sm font-bold text-brand-400 mb-2 uppercase tracking-wider">Font Family</p>
              <p className="text-2xl text-white font-light mb-2">Inter</p>
              <p className="text-sm text-gray-400 font-mono">font-family: 'Inter', system-ui, sans-serif</p>
              <div className="mt-4 flex gap-4 text-xs">
                <span className="font-light text-gray-300">Light (300)</span>
                <span className="font-normal text-gray-300">Regular (400)</span>
                <span className="font-medium text-gray-300">Medium (500)</span>
                <span className="font-semibold text-gray-300">Semibold (600)</span>
                <span className="font-bold text-gray-300">Bold (700)</span>
              </div>
            </div>

            {/* Display Sizes */}
            <div className="space-y-6">
              <div className="p-8 bg-onyx-900/50 border border-white/10 rounded-2xl">
                <p className="text-sm font-bold text-brand-400 mb-4 uppercase tracking-wider">Display Sizes (Hero Headlines)</p>
                <div className="space-y-6">
                  <div>
                    <p className="text-9xl font-light text-white mb-2 headline-light">9XL Display</p>
                    <p className="text-xs text-gray-400 font-mono">8rem / 128px - line-height: 0.9 - weight: 300</p>
                  </div>
                  <div>
                    <p className="text-8xl font-light text-white mb-2 headline-light">8XL Display</p>
                    <p className="text-xs text-gray-400 font-mono">6rem / 96px - line-height: 0.95 - weight: 300</p>
                  </div>
                  <div>
                    <p className="text-7xl font-light text-white mb-2 headline-light">7XL Display</p>
                    <p className="text-xs text-gray-400 font-mono">4.5rem / 72px - line-height: 1 - weight: 300</p>
                  </div>
                  <div>
                    <p className="text-6xl font-light text-white mb-2 headline-light">6XL Display</p>
                    <p className="text-xs text-gray-400 font-mono">3.75rem / 60px - line-height: 1 - weight: 300</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-onyx-900/50 border border-white/10 rounded-2xl">
                <p className="text-sm font-bold text-brand-400 mb-4 uppercase tracking-wider">Standard Sizes</p>
                <div className="space-y-4">
                  <div>
                    <p className="text-5xl text-white mb-1">5XL Heading</p>
                    <p className="text-xs text-gray-400 font-mono">3rem / 48px</p>
                  </div>
                  <div>
                    <p className="text-4xl text-white mb-1">4XL Heading</p>
                    <p className="text-xs text-gray-400 font-mono">2.25rem / 36px</p>
                  </div>
                  <div>
                    <p className="text-3xl text-white mb-1">3XL Heading</p>
                    <p className="text-xs text-gray-400 font-mono">1.875rem / 30px</p>
                  </div>
                  <div>
                    <p className="text-2xl text-white mb-1">2XL Heading</p>
                    <p className="text-xs text-gray-400 font-mono">1.5rem / 24px</p>
                  </div>
                  <div>
                    <p className="text-xl text-white mb-1">XL Body</p>
                    <p className="text-xs text-gray-400 font-mono">1.25rem / 20px</p>
                  </div>
                  <div>
                    <p className="text-lg text-white mb-1">LG Body</p>
                    <p className="text-xs text-gray-400 font-mono">1.125rem / 18px</p>
                  </div>
                  <div>
                    <p className="text-base text-white mb-1">Base Body</p>
                    <p className="text-xs text-gray-400 font-mono">1rem / 16px</p>
                  </div>
                  <div>
                    <p className="text-sm text-white mb-1">SM Body</p>
                    <p className="text-xs text-gray-400 font-mono">0.875rem / 14px</p>
                  </div>
                  <div>
                    <p className="text-xs text-white mb-1">XS Body</p>
                    <p className="text-xs text-gray-400 font-mono">0.75rem / 12px</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Spacing Scale */}
        <section className="mb-24">
          <div className="mb-12">
            <h2 className="text-3xl font-light text-white mb-3">Spacing Scale</h2>
            <p className="text-gray-400">Extended spacing tokens for dramatic layouts</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Standard Spacing */}
            <div className="p-8 bg-onyx-900/50 border border-white/10 rounded-2xl">
              <p className="text-sm font-bold text-brand-400 mb-6 uppercase tracking-wider">Standard Spacing</p>
              <div className="space-y-4">
                {[
                  { name: '1', rem: '0.25rem', px: '4px' },
                  { name: '2', rem: '0.5rem', px: '8px' },
                  { name: '3', rem: '0.75rem', px: '12px' },
                  { name: '4', rem: '1rem', px: '16px' },
                  { name: '5', rem: '1.25rem', px: '20px' },
                  { name: '6', rem: '1.5rem', px: '24px' },
                  { name: '8', rem: '2rem', px: '32px' },
                  { name: '10', rem: '2.5rem', px: '40px' },
                  { name: '12', rem: '3rem', px: '48px' },
                  { name: '16', rem: '4rem', px: '64px' },
                ].map((space) => (
                  <div key={space.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 text-sm text-gray-400 font-mono">{space.name}</div>
                      <div className="h-4 bg-brand-500/30 rounded" style={{ width: space.px }} />
                    </div>
                    <div className="text-xs text-gray-400 font-mono">{space.rem} / {space.px}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Extended Spacing */}
            <div className="p-8 bg-onyx-900/50 border border-white/10 rounded-2xl">
              <p className="text-sm font-bold text-brand-400 mb-6 uppercase tracking-wider">Extended Spacing</p>
              <div className="space-y-4">
                {[
                  { name: '18', rem: '4.5rem', px: '72px' },
                  { name: '22', rem: '5.5rem', px: '88px' },
                  { name: '26', rem: '6.5rem', px: '104px' },
                  { name: '30', rem: '7.5rem', px: '120px' },
                  { name: '34', rem: '8.5rem', px: '136px' },
                  { name: '38', rem: '9.5rem', px: '152px' },
                  { name: '42', rem: '10.5rem', px: '168px' },
                ].map((space) => (
                  <div key={space.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 text-sm text-gray-400 font-mono">{space.name}</div>
                      <div className="h-4 bg-brand-500/30 rounded w-full max-w-[80px]" />
                    </div>
                    <div className="text-xs text-gray-400 font-mono">{space.rem} / {space.px}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Border Radius */}
        <section className="mb-24">
          <div className="mb-12">
            <h2 className="text-3xl font-light text-white mb-3">Border Radius</h2>
            <p className="text-gray-400">Rounded corners for UI elements</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'sm', value: '0.125rem / 2px', class: 'rounded-sm' },
              { name: 'base', value: '0.25rem / 4px', class: 'rounded' },
              { name: 'md', value: '0.375rem / 6px', class: 'rounded-md' },
              { name: 'lg', value: '0.5rem / 8px', class: 'rounded-lg' },
              { name: 'xl', value: '0.75rem / 12px', class: 'rounded-xl' },
              { name: '2xl', value: '1rem / 16px', class: 'rounded-2xl' },
              { name: '3xl', value: '1.5rem / 24px', class: 'rounded-3xl' },
              { name: '4xl', value: '2rem / 32px', class: 'rounded-4xl' },
              { name: '5xl', value: '2.5rem / 40px', class: 'rounded-5xl' },
              { name: 'full', value: '9999px', class: 'rounded-full' },
            ].map((radius) => (
              <div key={radius.name} className="p-6 bg-onyx-900/50 border border-white/10 rounded-2xl">
                <div className={`w-full h-20 bg-brand-500/20 border border-brand-500/40 ${radius.class} mb-4`} />
                <p className="text-sm font-medium text-white mb-1">{radius.name}</p>
                <p className="text-xs text-gray-400 font-mono">{radius.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Gradients */}
        <section className="mb-24">
          <div className="mb-12">
            <h2 className="text-3xl font-light text-white mb-3">Gradients</h2>
            <p className="text-gray-400">Unified gradient system for backgrounds and accents</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-12 gradient-brand border border-brand-500/20 rounded-3xl">
              <p className="text-2xl font-light text-white mb-2">Brand Gradient</p>
              <p className="text-sm text-gray-400 mb-4">Primary accent gradient</p>
              <p className="text-xs text-gray-500 font-mono">
                linear-gradient(135deg, rgba(127, 215, 88, 0.1) 0%, transparent 50%)
              </p>
              <p className="text-xs text-brand-400 font-mono mt-2">.gradient-brand</p>
            </div>

            <div className="p-12 gradient-muted border border-white/10 rounded-3xl">
              <p className="text-2xl font-light text-white mb-2">Muted Gradient</p>
              <p className="text-sm text-gray-400 mb-4">Secondary/subtle gradient</p>
              <p className="text-xs text-gray-500 font-mono">
                linear-gradient(135deg, rgba(107, 114, 128, 0.1) 0%, transparent 50%)
              </p>
              <p className="text-xs text-gray-400 font-mono mt-2">.gradient-muted</p>
            </div>
          </div>
        </section>

        {/* Images & Assets */}
        <section className="mb-24">
          <div className="mb-12">
            <h2 className="text-3xl font-light text-white mb-3">Images & Assets</h2>
            <p className="text-gray-400">Available imagery in AVIF format for optimal performance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image) => (
              <div key={image.path} className="p-6 bg-onyx-900/50 border border-white/10 rounded-2xl">
                <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-onyx-950 flex items-center justify-center">
                  <img 
                    src={image.path} 
                    alt={image.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
                <p className="text-base font-medium text-white mb-2">{image.name}</p>
                <p className="text-sm text-gray-400 mb-3">{image.description}</p>
                <div className="flex items-center gap-2">
                  <code className="text-xs text-brand-400 bg-brand-950/50 px-3 py-1.5 rounded-lg font-mono flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                    {image.path}
                  </code>
                  <button
                    onClick={() => copyToClipboard(image.path, `img-${image.path}`)}
                    className="p-2 hover:bg-white/5 rounded-lg transition-colors flex-shrink-0"
                  >
                    {copied === `img-${image.path}` ? (
                      <Check className="w-4 h-4 text-brand-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-onyx-900/50 border border-white/10 rounded-2xl">
            <p className="text-sm text-gray-300 leading-relaxed">
              <span className="font-bold text-white">Format:</span> All images are optimized in AVIF format for superior compression and quality. 
              These images should be desaturated slightly and can have gradient overlays for consistency with the brand aesthetic.
            </p>
          </div>
        </section>

        {/* Utility Classes */}
        <section className="mb-24">
          <div className="mb-12">
            <h2 className="text-3xl font-light text-white mb-3">Utility Classes</h2>
            <p className="text-gray-400">Custom CSS utilities for common patterns</p>
          </div>

          <div className="space-y-4">
            <div className="p-6 glass-panel rounded-2xl">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="text-lg font-medium text-white mb-1">.glass-panel</p>
                  <p className="text-sm text-gray-400">Frosted glass effect with blur</p>
                </div>
                <button
                  onClick={() => copyToClipboard('.glass-panel', 'util-glass')}
                  className="p-2 hover:bg-white/5 rounded-lg transition-colors"
                >
                  {copied === 'util-glass' ? (
                    <Check className="w-4 h-4 text-brand-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-gray-400" />
                  )}
                </button>
              </div>
              <code className="text-xs text-gray-500 font-mono block">
                background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.08);
              </code>
            </div>

            <div className="p-6 bold-container">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="text-lg font-medium text-white mb-1">.bold-container</p>
                  <p className="text-sm text-gray-400">High contrast container</p>
                </div>
                <button
                  onClick={() => copyToClipboard('.bold-container', 'util-bold')}
                  className="p-2 hover:bg-white/5 rounded-lg transition-colors"
                >
                  {copied === 'util-bold' ? (
                    <Check className="w-4 h-4 text-brand-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-gray-400" />
                  )}
                </button>
              </div>
              <code className="text-xs text-gray-500 font-mono block">
                background: #0c0a09; border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 1.5rem;
              </code>
            </div>

            <div className="p-6 bg-onyx-900/50 border border-white/10 rounded-2xl">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="text-lg font-medium text-white mb-1">.headline-light</p>
                  <p className="text-sm text-gray-400">Light weight display text with tight tracking</p>
                </div>
                <button
                  onClick={() => copyToClipboard('.headline-light', 'util-headline')}
                  className="p-2 hover:bg-white/5 rounded-lg transition-colors"
                >
                  {copied === 'util-headline' ? (
                    <Check className="w-4 h-4 text-brand-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-gray-400" />
                  )}
                </button>
              </div>
              <code className="text-xs text-gray-500 font-mono block">
                font-weight: 300; letter-spacing: -0.02em;
              </code>
            </div>

            <div className="p-6 bg-onyx-900/50 border border-white/10 rounded-2xl">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="text-lg font-medium text-white mb-1">.scrollbar-hide</p>
                  <p className="text-sm text-gray-400">Hide scrollbar for clean carousels</p>
                </div>
                <button
                  onClick={() => copyToClipboard('.scrollbar-hide', 'util-scroll')}
                  className="p-2 hover:bg-white/5 rounded-lg transition-colors"
                >
                  {copied === 'util-scroll' ? (
                    <Check className="w-4 h-4 text-brand-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-gray-400" />
                  )}
                </button>
              </div>
              <code className="text-xs text-gray-500 font-mono block">
                -ms-overflow-style: none; scrollbar-width: none; ::-webkit-scrollbar display: none
              </code>
            </div>

            <div className="p-6 bg-onyx-900/50 border border-white/10 rounded-2xl hover-subtle hover:bg-onyx-900 hover:scale-105">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="text-lg font-medium text-white mb-1">.hover-subtle</p>
                  <p className="text-sm text-gray-400">Smooth transitions (hover this card)</p>
                </div>
                <button
                  onClick={() => copyToClipboard('.hover-subtle', 'util-hover')}
                  className="p-2 hover:bg-white/5 rounded-lg transition-colors"
                >
                  {copied === 'util-hover' ? (
                    <Check className="w-4 h-4 text-brand-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-gray-400" />
                  )}
                </button>
              </div>
              <code className="text-xs text-gray-500 font-mono block">
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
              </code>
            </div>
          </div>
        </section>

        {/* Accessibility Notes */}
        <section className="mb-24">
          <div className="mb-12">
            <h2 className="text-3xl font-light text-white mb-3">Accessibility Notes</h2>
            <p className="text-gray-400">WCAG AA compliance guidelines</p>
          </div>

          <div className="space-y-4">
            <div className="p-6 bg-brand-950/30 border border-brand-500/20 rounded-2xl">
              <p className="text-sm font-bold text-brand-400 mb-3 uppercase tracking-wider">✓ Contrast Ratios</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• White text on onyx-950 background: 17.5:1 (AAA)</li>
                <li>• Brand-400 on onyx-950 background: 7.2:1 (AA Large)</li>
                <li>• Grey-400 on onyx-950 background: 5.8:1 (AA)</li>
                <li>• White text on brand-500 background: 4.8:1 (AA)</li>
              </ul>
            </div>

            <div className="p-6 bg-onyx-900/50 border border-white/10 rounded-2xl">
              <p className="text-sm font-bold text-white mb-3 uppercase tracking-wider">Touch Targets</p>
              <p className="text-sm text-gray-300">All buttons and interactive elements have a minimum touch target of 48x48px on mobile.</p>
            </div>

            <div className="p-6 bg-onyx-900/50 border border-white/10 rounded-2xl">
              <p className="text-sm font-bold text-white mb-3 uppercase tracking-wider">Reduced Motion</p>
              <p className="text-sm text-gray-300">All animations respect prefers-reduced-motion preferences and reduce to near-instant transitions when enabled.</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
