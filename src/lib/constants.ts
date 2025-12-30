import { Tool } from "./database.types";

export // Mock tools data for demo (will be replaced by Supabase data)
const mockTools: Tool[] = [
    { id: '1', name: 'Canva', description: 'Design platform for creating visual content', category: 'Design', icon_url: '/canva.svg', website_url: 'https://canva.com', is_featured: true, created_at: new Date().toISOString() },
    { id: '2', name: 'ChatGPT', description: 'AI assistant for conversations and content generation', category: 'AI', icon_url: '/chatgpt.svg', website_url: 'https://chat.openai.com', is_featured: true, created_at: new Date().toISOString() },
    { id: '3', name: 'Zoom', description: 'Video conferencing and virtual meetings', category: 'Communication', icon_url: '/zoom.svg', website_url: 'https://zoom.us', is_featured: true, created_at: new Date().toISOString() },
    { id: '4', name: 'GitHub', description: 'Code hosting and version control', category: 'Development', icon_url: '/github.svg', website_url: 'https://github.com', is_featured: true, created_at: new Date().toISOString() },
    { id: '5', name: 'Notion', description: 'All-in-one workspace for notes and docs', category: 'Productivity', icon_url: '/notion.svg', website_url: 'https://notion.so', is_featured: true, created_at: new Date().toISOString() },
    { id: '6', name: 'Figma', description: 'Collaborative design and prototyping tool', category: 'Design', icon_url: '/figma.svg', website_url: 'https://figma.com', is_featured: true, created_at: new Date().toISOString() },
]