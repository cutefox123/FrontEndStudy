// ==UserScript==
// @name         ToPageTop
// @namespace    http://tampermonkey.net/
// @version      1.0
// @match        *://*/*
// @description  一键返回顶部，优雅的滚动条缓停
// @author       smnh
// @grant        none
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// ==/UserScript==

(function() {
    'use strict';

    // 创建返回顶部按钮
    var backToTopButton = document.createElement('div');
    backToTopButton.id = 'back-to-top-button';
    backToTopButton.style.cssText =
        `
        display: none;
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #007bff;
        opacity: 0.8;
        color: #fff;
        font-size:18px;
        text-align: center;
        line-height: 40px;
        cursor: pointer;
      `;
    backToTopButton.textContent = '↑';
    document.body.appendChild(backToTopButton);

    // 显示/隐藏返回顶部按钮
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 100) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // 返回顶部函数
    function scrollToTop() {
        var currentScroll = window.pageYOffset;
        if (currentScroll > 0) {
            window.scrollTo(0, currentScroll - 150);
            setTimeout(scrollToTop, 10);
        }
    }

    // 添加点击事件监听器
    backToTopButton.addEventListener('click', function() {
        scrollToTop();
    });

})();
