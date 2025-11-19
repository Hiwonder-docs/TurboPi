document.addEventListener('DOMContentLoaded', function() {
    // 等待页面完全加载
    setTimeout(function() {
        // 在侧边栏导航中添加返回主项目的链接
        var sidebar = document.querySelector('.wy-nav-side');
        if (sidebar) {
            var returnLink = document.createElement('div');
            returnLink.innerHTML = `
                <div class="main-project-link" style="
                    padding: 10px;
                    border-bottom: 1px solid #ccc;
                    margin: 0 10px 10px 10px;
                    background: #f8f9fa;
                    border-radius: 4px;
                ">
                    <a href="https://your-main-project.readthedocs.io"
                       style="
                           display: block;
                           padding: 8px;
                           background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                           color: white;
                           text-decoration: none;
                           border-radius: 4px;
                           font-weight: bold;
                           text-align: center;
                           transition: background 0.3s;
                       "
                       onmouseover="this.style.background='linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)'"
                       onmouseout="this.style.background='linear-gradient(135deg, #667eea 0%, #764ba2 100%)'">
                        ← Homepage
                    </a>
                </div>
            `;

            // 插入到侧边栏导航的顶部
            var nav = sidebar.querySelector('.wy-menu.wy-menu-vertical');
            if (nav) {
                nav.insertBefore(returnLink.firstChild, nav.firstChild);
            }
        }
    }, 100);
});