import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { supabase } from '../../lib/supabase'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import Card from '../../components/ui/Card'

import { Modal } from '../../components/ui/Modal'

export function Settings() {
    const { user, profile, signOut, refreshProfile, deleteAccount } = useAuth()
    const [fullName, setFullName] = useState(profile?.full_name || '')
    const [username, setUsername] = useState(profile?.username || '')
    const [saving, setSaving] = useState(false)
    const [message, setMessage] = useState('')
    const [deleteModalOpen, setDeleteModalOpen] = useState(false)
    const [deleting, setDeleting] = useState(false)
    const navigate = useNavigate()

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault()
        setSaving(true)
        setMessage('')

        if (!user) return

        try {
            const { error } = await supabase
                .from('profiles')
                .update({
                    full_name: fullName,
                    username: username,
                    updated_at: new Date().toISOString(),
                })
                .eq('id', user.id)

            if (error) throw error

            await refreshProfile() // Update sidebar with new name immediately
            setMessage('Settings saved successfully!')
        } catch (error) {
            console.error('Error updating profile:', error)
            setMessage('Error saving settings. Please try again.')
        } finally {
            setSaving(false)
            setTimeout(() => setMessage(''), 1000)
        }
    }

    const confirmDeleteAccount = async () => {
        if (!user) return

        setDeleting(true)
        try {
            const { error } = await deleteAccount()

            if (error) {
                console.error('Error deleting account:', error)
                alert('Failed to delete account data. Please contact support.')
            } else {
                await signOut()
                navigate('/auth/signin')
            }
        } catch (error) {
            console.error('Error deleting account:', error)
        } finally {
            setDeleting(false)
            setDeleteModalOpen(false)
        }

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
                        <p className={`text-sm ${message.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>
                            {message}
                        </p>
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
                <Button
                    variant="outline"
                    onClick={() => setDeleteModalOpen(true)}
                    className="border-red-300 !text-red-600 hover:bg-red-50 hover:border-red-400"
                >
                    Delete Account
                </Button>
            </Card>

            <Modal
                isOpen={deleteModalOpen}
                onClose={() => setDeleteModalOpen(false)}
                title="Delete Account"
                footer={
                    <>
                        <Button variant="ghost" onClick={() => setDeleteModalOpen(false)}>
                            Cancel
                        </Button>
                        <Button
                            variant="primary"
                            className="!bg-red-600 hover:!bg-red-700 !border-red-600"
                            loading={deleting}
                            onClick={confirmDeleteAccount}
                        >
                            Yes, delete my account
                        </Button>
                    </>
                }
            >
                <div className="text-gray-600">
                    <p className="mb-4">Are you absolutely sure you want to delete your account?</p>
                    <p className="bg-red-50 text-red-800 p-3 rounded-lg text-sm">
                        ⚠️ This action cannot be undone. All your data, including your library and settings, will be permanently removed.
                    </p>
                </div>
            </Modal>
        </div>
    )
}

export default Settings
