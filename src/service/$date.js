/**
 * 关于日期相关的计算方法集合
 * =============================
 */

const monthDay = [31, -1, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export default {

  /**
   * 计算二月有多少天
   * @param {number} yearNum 
   */
  "getFebruaryDay": function (yearNum) {
    if ((yearNum % 4 == 0) && (yearNum % 100 != 0 || yearNum % 400 == 0)) {
      return 29;
    } else {
      return 28;
    }
  },

  /**
   * 计算本月多少天
   * @param {number} monthNum 0-11，分别表示1月到12月
   * @param {number} yearNum 如果是二月，年份是必须的
   */
  "getMonthDay": function (monthNum, yearNum) {
    let dayNum = monthDay[monthNum];
    if (dayNum == -1) {
      dayNum = this.getFebruaryDay(yearNum);
    }
    return dayNum;
  },

  /**
   * 计算本月第一天是星期几
   * @param {number} monthNum 0-11，分别表示1月到12月
   * @param {number} yearNum 
   * 
   * @return {number} 1-7，分别表示星期一到星期日
   */
  "getMonthBegin": function (monthNum, yearNum) {
    let beginMonth = new Date(yearNum + "/" + (monthNum - (-1)) + "/1").getDay();
    return beginMonth == 0 ? 7 : beginMonth;
  }

};