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

    // 获取所有包含特定a标签的li元素
    const lias = document.querySelectorAll('.wy-menu-vertical > ul:nth-of-type(1) > li.toctree-l1 a');
    if (lias){
        lias.forEach(lia => {
            // 检查是否是目标链接
            if (lia) {
                // 创建完整的button元素
                const button = document.createElement('button');
                button.className = 'toctree-expand';
                button.title = 'Open/close menu';
                // 不需要设置innerHTML，因为button是空的

                // 将button插入到a标签的文本内容前面
                lia.insertBefore(button, lia.firstChild);
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
                download_lia.appendChild(space);
                // 将i插入到a标签的文本内容前面
                download_lia.appendChild(i);
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
