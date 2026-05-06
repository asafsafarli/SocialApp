import { useCallback, useEffect, useMemo, useState } from 'react'
import { Box, Container, Typography } from '@mui/material'
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'
import ChatBox from './components/ChatBox/ChatBox'
import CreatePostDialog from './components/CreatePostDialog/CreatePostDialog'
import StatsPanel from './components/StatsPanel/StatsPanel'
import QuickTipsPanel from './components/QuickTipsPanel/QuickTipsPanel'
import FeedSection from './components/FeedSection/FeedSection'
import ConfirmDialog from './components/ConfirmDialog/ConfirmDialog'
import './App.css'

const API_URL = 'https://blog-api-t6u0.onrender.com/posts'

function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [openCreate, setOpenCreate] = useState(false)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [creating, setCreating] = useState(false)
  const [query, setQuery] = useState('')
  const [darkMode, setDarkMode] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const [chatMessage, setChatMessage] = useState('')
  const [chatMessages, setChatMessages] = useState([
    { id: 1, user: 'Sarah Johnson', message: 'Hey! How are you?', time: '10:30 AM', avatar: 'https://i.pravatar.cc/150?img=47' },
    { id: 2, user: 'You', message: 'I\'m doing great! Working on this new social app.', time: '10:32 AM', avatar: 'https://i.pravatar.cc/150?img=68', isMe: true },
    { id: 3, user: 'Sarah Johnson', message: 'That sounds exciting! Can\'t wait to see it.', time: '10:33 AM', avatar: 'https://i.pravatar.cc/150?img=47' },
  ])
  const [likedPosts, setLikedPosts] = useState(new Set())
  const [deleteConfirmation, setDeleteConfirmation] = useState({ open: false, postId: null })

  const fetchPosts = useCallback(async () => {
    setLoading(true)
    setError('')

    try {
      const response = await fetch(API_URL)

      if (!response.ok) {
        throw new Error(`Failed to fetch posts: ${response.status}`)
      }

      const data = await response.json()
      setPosts(Array.isArray(data) ? data : [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not load posts')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  const filteredPosts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    const base = [...posts].reverse()

    if (!normalizedQuery) {
      return base
    }

    return base.filter((post) => {
      const postTitle = String(post.title ?? '').toLowerCase()
      const postBody = String(post.body ?? '').toLowerCase()

      return (
        postTitle.includes(normalizedQuery) ||
        postBody.includes(normalizedQuery)
      )
    })
  }, [posts, query])

  const totalCharacters = useMemo(() => {
    return posts.reduce((sum, post) => {
      const titleLength = String(post.title ?? '').length
      const bodyLength = String(post.body ?? '').length
      return sum + titleLength + bodyLength
    }, 0)
  }, [posts])

  const handleOpenCreate = useCallback(() => {
    setOpenCreate(true)
  }, [])

  const handleCloseCreate = useCallback(() => {
    setOpenCreate(false)
    setTitle('')
    setBody('')
    setError('')
  }, [])

  const toggleDarkMode = useCallback(() => {
    setDarkMode(prev => !prev)
  }, [])

  const toggleChat = useCallback(() => {
    setChatOpen(prev => !prev)
  }, [])

  const handleSendMessage = useCallback(() => {
    if (!chatMessage.trim()) return

    const newMessage = {
      id: chatMessages.length + 1,
      user: 'You',
      message: chatMessage,
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      avatar: 'https://i.pravatar.cc/150?img=68',
      isMe: true
    }

    setChatMessages(prev => [...prev, newMessage])
    setChatMessage('')
  }, [chatMessage, chatMessages.length])

  const handleCreatePost = useCallback(async () => {
    if (!title.trim() || !body.trim()) {
      setError('Please fill in both title and body before creating a post.')
      return
    }

    setCreating(true)
    setError('')

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: title.trim(),
          body: body.trim(),
        }),
      })

      if (!response.ok) {
        throw new Error(`Failed to create post: ${response.status}`)
      }

      handleCloseCreate()
      await fetchPosts()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not create post')
    } finally {
      setCreating(false)
    }
  }, [body, fetchPosts, handleCloseCreate, title])

  const handleLikePost = useCallback((postId) => {
    setLikedPosts(prev => {
      const newLikes = new Set(prev)
      if (newLikes.has(postId)) {
        newLikes.delete(postId)
      } else {
        newLikes.add(postId)
      }
      return newLikes
    })
  }, [])

  const handleSharePost = useCallback((post) => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.body,
        url: window.location.href,
      }).catch(() => {
      })
    } else {
      const shareText = `${post.title}\n\n${post.body}`
      navigator.clipboard.writeText(shareText).then(() => {
        alert('Post copied to clipboard!')
      }).catch(() => {
        alert('Failed to share post')
      })
    }
  }, [])

  const handleDeletePost = useCallback((postId) => {
    setDeleteConfirmation({ open: true, postId })
  }, [])

  const handleConfirmDelete = useCallback(async () => {
    const { postId } = deleteConfirmation
    setDeleteConfirmation({ open: false, postId: null })

    if (!postId) return

    try {
      const response = await fetch(`${API_URL}/${postId}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        throw new Error(`Failed to delete post: ${response.status}`)
      }

      setPosts(prev => prev.filter(post => post.id !== postId))
      setLikedPosts(prev => {
        const newLikes = new Set(prev)
        newLikes.delete(postId)
        return newLikes
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not delete post')
    }
  }, [deleteConfirmation])

  const handleCancelDelete = useCallback(() => {
    setDeleteConfirmation({ open: false, postId: null })
  }, [])

  return (
    <Box className={`app-shell ${darkMode ? 'dark-mode' : ''}`}>
      <Sidebar
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        onCreatePost={handleOpenCreate}
      />

      <Box className="main-content">
        <Header
          query={query}
          onQueryChange={setQuery}
          darkMode={darkMode}
          onToggleDarkMode={toggleDarkMode}
          onOpenChat={toggleChat}
        />

        <Container maxWidth="lg" className="content-grid">
          <StatsPanel
            totalPosts={posts.length}
            filteredPosts={filteredPosts.length}
            totalCharacters={totalCharacters}
          />

          <FeedSection
            posts={filteredPosts}
            loading={loading}
            error={error}
            likedPosts={likedPosts}
            onLike={handleLikePost}
            onShare={handleSharePost}
            onDelete={handleDeletePost}
          />

          <QuickTipsPanel />
        </Container>
      </Box>

      <CreatePostDialog
        open={openCreate}
        onClose={handleCloseCreate}
        title={title}
        body={body}
        onTitleChange={setTitle}
        onBodyChange={setBody}
        onSubmit={handleCreatePost}
        creating={creating}
      />

      <ChatBox
        open={chatOpen}
        onClose={toggleChat}
        messages={chatMessages}
        message={chatMessage}
        onMessageChange={setChatMessage}
        onSendMessage={handleSendMessage}
      />

      <ConfirmDialog
        open={deleteConfirmation.open}
        title="Delete Post"
        message="Are you sure you want to delete this post? This action cannot be undone."
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
        confirmText="Delete"
        cancelText="Cancel"
      />
    </Box>
  )
}

export default App
