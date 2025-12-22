import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'
import { useAuth } from '../../contexts/AuthContext'
import { Reward } from '../../lib/database.types'
import Card from '../../components/ui/Card'
import { PageLoader } from '../../components/ui/Loader'

export function Rewards() {
    const [rewards, setRewards] = useState<Reward[]>([])
    const [loading, setLoading] = useState(true)
    const { user, profile } = useAuth()

    useEffect(() => {
        if (user) {
            loadRewards()
        } else {
            setLoading(false)
        }
    }, [user])

    const loadRewards = async () => {
        if (!user) return

        try {
            const { data, error } = await supabase
                .from('rewards')
                .select('*')
                .eq('user_id', user.id)
                .order('created_at', { ascending: false })
                .limit(20)

            if (!error && data) {
                setRewards(data as Reward[])
            }
        } catch {
            console.log('Could not load rewards')
        } finally {
            setLoading(false)
        }
    }

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        })
    }

    const totalEarned = rewards.filter(r => r.amount > 0).reduce((sum, r) => sum + r.amount, 0)
    const totalSpent = Math.abs(rewards.filter(r => r.amount < 0).reduce((sum, r) => sum + r.amount, 0))

    if (loading) {
        return <PageLoader />
    }

    return (
        <div className="max-w-6xl">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Rewards</h1>
                <p className="text-gray-600">Track your FlowCoins and earning history</p>
            </div>

            {/* Stats Cards */}
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
                <Card padding="lg" className="text-center">
                    <p className="text-4xl font-bold text-brand-purple mb-2">🪙 {profile?.flow_coins || 0}</p>
                    <p className="text-gray-500">Current Balance</p>
                </Card>
                <Card padding="lg" className="text-center">
                    <p className="text-4xl font-bold text-green-500 mb-2">+{totalEarned}</p>
                    <p className="text-gray-500">Total Earned</p>
                </Card>
                <Card padding="lg" className="text-center">
                    <p className="text-4xl font-bold text-red-500 mb-2">-{totalSpent}</p>
                    <p className="text-gray-500">Total Spent</p>
                </Card>
            </div>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>

            {rewards.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-3xl border-2 border-dashed border-gray-200">
                    <div className="text-5xl mb-4">🪙</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No rewards yet</h3>
                    <p className="text-gray-600">Start using Flowva to earn FlowCoins! Add tools, write reviews, and stay active.</p>
                </div>
            ) : (
                <div className="flex flex-col gap-3">
                    {rewards.map(reward => (
                        <div
                            key={reward.id}
                            className="flex items-center justify-between p-4 bg-white rounded-xl shadow-soft"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-brand-purple/10 rounded-lg flex items-center justify-center text-lg">
                                    {reward.amount > 0 ? '📥' : '📤'}
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">{reward.reason || 'FlowCoins transaction'}</p>
                                    <p className="text-sm text-gray-500">{formatDate(reward.created_at)}</p>
                                </div>
                            </div>
                            <span className={`font-bold ${reward.amount > 0 ? 'text-green-500' : 'text-red-500'}`}>
                                {reward.amount > 0 ? '+' : ''}{reward.amount} 🪙
                            </span>
                        </div>
                    ))}
                </div>
            )}

            {/* Tips Card */}
            <Card padding="lg" className="mt-8 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">💡 Ways to Earn FlowCoins</h3>
                <p className="text-gray-600 mb-4">Here are some ways to boost your earnings:</p>
                <div className="flex flex-wrap justify-center gap-3">
                    {[
                        '📦 Add tools (+10 coins)',
                        '⭐ Write reviews (+25 coins)',
                        '👥 Refer friends (+50 coins)',
                        '📅 Daily login (+5 coins)'
                    ].map((tip, i) => (
                        <span key={i} className="px-4 py-2 bg-brand-purple/10 text-gray-700 rounded-lg text-sm">
                            {tip}
                        </span>
                    ))}
                </div>
            </Card>
        </div>
    )
}

export default Rewards
