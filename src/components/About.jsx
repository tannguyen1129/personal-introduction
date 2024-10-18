import React from 'react';

const About = () => {
    return (
        <section style={styles.container}>
            <div style={styles.aboutSection}>
                <h2 style={styles.heading}>Giới thiệu về tôi</h2>
                <p style={styles.description}>
                    Tôi là Sơn Tân, sinh viên khóa 2022 - 2026 ngành Công nghệ thông tin của UMT. 
                    Chuyên ngành hiện tại của tôi là Kỹ thuật phần mềm. Tuy nhiên định hướng trong thời gian sắp tới của tôi là vị trí DevOps, 
                    tôi cũng đang học các kiến thức về vị trí này.
                </p>
            </div>

            <div style={styles.techSection}>
                <h2 style={styles.heading}>Kỹ năng và Ngôn ngữ</h2>
                <div style={styles.techList}>
                    {['C/C++','Python', 'JavaScript', 'React', 'Django', 'Docker', 'Linux', 'AWS', 'Azure', 'Network'].map((language, index) => (
                        <div key={index} style={styles.techItem}>
                            {language}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '50px 0',
        backgroundColor: '#ffffff',
        borderTop: '1px solid #e0e0e0',
        flexWrap: 'wrap',
    },
    aboutSection: {
        width: '45%',
        padding: '20px',
        backgroundColor: '#1e366b',  // Màu nền xanh đậm
        borderRadius: '8px',         // Bo tròn góc cạnh
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        color: '#ffffff',            // Chữ màu trắng
    },
    techSection: {
        width: '45%',
        padding: '20px',
        backgroundColor: '#1e366b',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        color: '#ffffff',
    },
    heading: {
        fontSize: '24px',
        color: '#ffffff',            // Chữ màu trắng cho tiêu đề
        textAlign: 'center',
        marginBottom: '20px',
    },
    description: {
        fontSize: '14px',
        color: '#ffffff',            // Chữ màu trắng cho nội dung
        lineHeight: '1.6',
    },
    techList: {
        display: 'flex',             // Sử dụng flex để hiển thị nằm ngang
        flexWrap: 'wrap',            // Cho phép các khối xuống hàng khi cần thiết
        justifyContent: 'space-around', // Căn đều các khối ngôn ngữ
        alignItems: 'center',        // Căn giữa các khối oval
        paddingLeft: '0',
        margin: '0',
    },
    techItem: {
        fontSize: '18px',
        color: '#333',               // Chữ màu đen cho danh sách kỹ năng
        backgroundColor: '#ffffff',  // Màu nền trắng cho khối oval
        borderRadius: '50px',        // Bo tròn khối thành oval
        padding: '10px 20px',        // Khoảng cách bên trong
        margin: '5px',               // Khoảng cách giữa các khối oval
        textAlign: 'center',
        width: 'fit-content',        // Để chiều rộng phù hợp với nội dung
    },
};

export default About;
