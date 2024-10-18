import React from 'react';
import SonTan from '../assets/SonTan.jpg';

const Header = () => {
    return (
        <header style={styles.header}>
            <div style={styles.container}>
                <div style={styles.leftContainer}>
                    <div style={styles.avatarContainer}>
                        <img 
                            src={SonTan} 
                            alt="Avatar của bạn" 
                            style={styles.avatar} 
                        />
                    </div>
                    <div style={styles.info}>
                        <h1 style={styles.name}>SON TAN</h1>
                        <div style={styles.contactContainer}>
                            <p style={styles.contact}>
                                📧 <a href="mailto:tandtnt15@gmail.com" style={styles.link}>tandtnt15@gmail.com</a>
                            </p>
                            <p style={styles.contact}>
                                📞 0818 126 177
                            </p>
                            <p style={styles.contact}>
                                🔗 <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" style={styles.link}>github.com/your-github</a>
                            </p>
                            <p style={styles.contact}>
                                🔗 <a href="https://www.linkedin.com/in/son-tan-umt-technology/" target="_blank" rel="noopener noreferrer" style={styles.link}>https://www.linkedin.com/in/son-tan-umt-technology/</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

const styles = {
    header: {
        position: 'relative', // Để đặt ảnh bìa phía dưới
        padding: '40px 0',
        borderBottom: '1px solid #e0e0e0',
        overflow: 'hidden',
        backgroundColor: '#e74235', // Màu nền đỏ
    },
    container: {
        width: '80%',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative', // Để ảnh bìa nằm dưới phần này
        zIndex: 1, // Đảm bảo nội dung này nằm trên ảnh bìa
    },
    leftContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    avatarContainer: {
        flex: '0 0 150px',
    },
    avatar: {
        width: '200px',
        height: '200px',
        borderRadius: '5%', // Hình vuông
        objectFit: 'cover',
        border: '3px solid white',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
    info: {
        marginLeft: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    name: {
        fontSize: '30px',
        color: '#ffffff', // Màu chữ trắng
        marginBottom: '10px',
    },
    contactContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
    },
    contact: {
        fontSize: '16px',
        color: '#ffffff', // Màu chữ trắng
        display: 'flex',
        alignItems: 'center',
    },
    link: {
        color: '#ffffff', // Màu chữ liên kết trắng
        textDecoration: 'none',
    },
};

export default Header;
