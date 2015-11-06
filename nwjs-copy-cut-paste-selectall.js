/**
 * 让 nwjs（原 node-webkit）支持复制、剪切、粘帖和全选功能（右键或快捷键）
 * 作者：mpony
 * 时间：2015.11.06
 */
(function (window) {
    'use strict';

    var action = {
        copy: function () {
            document.execCommand('copy');
        },
        cut: function () {
            document.execCommand('cut');
        },
        paste: function () {
            document.execCommand('paste');
        },
        selectAll: function () {
            document.execCommand('selectAll');
        }
    };

    var gui = require("nw.gui");
    var menu = new gui.Menu();

    menu.append(new gui.MenuItem({
        label: '复制　　　　⌘C / Ctrl+C',
        click: function() {
            action.copy();
        }
    }));
    menu.append(new gui.MenuItem({
        label: '剪切　　　　⌘X / Ctrl+X',
        click: function() {
            action.cut();
        }
    }));
    menu.append(new gui.MenuItem({
        label: '粘帖　　　　⌘V / Ctrl+V',
        click: function() {
            action.paste();
        }
    }));
    menu.append(new gui.MenuItem({
        label: '全选　　　　⌘A / Ctrl+A',
        click: function() {
            action.selectAll();
        }
    }));

    document.body.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        menu.popup(e.x, e.y);
        return false;
    });

    window.addEventListener('keydown', function (e) {
        var keyCode = e.keyCode;
        var hasFuncKey = e.ctrlKey || e.metaKey;

        if(hasFuncKey && keyCode == 67) {
            action.copy();
        } else if(hasFuncKey && keyCode == 88) {
            action.cut();
        } else if(hasFuncKey && keyCode == 86) {
            action.paste();
        } else if(hasFuncKey && keyCode == 65) {
            action.selectAll();
        }
    }, false);

})(window);