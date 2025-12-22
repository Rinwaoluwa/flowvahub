export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface Database {
    public: {
        Tables: {
            profiles: {
                Row: {
                    id: string
                    username: string | null
                    full_name: string | null
                    avatar_url: string | null
                    flow_coins: number
                    created_at: string
                    updated_at: string
                }
                Insert: {
                    id: string
                    username?: string | null
                    full_name?: string | null
                    avatar_url?: string | null
                    flow_coins?: number
                    created_at?: string
                    updated_at?: string
                }
                Update: {
                    id?: string
                    username?: string | null
                    full_name?: string | null
                    avatar_url?: string | null
                    flow_coins?: number
                    created_at?: string
                    updated_at?: string
                }
            }
            tools: {
                Row: {
                    id: string
                    name: string
                    description: string | null
                    category: string | null
                    icon_url: string | null
                    website_url: string | null
                    is_featured: boolean
                    created_at: string
                }
                Insert: {
                    id?: string
                    name: string
                    description?: string | null
                    category?: string | null
                    icon_url?: string | null
                    website_url?: string | null
                    is_featured?: boolean
                    created_at?: string
                }
                Update: {
                    id?: string
                    name?: string
                    description?: string | null
                    category?: string | null
                    icon_url?: string | null
                    website_url?: string | null
                    is_featured?: boolean
                    created_at?: string
                }
            }
            user_tools: {
                Row: {
                    id: string
                    user_id: string
                    tool_id: string
                    notes: string | null
                    is_favorite: boolean
                    added_at: string
                }
                Insert: {
                    id?: string
                    user_id: string
                    tool_id: string
                    notes?: string | null
                    is_favorite?: boolean
                    added_at?: string
                }
                Update: {
                    id?: string
                    user_id?: string
                    tool_id?: string
                    notes?: string | null
                    is_favorite?: boolean
                    added_at?: string
                }
            }
            rewards: {
                Row: {
                    id: string
                    user_id: string
                    amount: number
                    reason: string | null
                    created_at: string
                }
                Insert: {
                    id?: string
                    user_id: string
                    amount: number
                    reason?: string | null
                    created_at?: string
                }
                Update: {
                    id?: string
                    user_id?: string
                    amount?: number
                    reason?: string | null
                    created_at?: string
                }
            }
            newsletter_subscribers: {
                Row: {
                    id: string
                    email: string
                    subscribed_at: string
                }
                Insert: {
                    id?: string
                    email: string
                    subscribed_at?: string
                }
                Update: {
                    id?: string
                    email?: string
                    subscribed_at?: string
                }
            }
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            [_ in never]: never
        }
        Enums: {
            [_ in never]: never
        }
    }
}

// Helper types
export type Profile = Database['public']['Tables']['profiles']['Row']
export type Tool = Database['public']['Tables']['tools']['Row']
export type UserTool = Database['public']['Tables']['user_tools']['Row']
export type Reward = Database['public']['Tables']['rewards']['Row']
export type NewsletterSubscriber = Database['public']['Tables']['newsletter_subscribers']['Row']

// Insert types
export type ProfileInsert = Database['public']['Tables']['profiles']['Insert']
export type ToolInsert = Database['public']['Tables']['tools']['Insert']
export type UserToolInsert = Database['public']['Tables']['user_tools']['Insert']
export type RewardInsert = Database['public']['Tables']['rewards']['Insert']
export type NewsletterSubscriberInsert = Database['public']['Tables']['newsletter_subscribers']['Insert']

// Update types
export type ProfileUpdate = Database['public']['Tables']['profiles']['Update']
export type ToolUpdate = Database['public']['Tables']['tools']['Update']
export type UserToolUpdate = Database['public']['Tables']['user_tools']['Update']
export type RewardUpdate = Database['public']['Tables']['rewards']['Update']
export type NewsletterSubscriberUpdate = Database['public']['Tables']['newsletter_subscribers']['Update']
