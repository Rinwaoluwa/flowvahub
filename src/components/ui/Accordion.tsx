export const Accordion = (
    { item, index, activeIndex, toggleAccordion }: 
    { item: { question: string, answer: string }, index: number, activeIndex: number, toggleAccordion: (index: number) => void }
) => {
    return (
        <div className="ant-collapse ant-collapse-icon-position-start ant-collapse-borderless css-1d4w9r2">
            <div className="ant-collapse-item" style={{ marginBottom: 8, background: 'rgb(249, 249, 249)', borderRadius: 12, border: 'none', padding: '4px 8px' }}>
                <div
                    className="ant-collapse-header flex items-center p-3 cursor-pointer select-none"
                    role="button"
                    tabIndex={0}
                    onClick={() => toggleAccordion(index)}
                >
                    <div className={`ant-collapse-expand-icon mr-2 ${activeIndex === index ? 'rotate-90' : ''} transition-all duration-500`}>
                        <span role="img" aria-label="caret-right" className={`anticon anticon-caret-right ant-collapse-arrow transition-transform duration-200 ${activeIndex === index ? 'rotate-90' : ''}`}>
                            <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-right" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                <path d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"></path>
                            </svg>
                        </span>
                    </div>
                    <span className="ant-collapse-header-text">
                        <span className="font-semibold text-[20px] md:text-[24px]">{item.question}</span>
                    </span>
                </div>
                {activeIndex === index && (
                    <div className="ant-collapse-content ant-collapse-content-active">
                        <div className="ant-collapse-content-box p-3">
                            <p>{item.answer}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}