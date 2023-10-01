// ==UserScript==
// @name          微信公众号正文字数统计
// @namespace     http://tampermonkey.net/
// @version       0.1
// @description   Create an editable display with real-time word count
// @author        You
// @match         https://mp.weixin.qq.com/s*
// @icon          https://www.google.com/s2/favicons?sz=64&domain=qq.com
// @grant         none
// ==/UserScript==

(function() {
    'use strict';

    // 创建一个固定在右上角的界面
    const displayDiv = document.createElement("div");
    displayDiv.style.position = "fixed";
    displayDiv.style.top = "10px";
    displayDiv.style.right = "10px";
    displayDiv.style.background = "white";
    displayDiv.style.border = "1px solid #ccc";
    displayDiv.style.padding = "10px";
    displayDiv.style.zIndex = "9999";
    displayDiv.style.minWidth = "200px"; // 设置最小宽度，以确保界面可见

    // 创建一个元素来显示字数统计
    const wordCountElement = document.createElement("div");
    wordCountElement.textContent = "字数统计：0"; // 初始字数为0
    displayDiv.appendChild(wordCountElement);

    // 创建一个可编辑的文本框
    const textarea = document.createElement("textarea");
    textarea.style.width = "100%";
    textarea.style.height = "300px"; // 设置文本框高度
    textarea.style.resize = "none"; // 禁止调整文本框大小
    displayDiv.appendChild(textarea);

     function fnGetCpmisWords(str) {
        let sLen = 0;
        try {
            // 先将回车换行符做特殊处理
            str = str.replace(/(\r\n+|\s+|　+)/g, "龘");
            // 处理英文字符数字，连续字母、数字、英文符号视为一个单词
            str = str.replace(/[\x00-\xff]/g, "m");
            // 合并字符m，连续字母、数字、英文符号视为一个单词
            str = str.replace(/m+/g, "*");
            // 去掉回车换行符
            str = str.replace(/龘+/g, "");
            // 返回字数
            sLen = str.length;
        } catch(e) {

        }
        return sLen;
    }
    // 更新字数统计
    function updateWordCount() {
        const text = textarea.value;
        const cleanedText = text.replace(/\s+/g, '');
        const charCount = fnGetCpmisWords(cleanedText);
        wordCountElement.textContent = "字数统计：" + charCount;
    }

    // 监听文本框的输入事件，以实时更新字数统计
    textarea.addEventListener("input", updateWordCount);

    // 获取正文内容的父元素
    const contentParent = document.getElementById("js_content");

    // 检查是否找到了正文内容
    if (contentParent) {
        // 将正文内容初始化到文本框中
        textarea.value = contentParent.textContent;

        // 初始化字数统计
        updateWordCount();
    } else {
        textarea.value = "未找到正文内容";
    }

    // 将显示界面添加到页面
    const body = document.getElementsByTagName("body")[0];
    body.appendChild(displayDiv);
})();
