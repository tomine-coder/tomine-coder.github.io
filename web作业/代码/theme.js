// 深色模式切换功能 - 共享脚本
(function() {
    // 切换主题
    function toggleTheme() {
        const html = document.documentElement;
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // 更新所有页面上的图标
        updateThemeIcons(newTheme);
    }

    // 更新主题图标
    function updateThemeIcons(theme) {
        const icons = document.querySelectorAll('.theme-toggle i');
        icons.forEach(icon => {
            icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        });
    }

    // 初始化主题
    function initTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
            updateThemeIcons(savedTheme);
        }
    }

    // 页面加载时初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTheme);
    } else {
        initTheme();
    }

    // 暴露全局函数
    window.toggleTheme = toggleTheme;
})();
