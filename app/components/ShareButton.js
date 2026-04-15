'use client';
import { useState } from 'react';

export default function ShareButton() {
  const [showShare, setShowShare] = useState(false);
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const platforms = [
    {
      name: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/facebook.svg'
    },
    {
      name: 'Twitter',
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`,
      icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/twitter.svg'
    },
    {
      name: 'WhatsApp',
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareUrl)}`,
      icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/whatsapp.svg'
    },
    {
      name: 'Email',
      url: `mailto:?subject=Check%20this%20out&body=${encodeURIComponent(shareUrl)}`,
      icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/gmail.svg'
    },
    {
      name: 'Telegram',
      url: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}`,
      icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/telegram.svg'
    },
    {
      name: 'LinkedIn',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/linkedin.svg'
    }
  ];

  return (
    <div className="fixed bottom-16 right-4 z-50 flex flex-col items-end space-y-2">
      {/* Vertical share popup */}
      {showShare && (
        <div className="flex flex-col items-end space-y-2 p-2 bg-white rounded-lg shadow-lg animate-slide-in">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              title={`Share on ${platform.name}`}
              className="hover:scale-110 transition-transform"
            >
              <img src={platform.icon} alt={platform.name} className="w-6 h-6" />
            </a>
          ))}
        </div>
      )}

      <button
        onClick={() => setShowShare(!showShare)}
        className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-lg"
        title="Share"
      >
        📤
      </button>
    </div>
  );
}
