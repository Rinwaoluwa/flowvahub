import { Image } from 'lucide-react';

interface PlaceholderImageProps {
    width?: string;
    height?: string;
    className?: string;
    text?: string;
    bgColor?: string;
}

export function PlaceholderImage({ width = '100%', height = '100%', className = '', text, bgColor = 'bg-gray-200' }: PlaceholderImageProps) {
    return (
        <div
            className={`flex flex-col items-center justify-center rounded-lg ${bgColor} ${className}`}
            style={{ width, height }}
        >
            <Image className="w-8 h-8 text-gray-400 mb-2 opacity-50" />
            {text && <span className="text-xs text-gray-500 font-semibold text-center px-2">{text}</span>}
        </div>
    );
}
