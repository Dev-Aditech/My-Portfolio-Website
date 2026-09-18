import { useState, useEffect } from 'react'

function Typewriter({ words, typingSpeed = 90, deletingSpeed = 45, pauseTime = 1500 }) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex % words.length]
    let timeout

    if (!isDeleting && text === currentWord) {
      // Finished typing the word — wait, then start deleting
      timeout = setTimeout(() => setIsDeleting(true), pauseTime)
    } else if (isDeleting && text === '') {
      // Finished deleting — move on to the next word
      setIsDeleting(false)
      setWordIndex((prev) => (prev + 1) % words.length)
    } else {
      // Either typing forward or deleting backward, one character at a time
      const nextText = isDeleting
        ? currentWord.slice(0, text.length - 1)
        : currentWord.slice(0, text.length + 1)

      timeout = setTimeout(() => setText(nextText), isDeleting ? deletingSpeed : typingSpeed)
    }

    return () => clearTimeout(timeout)
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime])

  return (
    <span>
      {text}
      <span className="inline-block `w-0.73` h-[0.9em] bg-current ml-1 align-middle animate-pulse"></span>
    </span>
  )
}

export default Typewriter