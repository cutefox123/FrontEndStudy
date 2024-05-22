
(async function() {
  // 获取所有的 swipe 项
  const swipeItems = document.querySelectorAll('.van-swipe-item');
  const totalItems = swipeItems.length;

  // 获取“下一个”按钮
  const nextButton = document.querySelector('button.van-button--info');

  // 辅助函数：等待一段时间（毫秒）
  function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // 辅助函数：点击“下一个”按钮
  async function clickNextButton() {
    nextButton.click();
    await wait(100); // 等待过渡动画完成
  }

  // 自动点击并收集所有内容
  const collectedContents = [];

    // 第 1 道题的答案
    const answer_1 = "D";

    // 第 2 道题的答案
    const answer_2 = "A";

    // 第 3 道题的答案
    const answer_3 = "C";

    // 第 4 道题的答案
    const answer_4 = "B";

    // 第 5 道题的答案
    const answer_5 = "D";

    // 第 6 道题的答案
    const answer_6 = "C";

    // 第 7 道题的答案
    const answer_7 = "B";

    // 第 8 道题的答案
    const answer_8 = "B";

    // 第 9 道题的答案
    const answer_9 = "B";

    // 第 10 道题的答案
    const answer_10 = "A";

    // 第 11 道题的答案
    const answer_11 = "BCD";

    // 第 12 道题的答案
    const answer_12 = "ABCD";

    // 第 13 道题的答案
    const answer_13 = "ABCD";

    // 第 14 道题的答案
    const answer_14 = "ABCD";

    // 第 15 道题的答案
    const answer_15 = "ABD";

    // 第 16 道题的答案
    const answer_16 = "A";

    // 第 17 道题的答案
    const answer_17 = "A";

    // 第 18 道题的答案
    const answer_18 = "B";

    // 第 19 道题的答案
    const answer_19 = "A";

    // 第 20 道题的答案
    const answer_20 = "B";

  const answers = {
    "Question 1": answer_1,
    "Question 2": answer_2,
    "Question 3": answer_3,
    "Question 4": answer_4,
    "Question 5": answer_5,
    "Question 6": answer_6,
    "Question 7": answer_7,
    "Question 8": answer_8,
    "Question 9": answer_9,
    "Question 10": answer_10,
    "Question 11": answer_11,
    "Question 12": answer_12,
    "Question 13": answer_13,
    "Question 14": answer_14,
    "Question 15": answer_15,
    "Question 16": answer_16,
    "Question 17": answer_17,
    "Question 18": answer_18,
    "Question 19": answer_19,
    "Question 20": answer_20,

  };

  for (let i = 0; i < totalItems; i++) {
    await clickNextButton();
    await wait(100); // 根据懒加载时间调整延迟时间

    // 获取当前轮播项的选项
    const options = swipeItems[i].querySelectorAll('.option-item .practice-html-container');

    // 获取当前问题的答案
    const answer = answers[`Question ${i + 1}`];
    
    // 根据答案选择选项
if (answer) {
  const isSingleLetter = /^[A-Z]$/;  // 用于检查单个字母的正则表达式
  const isMultipleLetters = /^[A-Z]+$/;  // 用于检查多个字母的正则表达式

  if (isSingleLetter.test(answer)) {
    const optionIndex = answer.charCodeAt(0) - 65; // 将答案转换为选项的索引
    if (options[optionIndex]) {
      options[optionIndex].click();
    }
  } else if (isMultipleLetters.test(answer)) {
    const optionIndexes = answer.split('').map(char => char.charCodeAt(0) - 65); // 将答案转换为选项的索引
    optionIndexes.forEach(index => {
      if (options[index]) {
        options[index].click();
      }
    });
  }
}



    // 收集当前轮播项的内容
    const content = {
      question: `Question ${i + 1}`,
      options: Array.from(options).map(option => option.textContent.trim())
    };
    collectedContents.push(content);
  }

  console.log(collectedContents);
})();
