function initMenu() {
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
        var nav_search = sidebar.querySelector('.wy-side-scroll .wy-side-nav-search');
        if (nav_search) {
            nav_search.insertBefore(returnLink.firstChild, nav_search.firstChild);
        }
    }
    const alreadyItems = document.querySelector('.toctree-l2.current');
    if (alreadyItems) {
        alreadyItems.classList.remove('current');
        alreadyItems.classList.add('h-current');
    }

    // 事件委托绑定到父级
    const menuContainer = document.querySelector('.wy-menu-vertical > .current');
    if (menuContainer) {
        menuContainer.addEventListener('click', function(e) {
            const target = e.target.closest('.toctree-l2>a');
            if (target) {
                console.log(1);
                target.parentNode.classList.toggle('h-current');
            }
        });
    }

    // Download 标题
    const download_p = document.querySelector('.wy-menu-vertical > p:nth-of-type(2)');
    // 创建svg元素
    var i = document.createElement('i');
    var space = document.createTextNode(' ');
    i.className = 'fa fa-cloud-download';
    i.setAttribute('aria-hidden', 'true');
    // 将path添加到svg
    if (download_p){
        download_p.appendChild(space);
        download_p.appendChild(i);
        const download_lias = document.querySelectorAll('.wy-menu-vertical > ul:nth-of-type(2) > li.toctree-l1 a');
        download_lias.forEach(download_lia => {
            // 检查是否是目标链接
            if (download_lia) {
                download_lia.setAttribute('target', '_blank');
                // 将i插入到a标签的文本内容前面
                var new_i = document.createElement('i');
                var new_space = document.createTextNode(' ');
                new_i.className = 'fa fa-cloud-download';
                new_i.setAttribute('aria-hidden', 'true');
                download_lia.appendChild(new_space);
                download_lia.appendChild(new_i);
            }
        });
    }
}

// 根据场景选择执行时机
if (document.readyState === 'complete') {
    initMenu();
} else {
    window.addEventListener('load', initMenu);
}
