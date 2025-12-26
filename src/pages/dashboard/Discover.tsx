import { useState, useEffect } from 'react'
import { Search, Plus, ExternalLink } from 'lucide-react'
import { supabase } from '../../lib/supabase'
import { useAuth } from '../../contexts/AuthContext'
import { Tool } from '../../lib/database.types'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import Card from '../../components/ui/Card'
import { PageLoader } from '../../components/ui/Loader'

// Mock tools data for demo (will be replaced by Supabase data)
const mockTools: Tool[] = [
    { id: '1', name: 'Canva', description: 'Design platform for creating visual content', category: 'Design', icon_url: '🎨', website_url: 'https://canva.com', is_featured: true, created_at: new Date().toISOString() },
    { id: '2', name: 'ChatGPT', description: 'AI assistant for conversations and content generation', category: 'AI', icon_url: '🤖', website_url: 'https://chat.openai.com', is_featured: true, created_at: new Date().toISOString() },
    { id: '3', name: 'Zoom', description: 'Video conferencing and virtual meetings', category: 'Communication', icon_url: '📹', website_url: 'https://zoom.us', is_featured: true, created_at: new Date().toISOString() },
    { id: '4', name: 'Notion', description: 'All-in-one workspace for notes and docs', category: 'Productivity', icon_url: '📝', website_url: 'https://notion.so', is_featured: true, created_at: new Date().toISOString() },
    { id: '5', name: 'Slack', description: 'Team communication and messaging platform', category: 'Communication', icon_url: '💬', website_url: 'https://slack.com', is_featured: false, created_at: new Date().toISOString() },
    { id: '6', name: 'Figma', description: 'Collaborative design and prototyping tool', category: 'Design', icon_url: '🎯', website_url: 'https://figma.com', is_featured: true, created_at: new Date().toISOString() },
    { id: '7', name: 'Spotify', description: 'Music streaming for focus and productivity', category: 'Entertainment', icon_url: '🎵', website_url: 'https://spotify.com', is_featured: false, created_at: new Date().toISOString() },
    { id: '8', name: 'Trello', description: 'Kanban-style project management', category: 'Productivity', icon_url: '📋', website_url: 'https://trello.com', is_featured: false, created_at: new Date().toISOString() },
    { id: '9', name: 'GitHub', description: 'Code hosting and version control', category: 'Development', icon_url: '💻', website_url: 'https://github.com', is_featured: true, created_at: new Date().toISOString() },
    { id: '10', name: 'Linear', description: 'Modern issue tracking for teams', category: 'Productivity', icon_url: '📊', website_url: 'https://linear.app', is_featured: false, created_at: new Date().toISOString() },
    { id: '11', name: 'Miro', description: 'Online whiteboard for collaboration', category: 'Design', icon_url: '🎨', website_url: 'https://miro.com', is_featured: false, created_at: new Date().toISOString() },
    { id: '12', name: 'Loom', description: 'Video messaging for work', category: 'Communication', icon_url: '🎬', website_url: 'https://loom.com', is_featured: false, created_at: new Date().toISOString() },
]

const categories = ['All', 'Design', 'AI', 'Communication', 'Productivity', 'Development', 'Entertainment']

export function Discover() {
    const [tools, setTools] = useState<Tool[]>([])
    const [userToolIds, setUserToolIds] = useState<string[]>([])
    const [loading, setLoading] = useState(true)
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [addingTool, setAddingTool] = useState<string | null>(null)
    const { user } = useAuth()

    useEffect(() => {
        loadTools()
        if (user) {
            loadUserTools()
        }
    }, [user])

    const loadTools = async () => {
        try {
            const { data, error } = await supabase
                .from('tools')
                .select('*')
                .order('name')

            if (error) {
                setTools(mockTools)
            } else if (data && data.length > 0) {
                setTools(data as Tool[])
            } else {
                setTools(mockTools)
            }
        } catch {
            setTools(mockTools)
        } finally {
            setLoading(false)
        }
    }

    const loadUserTools = async () => {
        if (!user) return

        try {
            const { data, error } = await supabase
                .from('user_tools')
                .select('tool_id')
                .eq('user_id', user.id)

            if (!error && data) {
                setUserToolIds(data.map((ut: { tool_id: string }) => ut.tool_id))
            }
        } catch {
            console.log('Could not load user tools')
        }
    }

    const addToolToLibrary = async (toolId: string) => {
        if (!user) return

        setAddingTool(toolId)
        try {
            const { error } = await supabase
                .from('user_tools')
                .insert([{ user_id: user.id, tool_id: toolId }] as never)

            if (!error) {
                setUserToolIds([...userToolIds, toolId])
            }
        } catch {
            console.log('Could not add tool to library')
        } finally {
            setAddingTool(null)
        }
    }

    const filteredTools = tools.filter(tool => {
        const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tool.description?.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory
        return matchesSearch && matchesCategory
    })

    if (loading) {
        return <PageLoader />
    }

    return (
        <div className="max-w-6xl">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Discover Tools</h1>
                <p className="text-gray-600">Find the best tools to boost your productivity</p>
            </div>

            <div className="mb-8">
                <div className="max-w-md mb-4">
                    <Input
                        type="text"
                        placeholder="Search tools..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        icon={<Search size={18} />}
                    />
                </div>
                <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200
                ${selectedCategory === category
                                    ? 'bg-brand-purple text-white'
                                    : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300'
                                }`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {filteredTools.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-3xl border-2 border-dashed border-gray-200">
                    <div className="text-5xl mb-4">🔍</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No tools found</h3>
                    <p className="text-gray-600">Try adjusting your search or filter criteria</p>
                </div>
            ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredTools.map(tool => (
                        <Card key={tool.id} hoverable padding="md" className="flex flex-col gap-3">
                            <div className="flex items-center justify-between">
                                <span className="text-4xl">{tool.icon_url}</span>
                                {tool.is_featured && (
                                    <span className="px-2 py-1 text-xs font-semibold text-brand-purple bg-brand-purple/10 rounded-full">
                                        Featured
                                    </span>
                                )}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">{tool.name}</h3>
                            <p className="text-sm text-gray-600 flex-1">{tool.description}</p>
                            <span className="inline-block px-3 py-1 text-xs font-medium text-gray-500 bg-gray-100 rounded-full self-start">
                                {tool.category}
                            </span>
                            <div className="flex gap-2 mt-2">
                                {userToolIds.includes(tool.id) ? (
                                    <Button variant="outline" size="sm" disabled>
                                        ✓ In Library
                                    </Button>
                                ) : (
                                    <Button
                                        variant="secondary"
                                        size="sm"
                                        icon={<Plus size={16} />}
                                        loading={addingTool === tool.id}
                                        onClick={() => addToolToLibrary(tool.id)}
                                    >
                                        Add
                                    </Button>
                                )}
                                {tool.website_url && (
                                    <a href={tool.website_url} target="_blank" rel="noopener noreferrer">
                                        <Button variant="ghost" size="sm" icon={<ExternalLink size={16} />}>
                                            Visit
                                        </Button>
                                    </a>
                                )}
                            </div>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Discover
