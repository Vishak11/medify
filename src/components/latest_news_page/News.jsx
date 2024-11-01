// BlogNewsComponent.js
import React from 'react';
import News_Icon from '../../assets/News_Icon.png'
const blogPosts = [
  {
    id: 1,
    title: "6 Tips To Protect Your Mental Health When You're Sick",
    category: "Medical",
    date: "March 31, 2022",
    author: "Rebecca Lee",
    image:  News_Icon,
  },
  {
    id: 2,
    title: "6 Tips To Protect Your Mental Health When You're Sick",
    category: "Medical",
    date: "March 31, 2022",
    author: "Rebecca Lee",
    image:  News_Icon,
  },
  {
    id: 3,
    title: "6 Tips To Protect Your Mental Health When You're Sick",
    category: "Medical",
    date: "March 31, 2022",
    author: "Rebecca Lee",
    image:  News_Icon,
  },
];

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  topText: {
    color: '#3B82F6',
    fontSize: '16px',
    marginBottom: '10px',
  },
  title: {
    color: '#1E3A8A',
    fontSize: '32px',
    margin: '0',
    fontWeight: 'bold',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '30px',
    marginTop: '30px',
  },
  card: {
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s',
    backgroundColor: '#fff',
    cursor: 'pointer',
  },
  cardHover: {
    transform: 'translateY(-5px)',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    paddingTop: '75%', // 4:3 aspect ratio
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  content: {
    padding: '20px',
  },
  meta: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '15px',
  },
  category: {
    color: '#4B5563',
    fontSize: '14px',
    fontWeight: '500',
  },
  date: {
    color: '#6B7280',
    fontSize: '14px',
  },
  cardTitle: {
    margin: '0 0 15px 0',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#1E3A8A',
    lineHeight: '1.4',
  },
  author: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  authorAvatar: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: '#E5E7EB',
  },
  authorName: {
    color: '#4B5563',
    fontSize: '14px',
    fontWeight: '500',
  },
};

const BlogPost = ({ post }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      style={{
        ...styles.card,
        ...(isHovered ? styles.cardHover : {})
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.imageContainer}>
        <img 
          src={post.image} 
          alt={post.title}
          style={styles.image}
        />
      </div>
      <div style={styles.content}>
        <div style={styles.meta}>
          <span style={styles.category}>{post.category}</span>
          <span style={styles.date}>{post.date}</span>
        </div>
        <h3 style={styles.cardTitle}>{post.title}</h3>
        <div style={styles.author}>
          <div style={styles.authorAvatar}></div>
          <span style={styles.authorName}>{post.author}</span>
        </div>
      </div>
    </div>
  );
};

const News = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <p style={styles.topText}>Blog & News</p>
        <h2 style={styles.title}>Read Our Latest News</h2>
      </div>
      <div style={styles.grid}>
        {blogPosts.map(post => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default News;