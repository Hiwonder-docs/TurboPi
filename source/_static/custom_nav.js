document.addEventListener('DOMContentLoaded', function() {
    // 创建返回主项目的按钮
    var navBar = document.querySelector('.wy-nav-side') || document.querySelector('.sidebar');
    if (navBar) {
        var returnBtn = document.createElement('div');
        returnBtn.innerHTML = `
            <div style="padding: 10px; border-bottom: 1px solid #ccc; margin-bottom: 10px;">
                <a href="https://your-main-project.readthedocs.io" 
                   style="display: block; padding: 8px; background: #4CAF50; color: white; text-decoration: none; border-radius: 4px;">
                    ← 返回主项目
                </a>
            </div>
        `;
        navBar.insertBefore(returnBtn.firstChild, navBar.firstChild);
    }
});