function initMenu() {
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
    document.addEventListener('DOMContentLoaded', function() {
        // 创建返回主项目的按钮
        var navBar = document.querySelector('.wy-nav-side') || document.querySelector('.sidebar');
        if (navBar) {
            var returnBtn = document.createElement('div');
            returnBtn.innerHTML = `
                <div style="padding: 10px; border-bottom: 1px solid #ccc; margin-bottom: 10px;">
                    <a href="https://your-main-project.readthedocs.io"
                       style="display: block; padding: 8px; background: #4CAF50; color: white; text-decoration: none; border-radius: 4px;">
                        ← Homepage
                    </a>
                </div>
            `;
            navBar.insertBefore(returnBtn.firstChild, navBar.firstChild);
        }
    });
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
