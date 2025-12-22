import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Trash2, ExternalLink, Star } from 'lucide-react'
import { supabase } from '../../lib/supabase'
import { useAuth } from '../../contexts/AuthContext'
import { Tool } from '../../lib/database.types'
import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'
import { PageLoader } from '../../components/ui/Loader'

interface UserToolWithDetails {
    id: string
    tool_id: string
    is_favorite: boolean
    added_at: string
    tool: Tool | null
}

export function Library() {
    const [userTools, setUserTools] = useState<UserToolWithDetails[]>([])
    const [loading, setLoading] = useState(true)
    const [removingTool, setRemovingTool] = useState<string | null>(null)
    const { user } = useAuth()

    useEffect(() => {
        if (user) {
            loadUserTools()
        } else {
            setLoading(false)
        }
    }, [user])

    const loadUserTools = async () => {
        if (!user) return

        try {
            const { data, error } = await supabase
                .from('user_tools')
                .select(`
          id,
          tool_id,
          is_favorite,
          added_at,
          tool:tools(*)
        `)
                .eq('user_id', user.id)
                .order('added_at', { ascending: false })

            if (!error && data) {
                setUserTools(data as unknown as UserToolWithDetails[])
            }
        } catch {
            console.log('Could not load user tools')
        } finally {
            setLoading(false)
        }
    }

    const removeTool = async (userToolId: string) => {
        setRemovingTool(userToolId)
        try {
            const { error } = await supabase
                .from('user_tools')
                .delete()
                .eq('id', userToolId)

            if (!error) {
                setUserTools(userTools.filter(ut => ut.id !== userToolId))
            }
        } catch {
            console.log('Could not remove tool')
        } finally {
            setRemovingTool(null)
        }
    }

    const toggleFavorite = async (userToolId: string, currentValue: boolean) => {
        try {
            const { error } = await supabase
                .from('user_tools')
                .update({ is_favorite: !currentValue } as never)
                .eq('id', userToolId)

            if (!error) {
                setUserTools(userTools.map(ut =>
                    ut.id === userToolId ? { ...ut, is_favorite: !currentValue } : ut
                ))
            }
        } catch {
            console.log('Could not update favorite')
        }
    }

    if (loading) {
        return <PageLoader />
    }

    return (
        <div className="max-w-6xl">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">My Library</h1>
                <p className="text-gray-600">Your personal collection of tools ({userTools.length} tools)</p>
            </div>

            {userTools.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-3xl border-2 border-dashed border-gray-200">
                    <div className="text-5xl mb-4">📚</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Your library is empty</h3>
                    <p className="text-gray-600 mb-6">Start adding tools to build your personal stack</p>
                    <Link to="/dashboard">
                        <Button>Discover Tools</Button>
                    </Link>
                </div>
            ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {userTools.map(userTool => (
                        <Card key={userTool.id} padding="md" className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                                {userTool.tool?.icon_url || '📦'}
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="font-semibold text-gray-900 truncate">
                                    {userTool.tool?.name || 'Unknown Tool'}
                                </h3>
                                <span className="text-sm text-gray-500">{userTool.tool?.category}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <button
                                    className={`p-2 rounded-lg transition-colors ${userTool.is_favorite
                                            ? 'text-yellow-500'
                                            : 'text-gray-400 hover:text-yellow-500 hover:bg-gray-100'
                                        }`}
                                    onClick={() => toggleFavorite(userTool.id, userTool.is_favorite)}
                                    aria-label={userTool.is_favorite ? 'Remove from favorites' : 'Add to favorites'}
                                >
                                    <Star size={18} fill={userTool.is_favorite ? 'currentColor' : 'none'} />
                                </button>
                                {userTool.tool?.website_url && (
                                    <a href={userTool.tool.website_url} target="_blank" rel="noopener noreferrer">
                                        <button className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                                            <ExternalLink size={18} />
                                        </button>
                                    </a>
                                )}
                                <button
                                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
                                    onClick={() => removeTool(userTool.id)}
                                    disabled={removingTool === userTool.id}
                                    aria-label="Remove from library"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Library
