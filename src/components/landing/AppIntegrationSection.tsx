const tools = [
    { name: 'Canva', emoji: '🎨' },
    { name: 'ChatGPT', emoji: '🤖' },
    { name: 'Notion', emoji: '📝' },
    { name: 'Figma', emoji: '🎯' },
    { name: 'Slack', emoji: '💬' },
    { name: 'Zoom', emoji: '📹' },
    { name: 'Spotify', emoji: '🎵' },
    { name: 'Trello', emoji: '📋' },
    { name: 'GitHub', emoji: '💻' },
    { name: 'Linear', emoji: '📊' },
    { name: 'Miro', emoji: '🖼️' },
    { name: 'Loom', emoji: '🎬' },
]

export function AppIntegrationSection() {
    return (
        <section className="py-24 lg:py-32 bg-soft-pink/50">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="headline-impact text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4">
                        CONNECT YOUR TOOLS
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Integrate with hundreds of your favorite apps and manage them all from one place.
                    </p>
                </div>

                {/* Tools Grid */}
                <div className="grid grid-cols-4 md:grid-cols-6 gap-4 lg:gap-6 max-w-4xl mx-auto mb-16">
                    {tools.map((tool, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl shadow-soft p-4 flex flex-col items-center justify-center gap-2 hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-200"
                        >
                            <span className="text-3xl md:text-4xl">{tool.emoji}</span>
                            <span className="text-xs md:text-sm font-medium text-gray-600 text-center">{tool.name}</span>
                        </div>
                    ))}
                </div>

                {/* App Store Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="#"
                        className="flex items-center gap-3 bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors"
                    >
                        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                        </svg>
                        <div className="text-left">
                            <p className="text-[10px] opacity-80">Download on the</p>
                            <p className="text-lg font-semibold leading-tight">App Store</p>
                        </div>
                    </a>
                    <a
                        href="#"
                        className="flex items-center gap-3 bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors"
                    >
                        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
                            <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.921V2.735a1 1 0 01.609-.921zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                        </svg>
                        <div className="text-left">
                            <p className="text-[10px] opacity-80">GET IT ON</p>
                            <p className="text-lg font-semibold leading-tight">Google Play</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default AppIntegrationSection
