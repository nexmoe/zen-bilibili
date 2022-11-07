// ==UserScript==
// @name         禅 · 哔哩哔哩
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  屏蔽哔哩哔哩推荐功能，首页自动跳转动态页
// @author       Nexmoe
// @match        *://www.bilibili.com/*
// @icon         https://nexmoe.com/favicon.ico
// @grant        GM_addStyle
// ==/UserScript==

const style = `
.recommended-container,.rec-list,
.next-play,
.bpx-player-ending-related {
  display:none;
}`;

(function() {
    'use strict';
    GM_addStyle(style);

    let url = window.location.host + window.location.pathname;
    if(url == "www.bilibili.com/"){
        window.location = "https://t.bilibili.com/?tab=video"
    }
})();