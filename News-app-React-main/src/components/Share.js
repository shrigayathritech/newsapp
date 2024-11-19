import React from 'react';
import './Share.css'; // Add styling as needed

const Share = ({ articleUrl, articleTitle }) => {
  const handleShare = (platform) => {
    let shareUrl = '';

    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(articleTitle)}&url=${encodeURIComponent(articleUrl)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(articleUrl)}&title=${encodeURIComponent(articleTitle)}`;
        break;
      default:
        break;
    }

    window.open(shareUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="share-container">
      <button onClick={() => handleShare('twitter')} className="share-button twitter">
        Share on Twitter
      </button>
      <button onClick={() => handleShare('facebook')} className="share-button facebook">
        Share on Facebook
      </button>
      <button onClick={() => handleShare('linkedin')} className="share-button linkedin">
        Share on LinkedIn
      </button>
    </div>
  );
};

export default Share;
