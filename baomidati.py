import json
import re
import os
import pyperclip


# 清洗函数
def clean_question(question):
    question = re.sub(r'（[^（]*）', '', question)
    question = re.sub(r'\(.*?\)', '', question)
    question = re.sub(r'[.,;、:!？，。\，；：！]', '', question)
    question = re.sub(r'\s+', '', question)
    question = re.sub(r'^\d+', '', question)
    return question


# 读取题目 JSON 文件
with open('题目.json', 'r', encoding='utf-8') as file:
    question_data = json.load(file)

# 读取答案库 JSON 文件
with open('题库.json', 'r', encoding='utf-8') as file:
    answer_data = json.load(file)

# 提取所有题目内容
questions = []

for classIfy in question_data['data']['classIfyList']:
    for question in classIfy['quesList']:
        questions.append(question['content'])

# 清洗题目内容
cleaned_questions = [clean_question(q) for q in questions]

# 匹配题目和答案
matched_answers = {}

for answer in answer_data:
    cleaned_answer_question = clean_question(answer["*题目"])
    for idx, cleaned_question in enumerate(cleaned_questions):
        if cleaned_question == cleaned_answer_question:
            matched_answers[questions[idx]] = answer["*正确答案"]
            break

# 生成填充答案的 JavaScript 文件内容
js_content = """
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
"""

for i, question in enumerate(questions, 1):
    answer = matched_answers.get(question, "找不到答案")
    js_content += f"""
    // 第 {i} 道题的答案
    const answer_{i} = "{answer}";
"""

js_content += """
  const answers = {
"""

for i, question in enumerate(questions, 1):
    js_content += f'    "Question {i}": answer_{i},\n'

js_content += """
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
"""

# 将 JavaScript 内容复制到剪贴板
pyperclip.copy(js_content)

# 将 JavaScript 内容写入文件
with open('填充答案的代码.js', 'w', encoding='utf-8') as file:
    file.write(js_content)

print("已生成填充答案的 JavaScript 文件，并复制到剪贴板。")
