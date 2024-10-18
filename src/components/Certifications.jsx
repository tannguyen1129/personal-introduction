import React from 'react';

const Certifications = () => {
    return (
        <section style={styles.container}>
            <div style={styles.projectsSection}>
                <h2 style={styles.heading}>Projects</h2>
                <div style={styles.projectContainer}>
                    <div style={styles.projectItem}>
                        <h3 style={styles.projectTitle}>Xây dựng Trà Vinh Special E-commerce by Django</h3>
                        <p style={styles.projectDescription}>
                            Một nền tảng bán các mặt hàng đặc sản của Tỉnh Trà Vinh. Có tính năng đăng ký, đăng nhập, đăng xuất,
                            giỏ hàng, mua hàng và có thanh toán bằng Paypal
                        </p>
                        <p style={styles.projectDate}>Thời gian hoàn thành: Từ tháng 6/2023 đến tháng 8/2023</p>
                    </div>
                    <div style={styles.projectItem}>
                        <h3 style={styles.projectTitle}>Xây dựng mạng xã hội bằng Django</h3>
                        <p style={styles.projectDescription}>
                            Xây dựng mạng xã hội nhằm quảng bá văn hóa Khmer Nam Bộ. Đảm bảo chứng năng đăng bài, chia sẻ hình ảnh
                            và video. Hiện đang trong quá trình công bố tại Hội nghị DCEST 2024.
                        </p>
                        <p style={styles.projectDate}>Thời gian hoàn thành: Tháng 11/2023</p>
                    </div>
                </div>
            </div>

            <div style={styles.achievementsSection}>
                <h2 style={styles.heading}>Thành tích</h2>
                <ul style={styles.achievementsList}>
                    <li style={styles.achievementItem}>1. Tham gia Giải thưởng Sáng tạo tương lai VietFuture năm 2023 </li>
                    <li style={styles.achievementItem}>2. Tham gia Kỳ thi Olympic Tin học sinh viên Việt Nam lần thứ 32 năm 2023</li>
                    <li style={styles.achievementItem}>3. Xây dựng và vận hành hệ thống UMTOJ - Hệ thống chấm bài tập lập trình và tổ chức thi của Khoa Công Nghệ</li>
                    <li style={styles.achievementItem}>4. Trưởng Ban Tổ chức Kỳ thi Olympic Tin học sinh viên UMT</li>
                
                </ul>
            </div>
        </section>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '50px 0',
        backgroundColor: '#f9f9f9',
        borderTop: '1px solid #e0e0e0',
        flexWrap: 'wrap',
    },
    projectsSection: {
        width: '45%',
        padding: '20px',
        backgroundColor: '#169b57',  // Màu nền cho khối Project
        borderRadius: '8px',         // Bo tròn góc cạnh
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        color: '#ffffff',            // Chữ màu trắng
    },
    achievementsSection: {
        width: '45%',
        padding: '20px',
        backgroundColor: '#169b57',  // Màu nền cho khối Thành tích
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
    projectContainer: {
        margin: '0 auto',
    },
    projectItem: {
        marginBottom: '20px',
    },
    projectTitle: {
        fontSize: '20px',
        fontWeight: 'bold',
    },
    projectDescription: {
        fontSize: '14px',
        lineHeight: '1.6',
    },
    projectDate: {
        fontSize: '14px',
        marginTop: '10px',
    },
    achievementsList: {
        listStyleType: 'none',
        paddingLeft: '0',
    },
    achievementItem: {
        fontSize: '16px',
        marginBottom: '10px',
    },
};

export default Certifications;
