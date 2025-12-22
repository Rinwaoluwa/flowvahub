import { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import Card from '../../components/ui/Card'

export function Settings() {
    const { user, profile } = useAuth()
    const [fullName, setFullName] = useState(profile?.full_name || '')
    const [username, setUsername] = useState(profile?.username || '')
    const [saving, setSaving] = useState(false)
    const [message, setMessage] = useState('')

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault()
        setSaving(true)
        setMessage('')

        // In a real implementation, this would update the profile in Supabase
        setTimeout(() => {
            setSaving(false)
            setMessage('Settings saved successfully!')
            setTimeout(() => setMessage(''), 3000)
        }, 1000)
    }

    return (
        <div className="max-w-2xl">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
                <p className="text-gray-600">Manage your account preferences</p>
            </div>

            <Card padding="lg" className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Profile Information</h3>

                <form onSubmit={handleSave} className="flex flex-col gap-5">
                    <Input
                        label="Email"
                        type="email"
                        value={user?.email || ''}
                        disabled
                    />

                    <Input
                        label="Full Name"
                        type="text"
                        placeholder="Enter your full name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />

                    <Input
                        label="Username"
                        type="text"
                        placeholder="Choose a username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    {message && (
                        <p className="text-sm text-green-500">{message}</p>
                    )}

                    <Button type="submit" loading={saving} className="self-start">
                        Save Changes
                    </Button>
                </form>
            </Card>

            <Card padding="lg" className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-sm text-gray-500">FlowCoins</p>
                        <p className="text-xl font-bold text-brand-purple">
                            🪙 {profile?.flow_coins || 0}
                        </p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Member Since</p>
                        <p className="text-xl font-bold text-gray-900">
                            {profile?.created_at
                                ? new Date(profile.created_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
                                : 'N/A'
                            }
                        </p>
                    </div>
                </div>
            </Card>

            <Card padding="lg" className="border-red-200">
                <h3 className="text-lg font-semibold text-red-600 mb-2">Danger Zone</h3>
                <p className="text-sm text-gray-500 mb-4">
                    Once you delete your account, there is no going back. Please be certain.
                </p>
                <Button variant="outline" className="border-red-300 text-red-600 hover:bg-red-50 hover:border-red-400">
                    Delete Account
                </Button>
            </Card>
        </div>
    )
}

export default Settings
