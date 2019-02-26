/**
 * 日历datepicker
 * =============================
 * 
 * 使用方法：
 * <input type="text" v-datepicker="{
 * 'format':'yyyy-MM-dd'
 * }" />
 * 
 * 你可以通过传递配置参数来配置具体的格式，不传递使用下面的默认值(需要是一个合法的格式)：
 * 'format':'yyyy/MM/dd'
 */

import Vue from 'vue';

import $date from '../service/$date';
import $$ from 'clay-core';

const monthLan = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
const weekLan = ['一', '二', '三', '四', '五', '六', '日'];

Vue.directive('datepicker', {

  // 被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)
  inserted: function (el, binding, vnode) {

    let uniqueId;// 唯一标识
    let hadClick = false;// 标记是否已经打开
    let format = binding.value.format || 'yyyy/MM/dd';// 日期格式

    // 此刻的日期
    let curYear, curMonth, curDay;

    // 选择的日期
    let selYear, selMonth, selDay;

    $$(el).bind('click', function () {

      if (hadClick) {
        $$('#datepicker-' + uniqueId).remove();
      } else {
        uniqueId = new Date().valueOf();

        let curDate = new Date();
        curYear = curDate.getFullYear();
        curMonth = curDate.getMonth() + 1;
        curDay = curDate.getDate();

        let selDate = el.value ? new Date(el.value) : new Date();
        selYear = selDate.getFullYear();
        selMonth = selDate.getMonth() + 1;
        selDay = el.value ? selDate.getDate() : undefined;

        // 关闭页面方法
        const closeView = function () {
          $$('#datepicker-' + uniqueId).remove();
          hadClick = false;
        };

        // 更新输入框日期
        const updateValue = function (year, month, day) {
          selYear = year;
          selMonth = month;
          selDay = day;
          el.value = format.replace('yyyy', year).replace('MM', month).replace('dd', day);
        };

        /**
         * 追加基本架子
         * =====================
         */
        let datepicker_dom = $$(`<div class='datepicker-style' id='datepicker-` + uniqueId + `'>
          <div>
            <!--顶部-->
          </div>
          <ul>
            <!--内容-->
          </ul>
          <label>
            今天
          </label>
        </div>`).appendTo(el.parentNode);

        datepicker_dom.find('label').bind('click', function () {

          // 点击今天
          updateValue(curYear, curMonth, curDay);
          closeView();

        });

        let top_dom = datepicker_dom.find('div');
        let content_dom = datepicker_dom.find('ul');

        /**
        * 定义基本的方法
        * =====================
        */

        // 年视图，选择月份
        const toYearView = function (year) {

          /**
           * 顶部
           * =====================
           */
          top_dom[0].innerHTML = "<span>&lt;</span><span><!--标题--></span><span>&gt;</span>";
          let spans = top_dom.find('span');
          spans[1].innerText = year + '年';

          // 点击前一年
          spans.eq(0).bind('click', function () { toYearView(year - 1); });

          // 点击后一年
          spans.eq(2).bind('click', function () { toYearView(year + 1); });

          /**
           * 内容
           * =====================
           */
          let template = "";
          for (let i = 1; i <= 12; i++) template += '<li class="item month" val=' + i + '>' + i + '</li>';

          content_dom[0].innerHTML = template;

          // 追加今天和选中标识
          if (year == curYear) $$('[val=' + curMonth + ']').attr('current', 'yes');
          if (year == selYear) $$('[val=' + selMonth + ']').attr('select', 'yes');

          // 选择月点击事件
          content_dom.find('.item').bind('click', function () {

            toMonthView(year, this.innerText);

          });

        };

        // 月视图，选择天
        const toMonthView = function (year, month) {

          /**
           * 顶部
           * =====================
           */
          top_dom[0].innerHTML = "<span>&lt;</span><span><!--标题--></span><span>&gt;</span>";
          let spans = top_dom.find('span');
          spans[1].innerText = year + '年' + month + '月';

          // 点击上个月
          spans.eq(0).bind('click', function () {
            if (month <= 1) {
              year -= 1;
              month = 12;
            } else {
              month -= 1;
            }
            toMonthView(year, month);
          });

          // 点击下个月
          spans.eq(2).bind('click', function () {
            if (month >= 12) {
              year -= -1;
              month = 1;
            } else {
              month -= -1;
            }
            toMonthView(year, month);
          });

          // 点击标题
          spans.eq(1).bind('click', function () { toYearView(year); });

          /**
           * 内容
           * =====================
           */
          let template = "";

          // 前置空白
          const preDayNum = $date.getMonthBegin(month - 1, year) % 7;
          for (let i = 0; i < preDayNum; i++) template += '<li class="blank day">&nbsp;</li>';

          // 实体内容
          const curMonthDayNum = $date.getMonthDay(month - 1, year);
          for (let i = 0; i < curMonthDayNum; i++) template += '<li class="item day" val=' + (i + 1) + '>' + (i + 1) + '</li>';

          content_dom[0].innerHTML = template;

          // 追加今天和选中标识
          if (year == curYear && month == curMonth) $$('[val=' + curDay + ']').attr('current', 'yes');
          if (year == selYear && month == selMonth) $$('[val=' + selDay + ']').attr('select', 'yes');

          // 选择天点击事件
          content_dom.find('.item').bind('click', function () {

            updateValue(year, month, this.innerText);
            closeView();

          });

        };

        /**
        * 初始化视图
        * =====================
        */
        toMonthView(selYear, selMonth);

      }

      hadClick = !hadClick;

    });

  }

});